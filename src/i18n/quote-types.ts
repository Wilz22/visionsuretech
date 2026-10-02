import type {DeliveryCode} from '../lib/quote-delivery.ts';

export type QuoteField = 'name' | 'company' | 'phone' | 'equipment' | 'system';
export type SummaryField = QuoteField;
export interface QuoteRuntimeCopy {
  required: string; minimumLength: string; subject: string; notSpecified: string; notSure: string;
  sending: string; sendingStatus: string; copied: string; copyFailed: string;
  summary: { heading: string; labels: Record<SummaryField,string>; line: string };
  delivery: Record<DeliveryCode,string>;
}
export interface QuoteFormCopy {
  pageTitle: string; pageDescription: string;
  headings: { live: string; local: string };
  intro: string; mode: { liveTitle: string; liveText: string; localTitle: string; localText: string };
  noScript: string; requestDetails: string; yourDetails: string; equipmentDetails: string;
  labels: Record<QuoteField,string>; optional: string;
  placeholders: { equipment: string };
  systemDefault: string; referenceConfiguration: string; systemHint: string; systemLink: string; systemMissing: string;
  honeypot: string;
  legalNotice: string; privacyLabel: string; termsLabel: string;
  send: string; prepare: string; clear: string;
  summaryTitle: string; summaryNotice: string; summaryLabel: string; copySummary: string;
  runtime: QuoteRuntimeCopy;
}
