import {test} from 'node:test';
import assert from 'node:assert/strict';
import {buildIndustrialDetail,buildIndustryDetail,buildPersonalDetail,buildProductSchema} from '../src/lib/detail-models.ts';
import {getMessages} from '../src/i18n/index.ts';
const messages=getMessages();
const product=(code,category='multi-camera-systems',extra={})=>({id:code,data:{systemCode:code,category,slug:code.toLowerCase(),gallery:[],components:[{code:'BAT',availability:'optional'},{code:'CTRL',availability:'choice'}],title:code,summary:'Reference',...extra}});
const industry=(id,codes)=>({id,title:id,solutionMatches:codes.map(systemCode=>({systemCode,reason:systemCode})),systems:[]});

test('industrial details preserve specifications and component statuses while resolving translated links',()=>{
 const current=product('VST-S4901','crane-cameras',{specifications:[{label:'Zoom',value:'30x'}],image:{src:'/images/test.jpg',alt:'Reference',width:800,height:600}});
 const other=product('VST-S4101');
 const input=[current,other]; const before=structuredClone(input);
 const copy={...messages,navigation:{...messages.navigation,labels:{...messages.navigation.labels,home:'Inicio','crane-cameras':'Cámaras de grúa'}}};
 const view=buildIndustrialDetail(current,input,[industry('cranes',['VST-S4901','VST-S4101'])],copy,href=>`/preview${href}`);
 assert.equal(view.product,current);
 assert.deepEqual(view.product.data.specifications,[{label:'Zoom',value:'30x'}]);
 assert.deepEqual(view.optional.map(item=>item.code),['BAT']);
 assert.equal(view.product.data.components[1].availability,'choice');
 assert.equal(view.crumbs[0].label,'Inicio');
 assert.equal(view.crumbs[2].label,'Cámaras de grúa');
 assert.equal(view.quoteHref,'/preview/quote/?product=vst-s4901');
 assert.equal(view.industries[0].href,'/preview/solutions/cranes/');
 assert.equal(view.glossaryLinks.adas.href,'/preview/glossary/#adas');
 assert.deepEqual(view.images,[current.data.image]);
 assert.equal(view.related[0].product,other);
 assert.deepEqual(input,before);
 assert.throws(()=>buildIndustrialDetail(product('VST-S0001','invalid'),input,[],messages),/Unknown product category/);
});

test('related systems prefer the same category, exclude the current model and retain the limit',()=>{
 const current=product('VST-S4201');
 const peers=['VST-S4101','VST-S4102','VST-S4202','VST-S8401'].map(code=>product(code));
 const fallback=product('VST-S8501','radar-detection');
 const all=[current,...peers,fallback];
 const view=buildIndustrialDetail(current,all,[industry('mining',all.map(item=>item.data.systemCode))],messages);
 assert.deepEqual(view.related.map(item=>item.product.data.systemCode),['VST-S4101','VST-S4102','VST-S4202']);
 const gallery=[{src:'/gallery.jpg',alt:'Gallery',width:600,height:400}];
 assert.deepEqual(buildIndustrialDetail(product('VST-S4101','multi-camera-systems',{gallery}),[],[],messages).images,gallery);
});

test('industry recommendations and personal model links preserve IDs independently of visible text',()=>{
 const camera=product('VST-S4101');
 const source={...industry('cranes',['VST-S4101']),systems:[{solution:camera,reason:'Reference reason'}]};
 const detail=buildIndustryDetail(source,messages,href=>`/preview${href}`);
 assert.equal(detail.systems[0].solution,camera);
 assert.equal(detail.systems[0].reason,'Reference reason');
 assert.equal(detail.systems[0].href,'/preview/products/multi-camera-systems/vst-s4101/');
 const model={slug:'front-4k',title:'Front 4K',configuration:'Front camera · 4K',channels:1};
 const other={...model,slug:'dual-4k',channels:2};
 const copy={...messages,personalDetail:{...messages.personalDetail,description:'Referencia: {configuration}'}};
 const view=buildPersonalDetail(model,[model,other],copy,href=>`/preview${href}`);
 assert.equal(view.description,'Referencia: Front camera · 4K');
 assert.equal(view.assessmentHref,'/preview/dash-cams/book-assessment/?product=front-4k');
 assert.equal(view.related[0].model.slug,'dual-4k');
 assert.equal(view.related.length,1);
 const schema=buildProductSchema(camera,'https://www.visionsuretech.ca/','VisionSure');
 assert.equal(schema.sku,'VST-S4101');
 assert.equal(schema.url,'https://www.visionsuretech.ca/products/multi-camera-systems/vst-s4101/');
 assert.equal('offers' in schema,false);
});
