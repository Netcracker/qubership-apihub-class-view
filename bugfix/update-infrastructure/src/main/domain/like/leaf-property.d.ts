import { HasDeprecationLike, HasIdentityLike, HasNameLike, HasPropertyTypeDeprecationLike, HasPropertyTypeLike, HasRequiredLike, HasTypeLike } from '../../../../domain/like/base';
import { LIKE_TYPE_LEAF_PROPERTY } from '../../../../domain/like/type';
import { IsEqualFunction } from '../../../../domain/base';

export interface LeafPropertyLike extends HasIdentityLike, HasNameLike, HasTypeLike<typeof LIKE_TYPE_LEAF_PROPERTY>, HasRequiredLike, HasDeprecationLike, HasPropertyTypeDeprecationLike, HasPropertyTypeLike {
}
export declare const equalsLeafPropertyByLayout: IsEqualFunction<LeafPropertyLike>;
export declare const equalsLeafPropertyByVisual: IsEqualFunction<LeafPropertyLike>;
