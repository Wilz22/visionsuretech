import type {DeliveryCode} from '../lib/quote-delivery.ts';

export type QuoteField = 'name' | 'company' | 'email' | 'phone' | 'equipment' | 'system' | 'message' | 'industry' | 'location' | 'quantity' | 'timeframe';
export type SummaryField = 'name' | 'company' | 'email' | 'phone' | 'industry' | 'location' | 'equipment' | 'quantity' | 'system' | 'timeframe';
export interface QuoteRuntimeCopy {
  required: string; minimumLength: string; subject: string; notSpecified: string; notSure: string;
  sending: string; sendingStatus: string; copied: string; copyFailed: string;
  summary: { heading: string; labels: Record<SummaryField,string>; line: string; requirements: string };
  delivery: Record<DeliveryCode,string>;
}
export interface QuoteFormCopy {
  pageTitle: string; pageDescription: string;
  headings: { live: string; local: string };
  intro: string; mode: { liveTitle: string; liveText: string; localTitle: string; localText: string };
  noScript: string; requestDetails: string; yourDetails: string; equipmentDetails: string;
  labels: Record<QuoteField,string>; optional: string;
  placeholders: { equipment: string; message: string; location: string; timeframe: string };
  systemDefault: string; referenceConfiguration: string; systemHint: string; systemLink: string; systemMissing: string;
  messageHint: string; additionalDetails: string; industryDefault: string; otherIndustry: string; honeypot: string;
  consent: string; legalNotice: string; privacyLabel: string; termsLabel: string;
  send: string; prepare: string; clear: string;
  summaryTitle: string; summaryNotice: string; summaryLabel: string; copySummary: string;
  runtime: QuoteRuntimeCopy;
}
