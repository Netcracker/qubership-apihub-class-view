import { Optional } from '../base';
import { DefaultDomainMeta, DomainMeta, RelationObject } from './meta';

export interface ContentObject<Meta extends DomainMeta = DefaultDomainMeta> {
    readonly classes?: Optional<Meta['class'][]>;
    readonly relations?: Optional<RelationObject<Meta>[]>;
}
