import type {CollectionEntry} from 'astro:content';
import type {Industry} from '../data/industries.ts';
import {categoryDefinitions,type ProductCategoryId} from '../data/catalogCategories.ts';
import {componentKinds} from '../data/componentKinds.ts';
import type {Messages} from '../i18n/types.ts';
import {categoryUrl,productUrl,industryUrl} from './routes.ts';
import {routes} from '../data/company.ts';
type Product=CollectionEntry<'products'>;
type ResolveHref=(href:string)=>string;
export function buildCategoryLinks(messages:Messages,resolveHref:ResolveHref=href=>href) {
 return categoryDefinitions.map(definition=>{
  const copy=messages.catalogCategories[definition.id];
  const name=messages.navigation.labels[definition.id];
  if(!name||!copy?.title||!copy.description)throw new Error(`Missing category translation: ${definition.id}`);
  return {...definition,...copy,name,href:resolveHref(categoryUrl(definition.id))};
 });
}
export function buildCategoryListing(id:ProductCategoryId,all:Product[],industries:Industry[],messages:Messages,resolveHref:ResolveHref=href=>href) {
 const category=buildCategoryLinks(messages,resolveHref).find(item=>item.id===id);
 if(!category)throw new Error(`Unknown product category: ${id}`);
 const products=all.filter(product=>product.data.category===id);
 const components=category.mode==='systems'?[]:all.flatMap(product=>product.data.components.filter(component=>{
  if(category.mode==='accessories')return component.availability!=='included';
  const kind=componentKinds[component.code];
  if(!kind)throw new Error(`Missing component classification: ${component.code}`);
  return kind==='camera'||kind==='monitor';
 }).map(component=>({...component,product,href:resolveHref(productUrl(product.data))})));
 const relatedIndustries=[...new Map(products.flatMap(product=>industries.filter(industry=>industry.solutionMatches.some(match=>match.systemCode===product.data.systemCode))).map(industry=>[industry.id,industry])).values()].map(industry=>({...industry,href:resolveHref(industryUrl(industry.id))}));
 return {category,products,components,relatedIndustries,decisionHelp:id==='multi-camera-systems'?messages.decisionHelp.multiCamera:messages.decisionHelp.general,
  resourcesHref:resolveHref(routes.resources),quoteHref:resolveHref(routes.quote),
  crumbs:[{label:messages.navigation.labels.home,href:resolveHref(routes.home)},{label:messages.navigation.labels.products,href:resolveHref(routes.products)},{label:category.name}],
 };
}
export type CategoryListingModel=ReturnType<typeof buildCategoryListing>;
export type CategoryLink=ReturnType<typeof buildCategoryLinks>[number];
export function buildIndustryLinks(industries:Industry[],resolveHref:ResolveHref=href=>href) {
 return industries.map(industry=>({...industry,href:resolveHref(industryUrl(industry.id))}));
}
export type IndustryLink=ReturnType<typeof buildIndustryLinks>[number];
