import {formatMessage} from '../i18n/format.ts';
import type {QuoteRuntimeCopy,SummaryField} from '../i18n/quote-types.ts';

export function buildQuoteSummary(values: Partial<Record<SummaryField,string>>, copy: QuoteRuntimeCopy): string {
  const value = (key: SummaryField) => values[key]?.trim() || copy.notSpecified;
  const line = (key: SummaryField) => formatMessage(copy.summary.line,{label:copy.summary.labels[key],value:value(key)});
  return [copy.summary.heading,'',...(['name','company','phone','equipment','system'] as const).map(line)].join('\n');
}
