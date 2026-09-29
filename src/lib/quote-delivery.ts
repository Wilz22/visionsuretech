export function getQuoteEndpoint(enabled: string | undefined, formId: string | undefined): string | null {
  if (enabled !== 'true') return null;
  const id = formId?.trim() ?? '';
  if (!/^[a-zA-Z0-9]{6,32}$/.test(id) || /^(your|replace|example)/i.test(id)) {
    throw new Error('Quote delivery is enabled but PUBLIC_FORMSPREE_FORM_ID is not a valid form ID.');
  }
  return `https://formspree.io/f/${id}`;
}

export type DeliveryResult = { status: 'accepted' | 'rejected' | 'uncertain'; message: string };

// Kept separate from the UI so failure paths can be tested without sending data.
export async function sendQuote(
  endpoint: string,
  data: FormData,
  request: typeof fetch = fetch,
  timeoutMs = 20000,
): Promise<DeliveryResult> {
  if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]{6,32}$/.test(endpoint)) {
    return { status: 'rejected', message: 'Online sending is not configured correctly. Your details have been kept.' };
  }
  if (String(data.get('_gotcha') ?? '').trim()) {
    return { status: 'rejected', message: 'The request could not be submitted. Reload the page and try again.' };
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await request(endpoint, {
      method: 'POST', body: data, headers: { Accept: 'application/json' },
      signal: controller.signal, credentials: 'omit', redirect: 'error',
    });
    if (!response.ok) {
      return {
        status: response.status >= 500 ? 'uncertain' : 'rejected',
        message: response.status === 429
          ? 'Too many requests. Your details have been kept. Please wait before trying again.'
          : response.status >= 500
            ? 'We could not confirm receipt. Your details have been kept. Please check before sending again.'
            : 'The service did not accept your request. Your details have been kept. Review the fields or use the direct contact details.',
      };
    }
    const result = await response.json();
    // Formspree's documented client contract uses a string `next` on success.
    // We stay on this page; never navigate to a provider-supplied destination.
    if (result && typeof result === 'object' && ('error' in result || 'errors' in result)) {
      return { status: 'rejected', message: 'The service did not accept your request. Your details have been kept. Review the fields or use the direct contact details.' };
    }
    if (typeof result?.next === 'string' && result?.ok !== false) {
      return { status: 'accepted', message: 'Your request has been accepted for delivery to VisionSure. This is not a quote or an order confirmation.' };
    }
    return { status: 'uncertain', message: 'We could not confirm receipt. Your details have been kept. Please check before sending again.' };
  } catch {
    return { status: 'uncertain', message: 'We could not confirm receipt. The connection may have been interrupted. Your details have been kept; please check before sending again.' };
  } finally {
    clearTimeout(timer);
  }
}
