import { LIKE_TYPE_INCLUDE_PROPERTIES_GROUP_RELATION } from '../../../../domain/like/type';
import { HasIdentityLike, HasPrimaryLike, HasReferenceFromGroupToClassLike, HasTypeLike } from '../../../../domain/like/base';
import { IsEqualFunction } from '../../../../domain/base';

export interface IncludePropertiesGroupRelationLike extends HasIdentityLike, HasTypeLike<typeof LIKE_TYPE_INCLUDE_PROPERTIES_GROUP_RELATION>, HasPrimaryLike, HasReferenceFromGroupToClassLike {
}
export declare const equalsIncludePropertiesGroupRelationByLayout: IsEqualFunction<IncludePropertiesGroupRelationLike>;
export declare const equalsIncludePropertiesGroupRelationByVisual: IsEqualFunction<IncludePropertiesGroupRelationLike>;
