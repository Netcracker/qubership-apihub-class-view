import { ViewMeta } from './view-definition';
import { D3DatumRendererFactory, Layer } from './common/d3-layout-graph-component-definitions';

export declare function createLabelRendererFactory(tooltipLayer: Layer<ViewMeta['label']>): D3DatumRendererFactory<ViewMeta, ViewMeta['label']>;
export declare const TOOLTIP_LABEL_RENDERER_FACTORY: D3DatumRendererFactory<ViewMeta, ViewMeta['label']>;
