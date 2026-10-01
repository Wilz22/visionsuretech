export function resolvePrefill(search:string,options:{value:string;code?:string}[]):string|null {
 const params=new URLSearchParams(search);
 const product=params.get('product');const legacy=params.get('system');
 if(!product&&!legacy)return null;
 return options.find(item=>product?item.value===product:item.code===legacy)?.value??'';
}
