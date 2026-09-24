export type CompanyAddress = {
  streetAddress: string | null;
  locality: string | null;
  region: string | null;
  postalCode: string | null;
  country: string;
};

export type Company = {
  name: string;
  canonicalUrl: string;
  locale: string;
  contact: {
    email: string | null;
    phone: string | null;
    address: CompanyAddress | null;
  };
  social: {
    linkedin: string | null;
  };
};

export const company: Company = {
  name: 'VisionSure Technologies',
  canonicalUrl: 'https://www.visionsuretech.ca',
  locale: 'en-CA',
  contact: {
    email: null,
    phone: null,
    address: null,
  },
  social: {
    linkedin: null,
  },
};

export const routes = {
  home: '/',
  about: '/about',
  contact: '/contact',
  quote: '/contact#quote',
  solutions: '/solutions',
  industries: '/industries',
  projects: '/projects',
  faq: '/faq',
  privacy: '/privacy-policy',
  terms: '/terms',
} as const;
