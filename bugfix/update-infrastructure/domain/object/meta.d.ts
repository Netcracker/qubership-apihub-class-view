import { ClassObject } from './class';
import { LeafPropertyObject } from './leaf-property';
import { IncludePropertiesGroupRelationObject } from './include-properties-group-relation';
import { PropertyToClassRelationObject } from './property-to-class-reference-relation';
import { PropertiesGroupObject } from './properties-group';

export interface DomainMeta {
    readonly class: unknown;
    readonly leafProperty: unknown;
    readonly propertiesGroup: unknown;
    readonly propertyToClassRelation: unknown;
    readonly includeGroupFromClassRelation: unknown;
}
export interface DefaultDomainMeta extends DomainMeta {
    readonly class: ClassObject<PropertyObject<this>>;
    readonly leafProperty: LeafPropertyObject;
    readonly propertiesGroup: PropertiesGroupObject<this['leafProperty']>;
    readonly propertyToClassRelation: PropertyToClassRelationObject;
    readonly includeGroupFromClassRelation: IncludePropertiesGroupRelationObject;
}
export type RelationObject<Meta extends DomainMeta> = Meta['includeGroupFromClassRelation'] | Meta['propertyToClassRelation'];
export type PropertyObject<Meta extends DomainMeta> = Meta['leafProperty'] | Meta['propertiesGroup'];
