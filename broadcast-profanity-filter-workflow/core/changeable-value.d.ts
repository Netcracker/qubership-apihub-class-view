/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export interface ChangeableValue<Value> {
    readonly value: Value;
    readonly dirty: boolean;
    readonly lastAppliedValue: Value;
    changeValue(newValue: Value): boolean;
    valueApplied(): void;
}
declare abstract class AbstractChangeableValue<Value> implements ChangeableValue<Value> {
    private _dirty;
    private _value;
    private _lastAppliedValue;
    protected constructor(initialValue: Value);
    get dirty(): boolean;
    get value(): Value;
    get lastAppliedValue(): Value;
    changeValue(newValue: Value): boolean;
    protected abstract valuesEquals(newValue: Value, oldValue: Value): boolean;
    valueApplied(): void;
    cancel(): void;
}
export declare class AlwaysUniqueChangeableValue<Value> extends AbstractChangeableValue<Value> {
    constructor(initialValue: Value);
    protected valuesEquals(): boolean;
}
export declare class SimpleChangeableValue<Value> extends AbstractChangeableValue<Value> {
    constructor(initialValue: Value);
    protected valuesEquals(newValue: Value, oldValue: Value): boolean;
}
export declare class CustomEqualityChangeableValue<Value> extends AbstractChangeableValue<Value> {
    private readonly _equalsFunction;
    constructor(initialValue: Value, equalsFunction: (newValue: Value, oldValue: Value) => boolean);
    protected valuesEquals(newValue: Value, oldValue: Value): boolean;
}
export declare function applyCombinedLatest<A, B>(a: ChangeableValue<A>, b: ChangeableValue<B>, apply: (a: A, b: B) => void): boolean;
export {};
