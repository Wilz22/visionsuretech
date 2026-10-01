export const productUrl=(data:{category:string;slug:string})=>`/products/${data.category}/${data.slug}/`;
export const categoryUrl=(id:string)=>`/products/${id}/`;
export const industryUrl=(id:string)=>`/solutions/${id}/`;
export const quoteUrl=(slug?:string)=>slug?`/quote/?product=${encodeURIComponent(slug)}`:'/quote/';
export const projectUrl=(slug:string)=>`/projects/${slug}/`;
