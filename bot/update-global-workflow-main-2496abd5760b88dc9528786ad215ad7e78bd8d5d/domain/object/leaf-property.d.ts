import { HasDeprecation, HasIdentity, HasName, HasPropertyKind, HasPropertyType, HasPropertyTypeDeprecation, HasRequired, PROPERTY_TYPE_LEAF } from './base';

export interface LeafPropertyObject extends HasIdentity, HasName, HasPropertyKind, HasPropertyType, HasRequired, HasDeprecation, HasPropertyTypeDeprecation {
    readonly kind: typeof PROPERTY_TYPE_LEAF;
}
