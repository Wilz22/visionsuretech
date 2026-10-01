interface LegalDefinition {status:'reference'|'published';effectiveDate:string|null;sectionIds:readonly string[];}
export const legalDefinitions={
  "privacy": {
    "status": "reference",
    "effectiveDate": null,
    "sectionIds": [
      "operator",
      "request-information",
      "purpose",
      "providers",
      "site-technology",
      "retention",
      "privacy-requests",
      "updates"
    ]
  },
  "terms": {
    "status": "reference",
    "effectiveDate": null,
    "sectionIds": [
      "website-operator",
      "catalog",
      "quotes-orders",
      "equipment",
      "permitted-use",
      "external-services",
      "legal-conditions",
      "contact-changes"
    ]
  }
} as const satisfies Record<string,LegalDefinition>;
export type LegalId=keyof typeof legalDefinitions;
export type {LegalDocument} from '../i18n/legal-types.ts';
