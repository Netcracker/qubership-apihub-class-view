import { Length, Point, Size } from '../../../domain/base';
import { ImmutableRectangle } from './immutable-rectangle';

export declare class MutableRectangle {
    private minX;
    private minY;
    private maxX;
    private maxY;
    constructor();
    addPoint(point: Point<Length>): this;
    addRectangle(center: Point<Length>, size: Size<Length>): this;
    isFinite(): boolean;
    toImmutable(): ImmutableRectangle;
}
