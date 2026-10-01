import {test} from 'node:test';
import assert from 'node:assert/strict';
import {getMessages} from '../src/i18n/index.ts';
import {buildQuoteOptions} from '../src/lib/quote-options.ts';
import {buildQuoteSummary} from '../src/lib/quote-summary.ts';

test('quote summary uses supplied labels, preserves values and makes missing fields explicit',()=>{
  const base=getMessages().quoteForm.runtime;
  const copy={...base,notSpecified:'Sin indicar',summary:{...base.summary,heading:'RESUMEN SIN ENVIAR',labels:{...base.summary.labels,name:'Nombre',system:'Sistema'},line:'{label} → {value}'}};
  const summary=buildQuoteSummary({name:'  QA local  ',system:'VST-S6301',message:'Two cameras for rear visibility.'},copy);
  assert.ok(summary.startsWith('RESUMEN SIN ENVIAR\n'));
  assert.ok(summary.includes('Nombre → QA local'));
  assert.ok(summary.includes('Sistema → VST-S6301'));
  assert.ok(summary.includes('Email → Sin indicar'));
  assert.ok(summary.includes('Two cameras for rear visibility.'));
});

test('quote options keep stable model IDs and routes when display content changes',()=>{
  const copy={...getMessages().quoteForm,referenceConfiguration:'Referencia: {title}'};
  const options=buildQuoteOptions([{slug:'vst-s6301',category:'360-camera-systems',systemCode:'VST-S6301',title:'Vista envolvente'}],[{slug:'front-4k',title:'Frontal 4K'}],copy);
  assert.deepEqual(options.map(option=>option.value),['vst-s6301','front-4k']);
  assert.equal(options[0].code,'VST-S6301');
  assert.equal(options[0].href,'/products/360-camera-systems/vst-s6301/');
  assert.equal(options[1].href,'/dash-cams/front-4k/');
  assert.equal(options[1].label,'Referencia: Frontal 4K');
});
