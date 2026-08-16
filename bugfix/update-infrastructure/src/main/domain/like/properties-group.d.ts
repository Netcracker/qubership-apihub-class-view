import { HasDeprecationLike, HasIdentityLike, HasNameLike, HasPropertiesLike, HasTypeLike } from '../../../../domain/like/base';
import { LIKE_TYPE_PROPERTY_GROUP } from '../../../../domain/like/type';
import { LeafPropertyLike } from '../../../../domain/like/leaf-property';
import { IsEqualFunction } from '../../../../domain/base';

export interface PropertiesGroupLike extends HasIdentityLike, HasTypeLike<typeof LIKE_TYPE_PROPERTY_GROUP>, HasNameLike, HasDeprecationLike, HasPropertiesLike<LeafPropertyLike> {
}
export declare const equalsPropertiesGroupByLayout: IsEqualFunction<PropertiesGroupLike>;
export declare const equalsPropertiesGroupByVisual: IsEqualFunction<PropertiesGroupLike>;
