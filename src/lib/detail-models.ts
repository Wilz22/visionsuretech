import {glossaryIds} from '../data/glossary.ts';
import type {DashCam} from '../data/dashCams.ts';
import {formatMessage} from '../i18n/format.ts';
import type {CollectionEntry} from 'astro:content';
import type {Industry} from '../data/industries.ts';
import type {Messages} from '../i18n/types.ts';
import {productUrl,categoryUrl,industryUrl,quoteUrl} from './routes.ts';
import {routes} from '../data/company.ts';
import {productCategoryIds} from '../data/catalogCategories.ts';

type Product=CollectionEntry<'products'>;
type ResolveHref=(href:string)=>string;
const identity:ResolveHref=href=>href;
export const buildGlossaryLinks=(resolveHref:ResolveHref=identity)=>Object.fromEntries(glossaryIds.map(id=>[id,{label:id.toUpperCase(),href:resolveHref(`${routes.glossary}#${id}`)}]));

export function buildIndustrialDetail(product:Product,all:Product[],industries:Industry[],messages:Messages,resolveHref:ResolveHref=identity) {
  const {data}=product;
  if(!productCategoryIds.some(id=>id===data.category))throw new Error(`Unknown product category: ${data.category}`);
  const matches=(code:string)=>industries.filter(industry=>industry.solutionMatches.some(match=>match.systemCode===code));
  const applications=matches(data.systemCode);
  const sameCategory=all.filter(item=>item.data.category===data.category&&item.data.systemCode!==data.systemCode);
  const related=(sameCategory.length?sameCategory:all.filter(item=>item.data.systemCode!==data.systemCode&&matches(item.data.systemCode).some(industry=>applications.some(current=>current.id===industry.id)))).slice(0,3);
  return {
    product,images:data.gallery.length?data.gallery:data.image?[data.image]:[],optional:data.components.filter(item=>item.availability==='optional'),
    industries:applications.map(industry=>({...industry,href:resolveHref(industryUrl(industry.id))})),
    related:related.map(product=>({product,href:resolveHref(productUrl(product.data))})),quoteHref:resolveHref(quoteUrl(data.slug)),glossaryLinks:buildGlossaryLinks(resolveHref),
    crumbs:[{label:messages.navigation.labels.home,href:resolveHref(routes.home)},{label:messages.navigation.labels.products,href:resolveHref(routes.products)},{label:messages.navigation.labels[data.category],href:resolveHref(categoryUrl(data.category))},{label:data.systemCode}],
  };
}
export type IndustrialDetailModel=ReturnType<typeof buildIndustrialDetail>;

export function buildIndustryDetail<T extends Industry & {systems:{solution:Product;reason:string}[]}>(industry:T,messages:Messages,resolveHref:ResolveHref=identity) {
  return {
    industry,
    systems:industry.systems.map(item=>({...item,href:resolveHref(productUrl(item.solution.data))})),
    quoteHref:resolveHref(routes.quote),
    crumbs:[{label:messages.navigation.labels.home,href:resolveHref(routes.home)},{label:messages.navigation.labels.industries,href:resolveHref(routes.industries)},{label:industry.title}],
  };
}
export type IndustryDetailModel=ReturnType<typeof buildIndustryDetail>;

export function buildProductSchema(product:Product,site:URL|string,brand:string,href=productUrl(product.data)) {
  const {data}=product;
  return {'@context':'https://schema.org','@type':'Product',name:`${data.title} ${data.systemCode}`,sku:data.systemCode,description:data.summary,brand:{'@type':'Brand',name:brand},url:new URL(href,site).href,...(data.image?{image:new URL(data.image.src,site).href}:{})};
}

export function buildPersonalDetail(model:DashCam,all:DashCam[],messages:Messages,resolveHref:ResolveHref=identity) {
  return {
    model,description:formatMessage(messages.personalDetail.description,{configuration:model.configuration}),
    configurationNotice:formatMessage(messages.personalDetail.configurationNotice,{configuration:model.configuration}),
    quoteHref:resolveHref(quoteUrl(model.slug)),assessmentHref:resolveHref(`/dash-cams/book-assessment/?product=${encodeURIComponent(model.slug)}`),
    related:all.filter(item=>item.slug!==model.slug).map(model=>({model,href:resolveHref(`/dash-cams/${model.slug}/`)})),
    glossaryLinks:buildGlossaryLinks(resolveHref),
    crumbs:[{label:messages.navigation.labels.home,href:resolveHref(routes.home)},{label:messages.navigation.labels.dashCams,href:resolveHref(routes.dashCams)},{label:model.title}],
  };
}
export type PersonalDetailModel=ReturnType<typeof buildPersonalDetail>;
