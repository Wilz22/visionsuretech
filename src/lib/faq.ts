import {getMessages} from '../i18n';
import {defaultLocale,type Locale} from '../i18n/config';
import {getPublishedProducts} from './products';
import {resolveFaqGroups} from './faq-content';
export async function getFaqGroups(locale:Locale=defaultLocale,resolveHref:(href:string)=>string=href=>href) {
 const messages=getMessages(locale);
 return resolveFaqGroups(messages.faqEditorial,await getPublishedProducts(),messages.faqPage,resolveHref);
}
export type FaqEntry=Awaited<ReturnType<typeof getFaqGroups>>[number]['items'][number];
