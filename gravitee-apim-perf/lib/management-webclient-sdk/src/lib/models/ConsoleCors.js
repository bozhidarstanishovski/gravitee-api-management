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
export function ConsoleCorsFromJSON(json) {
    return ConsoleCorsFromJSONTyped(json, false);
}
export function ConsoleCorsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowHeaders': !exists(json, 'allowHeaders') ? undefined : json['allowHeaders'],
        'allowMethods': !exists(json, 'allowMethods') ? undefined : json['allowMethods'],
        'allowOrigin': !exists(json, 'allowOrigin') ? undefined : json['allowOrigin'],
        'exposedHeaders': !exists(json, 'exposedHeaders') ? undefined : json['exposedHeaders'],
        'maxAge': !exists(json, 'maxAge') ? undefined : json['maxAge'],
    };
}
export function ConsoleCorsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allowHeaders': value.allowHeaders,
        'allowMethods': value.allowMethods,
        'allowOrigin': value.allowOrigin,
        'exposedHeaders': value.exposedHeaders,
        'maxAge': value.maxAge,
    };
}