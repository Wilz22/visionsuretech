import type {IndustryId} from '../data/industryDefinitions.ts';

export interface IndustryCopy {
  title:string;
  label:string;
  description:string;
  overview:string;
  needs:readonly string[];
  reasons:Readonly<Record<string,string>>;
}
export type IndustryEditorial = Record<IndustryId,IndustryCopy>;
