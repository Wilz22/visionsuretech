export function matchesCatalogProduct(product:{search:string;catalogClass:string},filters:{query:string;catalogClass:string}):boolean {
  return product.search.toLowerCase().includes(filters.query.trim().toLowerCase())&&(!filters.catalogClass||product.catalogClass===filters.catalogClass);
}

export function matchesCameraChannels(channels:number,selected:string):boolean {
  return !selected||(/^\d+$/.test(selected)&&channels===Number(selected));
}
