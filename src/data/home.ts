import { routes } from './company';

export const homeContent = {
  hero: {
    eyebrow: 'Industrial safety & visibility',
    title: ['See more.', 'Operate safer.'],
    description:
      'Advanced camera, radar and AI-powered systems designed to reduce blind spots and improve operator awareness around cranes, fleets and heavy equipment.',
    primaryCta: {
      label: 'Request a Quote',
      href: routes.quote,
    },
    secondaryCta: {
      label: 'Explore Solutions',
      href: routes.solutions,
    },
    points: [
      'Built for demanding industrial environments',
      'Solutions tailored to your equipment and operation',
    ],
  },
  trustBar: {
    label: 'Built for demanding operations',
    description: 'Visibility technology designed for high-risk work zones.',
    operationTypes: [
      'Cranes & lifting',
      'Heavy equipment',
      'Construction sites',
      'Industrial fleets',
    ],
  },
  about: {
    eyebrow: 'Visibility with purpose',
    title: 'Safety technology that fits the way you work.',
    paragraphs: [
      'VisionSure Technologies helps industrial teams improve awareness around equipment with practical camera, radar and AI-powered safety systems.',
      'Every operation is different. That is why we focus on solutions that can support your equipment, environment and visibility requirements.',
    ],
    points: [
      'Camera systems for blind-spot visibility',
      'Radar detection for proximity awareness',
      'AI-powered technology for safer operations',
    ],
    cta: {
      label: 'Discover VisionSure',
      href: routes.about,
    },
  },
  solutions: {
    eyebrow: 'Explore our solutions',
    title: 'Technology built to improve visibility where it matters most.',
    description:
      'Explore practical safety systems for cranes, heavy equipment, construction operations and industrial fleets.',
    cta: {
      label: 'Explore all solutions',
      href: routes.solutions,
    },
  },
  whyVisionSure: {
    eyebrow: 'Why VisionSure',
    title: 'Practical safety technology for demanding operations.',
    description:
      'We help teams select visibility systems that suit their equipment, environment and operational requirements.',
    benefits: [
      {
        title: 'Built around the operation',
        description:
          'Solutions selected with the equipment, work zone and visibility challenge in mind.',
      },
      {
        title: 'Clear technology options',
        description:
          'Camera, radar and AI-powered systems for practical safety improvements.',
      },
      {
        title: 'A visibility-first approach',
        description:
          'Focused on helping operators see critical areas around equipment more clearly.',
      },
    ],
  },
} as const;
