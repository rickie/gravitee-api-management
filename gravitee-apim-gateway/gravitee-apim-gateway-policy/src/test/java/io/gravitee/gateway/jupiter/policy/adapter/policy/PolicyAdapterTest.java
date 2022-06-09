/**
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.gravitee.gateway.jupiter.policy.adapter.policy;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import io.gravitee.gateway.api.ExecutionContext;
import io.gravitee.gateway.api.Request;
import io.gravitee.gateway.api.Response;
import io.gravitee.gateway.api.buffer.Buffer;
import io.gravitee.gateway.api.handler.Handler;
import io.gravitee.gateway.api.stream.ReadWriteStream;
import io.gravitee.gateway.jupiter.api.context.MessageExecutionContext;
import io.gravitee.gateway.jupiter.api.context.RequestExecutionContext;
import io.gravitee.gateway.jupiter.api.message.Message;
import io.gravitee.gateway.policy.Policy;
import io.gravitee.gateway.policy.PolicyException;
import io.reactivex.Flowable;
import io.reactivex.Maybe;
import io.reactivex.observers.TestObserver;
import io.reactivex.subscribers.TestSubscriber;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;

/**
 * @author Jeoffrey HAEYAERT (jeoffrey.haeyaert at graviteesource.com)
 * @author GraviteeSource Team
 */
class PolicyAdapterTest {

    protected static final String MOCK_EXCEPTION_MESSAGE = "Mock exception";

    @Test
    public void shouldCompleteInErrorWhenOnMessage() {
        final Policy policy = mock(Policy.class);
        final MessageExecutionContext ctx = mock(MessageExecutionContext.class);
        final Message msg = mock(Message.class);

        final PolicyAdapter cut = new PolicyAdapter(policy);

        final TestObserver<Message> obs = cut.onMessage(ctx, msg).test();

        obs.assertErrorMessage("Cannot adapt v3 policy for message execution");
    }

    @Test
    public void shouldCompleteInErrorWhenOnMessageFlow() {
        final Policy policy = mock(Policy.class);
        final MessageExecutionContext ctx = mock(MessageExecutionContext.class);

        final PolicyAdapter cut = new PolicyAdapter(policy);

        final TestSubscriber<Message> obs = cut.onMessageFlow(ctx, Flowable.empty()).test();

        obs.assertErrorMessage("Cannot adapt v3 policy for message flow execution");
    }

    @Test
    public void shouldCompleteWhenExecuteRequest() throws PolicyException {
        final Policy policy = mock(Policy.class);
        final RequestExecutionContext ctx = mock(RequestExecutionContext.class);

        when(policy.isRunnable()).thenReturn(true);

        doAnswer(
                invocation -> {
                    PolicyChainAdapter policyChain = invocation.getArgument(0);
                    policyChain.doNext(mock(Request.class), mock(Response.class));
                    return null;
                }
            )
            .when(policy)
            .execute(any(PolicyChainAdapter.class), any(ExecutionContext.class));

        final PolicyAdapter cut = new PolicyAdapter(policy);

        final TestObserver<Void> obs = cut.onRequest(ctx).test();

        obs.assertComplete();
    }

    @Test
    public void shouldErrorWhenExceptionOccursDuringRequest() throws PolicyException {
        final Policy policy = mock(Policy.class);
        final RequestExecutionContext ctx = mock(RequestExecutionContext.class);

        when(policy.isRunnable()).thenReturn(true);
        doThrow(new PolicyException(MOCK_EXCEPTION_MESSAGE))
            .when(policy)
            .execute(any(PolicyChainAdapter.class), any(ExecutionContext.class));

        final PolicyAdapter cut = new PolicyAdapter(policy);

        final TestObserver<Void> obs = cut.onRequest(ctx).test();

        obs.assertError(e -> e.getCause().getMessage().equals(MOCK_EXCEPTION_MESSAGE));
    }

    @Test
    public void shouldCompleteWhenNullStream() throws PolicyException {
        final Policy policy = mock(Policy.class);
        final RequestExecutionContext ctx = mock(RequestExecutionContext.class);

        when(policy.isStreamable()).thenReturn(true);
        when(policy.stream(any(PolicyChainAdapter.class), any(ExecutionContext.class))).thenReturn(null);

        final PolicyAdapter cut = new PolicyAdapter(policy);

        final TestObserver<Void> obs = cut.onRequest(ctx).test();

        obs.assertComplete();
    }

    @Test
    public void shouldCompleteWhenRequestStream() throws PolicyException {
        final Buffer requestBody = Buffer.buffer("body");
        final Buffer policyChunk1 = Buffer.buffer("policyChunk1");
        final Buffer policyChunk2 = Buffer.buffer("policyChunk2");
        final Policy policy = mock(Policy.class);
        final io.gravitee.gateway.jupiter.api.context.Request request = mock(io.gravitee.gateway.jupiter.api.context.Request.class);
        final RequestExecutionContext ctx = mock(RequestExecutionContext.class);
        final ReadWriteStream<Buffer> stream = mock(ReadWriteStream.class);
        final ArgumentCaptor<Maybe<Buffer>> requestBodyCaptor = ArgumentCaptor.forClass(Maybe.class);

        when(ctx.request()).thenReturn(request);
        when(request.body()).thenReturn(Maybe.just(requestBody));
        when(policy.isStreamable()).thenReturn(true);
        when(policy.stream(any(PolicyChainAdapter.class), any(ExecutionContext.class))).thenReturn(stream);

        // Simulate a policy that produces multiple buffers in the stream.
        doAnswer(
                invocation -> {
                    Handler<Buffer> bodyHandler = invocation.getArgument(0);
                    bodyHandler.handle(policyChunk1);
                    bodyHandler.handle(policyChunk2);
                    return null;
                }
            )
            .when(stream)
            .bodyHandler(any(Handler.class));

        doAnswer(
                invocation -> {
                    Handler<Void> endHandler = invocation.getArgument(0);
                    endHandler.handle(null);
                    return null;
                }
            )
            .when(stream)
            .endHandler(any(Handler.class));

        final PolicyAdapter cut = new PolicyAdapter(policy);

        final TestObserver<Void> obs = cut.onRequest(ctx).test();

        obs.assertComplete();

        // Verify expected stream writes.
        verify(stream).write(requestBody);
        verify(stream).end();

        // Verify the new request body.
        verify(request).body(argThat(b -> b.toString().equals(policyChunk1.toString() + policyChunk2.toString())));
    }

    @Test
    public void shouldCompleteWhenResponseStream() throws PolicyException {
        final Buffer responseBody = Buffer.buffer("body");
        final Buffer policyChunk1 = Buffer.buffer("policyChunk1");
        final Buffer policyChunk2 = Buffer.buffer("policyChunk2");
        final Policy policy = mock(Policy.class);
        final io.gravitee.gateway.jupiter.api.context.Response response = mock(io.gravitee.gateway.jupiter.api.context.Response.class);
        final RequestExecutionContext ctx = mock(RequestExecutionContext.class);
        final ReadWriteStream<Buffer> stream = mock(ReadWriteStream.class);

        when(ctx.response()).thenReturn(response);
        when(response.body()).thenReturn(Maybe.just(responseBody));
        when(policy.isStreamable()).thenReturn(true);
        when(policy.stream(any(PolicyChainAdapter.class), any(ExecutionContext.class))).thenReturn(stream);

        // Simulate a policy that produces multiple buffers in the stream.
        doAnswer(
                invocation -> {
                    Handler<Buffer> bodyHandler = invocation.getArgument(0);
                    bodyHandler.handle(policyChunk1);
                    bodyHandler.handle(policyChunk2);
                    return null;
                }
            )
            .when(stream)
            .bodyHandler(any(Handler.class));

        doAnswer(
                invocation -> {
                    Handler<Void> endHandler = invocation.getArgument(0);
                    endHandler.handle(null);
                    return null;
                }
            )
            .when(stream)
            .endHandler(any(Handler.class));

        final PolicyAdapter cut = new PolicyAdapter(policy);

        final TestObserver<Void> obs = cut.onResponse(ctx).test();

        obs.assertComplete();

        // Verify expected stream writes.
        verify(stream).write(responseBody);
        verify(stream).end();

        // Verify the new response body.
        verify(response).body(argThat(b -> b.toString().equals((policyChunk1.toString() + policyChunk2.toString()))));
    }

    @Test
    public void shouldErrorWhenExceptionOccursDuringStream() throws PolicyException {
        final Policy policy = mock(Policy.class);
        final io.gravitee.gateway.jupiter.api.context.Request request = mock(io.gravitee.gateway.jupiter.api.context.Request.class);
        final RequestExecutionContext ctx = mock(RequestExecutionContext.class);
        final ReadWriteStream<Buffer> stream = mock(ReadWriteStream.class);

        when(ctx.request()).thenReturn(request);
        when(policy.isStreamable()).thenReturn(true);
        when(policy.stream(any(PolicyChainAdapter.class), any(ExecutionContext.class))).thenReturn(stream);

        doThrow(new RuntimeException(MOCK_EXCEPTION_MESSAGE)).when(stream).endHandler(any(Handler.class));

        final PolicyAdapter cut = new PolicyAdapter(policy);
        final TestObserver<Void> obs = cut.onRequest(ctx).test();

        obs.assertError(e -> e.getCause().getMessage().equals(MOCK_EXCEPTION_MESSAGE));
    }
}