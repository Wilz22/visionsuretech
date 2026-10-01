import type {productCategoryIds} from '../data/catalogCategories.ts';
export type HomeCategoryId = typeof productCategoryIds[number];
export type EquipmentId = 'cranes' | 'construction' | 'trucks-fleets' | 'mining' | 'ports' | 'agriculture';
interface HeadingCopy { title: string; description: string; }
interface LinkCopy { label: string; }
export interface HomeCopy {
  meta: HeadingCopy;
  hero: { description:string; title: readonly string[]; eyebrow:string; primaryCta:LinkCopy; secondaryCta:LinkCopy; points:readonly string[]; imageAlt:string; reference:string; technology:string; technologies:readonly string[] };
  trustBar: {label:string;description:string;operationTypes:readonly string[]};
  about: {eyebrow:string;title:string;paragraphs:readonly string[];points:readonly string[];cta:LinkCopy};
  solutions: HeadingCopy & {eyebrow:string;cta:LinkCopy};
  whyVisionSure: HeadingCopy & {eyebrow:string;operationLabel:string;benefits:readonly {title:string;description:string}[]};
  equipment: HeadingCopy & {labels:Record<EquipmentId,string>};
  categories: HeadingCopy & {imageAlt:string;pending:string;};
  dashCams: HeadingCopy & {eyebrow:string;compare:string;assessment:string};
  projects: {eyebrow:string;title:readonly string[];explore:string;notice:string};
  faq: HeadingCopy & {eyebrow:string;explore:string};
}
export interface EquipmentLink { id:EquipmentId;label:string;icon:string;href:string; }
export interface HomeCategory {id:HomeCategoryId;name:string;description:string;image:string|null;href:string;}
