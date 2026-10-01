import test from 'node:test';
import assert from 'node:assert/strict';
import {buildPageShell} from '../src/lib/page-shell.ts';

test('page shell resolves one locale and one link strategy for header and footer',()=>{
  const shell=buildPageShell('en',href=>`/preview${href}`);
  assert.equal(shell.metadata.htmlLang,'en');
  assert.equal(shell.metadata.openGraph,'en_CA');
  assert.equal(shell.homeHref,'/preview/');
  assert.equal(shell.navigation.main.find(item=>item.id==='products').href,'/preview/products/');
  assert.equal(shell.navigation.company.find(item=>item.id==='home').href,shell.homeHref);
  assert.equal(shell.navigation.legal.find(item=>item.id==='privacy').label,shell.messages.navigation.labels.privacy);
});
test('unapproved locales cannot fall back to English page shell metadata',()=>{
  assert.throws(()=>buildPageShell('es'),/Missing approved translation dictionary/);
});
