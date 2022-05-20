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
 * @interface VirtualHost
 */
export interface VirtualHost {
    /**
     * 
     * @type {string}
     * @memberof VirtualHost
     */
    host?: string;
    /**
     * 
     * @type {boolean}
     * @memberof VirtualHost
     */
    override_entrypoint?: boolean;
    /**
     * 
     * @type {string}
     * @memberof VirtualHost
     */
    path?: string;
}

export function VirtualHostFromJSON(json: any): VirtualHost {
    return VirtualHostFromJSONTyped(json, false);
}

export function VirtualHostFromJSONTyped(json: any, ignoreDiscriminator: boolean): VirtualHost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'host': !exists(json, 'host') ? undefined : json['host'],
        'override_entrypoint': !exists(json, 'override_entrypoint') ? undefined : json['override_entrypoint'],
        'path': !exists(json, 'path') ? undefined : json['path'],
    };
}

export function VirtualHostToJSON(value?: VirtualHost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'host': value.host,
        'override_entrypoint': value.override_entrypoint,
        'path': value.path,
    };
}

