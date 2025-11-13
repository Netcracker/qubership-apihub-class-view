import { HasDeprecationLike, HasIdentityLike, HasNameLike, HasPropertiesLike, HasTypeLike } from './base';
import { LIKE_TYPE_PROPERTY_GROUP } from './type';
import { LeafPropertyLike } from './leaf-property';
import { IsEqualFunction } from '../base';

export interface PropertiesGroupLike extends HasIdentityLike, HasTypeLike<typeof LIKE_TYPE_PROPERTY_GROUP>, HasNameLike, HasDeprecationLike, HasPropertiesLike<LeafPropertyLike> {
}
export declare const equalsPropertiesGroupByLayout: IsEqualFunction<PropertiesGroupLike>;
export declare const equalsPropertiesGroupByVisual: IsEqualFunction<PropertiesGroupLike>;
