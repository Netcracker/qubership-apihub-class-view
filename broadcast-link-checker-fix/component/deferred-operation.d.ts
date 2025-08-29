import { Optional, OptionalMembers } from '../domain/base';
import { DomainMeta } from '../domain/object/meta';
import { NavigableObject, NavigateOptions } from './class-view-api';

export interface DeferredOperations<Meta extends DomainMeta> {
    navigate: Optional<DeferredNavigate<Meta>>;
}
export interface DeferredNavigate<Meta extends DomainMeta> {
    readonly objects: NavigableObject<Meta>[];
    readonly options: NavigateOptions;
}
export declare class DeferredOperationsManager<Meta extends DomainMeta> {
    private readonly _markDirtyFunction;
    private readonly _operations;
    constructor(_markDirtyFunction: () => void);
    get dirty(): boolean;
    applyChanges(): void;
    scheduleNavigateTo(objects: NavigableObject<Meta>[], options: OptionalMembers<NavigateOptions>): void;
    get deferredOperations(): DeferredOperations<Meta>;
}
export declare function fillNavigateOptionDefaults(optional: OptionalMembers<NavigateOptions>): NavigateOptions;
