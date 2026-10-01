import {test} from 'node:test';
import assert from 'node:assert/strict';
import {matchesCatalogProduct,matchesCameraChannels} from '../src/lib/catalog-filters.ts';
import {formatCount} from '../src/i18n/format.ts';
import {getMessages} from '../src/i18n/index.ts';

test('catalog search combines text and class without changing product identities',()=>{
  const product={search:'VST-S4101 Wireless 4CH Live Visibility',catalogClass:'SEE'};
  assert.equal(matchesCatalogProduct(product,{query:'  vst-s4101  ',catalogClass:''}),true);
  assert.equal(matchesCatalogProduct(product,{query:'WIRELESS',catalogClass:'SEE'}),true);
  assert.equal(matchesCatalogProduct(product,{query:'wireless',catalogClass:'RECORD'}),false);
  assert.equal(matchesCatalogProduct(product,{query:'missing-model',catalogClass:''}),false);
  assert.equal(matchesCatalogProduct(product,{query:'',catalogClass:''}),true);
  assert.equal(product.search,'VST-S4101 Wireless 4CH Live Visibility');
});

test('channel filter distinguishes channel counts and rejects malformed selections',()=>{
  assert.equal(matchesCameraChannels(2,''),true);
  assert.equal(matchesCameraChannels(2,'2'),true);
  assert.equal(matchesCameraChannels(4,'2'),false);
  for(const value of ['2foo','2.5','-2'])assert.equal(matchesCameraChannels(2,value),false);
});

test('counts use locale plural rules for zero, singular and plural, including alternative copies',()=>{
  const copy=getMessages().catalogGrid.count;
  assert.equal(formatCount(0,copy,'en'),'0 systems');
  assert.equal(formatCount(1,copy,'en'),'1 system');
  assert.equal(formatCount(2,copy,'en'),'2 systems');
  assert.equal(formatCount(0,{one:'{count} élément',other:'{count} éléments'},'fr'),'0 élément');
  assert.equal(formatCount(2,{one:'{count} elemento',other:'{count} elementos'},'es'),'2 elementos');
  for(const count of [-1,1.5,NaN])assert.throws(()=>formatCount(count,copy,'en'));
});
