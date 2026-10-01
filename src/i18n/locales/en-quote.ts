import type {QuoteFormCopy} from '../quote-types.ts';

export const quoteForm: QuoteFormCopy = {
  pageTitle: 'Request a Quote', pageDescription: 'Tell VisionSure about your equipment, product of interest and visibility requirements.',
  headings: { live: 'Request a quote.', local: 'Prepare your request.' },
  intro: 'Tell us about your equipment and the view you need. Fields marked * are required.',
  mode: {
    liveTitle: 'Tell us what your operation needs.', liveText: 'Your request will be processed through Formspree for delivery to VisionSure. Review the privacy information below before sending.',
    localTitle: 'Online sending is not available yet.', localText: 'You can prepare and copy a request summary here. Your entries stay on this page and are not sent to VisionSure. Copy the summary before leaving or reloading.',
  },
  noScript: 'Enable JavaScript to use this form, or use the direct contact details if available.',
  requestDetails: 'Request details', yourDetails: '01 / Your details', equipmentDetails: '02 / Equipment & application',
  labels: { name: 'Full name', company: 'Company', email: 'Email', phone: 'Phone', equipment: 'Equipment type, make & model', system: 'System of interest', message: 'What do you need to see or monitor?', industry: 'Industry', location: 'Operating location', quantity: 'Number of machines / vehicles', timeframe: 'Preferred timeframe' },
  optional: '(optional)',
  placeholders: { equipment: 'e.g. crane, loader or fleet vehicle', message: 'Describe the blind spots, operating conditions and whether you need recording, obstacle alerts or remote access.', location: 'City / region / country', timeframe: 'e.g. planned maintenance period' },
  systemDefault: 'Not sure yet — help me choose', referenceConfiguration: '{title} · reference configuration',
  systemHint: 'Choose a starting point. You can mention additional systems in your description.', systemLink: 'View selected system specifications', systemMissing: 'The requested system was not found. Please select an option from the catalog.',
  messageHint: '10–5,000 characters. Describe available photographs here; attachments are not collected on this page.',
  additionalDetails: 'Additional project details (optional)', industryDefault: 'Select an industry (optional)', otherIndustry: 'Other', honeypot: 'Leave this field empty',
  consent: 'I agree to the use of these details to respond to this request, as described in the {privacy}.',
  legalNotice: 'Read the {privacy} and {terms}. A request does not place an order.', privacyLabel: 'Privacy Policy', termsLabel: 'Terms of Use',
  send: 'Send request', prepare: 'Prepare summary', clear: 'Clear details',
  summaryTitle: 'Your summary is ready to copy.', summaryNotice: 'This request has not been sent. Copy it for your records and share it once a contact channel is available.', summaryLabel: 'Request summary', copySummary: 'Copy summary',
  runtime: {
    required: 'Please complete this field.', minimumLength: 'Please enter at least {count} characters.',
    subject: 'VisionSure website quote request', notSpecified: 'Not specified', notSure: 'Not sure yet', sending: 'Sending…', sendingStatus: 'Sending your request…',
    copied: 'Summary copied. It has not been sent to VisionSure.', copyFailed: 'Automatic copy is unavailable. Copy the selected text manually.',
    summary: { heading: 'VISIONSURE — REQUEST SUMMARY (NOT SENT)', labels: { name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', industry: 'Industry', location: 'Location', equipment: 'Equipment', quantity: 'Machines / vehicles', system: 'System', timeframe: 'Preferred timeframe' }, line: '{label}: {value}', requirements: 'Requirements:' },
    delivery: {
      configuration: 'Online sending is not configured correctly. Your details have been kept.',
      spam: 'The request could not be submitted. Reload the page and try again.',
      rateLimit: 'Too many requests. Your details have been kept. Please wait before trying again.',
      rejected: 'The service did not accept your request. Your details have been kept. Review the fields or use the direct contact details.',
      unconfirmed: 'We could not confirm receipt. Your details have been kept. Please check before sending again.',
      interrupted: 'We could not confirm receipt. The connection may have been interrupted. Your details have been kept; please check before sending again.',
      accepted: 'Your request has been accepted for delivery to VisionSure. This is not a quote or an order confirmation.',
    },
  },
};
