import {test} from 'node:test';
import assert from 'node:assert/strict';
import {n5s} from '../src/i18n/locales/en-n5s.ts';
import {s1ProMax} from '../src/i18n/locales/en-s1-pro-max.ts';
import {resolveVantrueProduct} from '../src/lib/vantrue-product-detail.ts';

test('S1 Pro Max preserves workbook content, optional LTE and all available assets without inventing kit photos',()=>{
  const product=resolveVantrueProduct('VST-S1ProM4K4K',s1ProMax);
  assert.equal(product.copy.features.length,13);
  assert.equal(product.packageImage,null);
  assert.equal(product.components.length,3);
  assert.ok(product.copy.summary.includes('ADAS and blind spot detection'));
  assert.equal(product.blocks.find(block=>block.id==='lte').images.length,0);
  assert.ok(product.blocks.find(block=>block.id==='lte').text.includes('sold separately'));
  assert.ok(product.blocks.find(block=>block.id==='parking').text.includes('requires a hardwire kit'));
  const images=[...product.gallery,...product.blocks.flatMap(block=>block.images)];
  assert.equal(new Set(images.map(image=>image.src)).size,13);
  assert.ok(product.blocks.find(block=>block.id==='connectivity').images.some(image=>image.id==='LTE_5G-1.jpg'));
  assert.ok(product.specifications.find(spec=>spec.id==='resolution').value.includes('3840 × 2160P (4K) rear'));
  assert.ok(!product.specifications.some(spec=>spec.id==='ir'));
  const copy=structuredClone(s1ProMax);delete copy.photoAlts['Night_Vision-1.jpg'];
  assert.throws(()=>resolveVantrueProduct('VST-S1ProM4K4K',copy),/Missing product label/);
});

test('N5S detail keeps optional LTE, hardwire requirements and the complete image-to-paragraph mapping',()=>{
  const product=resolveVantrueProduct('VST-N5S',n5s);
  assert.equal(product.copy.features.length,14);
  assert.deepEqual(product.blocks.map(block=>[block.id,block.images.length]),[['lte',2],['night-vision',1],['parking',1],['connectivity',3]]);
  assert.equal(product.gallery.length,2);
  assert.equal(product.components.length,12);
  assert.equal(product.optional.find(item=>item.id==='lte').label,'LTE module — sold separately');
  assert.ok(product.optional.find(item=>item.id==='hardwire').label.includes('required for 24/7'));
  assert.equal(product.specifications.find(spec=>spec.id==='buffer').value,'10 seconds');
  assert.equal(new Set([...product.gallery,...product.blocks.flatMap(block=>block.images),product.packageImage].map(image=>image.src)).size,10);
});
test('N5S technical values stay independent of translated editorial content and missing mappings fail explicitly',()=>{
  const copy=structuredClone(n5s);
  copy.specLabels.storage='Almacenamiento';copy.specifications=[{id:'storage',value:'256 GB'}];
  const product=resolveVantrueProduct('VST-N5S',copy);
  assert.equal(product.specifications.find(spec=>spec.id==='storage').label,'Almacenamiento');
  assert.equal(product.specifications.find(spec=>spec.id==='storage').value,'microSD up to 1 TB');
  delete copy.photoAlts['Features-1.jpg'];
  assert.throws(()=>resolveVantrueProduct('VST-N5S',copy),/Missing product label/);
  assert.equal(resolveVantrueProduct('VST-E360Ace',undefined),null);
});
