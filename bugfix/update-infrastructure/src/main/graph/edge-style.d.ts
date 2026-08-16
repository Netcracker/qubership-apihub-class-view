import { ViewMeta, VirtualRelation } from '../../../graph/view-definition';
import { D3DatumRendererFactory } from '../../../graph/common/d3-layout-graph-component-definitions';

export declare const EDGE_RENDERER_FACTORY: D3DatumRendererFactory<ViewMeta, ViewMeta['edge']>;
export declare const HIGHLIGHTED_RELATION_EDGE_RENDERER_FACTORY: D3DatumRendererFactory<ViewMeta, VirtualRelation>;
