import test from 'node:test';
import assert from 'node:assert/strict';
import {dashCamDefinitions} from '../src/data/dashCamDefinitions.ts';
import {dashCamEditorial} from '../src/i18n/locales/en-dash-cams.ts';
import {resolveDashCams} from '../src/lib/dash-cam-content.ts';
import {buildQuoteOptions} from '../src/lib/quote-options.ts';
import {en} from '../src/i18n/locales/en.ts';

test('translated dash cam titles preserve configuration IDs, channels and quote selection',()=>{
  const copy=structuredClone(dashCamEditorial);
  for(const entry of Object.values(copy)) {
    entry.title='Translated title';entry.configuration='Translated configuration';
    entry.slug='editorial-cannot-change-id';entry.channels=99;
  }
  const models=resolveDashCams(copy);
  assert.deepEqual(models.map(({slug,channels})=>({slug,channels})),[...dashCamDefinitions]);
  assert.equal(models.length,6);
  assert.ok(models.every(model=>model.title==='Translated title'));
  assert.deepEqual(buildQuoteOptions([],models,en.quoteForm).map(option=>option.value),dashCamDefinitions.map(model=>model.slug));
  assert.equal(dashCamEditorial['front-4k'].title,'Front-only 4K');
});
test('missing dash cam editorial content fails before publication',()=>{
  const missing=structuredClone(dashCamEditorial);
  delete missing.thermal;
  assert.throws(()=>resolveDashCams(missing),/Missing dash cam content: thermal/);
});
