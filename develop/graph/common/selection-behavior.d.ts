import { Selection } from 'd3';

export declare const SELECTION_CHANGE_EVENT_TYPE = "selection";
export type SelectableElementBaseType = Element;
export type ClearSelectionElementBaseType = Element;
export interface DomSelectionBehavior<SelectedElement extends SelectableElementBaseType, ClearSelectionElement extends ClearSelectionElementBaseType, Datum> {
    watch(selection: Selection<SelectedElement, Datum, never, unknown>): void;
    unwatch(selection: Selection<SelectedElement, Datum, never, unknown>): void;
    filter: (this: SelectedElement | ClearSelectionElement, event: MouseEvent, datum: Datum) => boolean;
    selection: Datum[];
    on(type: string, listener: (this: SelectedElement, event: DomSelectionEvent<Datum>, d: Datum) => void): void;
    off(type: string): void;
    isSelected(datum: Datum): boolean;
}
export interface DomSelectionEvent<Datum> {
    selection: Datum[];
}
export default function domElementSelection<SelectedElement extends SelectableElementBaseType, ClearSelectionElement extends ClearSelectionElementBaseType, Datum>(commonContainerArea: Selection<ClearSelectionElement, any, any, any>): DomSelectionBehavior<SelectedElement, ClearSelectionElement, Datum>;
