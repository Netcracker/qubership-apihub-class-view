import { LeafPropertyView, ViewMeta } from './view-definition';
import { DirtyStateModificationAppliersFactory } from './appliers-common';
import { LabelViewModificationAppliers, PortViewModificationAppliers } from './common/layout-graph-definition';
import { TextService } from './common/text-service';

export declare const leafPropertyLabelDirtyStatusApplierFactory: DirtyStateModificationAppliersFactory<LeafPropertyView>;
export declare const leafPropertyPortDirtyStatusApplierFactory: DirtyStateModificationAppliersFactory<LeafPropertyView>;
export declare const leafPropertyLabelSizeAndLocationApplierFactory: () => LabelViewModificationAppliers<ViewMeta, LeafPropertyView>;
export declare const leafPropertyPortSizeAndLocationApplierFactory: () => PortViewModificationAppliers<ViewMeta, LeafPropertyView>;
export declare const leafPropertyLabelCropApplierFactory: (textService: TextService) => LabelViewModificationAppliers<ViewMeta, LeafPropertyView>;
