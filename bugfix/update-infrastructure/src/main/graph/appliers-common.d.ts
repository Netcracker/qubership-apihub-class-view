import { DirtyState } from '../../../graph/common/dirty-state';
import { ModificationAppliers } from '../../../graph/common/graph-definition';

export type UpdateDirtyState = (value: DirtyState) => void;
export type DirtyStateModificationAppliersFactory<View> = (update: UpdateDirtyState) => ModificationAppliers<unknown, unknown, View>;
