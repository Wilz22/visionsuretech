import test from 'node:test';
import assert from 'node:assert/strict';
import {productDefinitions} from '../src/data/productDefinitions.ts';
import {resolveProductData} from '../src/lib/product-content.ts';

const copyFor=definition=>({
  locale:'en',systemCode:definition.systemCode,title:'Translated title',summary:'Translated summary',
  cardTags:['Translated tag'],features:['Translated feature'],
  specifications:definition.specifications.map(spec=>({id:spec.id,label:`Translated ${spec.id}`})),
  components:definition.components.map(component=>({code:component.code,description:`Translated ${component.code}`})),
  applications:['Translated application'],notes:['Translated note'],imageAlt:'Translated photo',
  galleryAlts:definition.gallery.map(()=> 'Translated gallery photo'),seo:{title:'Translated SEO',description:'Translated description'},
  slug:'untrusted-slug',category:'untrusted-category',contentStatus:'verified',draft:true,
});
test('product translations cannot replace specifications, identities or component availability',()=>{
  for(const definition of productDefinitions) {
    const copy=copyFor(definition);
    const resolved=resolveProductData(copy);
    assert.equal(resolved.slug,definition.slug);
    assert.equal(resolved.category,definition.category);
    assert.equal(resolved.contentStatus,definition.contentStatus);
    assert.equal(resolved.draft,definition.draft);
    assert.deepEqual(resolved.specifications.map(spec=>spec.value),definition.specifications.map(spec=>spec.value));
    assert.deepEqual(resolved.components.map(({code,availability})=>({code,availability})),[...definition.components]);
    assert.equal(resolved.title,'Translated title');
    resolved.features.push('Local mutation');
    assert.deepEqual(copy.features,['Translated feature']);
  }
});
test('missing, duplicated and unknown product field identities fail explicitly',()=>{
  const copy=copyFor(productDefinitions[0]);
  copy.specifications.pop();
  assert.throws(()=>resolveProductData(copy),/specifications/);
  const duplicate=copyFor(productDefinitions[0]);
  duplicate.components[1].code=duplicate.components[0].code;
  assert.throws(()=>resolveProductData(duplicate),/components/);
  const unknown=copyFor(productDefinitions[0]);unknown.systemCode='VST-S0000';
  assert.throws(()=>resolveProductData(unknown),/Unknown product/);
});
