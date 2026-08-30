import { Selection } from 'd3';
import { Pixel, Point } from '../../domain';

export interface SvgResourceDefiner {
    addDefinition(name: PropertyKey, newDef: SVGElement | HTMLElement): void;
}
export interface SvgResourceReader {
    resolveDefinition(name: PropertyKey): SVGElement['id'];
    resolveAbsoluteJointPointsMask(): SVGElement['id'];
}
export declare class SvgResourceManager implements SvgResourceDefiner, SvgResourceReader {
    private readonly _defs;
    private readonly _idGenerator;
    private readonly _association;
    private readonly _absoluteJoinPointsMask;
    constructor(svg: Selection<SVGSVGElement, undefined, HTMLElement, undefined>);
    addDefinition(name: PropertyKey, newDef: SVGElement): void;
    resolveDefinition(name: PropertyKey): SVGElement['id'];
    resolveAbsoluteJointPointsMask(): SVGElement['id'];
    setAbsoluteJointPointsMask(joinPoints: Point<Pixel>[], radius: Pixel): void;
}
