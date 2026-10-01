import {faqDefinitions} from '../data/faq.ts';
import type {FaqEditorial,FaqPageCopy} from '../i18n/faq-types.ts';
import {formatMessage} from '../i18n/format.ts';
import {productUrl} from './routes.ts';
interface Product {data:{systemCode:string;slug:string;category:string;title:string}}
export function resolveFaqGroups(editorial:FaqEditorial,products:Product[],copy:FaqPageCopy,resolveHref:(href:string)=>string=href=>href) {
 const byCode=new Map(products.map(product=>[product.data.systemCode,product]));
 return faqDefinitions.map(group=>{
  const groupCopy=editorial.groups[group.id];
  if(!groupCopy?.title||!groupCopy.description)throw new Error(`Missing FAQ group translation: ${group.id}`);
  return {id:group.id,title:groupCopy.title,description:groupCopy.description,items:group.items.map(item=>{
   const definition:{id:string;systemCodes?:readonly string[];featured?:boolean}=item;
   const itemCopy=editorial.items[item.id];
   if(!itemCopy?.question||!itemCopy.answer)throw new Error(`Missing FAQ translation: ${item.id}`);
   const links=(definition.systemCodes??[]).map(code=>{
    const product=byCode.get(code);
    if(!product)throw new Error(`FAQ ${item.id} references unavailable system ${code}`);
    return {href:resolveHref(productUrl(product.data)),label:formatMessage(copy.systemLabel,{model:code,title:product.data.title})};
   });
   return {...definition,question:itemCopy.question,answer:itemCopy.answer,links};
  })};
 });
}
export function buildFaqSchema(groups:ReturnType<typeof resolveFaqGroups>) {
 return {'@context':'https://schema.org','@type':'FAQPage',mainEntity:groups.flatMap(group=>group.items).map(item=>({'@type':'Question',name:item.question,acceptedAnswer:{'@type':'Answer',text:item.answer}}))};
}
