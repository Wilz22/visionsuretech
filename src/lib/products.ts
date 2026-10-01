import { getCollection } from 'astro:content';
import {defaultLocale,type Locale} from '../i18n/config';
import {productDefinitions} from '../data/productDefinitions';

export async function getPublishedProducts(locale:Locale=defaultLocale) {
  const solutions = (await getCollection('products', ({ data }) => !data.draft && data.locale===locale))
    .sort((a, b) => a.data.order - b.data.order);

  for (const field of ['slug', 'systemCode', 'order'] as const) {
    const values = solutions.map(({ data }) => data[field]);
    if (new Set(values).size !== values.length) {
      throw new Error(`Published solutions must have unique ${field} values.`);
    }
  }
  for(const definition of productDefinitions.filter(product=>!product.draft)) {
    if(!solutions.some(product=>product.data.systemCode===definition.systemCode)) {
      throw new Error(`Missing product translation: ${locale}/${definition.systemCode}`);
    }
  }
  return solutions;
}
