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
package io.gravitee.plugin.entrypoint.webhook;

import io.gravitee.gateway.jupiter.api.ApiType;
import io.gravitee.gateway.jupiter.api.ConnectorMode;
import io.gravitee.gateway.jupiter.api.connector.entrypoint.async.EntrypointAsyncConnectorFactory;
import io.gravitee.plugin.entrypoint.webhook.configuration.WebhookEntrypointConnectorConfiguration;
import java.util.Set;
import lombok.extern.slf4j.Slf4j;

/**
 * @author David BRASSELY (david.brassely at graviteesource.com)
 * @author GraviteeSource Team
 */
@Slf4j
public class WebhookEntrypointConnectorFactory extends EntrypointAsyncConnectorFactory {

    public WebhookEntrypointConnectorFactory() {
        super(WebhookEntrypointConnectorConfiguration.class);
    }

    @Override
    public ApiType supportedApi() {
        return WebhookEntrypointConnector.SUPPORTED_API;
    }

    @Override
    public Set<ConnectorMode> supportedModes() {
        return WebhookEntrypointConnector.SUPPORTED_MODES;
    }

    @Override
    public WebhookEntrypointConnector createConnector(final String sConfiguration) {
        try {
            return new WebhookEntrypointConnector(getConfiguration(sConfiguration));
        } catch (Exception e) {
            log.error("Can't create connector cause no valid configuration", e);
            return null;
        }
    }
}