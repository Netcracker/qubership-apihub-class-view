import { Selection, ZoomTransform } from 'd3';
import { HasGraphItemKey, LayoutGraphMeta } from './layout-graph-definition';
import { D3DatumRenderer, Layer, LayerConfig, RendererContext } from './d3-layout-graph-component-definitions';

export declare const ATTR_ID = "data-id";
export declare const ATTR_LAYER = "data-layer";
export declare class PlainLayerImpl<Meta extends LayoutGraphMeta, Datum extends HasGraphItemKey> implements Layer<Datum> {
    private readonly _invalidate;
    private readonly _root;
    private readonly _previousRendererHolder;
    private readonly _id;
    private readonly _rendererFactory;
    private readonly _data;
    private _dirty;
    constructor(svg: Selection<SVGSVGElement, undefined, HTMLElement, undefined>, installRenderer: (renderer: Required<D3DatumRenderer<Meta, Datum>>) => void, config: LayerConfig<Meta, Datum>, _invalidate: () => void);
    get dirty(): boolean;
    add(datum: Datum): void;
    remove(datum: Datum): void;
    set(data: Datum[]): void;
    has(datum: Datum): boolean;
    set transform(value: ZoomTransform);
    redraw(context: RendererContext<Meta>): void;
}
