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
import { ApiKeyModeFromJSON, ApiKeyModeToJSON, ApplicationSettingsFromJSON, ApplicationSettingsToJSON, PrimaryOwnerEntityFromJSON, PrimaryOwnerEntityToJSON, } from './';
export function ApplicationEntityFromJSON(json) {
    return ApplicationEntityFromJSONTyped(json, false);
}
export function ApplicationEntityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'api_key_mode': !exists(json, 'api_key_mode') ? undefined : ApiKeyModeFromJSON(json['api_key_mode']),
        'background': !exists(json, 'background') ? undefined : json['background'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'disable_membership_notifications': !exists(json, 'disable_membership_notifications') ? undefined : json['disable_membership_notifications'],
        'domain': !exists(json, 'domain') ? undefined : json['domain'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'owner': !exists(json, 'owner') ? undefined : PrimaryOwnerEntityFromJSON(json['owner']),
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'settings': !exists(json, 'settings') ? undefined : ApplicationSettingsFromJSON(json['settings']),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}
export function ApplicationEntityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'api_key_mode': ApiKeyModeToJSON(value.api_key_mode),
        'background': value.background,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'description': value.description,
        'disable_membership_notifications': value.disable_membership_notifications,
        'domain': value.domain,
        'groups': value.groups,
        'id': value.id,
        'name': value.name,
        'owner': PrimaryOwnerEntityToJSON(value.owner),
        'picture': value.picture,
        'settings': ApplicationSettingsToJSON(value.settings),
        'status': value.status,
        'type': value.type,
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
    };
}