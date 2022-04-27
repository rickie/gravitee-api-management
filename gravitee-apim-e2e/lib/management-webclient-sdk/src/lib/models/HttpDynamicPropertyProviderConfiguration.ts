/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io - Management API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.18.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    HttpDynamicPropertyProviderConfigurationAllOf,
    HttpDynamicPropertyProviderConfigurationAllOfFromJSON,
    HttpDynamicPropertyProviderConfigurationAllOfFromJSONTyped,
    HttpDynamicPropertyProviderConfigurationAllOfToJSON,
    HttpHeader,
    HttpHeaderFromJSON,
    HttpHeaderFromJSONTyped,
    HttpHeaderToJSON,
} from './';

/**
 * 
 * @export
 * @interface HttpDynamicPropertyProviderConfiguration
 */
export interface HttpDynamicPropertyProviderConfiguration {
    /**
     * 
     * @type {string}
     * @memberof HttpDynamicPropertyProviderConfiguration
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof HttpDynamicPropertyProviderConfiguration
     */
    specification: string;
    /**
     * 
     * @type {boolean}
     * @memberof HttpDynamicPropertyProviderConfiguration
     */
    useSystemProxy?: boolean;
    /**
     * 
     * @type {string}
     * @memberof HttpDynamicPropertyProviderConfiguration
     */
    method?: HttpDynamicPropertyProviderConfigurationMethodEnum;
    /**
     * 
     * @type {Array<HttpHeader>}
     * @memberof HttpDynamicPropertyProviderConfiguration
     */
    headers?: Array<HttpHeader>;
    /**
     * 
     * @type {string}
     * @memberof HttpDynamicPropertyProviderConfiguration
     */
    body?: string;
}

export function HttpDynamicPropertyProviderConfigurationFromJSON(json: any): HttpDynamicPropertyProviderConfiguration {
    return HttpDynamicPropertyProviderConfigurationFromJSONTyped(json, false);
}

export function HttpDynamicPropertyProviderConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): HttpDynamicPropertyProviderConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': json['url'],
        'specification': json['specification'],
        'useSystemProxy': !exists(json, 'useSystemProxy') ? undefined : json['useSystemProxy'],
        'method': !exists(json, 'method') ? undefined : json['method'],
        'headers': !exists(json, 'headers') ? undefined : ((json['headers'] as Array<any>).map(HttpHeaderFromJSON)),
        'body': !exists(json, 'body') ? undefined : json['body'],
    };
}

export function HttpDynamicPropertyProviderConfigurationToJSON(value?: HttpDynamicPropertyProviderConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'specification': value.specification,
        'useSystemProxy': value.useSystemProxy,
        'method': value.method,
        'headers': value.headers === undefined ? undefined : ((value.headers as Array<any>).map(HttpHeaderToJSON)),
        'body': value.body,
    };
}

/**
* @export
* @enum {string}
*/
export enum HttpDynamicPropertyProviderConfigurationMethodEnum {
    CONNECT = 'CONNECT',
    DELETE = 'DELETE',
    GET = 'GET',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
    PATCH = 'PATCH',
    POST = 'POST',
    PUT = 'PUT',
    TRACE = 'TRACE',
    OTHER = 'OTHER'
}

