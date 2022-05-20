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
    Links,
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './';

/**
 * 
 * @export
 * @interface UsersResponse
 */
export interface UsersResponse {
    /**
     * List of users.
     * @type {Array<User>}
     * @memberof UsersResponse
     */
    data?: Array<User>;
    /**
     * Map of Map of Object
     * @type {{ [key: string]: { [key: string]: any; }; }}
     * @memberof UsersResponse
     */
    metadata?: { [key: string]: { [key: string]: any; }; };
    /**
     * 
     * @type {Links}
     * @memberof UsersResponse
     */
    links?: Links;
}

export function UsersResponseFromJSON(json: any): UsersResponse {
    return UsersResponseFromJSONTyped(json, false);
}

export function UsersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(UserFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
    };
}

export function UsersResponseToJSON(value?: UsersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(UserToJSON)),
        'metadata': value.metadata,
        'links': LinksToJSON(value.links),
    };
}

