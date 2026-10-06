import {productUrl} from './routes.ts';
import {formatMessage} from '../i18n/index.ts';
import type {QuoteFormCopy} from '../i18n/quote-types.ts';
export interface QuoteOption {value:string;label:string;href:string;code?:string;}
export function buildQuoteOptions(products: readonly {slug:string;category:string;systemCode:string;title:string}[], dashCams: readonly {slug:string;title:string;href?:string;sku?:string}[], copy: QuoteFormCopy): QuoteOption[] {
  return [
    ...products.map(product=>({value:product.slug,code:product.systemCode,label:`${product.systemCode} · ${product.title}`,href:productUrl(product)})),
    ...dashCams.map(model=>({value:model.slug,...(model.sku?{code:model.sku}:{}),label:model.sku?`${model.sku} · ${model.title}`:formatMessage(copy.referenceConfiguration,{title:model.title}),href:model.href??`/dash-cams/${model.slug}/`})),
  ];
}
