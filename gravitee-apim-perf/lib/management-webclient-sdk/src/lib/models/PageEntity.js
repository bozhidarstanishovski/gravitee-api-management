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
import { AccessControlEntityFromJSON, AccessControlEntityToJSON, PageMediaEntityFromJSON, PageMediaEntityToJSON, PageRevisionIdFromJSON, PageRevisionIdToJSON, PageSourceEntityFromJSON, PageSourceEntityToJSON, VisibilityFromJSON, VisibilityToJSON, } from './';
export function PageEntityFromJSON(json) {
    return PageEntityFromJSONTyped(json, false);
}
export function PageEntityFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessControls': !exists(json, 'accessControls') ? undefined : (json['accessControls'].map(AccessControlEntityFromJSON)),
        'attached_media': !exists(json, 'attached_media') ? undefined : (json['attached_media'].map(PageMediaEntityFromJSON)),
        'configuration': !exists(json, 'configuration') ? undefined : json['configuration'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'contentRevisionId': !exists(json, 'contentRevisionId') ? undefined : PageRevisionIdFromJSON(json['contentRevisionId']),
        'contentType': !exists(json, 'contentType') ? undefined : json['contentType'],
        'crossId': !exists(json, 'crossId') ? undefined : json['crossId'],
        'excludedAccessControls': !exists(json, 'excludedAccessControls') ? undefined : json['excludedAccessControls'],
        'excluded_groups': !exists(json, 'excluded_groups') ? undefined : json['excluded_groups'],
        'generalConditions': !exists(json, 'generalConditions') ? undefined : json['generalConditions'],
        'homepage': !exists(json, 'homepage') ? undefined : json['homepage'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lastContributor': !exists(json, 'lastContributor') ? undefined : json['lastContributor'],
        'lastModificationDate': !exists(json, 'lastModificationDate') ? undefined : (new Date(json['lastModificationDate'])),
        'messages': !exists(json, 'messages') ? undefined : json['messages'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'parentId': !exists(json, 'parentId') ? undefined : json['parentId'],
        'parentPath': !exists(json, 'parentPath') ? undefined : json['parentPath'],
        'published': !exists(json, 'published') ? undefined : json['published'],
        'source': !exists(json, 'source') ? undefined : PageSourceEntityFromJSON(json['source']),
        'translations': !exists(json, 'translations') ? undefined : (json['translations'].map(PageEntityFromJSON)),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'visibility': !exists(json, 'visibility') ? undefined : VisibilityFromJSON(json['visibility']),
    };
}
export function PageEntityToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accessControls': value.accessControls === undefined ? undefined : (value.accessControls.map(AccessControlEntityToJSON)),
        'attached_media': value.attached_media === undefined ? undefined : (value.attached_media.map(PageMediaEntityToJSON)),
        'configuration': value.configuration,
        'content': value.content,
        'contentRevisionId': PageRevisionIdToJSON(value.contentRevisionId),
        'contentType': value.contentType,
        'crossId': value.crossId,
        'excludedAccessControls': value.excludedAccessControls,
        'excluded_groups': value.excluded_groups,
        'homepage': value.homepage,
        'id': value.id,
        'lastContributor': value.lastContributor,
        'lastModificationDate': value.lastModificationDate === undefined ? undefined : (value.lastModificationDate.toISOString()),
        'messages': value.messages,
        'metadata': value.metadata,
        'name': value.name,
        'order': value.order,
        'parentId': value.parentId,
        'parentPath': value.parentPath,
        'published': value.published,
        'source': PageSourceEntityToJSON(value.source),
        'translations': value.translations === undefined ? undefined : (value.translations.map(PageEntityToJSON)),
        'type': value.type,
        'visibility': VisibilityToJSON(value.visibility),
    };
}