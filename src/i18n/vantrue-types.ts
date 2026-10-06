import type {VantrueSku} from '../data/vantrueDashCamDefinitions';
export interface VantrueCopy {
  models: Record<VantrueSku,{title:string;configuration:string}>;
  retailer: string; title: string; description: string; notice: string;
  frontTitle: string; frontDescription: string; restocking: string; stockNotice: string;
  previewTitle: string; previewText: string; overview: string;
  detailsReady: string;
}
