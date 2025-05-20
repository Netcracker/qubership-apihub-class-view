import { Color, Optional } from '../domain/base';

export declare function valueOrDefaultForGeneric<T>(value: Optional<T>, defaultValue: () => T): T;
export declare function valueOrDefaultForColor(value: Optional<Color>, defaultValue: () => Color): Color;
export declare function valueOrDefaultForNumber<T extends number>(value: Optional<T>, defaultValue: () => T): T;
export declare function valueOrDefaultForEnumType<T>(value: Optional<T>, allowedValues: T[], defaultValue: () => T): T;
