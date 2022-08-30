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
import type { EntrypointV4 } from './EntrypointV4';
import { EntrypointV4FromJSON, EntrypointV4FromJSONTyped, EntrypointV4ToJSON } from './EntrypointV4';
import type { SubscriptionListenerV4AllOf } from './SubscriptionListenerV4AllOf';
import {
  SubscriptionListenerV4AllOfFromJSON,
  SubscriptionListenerV4AllOfFromJSONTyped,
  SubscriptionListenerV4AllOfToJSON,
} from './SubscriptionListenerV4AllOf';

/**
 *
 * @export
 * @interface TcpListenerV4
 */
export interface TcpListenerV4 {
  /**
   *
   * @type {string}
   * @memberof TcpListenerV4
   */
  type: string;
  /**
   *
   * @type {Array<EntrypointV4>}
   * @memberof TcpListenerV4
   */
  entrypoints: Array<EntrypointV4>;
}

/**
 * Check if a given object implements the TcpListenerV4 interface.
 */
export function instanceOfTcpListenerV4(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'type' in value;
  isInstance = isInstance && 'entrypoints' in value;

  return isInstance;
}

export function TcpListenerV4FromJSON(json: any): TcpListenerV4 {
  return TcpListenerV4FromJSONTyped(json, false);
}

export function TcpListenerV4FromJSONTyped(json: any, ignoreDiscriminator: boolean): TcpListenerV4 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: json['type'],
    entrypoints: (json['entrypoints'] as Array<any>).map(EntrypointV4FromJSON),
  };
}

export function TcpListenerV4ToJSON(value?: TcpListenerV4 | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    type: value.type,
    entrypoints: (value.entrypoints as Array<any>).map(EntrypointV4ToJSON),
  };
}