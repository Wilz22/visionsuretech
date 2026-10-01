import {glossaryIds} from '../data/glossary.ts';
import {routes} from '../data/company.ts';
import type {Messages} from '../i18n/types.ts';
import type {ResourceId} from '../i18n/page-types.ts';
const resourceIds:readonly ResourceId[]=['glossary','projects','faq'];
export function buildResourceLinks(messages:Messages,resolveHref:(href:string)=>string=href=>href) {
 return resourceIds.map(id=>{
  const copy=messages.resources.cards[id];
  if(!copy?.title||!copy.text)throw new Error(`Missing resource translation: ${id}`);
  return {id,...copy,href:resolveHref(routes[id])};
 });
}
export type ResourceLink=ReturnType<typeof buildResourceLinks>[number];

export function buildGlossaryTerms(messages:Messages) {
 return glossaryIds.map(id=>{
  const copy=messages.glossary.terms[id];
  if(!copy?.title||!copy.text)throw new Error(`Missing glossary translation: ${id}`);
  return {id,label:id.toUpperCase(),...copy};
 });
}
export type GlossaryTerm=ReturnType<typeof buildGlossaryTerms>[number];
export function buildNotFoundLinks(messages:Messages,resolveHref:(href:string)=>string=href=>href) {
 return (['industries','faq','quote'] as const).map(id=>({id,...messages.notFound.cards[id],href:resolveHref(routes[id])}));
}
