import type {DashCamId} from '../data/dashCamDefinitions.ts';
export type DashCamEditorial=Record<DashCamId,{title:string;configuration:string}>;
