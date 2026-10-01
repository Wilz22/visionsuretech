import {getMessages,formatMessage} from '../i18n/index.ts';
import {defaultLocale,type Locale} from '../i18n/config.ts';
import {buildNavigation} from './navigation.ts';
import {company,routes} from '../data/company.ts';

const localeMetadata:Record<Locale,{htmlLang:string;openGraph:string}>={en:{htmlLang:'en',openGraph:'en_CA'}};
export function buildPageShell(locale:Locale=defaultLocale,resolveHref:(href:string)=>string=href=>href) {
  const messages=getMessages(locale);
  const metadata=localeMetadata[locale];
  if(!metadata) throw new Error(`Missing locale metadata: ${locale}`);
  return {locale,messages,metadata,navigation:buildNavigation(messages.navigation,resolveHref),
    homeHref:resolveHref(routes.home),homeLabel:formatMessage(messages.common.homeLink,{company:company.name})};
}
