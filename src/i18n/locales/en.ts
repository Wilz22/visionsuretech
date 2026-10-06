import {dashCamEditorial} from './en-dash-cams.ts';
import {vantrue} from './en-vantrue.ts';
import {n5s} from './en-n5s.ts';
import {s1ProMax} from './en-s1-pro-max.ts';
import {industryEditorial} from './en-industries.ts';
import {industrialDetail,industryDetail,personalDetail} from './en-detail.ts';
import {contentLayout,services,resources,about} from './en-pages.ts';
import {contactPage,assessment} from './en-contact.ts';
import {warranty,memberOffers,whyBuyLocal,glossary,notFound} from './en-support.ts';
import {catalogCategories,productOverview,categoryListing,industryOverview} from './en-listings.ts';
import {faqEditorial} from './en-faq-content.ts';
import {faqPage} from './en-faq.ts';
import {legalEditorial} from './en-legal-content.ts';
import {legalUi} from './en-legal.ts';
import {projectUi,projectsPage,industrySystem} from './en-projects.ts';
import {home} from './en-home.ts';
import type { Messages } from '../types.ts';
import {quoteForm} from './en-quote.ts';
import {catalogGrid,gallery,dashCamCard,dashCamOverview} from './en-catalog.ts';

const introduction = 'Use these questions to prepare a configuration review. This is reference guidance; final specifications and equipment compatibility await verified client information.';

export const en: Messages = {
  vantrue,
  vantrueProducts:{'VST-N5S':n5s,'VST-S1ProM4K4K':s1ProMax},
  productVisual:{fallbackTitle:'Product image pending',fallbackTags:[],byModel:{'VST-S8401':{title:'8 AI channels. One connected fleet.',tags:['WiFi','GPS','4G']}}},
  dashCamEditorial,
  industryEditorial,
  projectUi,projectsPage,industrySystem,
  faqEditorial,faqPage,legalEditorial,legalUi,
  catalogCategories,productOverview,categoryListing,industryOverview,
  warranty,memberOffers,whyBuyLocal,glossary,notFound,
  contactPage,assessment,
  contentLayout,services,resources,about,
  industrialDetail,industryDetail,personalDetail,
  home,
  catalogGrid,gallery,dashCamCard,dashCamOverview,
  formLayout: { contactHeading:'Contact VisionSure', locality:'Langley, BC', addressNotice:'Street address and business hours pending client confirmation.', locationHeading:'Location & hours', mapNotice:'Map location and opening hours will be added once the client confirms the address and schedule.' },
  quoteForm,
  common: { breadcrumb:'Breadcrumb', quote: 'Request a Quote', homeLink: '{company} - Home', whatsapp: 'WhatsApp', whatsappLabel: 'Chat with {company} on WhatsApp', productWhatsapp: 'Ask about this product', productWhatsappMessage: 'Hi, I’m interested in {product}. Could you provide more information and help me choose the right setup?' },
  navigation: {
    labels: {
      home: 'Home', products: 'Products', industries: 'Industries', dashCams: 'Dash Cams', services: 'Services', resources: 'Resources', about: 'About', contact: 'Contact', quote: 'Request a Quote',
      compareModels: 'Compare models', whyBuyLocal: 'Why buy local', memberOffers: 'Member offers', assessment: 'Book a free assessment', installationSupport: 'Installation, consultation & support', resourcesOverview: 'Resources overview', glossary: 'Glossary', faq: 'FAQ', projects: 'Projects', privacy: 'Privacy Policy', terms: 'Terms of Use', warranty: 'Warranty Policy',
      'multi-camera-systems': 'Multi-camera systems', '360-camera-systems': '360° Around View', 'radar-detection': 'Radar detection', 'crane-cameras': 'Crane cameras', 'cameras-monitors': 'Cameras & monitors', accessories: 'Accessories & parts',
      cranes: 'Cranes', construction: 'Construction', 'trucks-fleets': 'Trucks & Commercial Fleets', mining: 'Mining & Quarries', ports: 'Ports & Logistics', agriculture: 'Agriculture & Forestry',
    },
    primaryLabel: 'Primary navigation', showLinks: 'Show {section} links', explore: 'Explore {section}', openMenu: 'Open navigation menu', closeMenu: 'Close navigation menu', language: 'Language', languageLabel: 'Language: {language}', comingSoon: 'Coming soon',
  },
  footer: { summary: 'Camera, radar and visibility technology for equipment and personal vehicles.', locationNotice: 'Langley, BC · Address and hours pending confirmation.', sectionLabel: 'Footer {section}', company: 'Company', companyLabel: 'Footer company', legalLabel: 'Legal navigation', copyright: '© {year} {company}. All rights reserved.' },
  quoteCta: { heading: 'Start with your equipment.', description: 'Discuss the views, recording and detection functions your operation needs.' },
  productCard: { viewDetails: 'View details', viewDetailsFor: 'View details for {model}' },
  decisionHelp: {
    general: {
      title: 'Choosing a configuration', introduction, resourceLabel: 'Explore planning resources',
      considerations: [
        { title: 'Start with the task', text: 'Describe the blind spots, operating conditions and views the operator needs. Camera visibility, recording and obstacle alerts serve different purposes.' },
        { title: 'Check the installation', text: 'Review camera and monitor positions, available power, mounting and cable routing. Component availability and equipment suitability need confirmation for the selected configuration.' },
      ],
    },
    multiCamera: {
      title: 'Choosing a configuration', introduction, resourceLabel: 'Explore planning resources',
      considerations: [
        { title: 'Wired or wireless?', text: 'Review where video cables can run and where power is available. Wireless cameras still need power; a wireless video connection does not remove that installation requirement.' },
        { title: 'Live views or recording?', text: 'Decide whether operators need live visibility only or whether footage must be stored for later review. Recording and remote access vary by configuration; check the individual system specifications.' },
      ],
    },
  },
};
