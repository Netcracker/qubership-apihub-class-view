import { ViewCallback } from './view-callback';
import { ContentLike } from '../domain/like/content';
import { NavigableLike, SelectableLike } from '../domain/like/all';
import { Duration, Optional, Pixel, Point, Zoom } from '../domain/base';
import { NavigateOptions } from '../component/class-view-api';

export interface DeferredNavigate {
    readonly objects: NavigableLike[];
    readonly options: NavigateOptions;
}
export interface DeferredOperations {
    readonly navigate: Optional<DeferredNavigate>;
}
export interface ApplyChangesOptions {
    readonly animationDuration: Duration;
}
export declare class GraphView {
    private readonly _graphContainer;
    private readonly _viewCallback;
    private readonly _graphSource;
    private readonly _selection;
    private readonly _zoom;
    private readonly _viewportCenter;
    private readonly _graphBuilder;
    private readonly _mutableGraph;
    private readonly _graphComponent;
    private readonly _highlightedRelationsLayer;
    private readonly _tooltipLayer;
    private _lastBuildGraphResult;
    private _ignoreViewportChangeEvent;
    private _deferredOperations;
    constructor(_graphContainer: HTMLElement, _viewCallback: ViewCallback);
    set graphSource(content: ContentLike);
    set selection(selection: SelectableLike[]);
    set viewportCenter(center: Point<Pixel>);
    set zoom(zoom: Zoom);
    set deferredOperations(deferred: DeferredOperations);
    private buildGraph;
    get dirty(): boolean;
    applyChanges({ animationDuration }: ApplyChangesOptions): Promise<void>;
    private evaluateTargetViewport;
    private buildHighlightedRelations;
}
