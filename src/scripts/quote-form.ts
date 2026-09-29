import { sendQuote } from '../lib/quote-delivery';

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
  const requested = new URLSearchParams(window.location.search).get('system');
  if (requested) {
    const option = Array.from(system.options).find((item) => item.value === requested);
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
      input.setCustomValidity(!input.value ? 'Please complete this field.' : input.minLength > 0 && input.value.length < input.minLength ? `Please enter at least ${input.minLength} characters.` : '');
    });
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) ?? '').trim() || 'Not specified';
    const industry = form.querySelector<HTMLSelectElement>('#quote-industry');
    if (endpoint) {
      data.set('_subject', 'VisionSure website quote request');
      data.set('system_label', system.selectedOptions[0].textContent ?? 'Not sure yet');
      data.set('industry_label', industry?.value ? industry.selectedOptions[0].textContent ?? '' : 'Not specified');
      inFlight = true;
      fields.disabled = true;
      submit.disabled = true;
      submit.textContent = 'Sending…';
      form.setAttribute('aria-busy', 'true');
      deliveryStatus.hidden = false;
      deliveryStatus.textContent = 'Sending your request…';
      try {
        const result = await sendQuote(endpoint, data);
        accepted = result.status === 'accepted';
        deliveryStatus.dataset.state = result.status;
        deliveryStatus.textContent = result.message;
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
    summaryText.value = [
      'VISIONSURE — REQUEST SUMMARY (NOT SENT)', '',
      `Name: ${value('name')}`, `Company: ${value('company')}`,
      `Email: ${value('email')}`, `Phone: ${value('phone')}`, '',
      `Industry: ${industry?.value ? industry.selectedOptions[0].textContent : 'Not specified'}`,
      `Location: ${value('location')}`, `Equipment: ${value('equipment')}`,
      `Machines / vehicles: ${value('quantity')}`,
      `System: ${system.selectedOptions[0].textContent}`,
      `Preferred timeframe: ${value('timeframe')}`, '',
      'Requirements:', value('message'),
    ].join('\n');
    summary.hidden = false;
    summaryHeading.focus();
  });
  copy.addEventListener('click', async () => {
    const text = summaryText.value;
    try {
      await navigator.clipboard.writeText(text);
      if (text === summaryText.value && !summary.hidden) copyStatus.textContent = 'Summary copied. It has not been sent to VisionSure.';
    } catch {
      if (text === summaryText.value && !summary.hidden) {
        summaryText.focus();
        summaryText.select();
        copyStatus.textContent = 'Automatic copy is unavailable. Copy the selected text manually.';
      }
    }
  });
  fields.disabled = false;
}
