export interface ContentLayoutCopy {referenceTitle:string;referenceDescription:string;}
interface SectionCopy {title:string;text:string;}
export type ResourceId='glossary'|'projects'|'faq';
export interface ServicesCopy {
 title:string;description:string;installation:SectionCopy;assessment:SectionCopy & {label:string};financing:SectionCopy;
 related:{title:string;pending:string;services:readonly string[]};
}
export interface ResourcesCopy {
 title:string;description:string;cards:Record<ResourceId,SectionCopy>;regulations:SectionCopy;guide:SectionCopy & {label:string};downloads:SectionCopy;
}
export interface AboutCopy {
 title:string;description:string;introTitle:string;historyPending:string;location:SectionCopy;brands:SectionCopy;
 planning:{title:string;steps:readonly string[];label:string};contactTitle:string;
}

export interface ReferencePageCopy {title:string;description:string;sections:readonly {title:string;text:string}[];action:string;}
export interface GlossaryCopy {title:string;description:string;navigationLabel:string;terms:Record<import('../data/glossary.ts').GlossaryId,{title:string;text:string}>;notice:string;}
export interface NotFoundCopy {title:string;description:string;eyebrow:string;heading:readonly string[];text:string;home:string;products:string;navigationLabel:string;cards:Record<'industries'|'faq'|'quote',{title:string;text:string}>;}
