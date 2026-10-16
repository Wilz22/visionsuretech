import type {LegalEditorial} from '../legal-types.ts';
import {company} from '../../data/company.ts';
import {buildLocation} from '../../lib/location.ts';
const address=buildLocation(company.contact.address)?.label;
const contactLine=[company.name,address].filter(Boolean).join(' · ');
const contactLinks=company.contact.email ? [{label:company.contact.email,href:`mailto:${company.contact.email}`}] : [];
export const legalEditorial:LegalEditorial={
  "privacy": {
    "title": "Privacy Policy",
    "description": "Privacy information for the VisionSure website and quote request form. Reference draft pending completion.",
    "sections": {
      "operator": {
        "title": "Who is responsible for your information",
        "paragraphs": [
          contactLine,
          "This notice describes the website and enquiry channels. The registered operator and designated privacy contact still require confirmation."
        ],
        "pending": [
          "Registered legal entity and any relationship to the VisionSure trading name: [CONFIRM]",
          "Designated privacy contact or role, and confirmation that the business email routes privacy requests appropriately: [CONFIRM]"
        ],
        "links": contactLinks
      },
      "request-information": {
        "title": "Information in a request",
        "paragraphs": [
          "The quote form asks for full name, company, an optional phone number, optional equipment type and the product of interest. It does not request an email address, payment information or file uploads.",
          "While online sending is unavailable, entries stay on the page and are not submitted to VisionSure. Copying a summary places the text on your device’s clipboard. Leaving or reloading the page clears the entries.",
          "If you contact VisionSure by email, phone or WhatsApp, the information you choose to share is sent through that channel. Product enquiry links can prefill the product name and page URL in WhatsApp; you decide whether to send the message."
        ]
      },
      "purpose": {
        "title": "How request information would be used",
        "paragraphs": [
          "Proposed business use: respond to enquiries, discuss equipment and product selection, and prepare or follow up on a requested quotation. Responding to an enquiry does not itself enrol you in a newsletter or marketing list."
        ],
        "pending": [
          "Confirm the exact business purposes, who may access requests and whether any additional use is planned."
        ]
      },
      "providers": {
        "title": "Form processing and service providers",
        "paragraphs": [
          "Online form delivery is currently disabled. Formspree support is prepared in the code, but the provider, account and recipient have not been confirmed. Preparing a summary does not send it to Formspree.",
          "Email and WhatsApp enquiries use the services chosen by the sender and recipient. Hosting and email providers may process technical or message information. Confirm the actual providers and their practices before release."
        ],
        "pending": [
          "List the selected hosting, form and email providers.",
          "Confirm processing locations, international transfers and applicable provider terms.",
          "Identify any additional recipients or disclosures required for the actual business process."
        ]
      },
      "site-technology": {
        "title": "Website technology",
        "paragraphs": [
          "The site loads the Onest typeface from Google Fonts and embeds Google Maps to display the Langley location. Loading these resources connects your browser to Google and can disclose technical information such as your IP address and browser details. Google may use cookies or other identifiers under its own privacy policy and your settings.",
          "WhatsApp links open an external service. There are currently no Matomo, Meta/Facebook Pixel, Google Analytics, newsletter subscriptions, online checkout or payment collection integrations in the site code.",
          "The quote form does not save entries in localStorage or sessionStorage. This does not mean the website or its external providers are cookie-free. Production hosting logs, embedded-service cookies and any consent controls still need to be checked against the deployed configuration."
        ],
        "pending": [
          "Review production cookies, access logs, spam protection and third-party resources; update this section to match the deployed site."
        ],
        "links": [
          {
            "label": "Google Privacy Policy",
            "href": "https://policies.google.com/privacy?hl=en"
          }
        ]
      },
      "retention": {
        "title": "Retention and protection",
        "paragraphs": [
          "Reference wording: access to enquiries should be limited to people who need them for the stated purpose, with retention and deletion arrangements appropriate to the information collected."
        ],
        "pending": [
          "Retention period or criteria: [PERIOD / BUSINESS CRITERIA]",
          "Deletion, backups and provider retention: [CONFIRMED PROCESS]",
          "Security and incident contact: [CONFIRMED ARRANGEMENTS]"
        ]
      },
      "privacy-requests": {
        "title": "Questions and privacy requests",
        "paragraphs": [
          "Use the business contact below to raise a privacy question or ask about access, corrections, deletion or withdrawing consent. The designated privacy contact and the procedures, exceptions and applicable response periods must be confirmed before this draft is approved."
        ],
        "pending": [
          "Confirm the designated privacy officer, request handling and identity-verification process.",
          "Review applicable Canadian and British Columbia privacy requirements and the appropriate complaint route; do not assume the previous website’s EU GDPR clauses apply."
        ],
        "links": contactLinks
      },
      "updates": {
        "title": "Updates to this notice",
        "paragraphs": [
          "An effective date and a process for notifying users of material changes will be included in the approved notice. This reference draft does not assert compliance with a particular law."
        ],
        "pending": [
          "Effective date: [DATE]",
          "Material-change notification process: [PROCESS]"
        ]
      }
    }
  },
  "terms": {
    "title": "Terms of Use",
    "description": "Reference terms for using the VisionSure website and its product information, pending client review.",
    "sections": {
      "website-operator": {
        "title": "Website operator and scope",
        "paragraphs": [
          contactLine,
          "These draft terms cover use of the informational website. A request or website visit does not by itself confirm an order, installation agreement or acceptance of separate sales conditions."
        ],
        "pending": [
          "Registered website operator: [LEGAL ENTITY TO CONFIRM]",
          "Effective date: [DATE]"
        ],
        "links": contactLinks
      },
      "catalog": {
        "title": "Product and application information",
        "paragraphs": [
          "Reference wording: product pages describe systems, components and options for discussion. Final compatibility and configuration depend on the equipment and installation requirements. Confirm specifications, availability and included components for the proposed order.",
          "Projects marked “Reference example” illustrate the planned case study format. They are not evidence of completed installations or measured customer outcomes."
        ]
      },
      "quotes-orders": {
        "title": "Enquiries, quotes and orders",
        "paragraphs": [
          "Preparing a local summary does not send a request. When live sending is enabled, acceptance by the form service confirms submission processing; it does not constitute a quotation, an accepted order or a promised delivery date.",
          "Reference wording: pricing, payment, installation scope, delivery, warranty and support are to be set out separately in the applicable written quotation or agreement."
        ],
        "pending": [
          "Confirm quote validity, order acceptance and the separate sales terms used by the business."
        ]
      },
      "equipment": {
        "title": "Equipment use and installation",
        "paragraphs": [
          "Camera, radar and visibility systems assist awareness; they do not replace trained operators, safe working procedures, applicable safety requirements or professional supervision.",
          "Check that the selected system suits the machine and operating environment. Installation should be carried out by qualified personnel following the product instructions, equipment manufacturer guidance and applicable local requirements. Website material is general information and does not replace a site-specific assessment or professional safety advice."
        ],
        "pending": [
          "Confirm the approved wording with the client and the relevant product instructions, including any product-specific limitations."
        ]
      },
      "permitted-use": {
        "title": "Use of the website and its content",
        "paragraphs": [
          "Use the website for legitimate enquiries and do not interfere with its operation or submit harmful or misleading material. Text, logos, photographs and other materials belong to their respective rights holders. Vantrue products and branding identify the manufacturer; VisionSure presents them as an authorized retailer."
        ],
        "pending": [
          "Confirm ownership, licensed assets and permitted reuse of catalog material."
        ]
      },
      "external-services": {
        "title": "External links and services",
        "paragraphs": [
          "This site embeds Google Maps, loads Google Fonts and links to WhatsApp and other external pages. These services have their own terms and privacy practices. The privacy notice describes the current integrations; any future form or booking provider must be added when selected."
        ],
        "links": [
          {
            "label": "Read the Privacy Policy",
            "href": "/privacy-policy/"
          }
        ]
      },
      "legal-conditions": {
        "title": "Liability, governing law and disputes",
        "paragraphs": [
          "Liability, governing law and dispute provisions remain pending client-approved wording for the actual company and its business practices. Product warranties, installation commitments and sales conditions must be confirmed separately; this draft does not establish or waive them."
        ],
        "pending": [
          "Liability provisions: [CLIENT-APPROVED WORDING]",
          "Governing law and dispute process: [JURISDICTION AND PROCESS]"
        ]
      },
      "contact-changes": {
        "title": "Contact and changes",
        "paragraphs": [
          "Use the business contact below for questions about these draft terms. The approved version must state its effective date and explain how changes will be communicated."
        ],
        "pending": [
          "Effective date and change notification process: [CONFIRM]"
        ],
        "links": contactLinks
      }
    }
  }
};
