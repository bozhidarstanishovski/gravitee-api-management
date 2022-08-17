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
export function TicketEntityFromJSON(json) {
    return TicketEntityFromJSONTyped(json, false);
}
export function TicketEntityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'api': !exists(json, 'api') ? undefined : json['api'],
        'application': !exists(json, 'application') ? undefined : json['application'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'from_user': !exists(json, 'from_user') ? undefined : json['from_user'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
    };
}
export function TicketEntityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'api': value.api,
        'application': value.application,
        'content': value.content,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'from_user': value.from_user,
        'id': value.id,
        'subject': value.subject,
    };
}