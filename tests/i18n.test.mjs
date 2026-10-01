import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getMessages, formatMessage } from '../src/i18n/index.ts';
import { locales } from '../src/i18n/config.ts';
import {buildNavigation} from '../src/lib/navigation.ts';

test('only approved English is enabled; unsupported dictionaries cannot silently publish English', () => {
  assert.deepEqual(locales.filter(locale => locale.enabled).map(locale => locale.code), ['en']);
  assert.throws(() => getMessages('es'), /Missing approved translation/);
  assert.throws(() => getMessages('pa'), /Missing approved translation/);
});

test('translated sentence templates preserve model identifiers and require named parameters', () => {
  assert.equal(formatMessage('Details for {model}: {model}', { model: 'VST-S4101' }), 'Details for VST-S4101: VST-S4101');
  assert.throws(() => formatMessage('{model}', {}), /Missing translation parameter/);
  assert.throws(() => formatMessage('{toString}', {}), /Missing translation parameter/);
  assert.equal(formatMessage(getMessages().productCard.viewDetailsFor, { model: 'VST-S4101' }), 'View details for VST-S4101');
});

test('navigation resolves translated labels and links without changing entity IDs or mutating definitions', () => {
  const english = getMessages().navigation;
  const before = buildNavigation(english);
  const alternate = { ...english, labels: Object.fromEntries(Object.entries(english.labels).map(([key,value])=>[key,`Translated ${value}`])) };
  const localized = buildNavigation(alternate,href=>`/preview${href}`);
  assert.equal(localized.main[1].id,'products');
  assert.equal(localized.main[1].label,'Translated Products');
  assert.equal(localized.main[1].children[0].href,'/preview/products/multi-camera-systems/');
  assert.equal(localized.company.find(item=>item.id==='quote').label,'Translated Request a Quote');
  assert.deepEqual(buildNavigation(english),before);
  assert.throws(()=>buildNavigation({...english,labels:{...english.labels,products:''}}),/Missing navigation translation/);
});


test('Home resolves translated copy and URLs by stable IDs without mutating catalog data', async () => {
  const {buildHomeLinks}=await import('../src/lib/home.ts');
  const {productCategories}=await import('../src/data/productCategories.ts');
  const snapshot=structuredClone(productCategories);
  const english=getMessages();
  const alternate={...english,
    navigation:{...english.navigation,labels:{...english.navigation.labels,'radar-detection':'Radar traducido'}},
    home:{...english.home,equipment:{...english.home.equipment,labels:{...english.home.equipment.labels,cranes:'Grúa'}}},
  };
  const links=buildHomeLinks(alternate,href=>`/preview${href}`);
  assert.equal(links.equipment[0].id,'cranes');
  assert.equal(links.equipment[0].label,'Grúa');
  assert.equal(links.equipment[0].href,'/preview/solutions/cranes/');
  assert.equal(links.categories.find(item=>item.id==='radar-detection').name,'Radar traducido');
  assert.equal(links.categories.find(item=>item.id==='radar-detection').href,'/preview/products/radar-detection/');
  assert.equal(links.categories.length,6);
  assert.deepEqual(productCategories,snapshot);
  assert.throws(()=>buildHomeLinks({...english,home:{...english.home,equipment:{...english.home.equipment,labels:{...english.home.equipment.labels,cranes:''}}}}),/Missing Home translation: cranes/);
});


test('resource cards preserve route IDs when translated and fail on missing content',async()=>{
 const {buildResourceLinks}=await import('../src/lib/page-links.ts');
 const english=getMessages();
 const before=structuredClone(english.resources);
 const alternate={...english,resources:{...english.resources,cards:{...english.resources.cards,glossary:{title:'Glosario',text:'Referencia de términos'}}}};
 const links=buildResourceLinks(alternate,href=>`/preview${href}`);
 assert.deepEqual(links.map(item=>item.id),['glossary','projects','faq']);
 assert.deepEqual(links[0],{id:'glossary',title:'Glosario',text:'Referencia de términos',href:'/preview/glossary/'});
 assert.deepEqual(english.resources,before);
 assert.throws(()=>buildResourceLinks({...english,resources:{...english.resources,cards:{...english.resources.cards,glossary:{title:'',text:'Missing title'}}}}),/Missing resource translation: glossary/);
});


test('glossary translations preserve anchors referenced by product pages',async()=>{
 const {buildGlossaryTerms}=await import('../src/lib/page-links.ts');
 const {buildGlossaryLinks}=await import('../src/lib/detail-models.ts');
 const english=getMessages();
 const alternate={...english,glossary:{...english.glossary,terms:{...english.glossary.terms,adas:{title:'Asistencia a la conducción',text:'Definición de referencia'}}}};
 const terms=buildGlossaryTerms(alternate);
 assert.deepEqual(terms.map(term=>term.id),['adas','dms','fcw']);
 assert.equal(terms[0].label,'ADAS');
 assert.equal(terms[0].title,'Asistencia a la conducción');
 assert.deepEqual(Object.values(buildGlossaryLinks()).map(link=>link.href),terms.map(term=>`/glossary/#${term.id}`));
 assert.throws(()=>buildGlossaryTerms({...english,glossary:{...english.glossary,terms:{...english.glossary.terms,adas:{title:'',text:'Missing title'}}}}),/Missing glossary translation: adas/);
});
