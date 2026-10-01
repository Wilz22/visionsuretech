import {productDefinitions} from '../data/productDefinitions.ts';

export interface ProductEditorial {
  locale:string;systemCode:string;title:string;summary:string;cardTags:string[];
  features:string[];specifications:{id:string;label:string}[];
  components:{code:string;description:string}[];applications:string[];notes:string[];
  imageAlt?:string;galleryAlts:string[];specSheetLabel?:string;
  seo:{title:string;description:string};
}
interface Media {src:string;width:number;height:number}
interface ProductDefinition {
  systemCode:string;slug:string;order:number;category:string;catalogClass:string;
  contentStatus:string;draft:boolean;specifications:readonly {id:string;value:string}[];
  components:readonly {code:string;availability:string}[];image?:Media;gallery:readonly Media[];
  specSheet?:{href:string};
}
function exactIds(actual:string[],expected:string[],context:string) {
  if(new Set(actual).size!==actual.length || actual.length!==expected.length || actual.some(id=>!expected.includes(id))) {
    throw new Error(`Invalid editorial identities: ${context}`);
  }
}
export function resolveProductData(copy:ProductEditorial) {
  const definition:ProductDefinition|undefined=productDefinitions.find(product=>product.systemCode===copy.systemCode);
  if(!definition) throw new Error(`Unknown product: ${copy.systemCode}`);
  exactIds(copy.specifications.map(spec=>spec.id),definition.specifications.map(spec=>spec.id),`${copy.systemCode}/specifications`);
  exactIds(copy.components.map(component=>component.code),definition.components.map(component=>component.code),`${copy.systemCode}/components`);
  if(copy.galleryAlts.length!==definition.gallery.length || (definition.image&&!copy.imageAlt)) throw new Error(`Missing product media text: ${copy.systemCode}`);
  const labels=new Map(copy.specifications.map(spec=>[spec.id,spec.label]));
  const descriptions=new Map(copy.components.map(component=>[component.code,component.description]));
  return {
    locale:copy.locale,
    systemCode:definition.systemCode,slug:definition.slug,order:definition.order,
    category:definition.category,catalogClass:definition.catalogClass,
    contentStatus:definition.contentStatus,draft:definition.draft,
    title:copy.title,summary:copy.summary,cardTags:[...copy.cardTags],features:[...copy.features],
    specifications:definition.specifications.map(spec=>({label:labels.get(spec.id)!,value:spec.value})),
    components:definition.components.map(component=>({...component,description:descriptions.get(component.code)!})),
    applications:[...copy.applications],notes:[...copy.notes],seo:{...copy.seo},
    ...(definition.image?{image:{...definition.image,alt:copy.imageAlt!}}:{}),
    gallery:definition.gallery.map((image,index)=>({...image,alt:copy.galleryAlts[index]})),
    ...(definition.specSheet?{specSheet:{...definition.specSheet,...(copy.specSheetLabel?{label:copy.specSheetLabel}:{})}}:{}),
  };
}
