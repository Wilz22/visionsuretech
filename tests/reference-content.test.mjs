import {test} from 'node:test';
import assert from 'node:assert/strict';
import {getMessages} from '../src/i18n/index.ts';
import {faqDefinitions} from '../src/data/faq.ts';
import {resolveFaqGroups,buildFaqSchema} from '../src/lib/faq-content.ts';
import {buildLegalDocument} from '../src/lib/legal-content.ts';
import {buildProjectDetail,buildProjectOverview} from '../src/lib/project-models.ts';
const messages=getMessages();
const codes=[...new Set(faqDefinitions.flatMap(group=>group.items.flatMap(item=>item.systemCodes??[])))];
const products=codes.map(code=>({data:{systemCode:code,slug:code.toLowerCase(),category:'multi-camera-systems',title:code}}));

test('FAQ translation keeps identities, featured questions and product references independent of wording',()=>{
 const copy={...messages.faqEditorial,groups:{...messages.faqEditorial.groups,'choosing-a-system':{id:'changed',title:'Elegir un sistema',description:'Referencia'}},items:{...messages.faqEditorial.items,'wired-or-wireless':{id:'changed',question:'¿Cableado o inalámbrico?',answer:'Respuesta de referencia'}}};
 const groups=resolveFaqGroups(copy,products,messages.faqPage,href=>`/preview${href}`);
 assert.equal(groups[0].id,'choosing-a-system');
 assert.equal(groups[0].title,'Elegir un sistema');
 assert.equal(groups[0].items[1].id,'wired-or-wireless');
 assert.equal(groups[0].items[1].question,'¿Cableado o inalámbrico?');
 assert.equal(groups[0].items[1].links[0].href,'/preview/products/multi-camera-systems/vst-s4101/');
 assert.equal(groups.flatMap(group=>group.items).filter(item=>item.featured).length,4);
 assert.equal(buildFaqSchema(groups).mainEntity.length,12);
 assert.equal(buildFaqSchema(groups).mainEntity[1].name,'¿Cableado o inalámbrico?');
 assert.throws(()=>resolveFaqGroups(copy,[],messages.faqPage),/references unavailable system/);
 assert.throws(()=>resolveFaqGroups({...copy,items:{...copy.items,'wired-or-wireless':{question:'',answer:'Missing'}}},products,messages.faqPage),/Missing FAQ translation/);
});

test('legal wording cannot change section IDs or publish a reference document',()=>{
 const privacy=messages.legalEditorial.privacy;
 const copy={...messages.legalEditorial,privacy:{...privacy,status:'published',effectiveDate:'2099-01-01',title:'Privacidad',sections:{...privacy.sections,operator:{...privacy.sections.operator,id:'changed',title:'Responsable'}}}};
 const document=buildLegalDocument('privacy',copy);
 assert.equal(document.title,'Privacidad');
 assert.equal(document.status,'reference');
 assert.equal(document.effectiveDate,null);
 assert.equal(document.sections[0].id,'operator');
 assert.equal(document.sections[0].title,'Responsable');
 assert.deepEqual(document.sections[0].pending,privacy.sections.operator.pending);
 assert.throws(()=>buildLegalDocument('privacy',{...copy,privacy:{...copy.privacy,sections:{}}}),/Missing legal section translation/);
});

const project=(status='reference')=>({entry:{data:{slug:'example',status,title:'Example',summary:'Reference',photos:[],client:undefined,location:undefined,equipment:undefined,completed:undefined}},industry:{id:'cranes',title:'Cranes'},systems:[{solution:products[0],note:'Reference reason'}]});
test('project reference labels preserve missing facts, relationships and pending results',()=>{
 const source=project();const snapshot=structuredClone(source);
 const alternate={...messages,projectUi:{...messages.projectUi,referenceTitle:'Referencia: {title}',facts:{...messages.projectUi.facts,client:'Cliente'}}};
 const model=buildProjectDetail(source,alternate,href=>`/preview${href}`);
 assert.equal(model.title,'Referencia: Example');
 assert.equal(model.reference,true);
 assert.equal(model.facts.length,4);
 assert.equal(model.facts[0].label,'Cliente');
 assert.equal(model.facts[0].value,messages.projectUi.pendingInfo);
 assert.equal(model.resultsTitle,messages.projectUi.pendingResults);
 assert.equal(model.industryHref,'/preview/solutions/cranes/');
 assert.equal(model.systems[0].note,'Reference reason');
 assert.equal(model.systems[0].solution,source.systems[0].solution);
 assert.equal(model.galleryPlaceholders.length,2);
 assert.deepEqual(source,snapshot);
});

test('published project models omit absent facts while reference-only overviews remain noindex',()=>{
 const source=project('published');source.entry.data.client='Example client';
 const model=buildProjectDetail(source,messages);
 assert.equal(model.title,'Example');
 assert.equal(model.reference,false);
 assert.equal(model.facts.length,1);
 assert.equal(model.resultsTitle,messages.projectUi.results);
 const reference=buildProjectOverview([project()]);
 assert.equal(reference.hasPublished,false);
 assert.equal(reference.hasReferences,true);
 assert.equal(reference.cards[0].href,'/projects/example/');
 const mixed=buildProjectOverview([project(),source]);
 assert.equal(mixed.hasPublished,true);
 assert.equal(mixed.hasReferences,true);
});
