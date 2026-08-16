import { FontWeight, OneLineText, Optional, Pixel, Ratio } from '../../domain';

interface TextCropRule {
    readonly text: OneLineText;
    readonly fontSize: Pixel;
    readonly fontWeight: FontWeight;
    readonly cropRatio?: Optional<Ratio>;
}
export interface TextService {
    cropOneLineTextHorizontally(totalWidth: Pixel, parts: TextCropRule[], ellipsis?: OneLineText): OneLineText[];
}
export declare class TextServiceImpl implements TextService {
    private readonly _svg;
    constructor(container: HTMLElement);
    cropOneLineTextHorizontally(totalWidth: Pixel, rules: TextCropRule[], ellipsis?: OneLineText): OneLineText[];
    private findCropIndex;
}
export {};
