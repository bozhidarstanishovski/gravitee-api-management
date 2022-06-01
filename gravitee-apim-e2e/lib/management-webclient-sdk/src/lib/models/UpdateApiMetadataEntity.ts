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
    MetadataFormat,
    MetadataFormatFromJSON,
    MetadataFormatFromJSONTyped,
    MetadataFormatToJSON,
} from './';

/**
 * 
 * @export
 * @interface UpdateApiMetadataEntity
 */
export interface UpdateApiMetadataEntity {
    /**
     * 
     * @type {string}
     * @memberof UpdateApiMetadataEntity
     */
    apiId?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateApiMetadataEntity
     */
    defaultValue?: string;
    /**
     * 
     * @type {MetadataFormat}
     * @memberof UpdateApiMetadataEntity
     */
    format?: MetadataFormat;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateApiMetadataEntity
     */
    hidden?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateApiMetadataEntity
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateApiMetadataEntity
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateApiMetadataEntity
     */
    value?: string;
}

export function UpdateApiMetadataEntityFromJSON(json: any): UpdateApiMetadataEntity {
    return UpdateApiMetadataEntityFromJSONTyped(json, false);
}

export function UpdateApiMetadataEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateApiMetadataEntity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiId': !exists(json, 'apiId') ? undefined : json['apiId'],
        'defaultValue': !exists(json, 'defaultValue') ? undefined : json['defaultValue'],
        'format': !exists(json, 'format') ? undefined : MetadataFormatFromJSON(json['format']),
        'hidden': !exists(json, 'hidden') ? undefined : json['hidden'],
        'key': !exists(json, 'key') ? undefined : json['key'],
        'name': json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function UpdateApiMetadataEntityToJSON(value?: UpdateApiMetadataEntity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiId': value.apiId,
        'defaultValue': value.defaultValue,
        'format': MetadataFormatToJSON(value.format),
        'hidden': value.hidden,
        'key': value.key,
        'name': value.name,
        'value': value.value,
    };
}

