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
export function HttpResponseFromJSON(json) {
    return HttpResponseFromJSONTyped(json, false);
}
export function HttpResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'body': !exists(json, 'body') ? undefined : json['body'],
        'headers': !exists(json, 'headers') ? undefined : json['headers'],
        'statusCode': !exists(json, 'statusCode') ? undefined : json['statusCode'],
    };
}
export function HttpResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'body': value.body,
        'headers': value.headers,
        'statusCode': value.statusCode,
    };
}