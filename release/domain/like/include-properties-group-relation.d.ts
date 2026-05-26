import { LIKE_TYPE_INCLUDE_PROPERTIES_GROUP_RELATION } from './type';
import { HasIdentityLike, HasPrimaryLike, HasReferenceFromGroupToClassLike, HasTypeLike } from './base';
import { IsEqualFunction } from '../base';

export interface IncludePropertiesGroupRelationLike extends HasIdentityLike, HasTypeLike<typeof LIKE_TYPE_INCLUDE_PROPERTIES_GROUP_RELATION>, HasPrimaryLike, HasReferenceFromGroupToClassLike {
}
export declare const equalsIncludePropertiesGroupRelationByLayout: IsEqualFunction<IncludePropertiesGroupRelationLike>;
export declare const equalsIncludePropertiesGroupRelationByVisual: IsEqualFunction<IncludePropertiesGroupRelationLike>;
