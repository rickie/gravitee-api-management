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
import { exists } from '../runtime';
import { OpenAPIDocTypeFromJSON, OpenAPIDocTypeToJSON, } from './';
export function OpenAPIDocViewerFromJSON(json) {
    return OpenAPIDocViewerFromJSONTyped(json, false);
}
export function OpenAPIDocViewerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'openAPIDocType': !exists(json, 'openAPIDocType') ? undefined : OpenAPIDocTypeFromJSON(json['openAPIDocType']),
    };
}
export function OpenAPIDocViewerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'openAPIDocType': OpenAPIDocTypeToJSON(value.openAPIDocType),
    };
}