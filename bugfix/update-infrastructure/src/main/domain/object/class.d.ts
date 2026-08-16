import { HasDeprecation, HasIdentity, HasName, HasProperties, HasShape } from '../../../../domain/object/base';

export interface ClassObject<Property> extends HasIdentity, HasName, HasProperties<Property>, HasShape, HasDeprecation {
}
