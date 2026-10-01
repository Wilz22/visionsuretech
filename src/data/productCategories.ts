import {categoryDefinitions} from './catalogCategories.ts';
import {getMessages} from '../i18n/index.ts';
export {productCategoryIds} from './catalogCategories.ts';
const messages=getMessages();
// Transitional English adapter for consumers not yet accepting resolved category props.
export const productCategories=categoryDefinitions.map(item=>({...item,name:messages.navigation.labels[item.id],...messages.catalogCategories[item.id],color:'#2D6C96'}));
export const getProductCategory=(id:string)=>{
 const category=productCategories.find(item=>item.id===id);
 if(!category)throw new Error(`Unknown product category: ${id}`);
 return category;
};
export const solutionCategories=productCategories;
export const getSolutionCategory=getProductCategory;
