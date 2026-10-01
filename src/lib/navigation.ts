import { navigationEntries, footerEntries, type NavigationEntry } from '../data/navigation.ts';
import type { Messages, NavigationLabelId } from '../i18n/types.ts';

export interface NavigationItem { id: NavigationLabelId; label: string; href: string; children?: NavigationItem[]; }
export interface NavigationModel { main: NavigationItem[]; company: NavigationItem[]; legal: NavigationItem[]; }

export function buildNavigation(copy: Messages['navigation'], resolveHref: (href: string) => string = href => href): NavigationModel {
  const resolve = (entry: NavigationEntry): NavigationItem => {
    const label = copy.labels[entry.id];
    if (!label) throw new Error(`Missing navigation translation: ${entry.id}`);
    return { id: entry.id, label, href: resolveHref(entry.href), ...(entry.children ? { children: entry.children.map(resolve) } : {}) };
  };
  return { main: navigationEntries.map(resolve), company: footerEntries.company.map(resolve), legal: footerEntries.legal.map(resolve) };
}
