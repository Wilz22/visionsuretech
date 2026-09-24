import { routes } from './company';

export type NavigationItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavigationItem[] = [
  { label: 'Solutions', href: routes.solutions },
  { label: 'Industries', href: routes.industries },
  { label: 'Projects', href: routes.projects },
  { label: 'About', href: routes.about },
  { label: 'FAQ', href: routes.faq },
];

export const primaryNavigationCta = {
  label: 'Request a Quote',
  href: routes.quote,
};

export const footerNavigation = {
  company: [
    { label: 'About Us', href: routes.about },
    { label: 'Industries', href: routes.industries },
    { label: 'Projects', href: routes.projects },
    { label: 'FAQ', href: routes.faq },
    { label: 'Contact', href: routes.contact },
  ],
  legal: [
    { label: 'Privacy Policy', href: routes.privacy },
    { label: 'Terms of Use', href: routes.terms },
  ],
} satisfies Record<string, NavigationItem[]>;
