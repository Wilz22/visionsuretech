import { en } from './locales/en.ts';
import { defaultLocale, type Locale } from './config.ts';
import type { Messages } from './types.ts';

const dictionaries: Record<Locale, Messages> = { en };

export function getMessages(locale: Locale = defaultLocale): Messages {
  const messages = dictionaries[locale];
  if (!messages) throw new Error(`Missing approved translation dictionary: ${locale}`);
  return messages;
}

export {formatMessage} from './format.ts';
