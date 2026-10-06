import {test} from 'node:test';
import assert from 'node:assert/strict';
import {vantrue} from '../src/i18n/locales/en-vantrue.ts';
import {resolveVantrueDashCams} from '../src/lib/vantrue-dash-cams.ts';
import {buildQuoteOptions} from '../src/lib/quote-options.ts';
import {resolvePrefill} from '../src/lib/quote-prefill.ts';
import {quoteForm} from '../src/i18n/locales/en-quote.ts';

test('Vantrue catalogue retains workbook URLs and manufacturer identity across translated text',()=>{
  const translated=structuredClone(vantrue);
  Object.values(translated.models).forEach(copy=>{copy.title='Translated title';copy.configuration='Translated description';copy.href='/wrong/';});
  const models=resolveVantrueDashCams(translated);
  assert.deepEqual(models.map(model=>model.href),[
    '/dash-cams/4ch-360/VST-N5S/', '/dash-cams/dual-4k/VST-S1ProM4K4K/',
    '/dash-cams/3ch-pro/VST-P2-DS/', '/dash-cams/3ch-pro/VST-E360Ace/',
    '/dash-cams/front-2.5K/VST-S1-Pro/',
  ]);
  assert.ok(models.every(model=>model.brand==='Vantrue'));
  assert.deepEqual(models.map(model=>model.channels),[4,2,3,3,1]);
});
test('Vantrue quote options preserve SKU preselection and return to canonical product URL',()=>{
  const models=resolveVantrueDashCams(vantrue);
  const options=buildQuoteOptions([],models,quoteForm);
  for(const model of models){
    const selected=resolvePrefill('?product='+encodeURIComponent(model.sku),options);
    assert.equal(selected,model.sku);
    assert.equal(options.find(option=>option.value===selected).href,model.href);
  }
});
