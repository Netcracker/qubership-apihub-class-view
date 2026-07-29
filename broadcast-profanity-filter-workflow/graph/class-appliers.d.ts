import { ClassView, ViewMeta } from './view-definition';
import { DirtyStateModificationAppliersFactory } from './appliers-common';
import { LabelViewModificationAppliers, NodeViewModificationAppliers, PortViewModificationAppliers } from './common/layout-graph-definition';
import { TextService } from './common/text-service';

export declare const classNodeDirtyStatusApplierFactory: DirtyStateModificationAppliersFactory<ClassView>;
export declare const classLabelDirtyStatusApplierFactory: DirtyStateModificationAppliersFactory<ClassView>;
export declare const classPortDirtyStatusApplierFactory: DirtyStateModificationAppliersFactory<ClassView>;
export declare const classNodeSizeApplierFactory: () => NodeViewModificationAppliers<ViewMeta, ClassView>;
export declare const classLabelSizeAndLocationApplierFactory: () => LabelViewModificationAppliers<ViewMeta, ClassView>;
export declare const classPortSizeAndLocationApplierFactory: () => PortViewModificationAppliers<ViewMeta, ClassView>;
export declare const classLabelCropApplierFactory: (textService: TextService) => LabelViewModificationAppliers<ViewMeta, ClassView>;
