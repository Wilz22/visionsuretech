import {formatMessage} from '../i18n/format.ts';
import type {QuoteRuntimeCopy,SummaryField} from '../i18n/quote-types.ts';

export function buildQuoteSummary(values: Partial<Record<SummaryField | 'message',string>>, copy: QuoteRuntimeCopy): string {
  const value = (key: SummaryField | 'message') => values[key]?.trim() || copy.notSpecified;
  const line = (key: SummaryField) => formatMessage(copy.summary.line,{label:copy.summary.labels[key],value:value(key)});
  return [copy.summary.heading,'',...(['name','company','email','phone'] as const).map(line),'',...(['industry','location','equipment','quantity','system','timeframe'] as const).map(line),'',copy.summary.requirements,value('message')].join('\n');
}
