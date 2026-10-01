export function getQuoteEndpoint(enabled: string | undefined, formId: string | undefined): string | null {
  if (enabled !== 'true') return null;
  const id = formId?.trim() ?? '';
  if (!/^[a-zA-Z0-9]{6,32}$/.test(id) || /^(your|replace|example)/i.test(id)) {
    throw new Error('Quote delivery is enabled but PUBLIC_FORMSPREE_FORM_ID is not a valid form ID.');
  }
  return `https://formspree.io/f/${id}`;
}

export type DeliveryCode = 'configuration' | 'spam' | 'rateLimit' | 'rejected' | 'unconfirmed' | 'interrupted' | 'accepted';
export type DeliveryResult = { status: 'accepted' | 'rejected' | 'uncertain'; code: DeliveryCode };

// Kept separate from the UI so failure paths can be tested without sending data.
export async function sendQuote(
  endpoint: string,
  data: FormData,
  request: typeof fetch = fetch,
  timeoutMs = 20000,
): Promise<DeliveryResult> {
  if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]{6,32}$/.test(endpoint)) {
    return { status: 'rejected', code: 'configuration' };
  }
  if (String(data.get('_gotcha') ?? '').trim()) {
    return { status: 'rejected', code: 'spam' };
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
        code: response.status === 429 ? 'rateLimit' : response.status >= 500 ? 'unconfirmed' : 'rejected',
      };
    }
    const result = await response.json();
    // Formspree's documented client contract uses a string `next` on success.
    // We stay on this page; never navigate to a provider-supplied destination.
    if (result && typeof result === 'object' && ('error' in result || 'errors' in result)) {
      return { status: 'rejected', code: 'rejected' };
    }
    if (typeof result?.next === 'string' && result?.ok !== false) {
      return { status: 'accepted', code: 'accepted' };
    }
    return { status: 'uncertain', code: 'unconfirmed' };
  } catch {
    return { status: 'uncertain', code: 'interrupted' };
  } finally {
    clearTimeout(timer);
  }
}
