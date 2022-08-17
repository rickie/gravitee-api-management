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
    FlowV4,
    FlowV4FromJSON,
    FlowV4FromJSONTyped,
    FlowV4ToJSON,
    PlanSecurityV4,
    PlanSecurityV4FromJSON,
    PlanSecurityV4FromJSONTyped,
    PlanSecurityV4ToJSON,
    PlanTypeV4,
    PlanTypeV4FromJSON,
    PlanTypeV4FromJSONTyped,
    PlanTypeV4ToJSON,
    PlanValidationTypeV4,
    PlanValidationTypeV4FromJSON,
    PlanValidationTypeV4FromJSONTyped,
    PlanValidationTypeV4ToJSON,
} from './';

/**
 * A list of plans to apply on the API
 * @export
 * @interface PlanEntityV4
 */
export interface PlanEntityV4 {
    /**
     * 
     * @type {string}
     * @memberof PlanEntityV4
     */
    apiId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PlanEntityV4
     */
    characteristics?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof PlanEntityV4
     */
    closedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof PlanEntityV4
     */
    commentMessage?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PlanEntityV4
     */
    commentRequired?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof PlanEntityV4
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof PlanEntityV4
     */
    crossId?: string;
    /**
     * 
     * @type {string}
     * @memberof PlanEntityV4
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PlanEntityV4
     */
    excludedGroups?: Array<string>;
    /**
     * 
     * @type {Array<FlowV4>}
     * @memberof PlanEntityV4
     */
    flows?: Array<FlowV4>;
    /**
     * 
     * @type {string}
     * @memberof PlanEntityV4
     */
    generalConditions?: string;
    /**
     * 
     * @type {string}
     * @memberof PlanEntityV4
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof PlanEntityV4
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof PlanEntityV4
     */
    order?: number;
    /**
     * 
     * @type {Date}
     * @memberof PlanEntityV4
     */
    publishedAt?: Date;
    /**
     * 
     * @type {PlanSecurityV4}
     * @memberof PlanEntityV4
     */
    security?: PlanSecurityV4;
    /**
     * 
     * @type {string}
     * @memberof PlanEntityV4
     */
    selectionRule?: string;
    /**
     * 
     * @type {string}
     * @memberof PlanEntityV4
     */
    status?: PlanEntityV4StatusEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof PlanEntityV4
     */
    tags?: Array<string>;
    /**
     * 
     * @type {PlanTypeV4}
     * @memberof PlanEntityV4
     */
    type?: PlanTypeV4;
    /**
     * 
     * @type {Date}
     * @memberof PlanEntityV4
     */
    updatedAt?: Date;
    /**
     * 
     * @type {PlanValidationTypeV4}
     * @memberof PlanEntityV4
     */
    validation?: PlanValidationTypeV4;
}

export function PlanEntityV4FromJSON(json: any): PlanEntityV4 {
    return PlanEntityV4FromJSONTyped(json, false);
}

export function PlanEntityV4FromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanEntityV4 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiId': !exists(json, 'apiId') ? undefined : json['apiId'],
        'characteristics': !exists(json, 'characteristics') ? undefined : json['characteristics'],
        'closedAt': !exists(json, 'closedAt') ? undefined : (new Date(json['closedAt'])),
        'commentMessage': !exists(json, 'commentMessage') ? undefined : json['commentMessage'],
        'commentRequired': !exists(json, 'commentRequired') ? undefined : json['commentRequired'],
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
        'crossId': !exists(json, 'crossId') ? undefined : json['crossId'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'excludedGroups': !exists(json, 'excludedGroups') ? undefined : json['excludedGroups'],
        'flows': !exists(json, 'flows') ? undefined : ((json['flows'] as Array<any>).map(FlowV4FromJSON)),
        'generalConditions': !exists(json, 'generalConditions') ? undefined : json['generalConditions'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'publishedAt': !exists(json, 'publishedAt') ? undefined : (new Date(json['publishedAt'])),
        'security': !exists(json, 'security') ? undefined : PlanSecurityV4FromJSON(json['security']),
        'selectionRule': !exists(json, 'selectionRule') ? undefined : json['selectionRule'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'type': !exists(json, 'type') ? undefined : PlanTypeV4FromJSON(json['type']),
        'updatedAt': !exists(json, 'updatedAt') ? undefined : (new Date(json['updatedAt'])),
        'validation': !exists(json, 'validation') ? undefined : PlanValidationTypeV4FromJSON(json['validation']),
    };
}

export function PlanEntityV4ToJSON(value?: PlanEntityV4 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiId': value.apiId,
        'characteristics': value.characteristics,
        'closedAt': value.closedAt === undefined ? undefined : (value.closedAt.toISOString()),
        'commentMessage': value.commentMessage,
        'commentRequired': value.commentRequired,
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'crossId': value.crossId,
        'description': value.description,
        'excludedGroups': value.excludedGroups,
        'flows': value.flows === undefined ? undefined : ((value.flows as Array<any>).map(FlowV4ToJSON)),
        'generalConditions': value.generalConditions,
        'id': value.id,
        'name': value.name,
        'order': value.order,
        'publishedAt': value.publishedAt === undefined ? undefined : (value.publishedAt.toISOString()),
        'security': PlanSecurityV4ToJSON(value.security),
        'selectionRule': value.selectionRule,
        'status': value.status,
        'tags': value.tags,
        'type': PlanTypeV4ToJSON(value.type),
        'updatedAt': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'validation': PlanValidationTypeV4ToJSON(value.validation),
    };
}

/**
* @export
* @enum {string}
*/
export enum PlanEntityV4StatusEnum {
    STAGING = 'STAGING',
    PUBLISHED = 'PUBLISHED',
    DEPRECATED = 'DEPRECATED',
    CLOSED = 'CLOSED'
}

