import { FontWeight, OneLineText, Optional, Pixel } from '../domain/base';

export declare function isDefine<E>(optional: Optional<E>): optional is E;
export declare function createFarFarAwaySvg(container: HTMLElement): SVGSVGElement;
export declare function createSvgTSpanElement(rootElement: SVGSVGElement, fontSize: Pixel, fontWeight: FontWeight, text: OneLineText): SVGTSpanElement;
export declare function createSvgTextElement(rootElement: SVGSVGElement): SVGTextElement;
