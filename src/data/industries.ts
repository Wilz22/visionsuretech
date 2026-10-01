import {industryEditorial} from '../i18n/locales/en-industries.ts';
import {resolveIndustries} from '../lib/industry-content.ts';

export type Industry = {
  id:string;number:string;title:string;label:string;description:string;overview:string;
  needs:string[];
  solutionMatches:{systemCode:string;reason:string}[];
  gradient:string;orb:string;icon:string;
};

// English adapter for existing consumers during the locale migration.
export const industries:Industry[]=resolveIndustries(industryEditorial);
export const getIndustriesForSystem=(systemCode:string)=>
  industries.filter(industry=>industry.solutionMatches.some(match=>match.systemCode===systemCode));
