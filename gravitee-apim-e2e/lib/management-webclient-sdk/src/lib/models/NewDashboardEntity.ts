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
    DashboardReferenceType,
    DashboardReferenceTypeFromJSON,
    DashboardReferenceTypeFromJSONTyped,
    DashboardReferenceTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface NewDashboardEntity
 */
export interface NewDashboardEntity {
    /**
     * 
     * @type {string}
     * @memberof NewDashboardEntity
     */
    definition?: string;
    /**
     * 
     * @type {boolean}
     * @memberof NewDashboardEntity
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NewDashboardEntity
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewDashboardEntity
     */
    query_filter?: string;
    /**
     * 
     * @type {string}
     * @memberof NewDashboardEntity
     */
    reference_id: string;
    /**
     * 
     * @type {DashboardReferenceType}
     * @memberof NewDashboardEntity
     */
    reference_type: DashboardReferenceType;
}

export function NewDashboardEntityFromJSON(json: any): NewDashboardEntity {
    return NewDashboardEntityFromJSONTyped(json, false);
}

export function NewDashboardEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewDashboardEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'definition': !exists(json, 'definition') ? undefined : json['definition'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'name': json['name'],
        'query_filter': !exists(json, 'query_filter') ? undefined : json['query_filter'],
        'reference_id': json['reference_id'],
        'reference_type': DashboardReferenceTypeFromJSON(json['reference_type']),
    };
}

export function NewDashboardEntityToJSON(value?: NewDashboardEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'definition': value.definition,
        'enabled': value.enabled,
        'name': value.name,
        'query_filter': value.query_filter,
        'reference_id': value.reference_id,
        'reference_type': DashboardReferenceTypeToJSON(value.reference_type),
    };
}

