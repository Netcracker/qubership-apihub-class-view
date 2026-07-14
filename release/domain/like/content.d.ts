import { ClassLike } from './class';
import { RelationLike } from './all';

export interface ContentLike {
    readonly classes: ClassLike[];
    readonly relations: RelationLike[];
}
