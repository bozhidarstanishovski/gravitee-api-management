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
export function UpdateTopApiEntityFromJSON(json) {
    return UpdateTopApiEntityFromJSONTyped(json, false);
}
export function UpdateTopApiEntityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'api': !exists(json, 'api') ? undefined : json['api'],
        'order': !exists(json, 'order') ? undefined : json['order'],
    };
}
export function UpdateTopApiEntityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'api': value.api,
        'order': value.order,
    };
}