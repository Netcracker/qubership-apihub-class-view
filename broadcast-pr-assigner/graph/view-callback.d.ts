import { SelectableLike } from '../domain/like/all';
import { Pixel, Point, Zoom } from '../domain/base';

export interface ViewCallback {
    layoutStart(): void;
    layoutFinish(): void;
    selectionChange(selection: SelectableLike[]): void;
    zoomChange(zoom: Zoom): void;
    viewportCenterChange(center: Point<Pixel>): void;
}
