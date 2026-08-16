import { EdgePath, LayoutGraphMeta, LocatableEdge, LocatableLabel, LocatableNode, LocatablePort } from '../../../../graph/common/layout-graph-definition';
import { D3DatumRenderer } from '../../../../graph/common/d3-layout-graph-component-definitions';

export declare const DEFAULT_RENDERER: Required<D3DatumRenderer<LayoutGraphMeta, any>>;
export declare const DEFAULT_NODE_RENDERER: Required<D3DatumRenderer<LayoutGraphMeta, LocatableNode<unknown>>>;
export declare function toSvgPathArray(points: EdgePath): string;
export declare const DEFAULT_EDGE_RENDERER: Required<D3DatumRenderer<LayoutGraphMeta, LocatableEdge<unknown>>>;
export declare const DEFAULT_LABEL_RENDERER: Required<D3DatumRenderer<LayoutGraphMeta, LocatableLabel<unknown>>>;
export declare const DEFAULT_PORT_RENDERER: Required<D3DatumRenderer<LayoutGraphMeta, LocatablePort<unknown>>>;
