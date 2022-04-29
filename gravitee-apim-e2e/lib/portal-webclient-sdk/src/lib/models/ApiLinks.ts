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
/**
 * 
 * @export
 * @interface ApiLinks
 */
export interface ApiLinks {
    /**
     * 
     * @type {string}
     * @memberof ApiLinks
     */
    self?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiLinks
     */
    links?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiLinks
     */
    metrics?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiLinks
     */
    pages?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiLinks
     */
    picture?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiLinks
     */
    background?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiLinks
     */
    plans?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiLinks
     */
    ratings?: string;
}

export function ApiLinksFromJSON(json: any): ApiLinks {
    return ApiLinksFromJSONTyped(json, false);
}

export function ApiLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'self': !exists(json, 'self') ? undefined : json['self'],
        'links': !exists(json, 'links') ? undefined : json['links'],
        'metrics': !exists(json, 'metrics') ? undefined : json['metrics'],
        'pages': !exists(json, 'pages') ? undefined : json['pages'],
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'background': !exists(json, 'background') ? undefined : json['background'],
        'plans': !exists(json, 'plans') ? undefined : json['plans'],
        'ratings': !exists(json, 'ratings') ? undefined : json['ratings'],
    };
}

export function ApiLinksToJSON(value?: ApiLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'self': value.self,
        'links': value.links,
        'metrics': value.metrics,
        'pages': value.pages,
        'picture': value.picture,
        'background': value.background,
        'plans': value.plans,
        'ratings': value.ratings,
    };
}

