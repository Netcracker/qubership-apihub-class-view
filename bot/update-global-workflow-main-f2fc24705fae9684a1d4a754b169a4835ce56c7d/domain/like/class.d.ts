import { HasDeprecationLike, HasIdentityLike, HasNameLike, HasPropertiesLike, HasShapeLike, HasTypeLike } from './base';
import { LIKE_TYPE_CLASS } from './type';
import { PropertyLike } from './all';
import { IsEqualFunction } from '../base';

export interface ClassLike extends HasIdentityLike, HasNameLike, HasTypeLike<typeof LIKE_TYPE_CLASS>, HasPropertiesLike<PropertyLike>, HasShapeLike, HasDeprecationLike {
}
export declare const equalsClassByLayout: IsEqualFunction<ClassLike>;
export declare const equalsClassByVisual: IsEqualFunction<ClassLike>;
