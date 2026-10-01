import test from 'node:test';
import assert from 'node:assert/strict';
import {industryDefinitions} from '../src/data/industryDefinitions.ts';
import {industryEditorial} from '../src/i18n/locales/en-industries.ts';
import {resolveIndustries} from '../src/lib/industry-content.ts';

test('industry translations preserve stable identities, ordering and all system relationships',()=>{
  const translated=structuredClone(industryEditorial);
  for(const copy of Object.values(translated)) {
    copy.title='Translated industry';
    copy.needs=['Translated need'];
    for(const code of Object.keys(copy.reasons)) copy.reasons[code]=`Translated reason ${code}`;
    copy.id='untrusted-editorial-id';
  }
  const resolved=resolveIndustries(translated);
  assert.equal(resolved.length,6);
  assert.equal(resolved.flatMap(industry=>industry.solutionMatches).length,18);
  assert.deepEqual(resolved.map(industry=>industry.id),industryDefinitions.map(industry=>industry.id));
  resolved.forEach((industry,index)=>{
    assert.equal(industry.title,'Translated industry');
    assert.deepEqual(industry.solutionMatches.map(match=>match.systemCode),[...industryDefinitions[index].systemCodes]);
  });
  resolved[0].needs.push('Local mutation');
  assert.deepEqual(translated.cranes.needs,['Translated need']);
  assert.equal(industryEditorial.cranes.title,'Cranes');
});

test('missing industry translations and recommendation reasons fail explicitly',()=>{
  const missing=structuredClone(industryEditorial);
  delete missing.cranes;
  assert.throws(()=>resolveIndustries(missing),/Missing industry content: cranes/);
  const reason=structuredClone(industryEditorial);
  delete reason.cranes.reasons['VST-S4901'];
  assert.throws(()=>resolveIndustries(reason),/cranes\/VST-S4901/);
});
