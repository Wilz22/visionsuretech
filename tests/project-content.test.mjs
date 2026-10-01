import test from 'node:test';
import assert from 'node:assert/strict';
import {projectDefinitions} from '../src/data/projectDefinitions.ts';
import {resolveProjectData} from '../src/lib/project-content.ts';
const copyFor=definition=>({locale:'en',projectId:definition.slug,title:'Translated title',summary:'Translated summary',challenge:'Translated challenge',approach:'Translated approach',installation:['Translated installation'],results:['Translated pending results'],systems:definition.systemCodes.map(code=>({code,note:'Translated note'})),photos:[],status:'published',industry:'untrusted',order:99});
test('project translations cannot publish references or alter relationships and route identities',()=>{
  for(const definition of projectDefinitions) {
    const copy=copyFor(definition);const data=resolveProjectData(copy);
    assert.equal(data.status,'reference');assert.equal(data.slug,definition.slug);
    assert.equal(data.order,definition.order);assert.equal(data.industry,definition.industry);
    assert.deepEqual(data.systems.map(system=>system.code),[...definition.systemCodes]);
    assert.equal(data.title,'Translated title');data.results.push('Local change');
    assert.deepEqual(copy.results,['Translated pending results']);
  }
});
test('missing project relationships and unknown case identities fail explicitly',()=>{
  const copy=copyFor(projectDefinitions[0]);copy.systems=[];
  assert.throws(()=>resolveProjectData(copy),/systems/);
  copy.projectId='unknown';assert.throws(()=>resolveProjectData(copy),/Unknown project/);
});
