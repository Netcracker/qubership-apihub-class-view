import { DefaultDomainMeta, DomainMeta } from '../domain/object/meta';
import { ContentObject } from '../domain/object/content';
import { Duration, Insets, OptionalMembers, Pixel, Point, Zoom } from '../domain/base';
import { ContentObjectCustomization } from './content-object-customization';

export type DomainObject<Meta extends DomainMeta = DefaultDomainMeta> = Meta['class'] | Meta['leafProperty'] | Meta['propertiesGroup'] | Meta['propertyToClassRelation'] | Meta['includeGroupFromClassRelation'];
export type SelectableObject<Meta extends DomainMeta = DefaultDomainMeta> = DomainObject<Meta>;
export type NavigableObject<Meta extends DomainMeta = DefaultDomainMeta> = DomainObject<Meta>;
export interface NavigateOptions {
    readonly insets: Insets<Pixel>;
}
export interface ClassViewApi<Meta extends DomainMeta = DefaultDomainMeta> extends ContentObjectCustomization<Meta> {
    content: ContentObject<Meta>;
    selectedObjects: SelectableObject<Meta>[];
    zoom: Zoom;
    viewportCenter: Point<Pixel>;
    animationDuration: Duration;
    navigateTo(objects: NavigableObject<Meta>[], options?: OptionalMembers<NavigateOptions>): void;
    addEventListener<K extends keyof RichHTMLElementEventMap<Meta>>(type: K, listener: (this: HTMLElement, ev: RichHTMLElementEventMap<Meta>[K]) => any, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof RichHTMLElementEventMap<Meta>>(type: K, listener: (this: HTMLElement, ev: RichHTMLElementEventMap<Meta>[K]) => any, options?: boolean | EventListenerOptions): void;
}
export declare const EVENT_UPDATE_START = "update-start";
export declare const EVENT_UPDATE_FINISH = "update-finish";
export declare const EVENT_SELECTION_CHANGE = "objects-select";
export declare const EVENT_LAYOUT_START = "layout-start";
export declare const EVENT_LAYOUT_FINISH = "layout-finish";
export declare const EVENT_ZOOM_CHANGE = "zoom-change";
export declare const EVENT_VIEWPORT_CENTER_CHANGE = "viewport-center-change";
export interface SelectionChangeData<Meta extends DomainMeta = DefaultDomainMeta> {
    readonly newValue: SelectableObject<Meta>[];
    readonly oldValue: SelectableObject<Meta>[];
}
export interface RichHTMLElementEventMap<Meta extends DomainMeta> extends HTMLElementEventMap {
    [EVENT_SELECTION_CHANGE]: CustomEvent<SelectionChangeData<Meta>>;
    [EVENT_UPDATE_START]: CustomEvent<void>;
    [EVENT_UPDATE_FINISH]: CustomEvent<void>;
    [EVENT_LAYOUT_START]: CustomEvent<void>;
    [EVENT_LAYOUT_FINISH]: CustomEvent<void>;
    [EVENT_ZOOM_CHANGE]: CustomEvent<Zoom>;
    [EVENT_VIEWPORT_CENTER_CHANGE]: CustomEvent<Point<Pixel>>;
}
