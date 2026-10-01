import type {LegalId} from '../data/legal.ts';
export interface LegalSectionCopy {title:string;paragraphs:readonly string[];pending?:readonly string[];}
export type LegalEditorial=Record<LegalId,{title:string;description:string;sections:Record<string,LegalSectionCopy>}>;
export interface LegalDocument {title:string;description:string;status:'reference'|'published';effectiveDate:string|null;sections:readonly (LegalSectionCopy & {id:string})[];}
export interface LegalUiCopy {eyebrow:string;effectiveDate:string;effectivePending:string;referenceTitle:string;referenceText:string;onThisPage:string;pending:string;contact:string;}
