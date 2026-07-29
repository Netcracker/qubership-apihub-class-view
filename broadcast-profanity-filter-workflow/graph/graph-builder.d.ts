import { ContentLike } from '../domain/like/content';
import { DirtyState } from './common/dirty-state';
import { Integer, Optional } from '../domain/base';
import { DomainLike } from '../domain/like/all';
import { DomainGraphItem, ViewMeta } from './view-definition';
import { TextService } from './common/text-service';

export declare function resolveGraphItems<Meta extends ViewMeta>(br: BuildResult<Meta>, domainLikes: DomainLike[]): DomainGraphItem<Meta>[];
export interface BuildResult<Meta extends ViewMeta> {
    readonly dirtyState: DirtyState;
    readonly createdCount: Integer;
    readonly updatedCount: Integer;
    readonly removedCount: Integer;
    resolveGraphItem(like: DomainLike): DomainGraphItem<Meta>[];
}
export interface GraphBuilder<Meta extends ViewMeta> {
    buildGraph(content: ContentLike): BuildResult<Meta>;
}
export declare class GraphBuilderImpl<Meta extends ViewMeta> implements GraphBuilder<Meta> {
    private readonly _graph;
    private readonly _textService;
    private readonly _merger;
    private readonly _classNodeModificationAppliers;
    private readonly _classPortModificationAppliers;
    private readonly _classLabelModificationAppliers;
    private readonly _leafPropertyLabelModificationAppliers;
    private readonly _leafPropertyPortModificationAppliers;
    private readonly _propertiesGroupLabelModificationAppliers;
    private readonly _propertiesGroupPortModificationAppliers;
    private readonly _includeModificationAppliers;
    private readonly _referenceModificationAppliers;
    private _lastMergeResult;
    private _lastDirtyState;
    private _lastCreatedCount;
    private _lastUpdatedCount;
    private _lastRemovedCount;
    constructor(_graph: Meta['graph'], _textService: TextService);
    buildGraph(content: ContentLike): BuildResult<Meta>;
    private buildClass;
    private resolveConnectedRelationsPaths;
    private manhattanPath;
    private buildProperty;
    private buildRelation;
    private classGraphKeyNode;
    private classGraphKeyLabel;
    private classGraphKeyPort;
    private leafPropertyGraphKeyLabel;
    private leafPropertyGraphKeyPort;
    private propertiesGroupGraphKeyLabel;
    private propertiesGroupGraphKeyPort;
    private propertyToClassGraphKeyEdge;
    private includePropertiesGroupGraphKeyEdge;
    static notNullArray<T>(...args: Optional<T>[]): T[];
}
