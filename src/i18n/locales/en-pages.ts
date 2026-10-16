import type {
  ContentLayoutCopy,
  ServicesCopy,
  ResourcesCopy,
  AboutCopy,
} from '../page-types.ts';
export const contentLayout: ContentLayoutCopy = {
  referenceTitle: 'Phase 1 reference content',
  referenceDescription:
    'Final copy, terms and supporting materials are pending client review.',
};
export const services: ServicesCopy = {
  title: 'Services',
  description:
    'Explore installation, support and assessment with VisionSure.',
  installation: {
    title: 'Installation & Support',
    text: 'Reference service outline: review the equipment, agree camera and monitor positions, plan power and cable routing, and verify the configured system. Service area, installation packages, labour rates and support arrangements await client confirmation.',
  },
  assessment: {
    title: 'Free Assessment / Consultation',
    text: 'Discuss your vehicle or equipment and the view you need. Assessment scope, eligibility and booking method are pending confirmation.',
    label: 'Book a Free Assessment',
  },
  financing: {
    title: 'Financing (OAC)',
    text: 'Financing information, subject to approved credit, is pending confirmation. No financing offer, rate, payment schedule or approval is available on this preview.',
  },
  related: {
    title: 'Related Services',
    pending:
      'Service description, provider and external link pending client approval.',
    services: ['Crane repair', 'Joystick repair', 'OptiNect'],
  },
};
export const resources: ResourcesCopy = {
  title: 'Resources',
  description:
    'Find VisionSure terminology, planning guidance, project references and downloads.',
  cards: {
    glossary: {
      title: 'Glossary',
      text: 'Understand ADAS, DMS and FCW terminology.',
    },
    projects: {
      title: 'Projects in BC',
      text: 'Reference project layouts awaiting real installation information.',
    },
    faq: {
      title: 'FAQ',
      text: 'General guidance for planning a visibility system.',
    },
  },
  regulations: {
    title: 'Regulations',
    text: 'Official sources and practical reading guidance for commercial vehicle camera regulations in British Columbia.',
  },
  guide: {
    title: 'Which system do I need?',
    text: 'Start with the equipment, blind spots and operating conditions. Compare live views, recording, surrounding visibility, radar alerts and remote access. Final selection requires a configuration review.',
    label: 'Explore products',
  },
  downloads: {
    title: 'Downloads',
    text: 'Approved specification sheets, installation guides and brochures are pending. Download links will be added when the files are supplied.',
  },
};
export { about } from './en-about.ts';
