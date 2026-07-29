import { CreateApplier, GraphMerger, GraphMergerSession, GraphMeta, MergeResult, RemoveApplier, UpdateApplier } from './graph-definition';
import { Optional } from '../../domain/base';

export type Comparator<Key> = (one: Key, another: Key) => number;
export declare class GraphMergerImpl<Meta extends GraphMeta> implements GraphMerger<Meta> {
    private readonly _comparator;
    constructor(_comparator: Comparator<Meta['key']>);
    private _graph;
    createEditSession(source: Meta['graph'] | MergeResult<Meta>): GraphMergerSession<Meta>;
}
interface Merger {
    commitConstructiveChanges(): void;
    commitDestructiveChanges(): void;
    processConstructiveChanges(): void;
    processDestructiveChanges(): void;
}
declare abstract class AbstractItemInfo<Meta extends GraphMeta, UserObject, Item> {
    readonly key: Meta['key'];
    readonly userObject: UserObject;
    readonly createApplier: Optional<CreateApplier<Meta['graph'], Item, UserObject>>;
    readonly updateApplier: Optional<UpdateApplier<Meta['graph'], Item, UserObject>>;
    readonly removeApplier: Optional<RemoveApplier<Meta['graph'], Item, UserObject>>;
    protected constructor(key: Meta['key'], userObject: UserObject, createApplier: Optional<CreateApplier<Meta['graph'], Item, UserObject>>, updateApplier: Optional<UpdateApplier<Meta['graph'], Item, UserObject>>, removeApplier: Optional<RemoveApplier<Meta['graph'], Item, UserObject>>);
    applyCreate(graph: Meta['graph'], item: Item): void;
    applyUpdate(graph: Meta['graph'], item: Item, oldUserObject: UserObject): void;
    applyRemove(graph: Meta['graph'], item: Item): void;
}
interface Association<ItemInfo, Item> {
    readonly info: ItemInfo;
    readonly item: Item;
}
export declare abstract class AbstractMerger<Meta extends GraphMeta, Item, ItemInfo extends AbstractItemInfo<Meta, unknown, Item>> implements Merger {
    private readonly _comparator;
    protected readonly graph: Meta['graph'];
    protected readonly previousGeneration: Map<Meta['key'], Association<AbstractItemInfo<Meta, unknown, Meta['node'] | Meta['edge'] | Meta['port'] | Meta['label']>, Meta['node'] | Meta['edge'] | Meta['port'] | Meta['label']> | Association<ItemInfo, Item>>;
    protected readonly currentGeneration: Map<Meta['key'], Association<AbstractItemInfo<Meta, unknown, Meta['node'] | Meta['edge'] | Meta['port'] | Meta['label']>, Meta['node'] | Meta['edge'] | Meta['port'] | Meta['label']> | Association<ItemInfo, Item>>;
    private readonly create;
    private readonly update;
    private readonly delete;
    private readonly modelInfoIndex;
    constructor(_comparator: Comparator<Meta['key']>, graph: Meta['graph'], previousGeneration: Map<Meta['key'], Association<AbstractItemInfo<Meta, unknown, Meta['node'] | Meta['edge'] | Meta['port'] | Meta['label']>, Meta['node'] | Meta['edge'] | Meta['port'] | Meta['label']> | Association<ItemInfo, Item>>, currentGeneration: Map<Meta['key'], Association<AbstractItemInfo<Meta, unknown, Meta['node'] | Meta['edge'] | Meta['port'] | Meta['label']>, Meta['node'] | Meta['edge'] | Meta['port'] | Meta['label']> | Association<ItemInfo, Item>>);
    commitConstructiveChanges(): void;
    commitDestructiveChanges(): void;
    processConstructiveChanges(): void;
    processDestructiveChanges(): void;
    protected resolveCurrentGenerationAssociation(key: Meta['key']): Optional<Association<AbstractItemInfo<Meta, unknown, Meta['node'] | Meta['edge'] | Meta['port'] | Meta['label']>, Meta['node'] | Meta['edge'] | Meta['port'] | Meta['label']> | Association<ItemInfo, Item>>;
    protected addInfo(key: Meta['key'], modelInfo: ItemInfo): void;
    protected abstract createItem(newItemInfo: ItemInfo): Item;
    protected abstract updateItem(newItemInfo: ItemInfo, oldItemInfo: ItemInfo, oldItem: Item): Item;
    protected abstract removeItem(oldItem: Item): void;
    protected abstract selfInfoConstructor(): Object['constructor'];
    isAssociationCreatedByMe(association: Association<AbstractItemInfo<Meta, unknown, Meta['node'] | Meta['edge'] | Meta['port'] | Meta['label']>, Meta['node'] | Meta['edge'] | Meta['port'] | Meta['label']> | Association<ItemInfo, Item>): association is Association<ItemInfo, Item>;
    private forEachInfo;
}
export {};
