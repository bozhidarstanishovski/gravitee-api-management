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
    HttpMethod,
    HttpMethodFromJSON,
    HttpMethodFromJSONTyped,
    HttpMethodToJSON,
    Request,
    RequestFromJSON,
    RequestFromJSONTyped,
    RequestToJSON,
    Response,
    ResponseFromJSON,
    ResponseFromJSONTyped,
    ResponseToJSON,
} from './';

/**
 * 
 * @export
 * @interface Log
 */
export interface Log {
    /**
     * Unique identifier of a log.
     * @type {string}
     * @memberof Log
     */
    id?: string;
    /**
     * Instant of the log.
     * @type {number}
     * @memberof Log
     */
    timestamp?: number;
    /**
     * Request identifier.
     * @type {string}
     * @memberof Log
     */
    transactionId?: string;
    /**
     * Path of the request.
     * @type {string}
     * @memberof Log
     */
    path?: string;
    /**
     * 
     * @type {HttpMethod}
     * @memberof Log
     */
    method?: HttpMethod;
    /**
     * HTTP status code of the request.
     * @type {number}
     * @memberof Log
     */
    status?: number;
    /**
     * Request duration.
     * @type {number}
     * @memberof Log
     */
    responseTime?: number;
    /**
     * Request content length.
     * @type {number}
     * @memberof Log
     */
    requestContentLength?: number;
    /**
     * Response content length.
     * @type {number}
     * @memberof Log
     */
    responseContentLength?: number;
    /**
     * Plan used by the request.
     * @type {string}
     * @memberof Log
     */
    plan?: string;
    /**
     * API called by the request.
     * @type {string}
     * @memberof Log
     */
    api?: string;
    /**
     * 
     * @type {Request}
     * @memberof Log
     */
    request?: Request;
    /**
     * 
     * @type {Response}
     * @memberof Log
     */
    response?: Response;
    /**
     * Map of Map of Object
     * @type {{ [key: string]: { [key: string]: any; }; }}
     * @memberof Log
     */
    metadata?: { [key: string]: { [key: string]: any; }; };
    /**
     * API Gateway host.
     * @type {string}
     * @memberof Log
     */
    host?: string;
    /**
     * User identifier.
     * @type {string}
     * @memberof Log
     */
    user?: string;
    /**
     * Security type of the request.
     * @type {string}
     * @memberof Log
     */
    securityType?: string;
    /**
     * Token used by the request.
     * @type {string}
     * @memberof Log
     */
    securityToken?: string;
}

export function LogFromJSON(json: any): Log {
    return LogFromJSONTyped(json, false);
}

export function LogFromJSONTyped(json: any, ignoreDiscriminator: boolean): Log {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'timestamp': !exists(json, 'timestamp') ? undefined : json['timestamp'],
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'method': !exists(json, 'method') ? undefined : HttpMethodFromJSON(json['method']),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'responseTime': !exists(json, 'responseTime') ? undefined : json['responseTime'],
        'requestContentLength': !exists(json, 'requestContentLength') ? undefined : json['requestContentLength'],
        'responseContentLength': !exists(json, 'responseContentLength') ? undefined : json['responseContentLength'],
        'plan': !exists(json, 'plan') ? undefined : json['plan'],
        'api': !exists(json, 'api') ? undefined : json['api'],
        'request': !exists(json, 'request') ? undefined : RequestFromJSON(json['request']),
        'response': !exists(json, 'response') ? undefined : ResponseFromJSON(json['response']),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'host': !exists(json, 'host') ? undefined : json['host'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'securityType': !exists(json, 'securityType') ? undefined : json['securityType'],
        'securityToken': !exists(json, 'securityToken') ? undefined : json['securityToken'],
    };
}

export function LogToJSON(value?: Log | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'timestamp': value.timestamp,
        'transactionId': value.transactionId,
        'path': value.path,
        'method': HttpMethodToJSON(value.method),
        'status': value.status,
        'responseTime': value.responseTime,
        'requestContentLength': value.requestContentLength,
        'responseContentLength': value.responseContentLength,
        'plan': value.plan,
        'api': value.api,
        'request': RequestToJSON(value.request),
        'response': ResponseToJSON(value.response),
        'metadata': value.metadata,
        'host': value.host,
        'user': value.user,
        'securityType': value.securityType,
        'securityToken': value.securityToken,
    };
}

