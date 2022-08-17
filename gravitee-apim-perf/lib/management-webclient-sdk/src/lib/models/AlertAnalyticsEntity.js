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
import { AlertTriggerAnalyticsFromJSON, AlertTriggerAnalyticsToJSON, } from './';
export function AlertAnalyticsEntityFromJSON(json) {
    return AlertAnalyticsEntityFromJSONTyped(json, false);
}
export function AlertAnalyticsEntityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alerts': !exists(json, 'alerts') ? undefined : (json['alerts'].map(AlertTriggerAnalyticsFromJSON)),
        'bySeverity': !exists(json, 'bySeverity') ? undefined : json['bySeverity'],
    };
}
export function AlertAnalyticsEntityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alerts': value.alerts === undefined ? undefined : (value.alerts.map(AlertTriggerAnalyticsToJSON)),
        'bySeverity': value.bySeverity,
    };
}