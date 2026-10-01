import type {LegalEditorial} from '../legal-types.ts';
export const legalEditorial:LegalEditorial={
  "privacy": {
    "title": "Privacy Policy",
    "description": "Privacy information for the VisionSure website and quote request form. Reference draft pending completion.",
    "sections": {
      "operator": {
        "title": "Who is responsible for your information",
        "paragraphs": [
          "This draft describes the intended privacy notice for the VisionSure Technologies website. The legal operator and privacy contact must be completed before it becomes the final policy."
        ],
        "pending": [
          "Legal entity: [REGISTERED COMPANY NAME]",
          "Business address: [REGISTERED OR CONTACT ADDRESS]",
          "Privacy contact: [NAME OR ROLE AND EMAIL]"
        ]
      },
      "request-information": {
        "title": "Information in a request",
        "paragraphs": [
          "The form asks for your name, company, email and a description of your requirements. You can also provide a phone number, industry, operating location, equipment model, number of machines, system of interest and preferred timeframe.",
          "When the form says online sending is unavailable, preparing a summary keeps these entries on the page. They are not submitted to VisionSure. Copying a summary places that text on your device’s clipboard. The form does not upload photographs."
        ]
      },
      "purpose": {
        "title": "How request information would be used",
        "paragraphs": [
          "Reference wording: information submitted through the live form is used to understand your equipment needs, respond to your enquiry and prepare or follow up on a proposed configuration. Permission to respond to an enquiry is separate from permission to send marketing communications."
        ],
        "pending": [
          "Confirm the exact business purposes, who may access requests and whether any additional use is planned."
        ]
      },
      "providers": {
        "title": "Form processing and service providers",
        "paragraphs": [
          "When online sending is enabled, the form uses Formspree to process the request for delivery to the configured VisionSure recipient. Hosting and email services may also handle technical or message data. This integration is prepared in the code but still requires a real form account and recipient."
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
          "The current site loads the Onest typeface through Google Fonts. Loading external resources involves requests to the relevant provider. No analytics or advertising tags are currently implemented in the site code.",
          "The quote form does not use browser localStorage to save your entries. The final notice must also describe the cookies, security tools and logs used by the production hosting and any enabled third-party services."
        ],
        "pending": [
          "Review production cookies, access logs, spam protection and third-party resources; update this section to match the deployed site."
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
          "The final notice should explain how to request access or corrections, ask about deletion or withdraw consent where applicable. Available rights and any response deadlines depend on the laws that apply to the business and the request."
        ],
        "pending": [
          "Request channel: [PRIVACY EMAIL OR POSTAL ADDRESS]",
          "Applicable jurisdiction and complaint route: [TO BE CONFIRMED]"
        ]
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
          "These reference terms concern the VisionSure Technologies website and its informational catalog. The company identity, jurisdiction and final conditions must be confirmed before publishing binding terms."
        ],
        "pending": [
          "Website operator: [REGISTERED COMPANY NAME]",
          "Address and contact: [BUSINESS ADDRESS AND EMAIL]",
          "Effective date: [DATE]"
        ]
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
          "Reference wording: system selection and installation should be assessed for the specific machine, power supply, mounting positions and operating environment. Website descriptions do not replace product manuals, installation requirements or the operating procedures applicable to the equipment."
        ],
        "pending": [
          "Confirm approved installation guidance and any product-specific safety statements."
        ]
      },
      "permitted-use": {
        "title": "Use of the website and its content",
        "paragraphs": [
          "Reference wording: use the website for legitimate enquiries and do not interfere with its operation or submit harmful or misleading material. Rights to text, logos, photographs and other materials remain with their respective rights holders."
        ],
        "pending": [
          "Confirm ownership, licensed assets and permitted reuse of catalog material."
        ]
      },
      "external-services": {
        "title": "External links and services",
        "paragraphs": [
          "The website may link to external resources or use third-party services. The final terms should identify relevant services and explain how their terms and privacy notices relate to the user’s interaction."
        ],
        "pending": [
          "Confirm the selected form processor and other external services before release."
        ]
      },
      "legal-conditions": {
        "title": "Liability, governing law and disputes",
        "paragraphs": [
          "This draft intentionally leaves liability provisions, governing law and dispute resolution to be completed for the actual company and applicable jurisdiction. No blanket exclusion or jurisdiction has been assumed."
        ],
        "pending": [
          "Liability provisions: [CLIENT-APPROVED WORDING]",
          "Governing law and dispute process: [JURISDICTION AND PROCESS]"
        ]
      },
      "contact-changes": {
        "title": "Contact and changes",
        "paragraphs": [
          "Questions about the final terms should be directed to the confirmed business contact. The approved version should state its effective date and explain how changes will be communicated."
        ],
        "pending": [
          "Contact: [BUSINESS EMAIL]",
          "Change notification process: [PROCESS]"
        ]
      }
    }
  }
};
