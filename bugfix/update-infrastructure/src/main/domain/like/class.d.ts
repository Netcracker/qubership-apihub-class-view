import { HasDeprecationLike, HasIdentityLike, HasNameLike, HasPropertiesLike, HasShapeLike, HasTypeLike } from '../../../../domain/like/base';
import { LIKE_TYPE_CLASS } from '../../../../domain/like/type';
import { PropertyLike } from '../../../../domain/like/all';
import { IsEqualFunction } from '../../../../domain/base';

export interface ClassLike extends HasIdentityLike, HasNameLike, HasTypeLike<typeof LIKE_TYPE_CLASS>, HasPropertiesLike<PropertyLike>, HasShapeLike, HasDeprecationLike {
}
export declare const equalsClassByLayout: IsEqualFunction<ClassLike>;
export declare const equalsClassByVisual: IsEqualFunction<ClassLike>;
