import {test} from 'node:test';
import assert from 'node:assert/strict';
import {getMessages} from '../src/i18n/index.ts';
import {buildCategoryLinks,buildCategoryListing,buildIndustryLinks} from '../src/lib/listing-models.ts';
const messages=getMessages();
const product=(code,category,components)=>({data:{systemCode:code,slug:code.toLowerCase(),category,components}});
const industry=(id,codes)=>({id,title:id,solutionMatches:codes.map(systemCode=>({systemCode,reason:'Reference'}))});

test('component listings use stable classification even when descriptions are translated',()=>{
 const current=product('VST-S4901','crane-cameras',[
  {code:'VST-C3574',description:'Cámara con zoom',availability:'included'},
  {code:'VST-M9817',description:'Pantalla inalámbrica',availability:'included'},
  {code:'VST-B4378',description:'Battery camera monitor text',availability:'optional'},
 ]);
 const snapshot=structuredClone(current);
 const model=buildCategoryListing('cameras-monitors',[current],[],messages,href=>`/preview${href}`);
 assert.deepEqual(model.components.map(component=>component.code),['VST-C3574','VST-M9817']);
 assert.equal(model.components[0].product,current);
 assert.equal(model.components[0].href,'/preview/products/crane-cameras/vst-s4901/');
 assert.equal(model.category.mode,'components');
 assert.deepEqual(current,snapshot);
 assert.throws(()=>buildCategoryListing('cameras-monitors',[product('VST-S0001','crane-cameras',[{code:'UNKNOWN',description:'Camera',availability:'included'}])],[],messages),/Missing component classification: UNKNOWN/);
});

test('accessories retain choices, optional statuses and their original system context',()=>{
 const first=product('VST-S4901','crane-cameras',[
  {code:'VST-C3574',description:'Camera',availability:'included'},
  {code:'VST-P6661 / VST-X4657',description:'Zoom control',availability:'choice'},
  {code:'VST-B4378',description:'Battery',availability:'optional'},
 ]);
 const second=product('VST-S4101','multi-camera-systems',[{code:'VST-B4378',description:'Battery in another configuration',availability:'optional'}]);
 const model=buildCategoryListing('accessories',[first,second],[],messages);
 assert.deepEqual(model.components.map(component=>component.availability),['choice','optional','optional']);
 assert.deepEqual(model.components.map(component=>component.product.data.systemCode),['VST-S4901','VST-S4901','VST-S4101']);
 assert.equal(model.products.length,0);
});

test('category copy and URLs resolve independently while application order follows source configurations',()=>{
 const alternate={...messages,catalogCategories:{...messages.catalogCategories,'radar-detection':{title:'Detección de proximidad',description:'Referencia'}},navigation:{...messages.navigation,labels:{...messages.navigation.labels,'radar-detection':'Radar'}}};
 const links=buildCategoryLinks(alternate,href=>`/preview${href}`);
 assert.equal(links.length,6);
 assert.equal(links[2].id,'radar-detection');
 assert.equal(links[2].name,'Radar');
 assert.equal(links[2].title,'Detección de proximidad');
 assert.equal(links[2].href,'/preview/products/radar-detection/');
 const first=product('VST-S4101','multi-camera-systems',[]);
 const second=product('VST-S4201','multi-camera-systems',[]);
 const industries=[industry('cranes',['VST-S4201']),industry('mining',['VST-S4101','VST-S4201'])];
 const model=buildCategoryListing('multi-camera-systems',[first,second],industries,messages);
 assert.deepEqual(model.relatedIndustries.map(item=>item.id),['mining','cranes']);
 assert.equal(model.decisionHelp,messages.decisionHelp.multiCamera);
 assert.equal(buildIndustryLinks(industries,href=>`/preview${href}`)[0].href,'/preview/solutions/cranes/');
 assert.throws(()=>buildCategoryLinks({...messages,catalogCategories:{...messages.catalogCategories,'radar-detection':{title:'',description:'Missing title'}}}),/Missing category translation: radar-detection/);
});
