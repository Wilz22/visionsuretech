import type { Company } from '../data/company.ts';
import { founders } from '../data/founders.ts';
export function buildOrganizationSchema(company: Company) {
  const base = company.canonicalUrl;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': base + '/#organization',
    name: company.name,
    url: base,
    logo: new URL('/images/brand/visionsure-logo.svg', base).href,
    email: company.contact.email,
    telephone: company.contact.phoneE164,
    ...(company.contact.address
      ? {
          address: {
            '@type': 'PostalAddress',
            streetAddress: company.contact.address.streetAddress,
            addressLocality: company.contact.address.locality,
            addressRegion: company.contact.address.region,
            postalCode: company.contact.address.postalCode,
            addressCountry: company.contact.address.country,
          },
        }
      : {}),
    founder: founders.map((person) => ({
      '@type': 'Person',
      '@id': base + '/about/#' + person.id,
      name: person.name,
      jobTitle: person.jobTitle,
      url: base + '/about/#' + person.id,
      worksFor: { '@id': base + '/#organization' },
    })),
  };
}
