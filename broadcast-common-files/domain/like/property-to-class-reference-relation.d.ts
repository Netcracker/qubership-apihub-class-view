import { LIKE_TYPE_PROPERTY_TO_CLASS_RELATION } from './type';
import { HasIdentityLike, HasPrimaryLike, HasReferenceFromPropertyToClassLike, HasTypeLike } from './base';
import { IsEqualFunction } from '../base';

export interface PropertyToClassRelationLike extends HasIdentityLike, HasTypeLike<typeof LIKE_TYPE_PROPERTY_TO_CLASS_RELATION>, HasPrimaryLike, HasReferenceFromPropertyToClassLike {
}
export declare const equalsPropertyToClassRelationByLayout: IsEqualFunction<PropertyToClassRelationLike>;
export declare const equalsPropertyToClassRelationByVisual: IsEqualFunction<PropertyToClassRelationLike>;
