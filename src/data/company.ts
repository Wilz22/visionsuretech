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
    phoneE164: string;
    whatsappNumber: string;
    hours: string | null;
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
    email: 'info@visionsuretech.ca',
    phone: '(604) 710-4450',
    phoneE164: '+16047104450',
    whatsappNumber: '16047104450',
    hours: null,
    address: null,
  },
  social: {
    linkedin: null,
  },
};

export const routes = {
  home: '/',
  about: '/about/',
  contact: '/contact/',
  quote: '/quote/',
  products: '/products/',
  solutions: '/solutions/',
  industries: '/solutions/',
  dashCams: '/dash-cams/',
  services: '/services/',
  resources: '/resources/',
  glossary: '/glossary/',
  warranty: '/warranty-policy/',
  projects: '/projects/',
  faq: '/faq/',
  privacy: '/privacy-policy/',
  terms: '/terms/',
} as const;

// Reference labels only. Keep actual values null until supplied by the client.
export const contactPlaceholders = {
  email: 'Email address to be supplied',
  phone: 'Phone number to be supplied',
  address: 'Business address to be supplied',
};
