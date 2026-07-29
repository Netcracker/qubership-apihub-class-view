import { ELK } from 'elkjs';
import { LayoutGraph, LayoutGraphMeta } from './layout-graph-definition';

export declare function createLayoutGraph<Meta extends LayoutGraphMeta>(elk: ELK): LayoutGraph<Meta>;
