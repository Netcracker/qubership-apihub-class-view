import { LeafPropertyView, ViewMeta } from '../../../graph/view-definition';
import { DirtyStateModificationAppliersFactory } from '../../../graph/appliers-common';
import { LabelViewModificationAppliers, PortViewModificationAppliers } from '../../../graph/common/layout-graph-definition';
import { TextService } from '../../../graph/common/text-service';

export declare const leafPropertyLabelDirtyStatusApplierFactory: DirtyStateModificationAppliersFactory<LeafPropertyView>;
export declare const leafPropertyPortDirtyStatusApplierFactory: DirtyStateModificationAppliersFactory<LeafPropertyView>;
export declare const leafPropertyLabelSizeAndLocationApplierFactory: () => LabelViewModificationAppliers<ViewMeta, LeafPropertyView>;
export declare const leafPropertyPortSizeAndLocationApplierFactory: () => PortViewModificationAppliers<ViewMeta, LeafPropertyView>;
export declare const leafPropertyLabelCropApplierFactory: (textService: TextService) => LabelViewModificationAppliers<ViewMeta, LeafPropertyView>;
