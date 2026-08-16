import { Key, OneLineText, Optional } from '../../../../domain/base';
import { LikeType } from '../../../../domain/like/type';
import { ClassLike } from '../../../../domain/like/class';
import { LeafPropertyLike } from '../../../../domain/like/leaf-property';
import { PropertiesGroupLike } from '../../../../domain/like/properties-group';
import { Shape } from '../../../../domain';

export interface HasIdentityLike {
    readonly key: Key;
}
export interface HasTypeLike<Type extends LikeType> {
    readonly type: Type;
}
export interface HasNameLike {
    readonly name: OneLineText;
}
export interface HasPropertyTypeLike {
    readonly propertyType: OneLineText;
}
export interface HasPropertiesLike<Property> {
    readonly properties: Property[];
}
export interface HasPrimaryLike {
    readonly primary: boolean;
}
export interface HasRequiredLike {
    readonly required: boolean;
}
export interface HasDeprecationLike {
    readonly deprecated?: Optional<boolean>;
}
export interface HasPropertyTypeDeprecationLike {
    readonly propertyTypeDeprecated?: Optional<boolean>;
}
export interface HasShapeLike {
    readonly shape?: Optional<Shape>;
}
export interface HasReferenceFromGroupToClassLike {
    readonly includedClass: ClassLike;
    readonly propertyGroup: PropertiesGroupLike;
}
export interface HasReferenceFromPropertyToClassLike {
    readonly leafProperty: LeafPropertyLike;
    readonly referenceClass: ClassLike;
}
