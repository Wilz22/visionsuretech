import type {FaqGroupId,FaqId} from '../data/faq.ts';
export interface FaqEditorial {groups:Record<FaqGroupId,{title:string;description:string}>;items:Record<FaqId,{question:string;answer:string}>;}
export interface FaqPageCopy {
 title:string;description:string;eyebrow:string;heading:readonly string[];introduction:string;notice:string;topics:string;
 catalogHeading:string;catalogText:string;catalogLabel:string;relatedSystems:string;systemLabel:string;
}
