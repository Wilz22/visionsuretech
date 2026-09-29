import { getQuoteEndpoint } from '../lib/quote-delivery';

// Read at build time. A form ID is public; never put API/SMTP secrets here.
export const quoteEndpoint = getQuoteEndpoint(
  import.meta.env.PUBLIC_QUOTE_SEND_ENABLED,
  import.meta.env.PUBLIC_FORMSPREE_FORM_ID,
);
