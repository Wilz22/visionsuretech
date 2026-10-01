import type {CountCopy} from './catalog-types.ts';
export function formatMessage(template: string, values: Record<string, string>): string {
  return template.replace(/\{([a-zA-Z][a-zA-Z0-9]*)\}/g, (_, key: string) => {
    if (!Object.hasOwn(values,key)) throw new Error(`Missing translation parameter: ${key}`);
    return values[key];
  });
}

export function formatCount(count:number,copy:CountCopy,locale:string):string {
  if(!Number.isInteger(count)||count<0)throw new Error('Catalog count must be a non-negative integer.');
  const category=new Intl.PluralRules(locale).select(count);
  return formatMessage(copy[category]??copy.other,{count:new Intl.NumberFormat(locale).format(count)});
}
