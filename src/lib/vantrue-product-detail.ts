import {vantrueN5s} from '../data/vantrueN5s.ts';
import {vantrueS1ProMax} from '../data/vantrueS1ProMax.ts';
import {vantrueP2} from '../data/vantrueP2.ts';
import {vantrueE360Ace} from '../data/vantrueE360Ace.ts';
import {vantrueS1Pro} from '../data/vantrueS1Pro.ts';
import type {VantrueProductCopy} from '../i18n/vantrue-product-types.ts';
const products=[vantrueN5s,vantrueS1ProMax,vantrueP2,vantrueE360Ace,vantrueS1Pro] as const;
export function resolveVantrueProduct(sku:string,copy:VantrueProductCopy|undefined) {
  const data=products.find(product=>product.sku===sku);
  if(!data)return null;
  if(!copy)throw new Error('Missing full product content: '+sku);
  const label=(map:Record<string,string>,id:string)=>{
    if(!map[id])throw new Error('Missing product label: '+sku+'/'+id);
    return map[id];
  };
  const image=(value:{id:string;src:string;width:number;height:number})=>({...value,alt:label(copy.photoAlts,value.id)});
  return {
    sku:data.sku,brand:data.brand,manufacturerModel:data.manufacturerModel,
    copy,
    gallery:data.gallery.map(image),packageImage:data.packageImage?image(data.packageImage):null,
    blocks:data.blocks.map(block=>({id:block.id,title:label(Object.fromEntries(Object.entries(copy.blocks).map(([id,value])=>[id,value.title])),block.id),text:label(Object.fromEntries(Object.entries(copy.blocks).map(([id,value])=>[id,value.text])),block.id),caption:copy.blocks[block.id]?.caption,images:block.images.map(image)})),
    specifications:data.specifications.map(spec=>({id:spec.id,label:label(copy.specLabels,spec.id),value:spec.value})),
    components:data.components.map(id=>({id,label:label(copy.componentLabels,id)})),
    optional:data.optional.map(id=>({id,label:label(copy.optionalLabels,id)})),
  };
}
export type VantrueProduct=NonNullable<ReturnType<typeof resolveVantrueProduct>>;
