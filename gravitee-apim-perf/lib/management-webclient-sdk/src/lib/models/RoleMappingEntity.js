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
export function RoleMappingEntityFromJSON(json) {
    return RoleMappingEntityFromJSONTyped(json, false);
}
export function RoleMappingEntityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'condition': !exists(json, 'condition') ? undefined : json['condition'],
        'environments': json['environments'],
        'organizations': json['organizations'],
    };
}
export function RoleMappingEntityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'condition': value.condition,
        'environments': value.environments,
        'organizations': value.organizations,
    };
}