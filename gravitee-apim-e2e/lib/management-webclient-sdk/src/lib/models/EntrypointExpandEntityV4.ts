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
 * @interface EntrypointExpandEntityV4
 */
export interface EntrypointExpandEntityV4 {
    /**
     * 
     * @type {string}
     * @memberof EntrypointExpandEntityV4
     */
    category?: string;
    /**
     * 
     * @type {string}
     * @memberof EntrypointExpandEntityV4
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof EntrypointExpandEntityV4
     */
    icon?: string;
    /**
     * 
     * @type {string}
     * @memberof EntrypointExpandEntityV4
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof EntrypointExpandEntityV4
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof EntrypointExpandEntityV4
     */
    schema?: string;
    /**
     * 
     * @type {string}
     * @memberof EntrypointExpandEntityV4
     */
    supportedApiType?: EntrypointExpandEntityV4SupportedApiTypeEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof EntrypointExpandEntityV4
     */
    supportedModes?: Array<EntrypointExpandEntityV4SupportedModesEnum>;
    /**
     * 
     * @type {string}
     * @memberof EntrypointExpandEntityV4
     */
    version?: string;
}

export function EntrypointExpandEntityV4FromJSON(json: any): EntrypointExpandEntityV4 {
    return EntrypointExpandEntityV4FromJSONTyped(json, false);
}

export function EntrypointExpandEntityV4FromJSONTyped(json: any, ignoreDiscriminator: boolean): EntrypointExpandEntityV4 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'category': !exists(json, 'category') ? undefined : json['category'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'schema': !exists(json, 'schema') ? undefined : json['schema'],
        'supportedApiType': !exists(json, 'supportedApiType') ? undefined : json['supportedApiType'],
        'supportedModes': !exists(json, 'supportedModes') ? undefined : json['supportedModes'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function EntrypointExpandEntityV4ToJSON(value?: EntrypointExpandEntityV4 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category': value.category,
        'description': value.description,
        'icon': value.icon,
        'id': value.id,
        'name': value.name,
        'schema': value.schema,
        'supportedApiType': value.supportedApiType,
        'supportedModes': value.supportedModes,
        'version': value.version,
    };
}

/**
* @export
* @enum {string}
*/
export enum EntrypointExpandEntityV4SupportedApiTypeEnum {
    SYNC = 'SYNC',
    ASYNC = 'ASYNC'
}
/**
* @export
* @enum {string}
*/
export enum EntrypointExpandEntityV4SupportedModesEnum {
    SUBSCRIBE = 'SUBSCRIBE',
    PUBLISH = 'PUBLISH',
    REQUESTRESPONSE = 'REQUEST_RESPONSE'
}

