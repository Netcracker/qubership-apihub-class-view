import { HasDeprecationLike, HasIdentityLike, HasNameLike, HasPrimaryLike, HasPropertyTypeDeprecationLike, HasPropertyTypeLike, HasReferenceFromGroupToClassLike, HasReferenceFromPropertyToClassLike, HasRequiredLike, HasShapeLike } from './base';

export declare function equalsByIdentity(first: HasIdentityLike, second: HasIdentityLike): boolean;
export declare function equalsByName(first: HasNameLike, second: HasNameLike): boolean;
export declare function equalsByShape(first: HasShapeLike, second: HasShapeLike): boolean;
export declare function equalsByPropertyType(first: HasPropertyTypeLike, second: HasPropertyTypeLike): boolean;
export declare function equalsByRequired(first: HasRequiredLike, second: HasRequiredLike): boolean;
export declare function equalsByDeprecation(first: HasDeprecationLike, second: HasDeprecationLike): boolean;
export declare function equalsByPropertyTypeDeprecation(first: HasPropertyTypeDeprecationLike, second: HasPropertyTypeDeprecationLike): boolean;
export declare function equalsByPrimary(first: HasPrimaryLike, second: HasPrimaryLike): boolean;
export declare function equalsByReferenceFromGroupToClass(first: HasReferenceFromGroupToClassLike, second: HasReferenceFromGroupToClassLike): boolean;
export declare function equalsByHasReferenceFromPropertyToClass(first: HasReferenceFromPropertyToClassLike, second: HasReferenceFromPropertyToClassLike): boolean;
