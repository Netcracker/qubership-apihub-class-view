import { OneLineText, Pixel, Point, Size } from '../../domain/base';
import { GraphMeta, IGraph, ModificationAppliers } from './graph-definition';

export type GraphItemKey = string;
export type EdgePath = Point<Pixel>[];
export interface LayoutGraphMeta extends GraphMeta {
    readonly key: GraphItemKey;
    readonly graph: LayoutGraph<this>;
    readonly node: LocatableNode<unknown>;
    readonly edge: LocatableEdge<unknown>;
    readonly port: LocatablePort<unknown>;
    readonly label: LocatableLabel<unknown>;
}
export interface LayoutGraph<Meta extends GraphMeta> extends IGraph<Meta> {
    getNodeSize(node: Meta['node']): Size<Pixel>;
    setNodeSize(node: Meta['node'], size: Size<Pixel>): void;
    getNodeCenterRelativeToParentNodeCenter(node: Meta['node']): Point<Pixel>;
    setNodeCenterRelativeToParentNodeCenter(node: Meta['node'], center: Point<Pixel>): void;
    getAbsoluteNodeCenter(node: Meta['node']): Point<Pixel>;
    getEdgePathRelativeToParentNodeCenter(edge: Meta['edge']): EdgePath;
    getAbsoluteEdgePath(edge: Meta['edge']): EdgePath;
    getLabelText(label: Meta['label']): OneLineText;
    setLabelText(label: Meta['label'], text: OneLineText): void;
    getLabelSize(label: Meta['label']): Size<Pixel>;
    setLabelSize(label: Meta['label'], size: Size<Pixel>): void;
    getLabelCenterRelativeToNodeCenter(label: Meta['label']): Point<Pixel>;
    setLabelCenterRelativeToNodeCenter(label: Meta['label'], center: Point<Pixel>): void;
    getAbsoluteLabelCenter(label: Meta['label']): Point<Pixel>;
    getPortSize(port: Meta['port']): Size<Pixel>;
    setPortSize(port: Meta['port'], size: Size<Pixel>): void;
    getPortCenterRelativeToNodeCenter(port: Meta['port']): Point<Pixel>;
    setPortCenterRelativeToNodeCenter(port: Meta['port'], center: Point<Pixel>): void;
    getAbsolutePortCenter(port: Meta['port']): Point<Pixel>;
    doLayout(): Promise<void>;
    dump(): void;
}
export interface HasGraphItemKey {
    readonly id: GraphItemKey;
}
export interface LocatableGraphItem<UserObject> extends HasGraphItemKey {
    readonly userObject: UserObject;
}
export interface LocatableNode<UserObject> extends LocatableGraphItem<UserObject> {
    readonly selfCenterRelativeToParentNodeCenter: Point<Pixel>;
    readonly size: Size<Pixel>;
}
export interface LocatableEdge<UserObject> extends LocatableGraphItem<UserObject> {
    readonly selfPathRelativeToParentNodeCenter: EdgePath;
}
export interface LocatablePort<UserObject> extends LocatableGraphItem<UserObject> {
    readonly selfCenterRelativeToNodeCenter: Point<Pixel>;
    readonly size: Size<Pixel>;
}
export interface LocatableLabel<UserObject> extends LocatableGraphItem<UserObject> {
    readonly selfCenterRelativeToNodeCenter: Point<Pixel>;
    readonly size: Size<Pixel>;
    readonly labelText: OneLineText;
}
export type NodeViewModificationAppliers<Meta extends GraphMeta, View> = ModificationAppliers<Meta['graph'], Extract<Meta['node'], LocatableNode<View>>, View>;
export type EdgeViewModificationAppliers<Meta extends GraphMeta, View> = ModificationAppliers<Meta['graph'], Extract<Meta['edge'], LocatableEdge<View>>, View>;
export type PortViewModificationAppliers<Meta extends GraphMeta, View> = ModificationAppliers<Meta['graph'], Extract<Meta['port'], LocatablePort<View>>, View>;
export type LabelViewModificationAppliers<Meta extends GraphMeta, View> = ModificationAppliers<Meta['graph'], Extract<Meta['label'], LocatableLabel<View>>, View>;
