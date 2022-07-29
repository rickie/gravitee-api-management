/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io - Management API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    JKSKeyStoreAllOf,
    JKSKeyStoreAllOfFromJSON,
    JKSKeyStoreAllOfFromJSONTyped,
    JKSKeyStoreAllOfToJSON,
    TrustStore,
    TrustStoreFromJSON,
    TrustStoreFromJSONTyped,
    TrustStoreToJSON,
} from './';

/**
 * 
 * @export
 * @interface PKCS12TrustStore
 */
export interface PKCS12TrustStore extends TrustStore {
    /**
     * 
     * @type {string}
     * @memberof PKCS12TrustStore
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof PKCS12TrustStore
     */
    content?: string;
    /**
     * 
     * @type {string}
     * @memberof PKCS12TrustStore
     */
    password?: string;
}

export function PKCS12TrustStoreFromJSON(json: any): PKCS12TrustStore {
    return PKCS12TrustStoreFromJSONTyped(json, false);
}

export function PKCS12TrustStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): PKCS12TrustStore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...TrustStoreFromJSONTyped(json, ignoreDiscriminator),
        'path': !exists(json, 'path') ? undefined : json['path'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function PKCS12TrustStoreToJSON(value?: PKCS12TrustStore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...TrustStoreToJSON(value),
        'path': value.path,
        'content': value.content,
        'password': value.password,
    };
}


