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
import { InstanceStateFromJSON, InstanceStateToJSON, } from './';
export function InstanceListItemFromJSON(json) {
    return InstanceListItemFromJSONTyped(json, false);
}
export function InstanceListItemFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'event': !exists(json, 'event') ? undefined : json['event'],
        'hostname': !exists(json, 'hostname') ? undefined : json['hostname'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'ip': !exists(json, 'ip') ? undefined : json['ip'],
        'last_heartbeat_at': !exists(json, 'last_heartbeat_at') ? undefined : (new Date(json['last_heartbeat_at'])),
        'operating_system_name': !exists(json, 'operating_system_name') ? undefined : json['operating_system_name'],
        'port': !exists(json, 'port') ? undefined : json['port'],
        'started_at': !exists(json, 'started_at') ? undefined : (new Date(json['started_at'])),
        'state': !exists(json, 'state') ? undefined : InstanceStateFromJSON(json['state']),
        'stopped_at': !exists(json, 'stopped_at') ? undefined : (new Date(json['stopped_at'])),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'tenant': !exists(json, 'tenant') ? undefined : json['tenant'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}
export function InstanceListItemToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'event': value.event,
        'hostname': value.hostname,
        'id': value.id,
        'ip': value.ip,
        'last_heartbeat_at': value.last_heartbeat_at === undefined ? undefined : (value.last_heartbeat_at.toISOString()),
        'operating_system_name': value.operating_system_name,
        'port': value.port,
        'started_at': value.started_at === undefined ? undefined : (value.started_at.toISOString()),
        'state': InstanceStateToJSON(value.state),
        'stopped_at': value.stopped_at === undefined ? undefined : (value.stopped_at.toISOString()),
        'tags': value.tags,
        'tenant': value.tenant,
        'version': value.version,
    };
}