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
    User,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './';

/**
 * 
 * @export
 * @interface RatingAnswer
 */
export interface RatingAnswer {
    /**
     * 
     * @type {string}
     * @memberof RatingAnswer
     */
    id: string;
    /**
     * 
     * @type {User}
     * @memberof RatingAnswer
     */
    author: User;
    /**
     * 
     * @type {Date}
     * @memberof RatingAnswer
     */
    date: Date;
    /**
     * 
     * @type {string}
     * @memberof RatingAnswer
     */
    comment: string;
}

export function RatingAnswerFromJSON(json: any): RatingAnswer {
    return RatingAnswerFromJSONTyped(json, false);
}

export function RatingAnswerFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatingAnswer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'author': UserFromJSON(json['author']),
        'date': (new Date(json['date'])),
        'comment': json['comment'],
    };
}

export function RatingAnswerToJSON(value?: RatingAnswer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'author': UserToJSON(value.author),
        'date': (value.date.toISOString()),
        'comment': value.comment,
    };
}

