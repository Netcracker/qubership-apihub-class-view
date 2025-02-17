import { PropertiesGroupView, ViewMeta } from './view-definition';
import { DirtyStateModificationAppliersFactory } from './appliers-common';
import { LabelViewModificationAppliers, PortViewModificationAppliers } from './common/layout-graph-definition';
import { TextService } from './common/text-service';

export declare const propertiesGroupLabelDirtyStatusApplierFactory: DirtyStateModificationAppliersFactory<PropertiesGroupView>;
export declare const propertiesGroupPortDirtyStatusApplierFactory: DirtyStateModificationAppliersFactory<PropertiesGroupView>;
export declare const propertiesGroupLabelSizeAndPositionApplierFactory: () => LabelViewModificationAppliers<ViewMeta, PropertiesGroupView>;
export declare const propertiesGroupPortSizeAndLocationApplierFactory: () => PortViewModificationAppliers<ViewMeta, PropertiesGroupView>;
export declare const propertiesGroupLabelCropApplierFactory: (textService: TextService) => LabelViewModificationAppliers<ViewMeta, PropertiesGroupView>;
