import { ContentObject } from '../domain/object/content';
import { ContentLike } from '../domain/like/content';
import { Optional } from '../domain/base';
import { DomainLike } from '../domain/like/all';
import { DomainMeta, PropertyObject } from '../domain/object/meta';
import { DomainObject } from '../component/class-view-api';
import { ClassObject } from '../domain/object/class';

export declare function resolveLikes<Meta extends DomainMeta>(cr: ConvertResult<Meta>, objects: DomainObject<Meta>[]): DomainLike[];
export declare function resolveObjects<Meta extends DomainMeta>(cr: ConvertResult<Meta>, likes: DomainLike[]): DomainObject<Meta>[];
export interface ConvertResult<Meta extends DomainMeta> {
    readonly content: ContentLike;
    resolveObject(like: DomainLike): Optional<DomainObject<Meta>>;
    resolveLike(object: DomainObject<Meta>): Optional<DomainLike>;
    objects: DomainObject<Meta>[];
    likes: DomainLike[];
}
export declare class LikeConverter<Meta extends DomainMeta> {
    private readonly _markDirtyFunction;
    private _classRectangleCornerRadiusFunction;
    private _dirty;
    constructor(_markDirtyFunction: () => void);
    private castToDefaultClassObject;
    private castToDefaultLeafPropertyObject;
    private castToDefaultPropertiesGroupObject;
    private castToDefaultIncludePropertiesGroupRelationObject;
    private castToDefaultPropertyToClassRelationObject;
    private invalidate;
    get dirty(): boolean;
    valueApplied(): void;
    get classRectangleCornerRadiusFunction(): (cl: Meta['class']) => ClassObject<PropertyObject<Meta>>['shape'];
    set classRectangleCornerRadiusFunction(f: (cl: Meta['class']) => ClassObject<PropertyObject<Meta>>['shape']);
    private convertToMutableClassDraft;
    private convertToMutableLeafPropertyDraft;
    private convertToMutablePropertiesGroupDraft;
    private convertToMutableIncludePropertiesGroupRelationDraft;
    private convertToMutablePropertyToClassRelationDraft;
    private propertySeparator;
    private relationSeparator;
    private fillClass;
    private fillLeafProperty;
    private fillPropertiesGroup;
    private fillIncludePropertiesGroupRelation;
    private fillPropertyToClassRelation;
    convert(object: ContentObject<Meta>): ConvertResult<Meta>;
    private createInstanceToKeyFunction;
    private toMap;
}
