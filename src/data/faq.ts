export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  systemCodes?: string[];
  featured?: boolean;
};

export type FaqGroup = {
  id: string;
  title: string;
  description: string;
  items: FaqItem[];
};

// Product answers are based on the supplied VisionSure Systems catalog.
// Commercial terms remain subject to confirmation; do not infer guarantees.
export const faqGroups: FaqGroup[] = [
  {
    id: 'choosing-a-system', title: 'Choosing a system',
    description: 'Start with the view and the function your operation needs.',
    items: [
      {
        id: 'which-system', question: 'How do I choose the right system for my equipment?', featured: true,
        answer: 'Start by deciding whether you need live camera views, recorded footage, a 360° view, obstacle alerts or remote fleet access. Then review the equipment, mounting positions, available power and operating environment. The Solutions catalog lists the functions and components of each system; final suitability depends on your installation.',
      },
      {
        id: 'wired-or-wireless', question: 'What is the difference between the wired and wireless SEE systems?',
        answer: 'VST-S4101 pairs wireless cameras with a 7-inch touchscreen for live rear and side views. VST-S4102 uses wired cameras for live quad-view monitoring. Both are four-channel SEE systems without recording. The choice depends in part on whether routing video cables through the equipment is practical.',
        systemCodes: ['VST-S4101', 'VST-S4102'],
      },
      {
        id: 'around-view-or-radar', question: 'How does a 360° camera system differ from radar detection?',
        answer: 'VST-S6301 combines six camera feeds into a bird’s-eye view around the vehicle. VST-S8501 uses 77GHz radar for obstacle detection with configurable zones and proximity alerts. They provide different information: a surrounding camera view and detection alerts. Review each system’s functions against your equipment requirements.',
        systemCodes: ['VST-S6301', 'VST-S8501'],
      },
    ],
  },
  {
    id: 'recording-and-connectivity', title: 'Recording & connectivity',
    description: 'Understand local footage, recording capacity and remote access.',
    items: [
      {
        id: 'recording-available', question: 'Do all VisionSure camera systems record video?', featured: true,
        answer: 'No. The SEE systems provide live visibility without recording. The RECORD systems, VST-S4201 and VST-S4202, provide four-channel DVR monitoring with GPS location and speed information. Recording is also included in the VST-S6301 around-view system, while VST-S8401 AI MDVR adds remote fleet viewing and event review. Check the relevant system specification for its recording and connectivity features.',
        systemCodes: ['VST-S4201', 'VST-S4202', 'VST-S6301', 'VST-S8401'],
      },
      {
        id: 'recording-duration', question: 'How much footage can the recording systems store?',
        answer: 'The catalog lists up to 1,192 hours for the 2TB VST-S4201 and 596 hours for the 1TB VST-S4202, each for a single camera at 1080P. These figures do not describe four cameras recording together. For VST-S6301, the listed duration is up to 325 hours for six cameras at 1080P. Keep these camera-count and resolution conditions in mind when comparing storage.',
        systemCodes: ['VST-S4201', 'VST-S4202', 'VST-S6301'],
      },
      {
        id: 'remote-access', question: 'Can a fleet team view vehicles remotely?',
        answer: 'VST-S8401 8CH AI MDVR offers WiFi, GPS and 4G, with remote live viewing, vehicle location and event review. Confirm the required network coverage, mobile data arrangements and remote access setup for your operation. The catalog does not specify a universal data plan or subscription price.',
        systemCodes: ['VST-S8401'],
      },
    ],
  },
  {
    id: 'installation-and-compatibility', title: 'Installation & compatibility',
    description: 'Review power, mounting and equipment-specific choices.',
    items: [
      {
        id: 'wireless-power', question: 'Does a wireless camera still need power?',
        answer: 'Yes. For VST-S4101, the camera-to-monitor video connection is wireless, but a power connection is needed at each end. The listed wireless camera supply is 10–32V. Wireless video does not mean that all components operate without a power connection.',
        systemCodes: ['VST-S4101'],
      },
      {
        id: 'equipment-compatibility', question: 'Will a system fit any machine or vehicle?', featured: true,
        answer: 'Compatibility must be reviewed for the specific equipment. Relevant details include the make and model, supply voltage, mounting positions, cable routes, dashboard space and operating conditions. Industry examples are starting points for selection, not confirmation that a system fits every machine in that sector.',
      },
      {
        id: 'boom-tip-options', question: 'Which controls and power options are available for Boom-Tip Zoom?',
        answer: 'VST-S4901 offers wireless zoom with a choice of pedal or dash-switch control. The battery for moving boom sections is optional. Confirm the selected control, power arrangement and mounting configuration for the installation; the battery and both control alternatives should not be assumed to be included together.',
        systemCodes: ['VST-S4901'],
      },
    ],
  },
  {
    id: 'planning-your-project', title: 'Planning your project',
    description: 'Gather the information needed to define the scope.',
    items: [
      {
        id: 'quote-information', question: 'What information should I prepare for a quote?', featured: true,
        answer: 'Prepare the equipment make and model, number of vehicles or machines, operating location, visibility challenge and preferred functions. Note whether you need recording, proximity alerts or remote access. Equipment photographs, possible mounting positions and power details can help define the configuration. Include your preferred timeframe and any system codes you are considering.',
      },
      {
        id: 'installation-scope', question: 'How are installation and delivery arrangements confirmed?',
        answer: 'Confirm installation availability, location, scope, lead time and handover requirements with VisionSure for your project. The product catalog describes the systems and components; it does not establish a standard installation package or delivery schedule for every order.',
      },
      {
        id: 'warranty-and-support', question: 'What warranty and support terms apply?',
        answer: 'Request the applicable warranty coverage, exclusions, support arrangements and service process for the selected equipment before ordering. A universal warranty duration or support response time is not specified in the product catalog. These terms should be confirmed in the project documentation.',
      },
    ],
  },
];
