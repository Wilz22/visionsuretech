import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getQuoteEndpoint, sendQuote } from '../src/lib/quote-delivery.ts';

const endpoint = 'https://formspree.io/f/testabcd';
const data = () => { const form = new FormData(); form.set('email', 'qa@example.com'); return form; };
// No network calls: every submission uses an injected test transport.
test('sending stays off by default; activation rejects missing or placeholder IDs', () => {
  assert.equal(getQuoteEndpoint(undefined, undefined), null);
  assert.equal(getQuoteEndpoint('false', 'testabcd'), null);
  for (const id of ['', 'YOUR_FORM_ID', 'exampleid', 'https://other.test/f/id']) {
    assert.throws(() => getQuoteEndpoint('true', id));
  }
  assert.equal(getQuoteEndpoint('true', 'testabcd'), endpoint);
});
test('invalid destinations and honeypot entries never reach the transport', async () => {
  const fail = async () => { assert.fail('must not transmit'); };
  assert.equal((await sendQuote('https://other.test/f/testabcd', data(), fail)).status, 'rejected');
  const spam = data(); spam.set('_gotcha', 'bot');
  assert.equal((await sendQuote(endpoint, spam, fail)).status, 'rejected');
});
test('only explicit provider acceptance produces a success result', async () => {
  const payload = data();
  const response = await sendQuote(endpoint, payload, async (url, options) => {
    assert.equal(url, endpoint); assert.equal(options.method, 'POST');
    assert.equal(options.body, payload); assert.equal(options.headers.Accept, 'application/json');
    assert.equal(options.credentials, 'omit'); assert.equal(options.redirect, 'error');
    return Response.json({ next: '/thanks' });
  });
  assert.equal(response.status, 'accepted');
  for (const body of [null, {}, { ok: true }, { ok: false, next: '/thanks' }, { next: '/thanks', error: 'Rejected' }, { next: '/thanks', errors: [{ message: 'Rejected' }] }]) {
    assert.notEqual((await sendQuote(endpoint, data(), async () => Response.json(body))).status, 'accepted');
  }
});
test('validation errors, rate limits and server failures remain distinguishable', async () => {
  for (const code of [400, 422, 429]) {
    assert.equal((await sendQuote(endpoint, data(), async () => new Response('', { status: code }))).status, 'rejected');
  }
  assert.equal((await sendQuote(endpoint, data(), async () => new Response('', { status: 503 }))).status, 'uncertain');
});
test('network failure and malformed replies never claim receipt', async () => {
  assert.equal((await sendQuote(endpoint, data(), async () => { throw new TypeError('offline'); })).status, 'uncertain');
  assert.equal((await sendQuote(endpoint, data(), async () => new Response('<html>Error</html>'))).status, 'uncertain');
});
test('a stalled request times out without an automatic retry', async () => {
  let attempts = 0;
  const response = await sendQuote(endpoint, data(), async (_, options) => {
    attempts++;
    return new Promise((_, reject) => options.signal.addEventListener('abort', () => reject(new Error('aborted')), { once: true }));
  }, 5);
  assert.equal(response.status, 'uncertain'); assert.equal(attempts, 1);
});
