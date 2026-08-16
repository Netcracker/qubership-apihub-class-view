import { ClassLike } from '../../../../domain/like/class';
import { LeafPropertyLike } from '../../../../domain/like/leaf-property';
import { IncludePropertiesGroupRelationLike } from '../../../../domain/like/include-properties-group-relation';
import { PropertyToClassRelationLike } from '../../../../domain/like/property-to-class-reference-relation';
import { PropertiesGroupLike } from '../../../../domain/like/properties-group';

export type DomainLike = ClassLike | PropertyLike | RelationLike;
export type SelectableLike = DomainLike;
export type NavigableLike = DomainLike;
export type RelationLike = IncludePropertiesGroupRelationLike | PropertyToClassRelationLike;
export type PropertyLike = LeafPropertyLike | PropertiesGroupLike;
