/* tslint:disable */
/* eslint-disable */
/**
 * Gravitee.io - Management API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.18.0-SNAPSHOT
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TagEntity
 */
export interface TagEntity {
    /**
     * 
     * @type {string}
     * @memberof TagEntity
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TagEntity
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TagEntity
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TagEntity
     */
    restricted_groups?: Array<string>;
}

export function TagEntityFromJSON(json: any): TagEntity {
    return TagEntityFromJSONTyped(json, false);
}

export function TagEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'restricted_groups': !exists(json, 'restricted_groups') ? undefined : json['restricted_groups'],
    };
}

export function TagEntityToJSON(value?: TagEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'restricted_groups': value.restricted_groups,
    };
}

