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
    FormDataBodyPart,
    FormDataBodyPartFromJSON,
    FormDataBodyPartFromJSONTyped,
    FormDataBodyPartToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineObject2
 */
export interface InlineObject2 {
    /**
     * 
     * @type {FormDataBodyPart}
     * @memberof InlineObject2
     */
    file?: FormDataBodyPart;
}

export function InlineObject2FromJSON(json: any): InlineObject2 {
    return InlineObject2FromJSONTyped(json, false);
}

export function InlineObject2FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject2 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'file': !exists(json, 'file') ? undefined : FormDataBodyPartFromJSON(json['file']),
    };
}

export function InlineObject2ToJSON(value?: InlineObject2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'file': FormDataBodyPartToJSON(value.file),
    };
}

