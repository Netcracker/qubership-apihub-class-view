import { ClassLike } from './class';
import { LeafPropertyLike } from './leaf-property';
import { IncludePropertiesGroupRelationLike } from './include-properties-group-relation';
import { PropertyToClassRelationLike } from './property-to-class-reference-relation';
import { PropertiesGroupLike } from './properties-group';

export type DomainLike = ClassLike | PropertyLike | RelationLike;
export type SelectableLike = DomainLike;
export type NavigableLike = DomainLike;
export type RelationLike = IncludePropertiesGroupRelationLike | PropertyToClassRelationLike;
export type PropertyLike = LeafPropertyLike | PropertiesGroupLike;
