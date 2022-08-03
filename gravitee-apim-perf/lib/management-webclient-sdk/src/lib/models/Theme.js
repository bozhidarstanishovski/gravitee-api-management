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
export function ThemeFromJSON(json) {
    return ThemeFromJSONTyped(json, false);
}
export function ThemeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'css': !exists(json, 'css') ? undefined : json['css'],
        'loader': !exists(json, 'loader') ? undefined : json['loader'],
        'logo': !exists(json, 'logo') ? undefined : json['logo'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}
export function ThemeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'css': value.css,
        'loader': value.loader,
        'logo': value.logo,
        'name': value.name,
    };
}