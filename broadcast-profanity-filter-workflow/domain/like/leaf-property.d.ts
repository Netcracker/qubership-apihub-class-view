import { HasDeprecationLike, HasIdentityLike, HasNameLike, HasPropertyTypeDeprecationLike, HasPropertyTypeLike, HasRequiredLike, HasTypeLike } from './base';
import { LIKE_TYPE_LEAF_PROPERTY } from './type';
import { IsEqualFunction } from '../base';

export interface LeafPropertyLike extends HasIdentityLike, HasNameLike, HasTypeLike<typeof LIKE_TYPE_LEAF_PROPERTY>, HasRequiredLike, HasDeprecationLike, HasPropertyTypeDeprecationLike, HasPropertyTypeLike {
}
export declare const equalsLeafPropertyByLayout: IsEqualFunction<LeafPropertyLike>;
export declare const equalsLeafPropertyByVisual: IsEqualFunction<LeafPropertyLike>;
