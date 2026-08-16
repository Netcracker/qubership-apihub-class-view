import { LIKE_TYPE_PROPERTY_TO_CLASS_RELATION } from '../../../../domain/like/type';
import { HasIdentityLike, HasPrimaryLike, HasReferenceFromPropertyToClassLike, HasTypeLike } from '../../../../domain/like/base';
import { IsEqualFunction } from '../../../../domain/base';

export interface PropertyToClassRelationLike extends HasIdentityLike, HasTypeLike<typeof LIKE_TYPE_PROPERTY_TO_CLASS_RELATION>, HasPrimaryLike, HasReferenceFromPropertyToClassLike {
}
export declare const equalsPropertyToClassRelationByLayout: IsEqualFunction<PropertyToClassRelationLike>;
export declare const equalsPropertyToClassRelationByVisual: IsEqualFunction<PropertyToClassRelationLike>;
