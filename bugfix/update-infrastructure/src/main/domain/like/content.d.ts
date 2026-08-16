import { ClassLike } from '../../../../domain/like/class';
import { RelationLike } from '../../../../domain/like/all';

export interface ContentLike {
    readonly classes: ClassLike[];
    readonly relations: RelationLike[];
}
