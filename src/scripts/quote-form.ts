import { sendQuote } from '../lib/quote-delivery';
import { resolvePrefill } from '../lib/quote-prefill';
import {buildQuoteSummary} from '../lib/quote-summary';
import {formatMessage} from '../i18n/format';
import type {QuoteRuntimeCopy} from '../i18n/quote-types';

const form = document.querySelector<HTMLFormElement>('#quote-form');
const fields = document.querySelector<HTMLFieldSetElement>('#quote-fields');
const system = document.querySelector<HTMLSelectElement>('#quote-system');
const systemLink = document.querySelector<HTMLAnchorElement>('#selected-system-link');
const systemNotice = document.querySelector<HTMLElement>('#system-notice');
const summary = document.querySelector<HTMLElement>('#quote-summary');
const summaryText = document.querySelector<HTMLTextAreaElement>('#summary-text');
const summaryHeading = document.querySelector<HTMLElement>('#summary-heading');
const copy = document.querySelector<HTMLButtonElement>('#copy-summary');
const copyStatus = document.querySelector<HTMLElement>('#copy-status');
const deliveryStatus = document.querySelector<HTMLElement>('#delivery-status');
const submit = document.querySelector<HTMLButtonElement>('#quote-submit');

if (form && fields && system && systemLink && systemNotice && summary && summaryText && summaryHeading && copy && copyStatus && deliveryStatus && submit) {
  const messages: QuoteRuntimeCopy = JSON.parse(form.dataset.copy!);
  const endpoint = form.dataset.endpoint;
  const idleLabel = submit.textContent;
  let inFlight = false;
  let accepted = false;
  const updateSystemLink = () => {
    const url = system.selectedOptions[0]?.dataset.url;
    systemLink.hidden = !url;
    if (url) systemLink.href = url;
    else systemLink.removeAttribute('href');
  };
  // Only match known catalog options. Never render query text or use it as a URL.
  const requested = resolvePrefill(window.location.search, Array.from(system.options).map(item => ({value:item.value,code:item.dataset.code})));
  if (requested !== null) {
    const option = requested ? Array.from(system.options).find((item) => item.value === requested) : undefined;
    if (option) option.defaultSelected = true;
    else systemNotice.hidden = false;
  }
  updateSystemLink();

  const clearSummary = () => {
    summary.hidden = true;
    summaryText.value = '';
    copyStatus.textContent = '';
    if (!inFlight) {
      accepted = false;
      submit.disabled = false;
      deliveryStatus.hidden = true;
      deliveryStatus.textContent = '';
    }
  };
  form.addEventListener('input', (event) => {
    const input = event.target;
    if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) input.setCustomValidity('');
    clearSummary();
  });
  form.addEventListener('change', () => {
    updateSystemLink();
    systemNotice.hidden = true;
    clearSummary();
  });
  form.addEventListener('reset', () => {
    clearSummary();
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea').forEach((input) => input.setCustomValidity(''));
    queueMicrotask(updateSystemLink);
  });
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (inFlight || accepted) return;
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input[required], textarea[required]').forEach((input) => {
      input.value = input.value.trim();
      input.setCustomValidity(!input.value ? messages.required : input.minLength > 0 && input.value.length < input.minLength ? formatMessage(messages.minimumLength,{count:String(input.minLength)}) : '');
    });
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) ?? '').trim();
    const industry = form.querySelector<HTMLSelectElement>('#quote-industry');
    if (endpoint) {
      data.set('_subject', messages.subject);
      data.set('system_label', system.selectedOptions[0].textContent ?? messages.notSure);
      data.set('industry_label', industry?.value ? industry.selectedOptions[0].textContent ?? '' : messages.notSpecified);
      inFlight = true;
      fields.disabled = true;
      submit.disabled = true;
      submit.textContent = messages.sending;
      form.setAttribute('aria-busy', 'true');
      deliveryStatus.hidden = false;
      deliveryStatus.textContent = messages.sendingStatus;
      try {
        const result = await sendQuote(endpoint, data);
        accepted = result.status === 'accepted';
        deliveryStatus.dataset.state = result.status;
        deliveryStatus.textContent = messages.delivery[result.code];
      } finally {
        inFlight = false;
        fields.disabled = false;
        submit.disabled = accepted;
        submit.textContent = idleLabel;
        form.removeAttribute('aria-busy');
        deliveryStatus.focus();
      }
      return;
    }
    // Without an enabled endpoint, prepare locally and never transmit entries.
    summaryText.value = buildQuoteSummary({
      name:value('name'),company:value('company'),email:value('email'),phone:value('phone'),
      industry:industry?.value?industry.selectedOptions[0].textContent??'':'',
      location:value('location'),equipment:value('equipment'),quantity:value('quantity'),
      system:system.selectedOptions[0].textContent??'',timeframe:value('timeframe'),message:value('message'),
    },messages);
    summary.hidden = false;
    summaryHeading.focus();
  });
  copy.addEventListener('click', async () => {
    const text = summaryText.value;
    try {
      await navigator.clipboard.writeText(text);
      if (text === summaryText.value && !summary.hidden) copyStatus.textContent = messages.copied;
    } catch {
      if (text === summaryText.value && !summary.hidden) {
        summaryText.focus();
        summaryText.select();
        copyStatus.textContent = messages.copyFailed;
      }
    }
  });
  fields.disabled = false;
}
