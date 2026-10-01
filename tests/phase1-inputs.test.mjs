import {test} from 'node:test';
import assert from 'node:assert/strict';
import {resolvePrefill} from '../src/lib/quote-prefill.ts';
import {getBookingUrl} from '../src/lib/booking.ts';
const options=[{value:'vst-s6301',code:'VST-S6301'},{value:'front-4k'}];
test('prefill permits current slugs and legacy codes, rejecting arbitrary destinations',()=>{
 assert.equal(resolvePrefill('',options),null);
 assert.equal(resolvePrefill('?product=vst-s6301',options),'vst-s6301');
 assert.equal(resolvePrefill('?system=VST-S6301',options),'vst-s6301');
 assert.equal(resolvePrefill('?product=front-4k',options),'front-4k');
 for(const input of ['?product=%3Cscript%3E','?product=https://example.com','?product=missing&system=VST-S6301'])assert.equal(resolvePrefill(input,options),'');
});
test('booking remains unconfigured by default and accepts only public HTTPS URLs',()=>{
 assert.equal(getBookingUrl(undefined),null);
 assert.equal(getBookingUrl(' '),null);
 assert.equal(getBookingUrl('https://example.com/assessment'),'https://example.com/assessment');
 for(const input of ['javascript:alert(1)','http://example.com','https://user:password@example.com','invalid'])assert.throws(()=>getBookingUrl(input));
});
