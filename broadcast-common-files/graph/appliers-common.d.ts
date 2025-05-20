import { DirtyState } from './common/dirty-state';
import { ModificationAppliers } from './common/graph-definition';

export type UpdateDirtyState = (value: DirtyState) => void;
export type DirtyStateModificationAppliersFactory<View> = (update: UpdateDirtyState) => ModificationAppliers<unknown, unknown, View>;
