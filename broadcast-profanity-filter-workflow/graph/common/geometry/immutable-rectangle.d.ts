import { Length, Point, Size } from '../../../domain/base';

export declare class ImmutableRectangle {
    private readonly _center;
    private readonly _size;
    constructor(center: Point<Length>, size: Size<Length>);
    get width(): Length;
    get height(): Length;
    get centerX(): Length;
    get centerY(): Length;
}
