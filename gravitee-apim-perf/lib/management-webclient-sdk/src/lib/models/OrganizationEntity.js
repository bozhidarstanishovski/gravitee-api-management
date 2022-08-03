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
import { exists } from '../runtime';
import { FlowFromJSON, FlowToJSON, } from './';
export function OrganizationEntityFromJSON(json) {
    return OrganizationEntityFromJSONTyped(json, false);
}
export function OrganizationEntityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cockpitId': !exists(json, 'cockpitId') ? undefined : json['cockpitId'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'domainRestrictions': !exists(json, 'domainRestrictions') ? undefined : json['domainRestrictions'],
        'flowMode': !exists(json, 'flowMode') ? undefined : json['flowMode'],
        'flows': !exists(json, 'flows') ? undefined : (json['flows'].map(FlowFromJSON)),
        'hrids': !exists(json, 'hrids') ? undefined : json['hrids'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
    };
}
export function OrganizationEntityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cockpitId': value.cockpitId,
        'description': value.description,
        'domainRestrictions': value.domainRestrictions,
        'flowMode': value.flowMode,
        'flows': value.flows === undefined ? undefined : (value.flows.map(FlowToJSON)),
        'hrids': value.hrids,
        'id': value.id,
        'name': value.name,
    };
}
/**
* @export
* @enum {string}
*/
export var OrganizationEntityFlowModeEnum;
(function (OrganizationEntityFlowModeEnum) {
    OrganizationEntityFlowModeEnum["DEFAULT"] = "DEFAULT";
    OrganizationEntityFlowModeEnum["BESTMATCH"] = "BEST_MATCH";
})(OrganizationEntityFlowModeEnum || (OrganizationEntityFlowModeEnum = {}));