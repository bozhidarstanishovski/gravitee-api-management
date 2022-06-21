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
/**
 * 
 * @export
 * @interface EntrypointEntity
 */
export interface EntrypointEntity {
    /**
     * 
     * @type {string}
     * @memberof EntrypointEntity
     */
    id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof EntrypointEntity
     */
    tags?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof EntrypointEntity
     */
    value?: string;
}

export function EntrypointEntityFromJSON(json: any): EntrypointEntity {
    return EntrypointEntityFromJSONTyped(json, false);
}

export function EntrypointEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntrypointEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function EntrypointEntityToJSON(value?: EntrypointEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'tags': value.tags,
        'value': value.value,
    };
}

