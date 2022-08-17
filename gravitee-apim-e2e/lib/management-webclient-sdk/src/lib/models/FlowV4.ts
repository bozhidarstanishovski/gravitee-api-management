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

import { exists, mapValues } from '../runtime';
import {
    Selector,
    SelectorFromJSON,
    SelectorFromJSONTyped,
    SelectorToJSON,
    StepV4,
    StepV4FromJSON,
    StepV4FromJSONTyped,
    StepV4ToJSON,
} from './';

/**
 * A list of flows containing the policies configuration.
 * @export
 * @interface FlowV4
 */
export interface FlowV4 {
    /**
     * 
     * @type {boolean}
     * @memberof FlowV4
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FlowV4
     */
    name?: string;
    /**
     * 
     * @type {Array<StepV4>}
     * @memberof FlowV4
     */
    publish?: Array<StepV4>;
    /**
     * 
     * @type {Array<StepV4>}
     * @memberof FlowV4
     */
    request?: Array<StepV4>;
    /**
     * 
     * @type {Array<StepV4>}
     * @memberof FlowV4
     */
    response?: Array<StepV4>;
    /**
     * 
     * @type {Array<Selector>}
     * @memberof FlowV4
     */
    selectors?: Array<Selector>;
    /**
     * 
     * @type {Array<StepV4>}
     * @memberof FlowV4
     */
    subscribe?: Array<StepV4>;
    /**
     * 
     * @type {Array<string>}
     * @memberof FlowV4
     */
    tags?: Array<string>;
}

export function FlowV4FromJSON(json: any): FlowV4 {
    return FlowV4FromJSONTyped(json, false);
}

export function FlowV4FromJSONTyped(json: any, ignoreDiscriminator: boolean): FlowV4 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'publish': !exists(json, 'publish') ? undefined : ((json['publish'] as Array<any>).map(StepV4FromJSON)),
        'request': !exists(json, 'request') ? undefined : ((json['request'] as Array<any>).map(StepV4FromJSON)),
        'response': !exists(json, 'response') ? undefined : ((json['response'] as Array<any>).map(StepV4FromJSON)),
        'selectors': !exists(json, 'selectors') ? undefined : ((json['selectors'] as Array<any>).map(SelectorFromJSON)),
        'subscribe': !exists(json, 'subscribe') ? undefined : ((json['subscribe'] as Array<any>).map(StepV4FromJSON)),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function FlowV4ToJSON(value?: FlowV4 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
        'name': value.name,
        'publish': value.publish === undefined ? undefined : ((value.publish as Array<any>).map(StepV4ToJSON)),
        'request': value.request === undefined ? undefined : ((value.request as Array<any>).map(StepV4ToJSON)),
        'response': value.response === undefined ? undefined : ((value.response as Array<any>).map(StepV4ToJSON)),
        'selectors': value.selectors === undefined ? undefined : ((value.selectors as Array<any>).map(SelectorToJSON)),
        'subscribe': value.subscribe === undefined ? undefined : ((value.subscribe as Array<any>).map(StepV4ToJSON)),
        'tags': value.tags,
    };
}

