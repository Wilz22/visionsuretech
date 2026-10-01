import type { NavigationLabelId } from '../i18n/types.ts';
import {productCategoryIds} from './catalogCategories.ts';
import {industries} from './industries.ts';
import {categoryUrl,industryUrl} from '../lib/routes.ts';

export interface NavigationEntry { id: NavigationLabelId; href: string; children?: readonly NavigationEntry[]; }

// Stable identities and destinations only. Display labels belong to dictionaries.
export const navigationEntries: readonly NavigationEntry[] = [
  { id: 'home', href: '/' },
  { id: 'products', href: '/products/', children: productCategoryIds.map(id => ({ id, href: categoryUrl(id) })) },
  { id: 'industries', href: '/solutions/', children: industries.map(industry => ({ id: industry.id as NavigationLabelId, href: industryUrl(industry.id) })) },
  { id: 'dashCams', href: '/dash-cams/', children: [{ id: 'compareModels', href: '/dash-cams/' },{ id: 'whyBuyLocal', href: '/dash-cams/why-buy-local/' },{ id: 'memberOffers', href: '/dash-cams/member-offers/' },{ id: 'assessment', href: '/dash-cams/book-assessment/' }] },
  { id: 'services', href: '/services/', children: [{ id: 'installationSupport', href: '/services/' }] },
  { id: 'resources', href: '/resources/', children: [{ id: 'resourcesOverview', href: '/resources/' },{ id: 'glossary', href: '/glossary/' },{ id: 'faq', href: '/faq/' },{ id: 'projects', href: '/projects/' }] },
  { id: 'about', href: '/about/' },
];
export const footerEntries: { company: readonly NavigationEntry[]; legal: readonly NavigationEntry[] } = {
  company: [{ id: 'home', href: '/' },{ id: 'about', href: '/about/' },{ id: 'contact', href: '/contact/' },{ id: 'quote', href: '/quote/' }],
  legal: [{ id: 'privacy', href: '/privacy-policy/' },{ id: 'terms', href: '/terms/' },{ id: 'warranty', href: '/warranty-policy/' }],
};
