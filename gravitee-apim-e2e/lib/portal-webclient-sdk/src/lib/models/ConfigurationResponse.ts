/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io Portal Rest API
 * API dedicated to the devportal part of Gravitee
 *
 * Contact: contact@graviteesource.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ConfigurationAnalytics,
    ConfigurationAnalyticsFromJSON,
    ConfigurationAnalyticsFromJSONTyped,
    ConfigurationAnalyticsToJSON,
    ConfigurationApplication,
    ConfigurationApplicationFromJSON,
    ConfigurationApplicationFromJSONTyped,
    ConfigurationApplicationToJSON,
    ConfigurationAuthentication,
    ConfigurationAuthenticationFromJSON,
    ConfigurationAuthenticationFromJSONTyped,
    ConfigurationAuthenticationToJSON,
    ConfigurationDocumentation,
    ConfigurationDocumentationFromJSON,
    ConfigurationDocumentationFromJSONTyped,
    ConfigurationDocumentationToJSON,
    ConfigurationPlan,
    ConfigurationPlanFromJSON,
    ConfigurationPlanFromJSONTyped,
    ConfigurationPlanToJSON,
    ConfigurationPortal,
    ConfigurationPortalFromJSON,
    ConfigurationPortalFromJSONTyped,
    ConfigurationPortalToJSON,
    ConfigurationReCaptcha,
    ConfigurationReCaptchaFromJSON,
    ConfigurationReCaptchaFromJSONTyped,
    ConfigurationReCaptchaToJSON,
    ConfigurationScheduler,
    ConfigurationSchedulerFromJSON,
    ConfigurationSchedulerFromJSONTyped,
    ConfigurationSchedulerToJSON,
    Enabled,
    EnabledFromJSON,
    EnabledFromJSONTyped,
    EnabledToJSON,
} from './';

/**
 * 
 * @export
 * @interface ConfigurationResponse
 */
export interface ConfigurationResponse {
    /**
     * 
     * @type {ConfigurationPortal}
     * @memberof ConfigurationResponse
     */
    portal?: ConfigurationPortal;
    /**
     * 
     * @type {ConfigurationAuthentication}
     * @memberof ConfigurationResponse
     */
    authentication?: ConfigurationAuthentication;
    /**
     * 
     * @type {ConfigurationScheduler}
     * @memberof ConfigurationResponse
     */
    scheduler?: ConfigurationScheduler;
    /**
     * 
     * @type {ConfigurationDocumentation}
     * @memberof ConfigurationResponse
     */
    documentation?: ConfigurationDocumentation;
    /**
     * 
     * @type {ConfigurationPlan}
     * @memberof ConfigurationResponse
     */
    plan?: ConfigurationPlan;
    /**
     * 
     * @type {Enabled}
     * @memberof ConfigurationResponse
     */
    apiReview?: Enabled;
    /**
     * 
     * @type {ConfigurationAnalytics}
     * @memberof ConfigurationResponse
     */
    analytics?: ConfigurationAnalytics;
    /**
     * 
     * @type {ConfigurationApplication}
     * @memberof ConfigurationResponse
     */
    application?: ConfigurationApplication;
    /**
     * 
     * @type {ConfigurationReCaptcha}
     * @memberof ConfigurationResponse
     */
    recaptcha?: ConfigurationReCaptcha;
    /**
     * 
     * @type {Enabled}
     * @memberof ConfigurationResponse
     */
    alert?: Enabled;
}

export function ConfigurationResponseFromJSON(json: any): ConfigurationResponse {
    return ConfigurationResponseFromJSONTyped(json, false);
}

export function ConfigurationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'portal': !exists(json, 'portal') ? undefined : ConfigurationPortalFromJSON(json['portal']),
        'authentication': !exists(json, 'authentication') ? undefined : ConfigurationAuthenticationFromJSON(json['authentication']),
        'scheduler': !exists(json, 'scheduler') ? undefined : ConfigurationSchedulerFromJSON(json['scheduler']),
        'documentation': !exists(json, 'documentation') ? undefined : ConfigurationDocumentationFromJSON(json['documentation']),
        'plan': !exists(json, 'plan') ? undefined : ConfigurationPlanFromJSON(json['plan']),
        'apiReview': !exists(json, 'apiReview') ? undefined : EnabledFromJSON(json['apiReview']),
        'analytics': !exists(json, 'analytics') ? undefined : ConfigurationAnalyticsFromJSON(json['analytics']),
        'application': !exists(json, 'application') ? undefined : ConfigurationApplicationFromJSON(json['application']),
        'recaptcha': !exists(json, 'recaptcha') ? undefined : ConfigurationReCaptchaFromJSON(json['recaptcha']),
        'alert': !exists(json, 'alert') ? undefined : EnabledFromJSON(json['alert']),
    };
}

export function ConfigurationResponseToJSON(value?: ConfigurationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'portal': ConfigurationPortalToJSON(value.portal),
        'authentication': ConfigurationAuthenticationToJSON(value.authentication),
        'scheduler': ConfigurationSchedulerToJSON(value.scheduler),
        'documentation': ConfigurationDocumentationToJSON(value.documentation),
        'plan': ConfigurationPlanToJSON(value.plan),
        'apiReview': EnabledToJSON(value.apiReview),
        'analytics': ConfigurationAnalyticsToJSON(value.analytics),
        'application': ConfigurationApplicationToJSON(value.application),
        'recaptcha': ConfigurationReCaptchaToJSON(value.recaptcha),
        'alert': EnabledToJSON(value.alert),
    };
}

