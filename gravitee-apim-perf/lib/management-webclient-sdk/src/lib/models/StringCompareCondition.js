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
import { ConditionFromJSONTyped, ConditionToJSON, } from './';
export function StringCompareConditionFromJSON(json) {
    return StringCompareConditionFromJSONTyped(json, false);
}
export function StringCompareConditionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        ...ConditionFromJSONTyped(json, ignoreDiscriminator),
        'property': json['property'],
        'operator': json['operator'],
        'property2': json['property2'],
        'ignoreCase': !exists(json, 'ignoreCase') ? undefined : json['ignoreCase'],
    };
}
export function StringCompareConditionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        ...ConditionToJSON(value),
        'property': value.property,
        'operator': value.operator,
        'property2': value.property2,
        'ignoreCase': value.ignoreCase,
    };
}
/**
* @export
* @enum {string}
*/
export var StringCompareConditionOperatorEnum;
(function (StringCompareConditionOperatorEnum) {
    StringCompareConditionOperatorEnum["EQUALS"] = "EQUALS";
    StringCompareConditionOperatorEnum["NOTEQUALS"] = "NOT_EQUALS";
    StringCompareConditionOperatorEnum["STARTSWITH"] = "STARTS_WITH";
    StringCompareConditionOperatorEnum["ENDSWITH"] = "ENDS_WITH";
    StringCompareConditionOperatorEnum["CONTAINS"] = "CONTAINS";
    StringCompareConditionOperatorEnum["MATCHES"] = "MATCHES";
})(StringCompareConditionOperatorEnum || (StringCompareConditionOperatorEnum = {}));