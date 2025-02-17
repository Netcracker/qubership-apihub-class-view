import { ViewMeta, VirtualRelation } from './view-definition';
import { D3DatumRendererFactory } from './common/d3-layout-graph-component-definitions';

export declare const EDGE_RENDERER_FACTORY: D3DatumRendererFactory<ViewMeta, ViewMeta['edge']>;
export declare const HIGHLIGHTED_RELATION_EDGE_RENDERER_FACTORY: D3DatumRendererFactory<ViewMeta, VirtualRelation>;
