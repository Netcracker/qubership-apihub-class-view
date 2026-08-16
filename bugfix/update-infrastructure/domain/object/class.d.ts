import { HasDeprecation, HasIdentity, HasName, HasProperties, HasShape } from './base';

export interface ClassObject<Property> extends HasIdentity, HasName, HasProperties<Property>, HasShape, HasDeprecation {
}
