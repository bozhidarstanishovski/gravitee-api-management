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
import { AlertFromJSON, AlertToJSON, ConsoleAnalyticsPendoFromJSON, ConsoleAnalyticsPendoToJSON, ConsoleAuthenticationFromJSON, ConsoleAuthenticationToJSON, ConsoleCorsFromJSON, ConsoleCorsToJSON, ConsoleReCaptchaFromJSON, ConsoleReCaptchaToJSON, ConsoleSchedulerFromJSON, ConsoleSchedulerToJSON, EmailFromJSON, EmailToJSON, JupiterModeFromJSON, JupiterModeToJSON, LoggingFromJSON, LoggingToJSON, MaintenanceFromJSON, MaintenanceToJSON, ManagementFromJSON, ManagementToJSON, NewsletterFromJSON, NewsletterToJSON, ThemeFromJSON, ThemeToJSON, } from './';
export function ConsoleSettingsEntityFromJSON(json) {
    return ConsoleSettingsEntityFromJSONTyped(json, false);
}
export function ConsoleSettingsEntityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alert': !exists(json, 'alert') ? undefined : AlertFromJSON(json['alert']),
        'analyticsPendo': !exists(json, 'analyticsPendo') ? undefined : ConsoleAnalyticsPendoFromJSON(json['analyticsPendo']),
        'authentication': !exists(json, 'authentication') ? undefined : ConsoleAuthenticationFromJSON(json['authentication']),
        'cors': !exists(json, 'cors') ? undefined : ConsoleCorsFromJSON(json['cors']),
        'email': !exists(json, 'email') ? undefined : EmailFromJSON(json['email']),
        'jupiterMode': !exists(json, 'jupiterMode') ? undefined : JupiterModeFromJSON(json['jupiterMode']),
        'logging': !exists(json, 'logging') ? undefined : LoggingFromJSON(json['logging']),
        'maintenance': !exists(json, 'maintenance') ? undefined : MaintenanceFromJSON(json['maintenance']),
        'management': !exists(json, 'management') ? undefined : ManagementFromJSON(json['management']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'newsletter': !exists(json, 'newsletter') ? undefined : NewsletterFromJSON(json['newsletter']),
        'reCaptcha': !exists(json, 'reCaptcha') ? undefined : ConsoleReCaptchaFromJSON(json['reCaptcha']),
        'scheduler': !exists(json, 'scheduler') ? undefined : ConsoleSchedulerFromJSON(json['scheduler']),
        'theme': !exists(json, 'theme') ? undefined : ThemeFromJSON(json['theme']),
    };
}
export function ConsoleSettingsEntityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alert': AlertToJSON(value.alert),
        'analyticsPendo': ConsoleAnalyticsPendoToJSON(value.analyticsPendo),
        'authentication': ConsoleAuthenticationToJSON(value.authentication),
        'cors': ConsoleCorsToJSON(value.cors),
        'email': EmailToJSON(value.email),
        'jupiterMode': JupiterModeToJSON(value.jupiterMode),
        'logging': LoggingToJSON(value.logging),
        'maintenance': MaintenanceToJSON(value.maintenance),
        'management': ManagementToJSON(value.management),
        'newsletter': NewsletterToJSON(value.newsletter),
        'reCaptcha': ConsoleReCaptchaToJSON(value.reCaptcha),
        'scheduler': ConsoleSchedulerToJSON(value.scheduler),
        'theme': ThemeToJSON(value.theme),
    };
}