import {categoryDefinitions} from '../data/catalogCategories.ts';
import type {Messages} from '../i18n/types.ts';
import type {EquipmentId,EquipmentLink,HomeCategory} from '../i18n/home-types.ts';
import {categoryUrl,industryUrl} from './routes.ts';
const equipment: readonly {id:EquipmentId;icon:string}[] = [
  {id:'cranes',icon:'cranes'}, {id:'construction',icon:'heavy-equipment'}, {id:'trucks-fleets',icon:'trucks-fleets'},
  {id:'mining',icon:'mining'}, {id:'ports',icon:'ports'}, {id:'agriculture',icon:'agriculture'},
];
export function buildHomeLinks(copy:Messages,resolveHref:(href:string)=>string=href=>href) {
  const required=(label:string,id:string)=> {if(!label) throw new Error(`Missing Home translation: ${id}`);return label;};
  return {
    equipment: equipment.map(item=>({...item,label:required(copy.home.equipment.labels[item.id],item.id),href:resolveHref(industryUrl(item.id))})) satisfies EquipmentLink[],
    categories: categoryDefinitions.map(item=>({id:item.id as HomeCategory['id'],image:item.image,name:required(copy.navigation.labels[item.id as HomeCategory['id']],item.id),description:required(copy.catalogCategories[item.id].description,item.id),href:resolveHref(categoryUrl(item.id))})) satisfies HomeCategory[],
  };
}
