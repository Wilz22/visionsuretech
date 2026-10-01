import type {ContentLayoutCopy,ServicesCopy,ResourcesCopy,AboutCopy} from '../page-types.ts';
export const contentLayout:ContentLayoutCopy = {referenceTitle:'Phase 1 reference content',referenceDescription:'Final copy, terms and supporting materials are pending client review.'};
export const services:ServicesCopy = {
 title:'Services',description:'Explore installation, support, assessment and related services with VisionSure.',
 installation:{title:'Installation & Support',text:'Reference service outline: review the equipment, agree camera and monitor positions, plan power and cable routing, and verify the configured system. Service area, installation packages, labour rates and support arrangements await client confirmation.'},
 assessment:{title:'Free Assessment / Consultation',text:'Discuss your vehicle or equipment and the view you need. Assessment scope, eligibility and booking method are pending confirmation.',label:'Book a Free Assessment'},
 financing:{title:'Financing (OAC)',text:'Financing information, subject to approved credit, is pending confirmation. No financing offer, rate, payment schedule or approval is available on this preview.'},
 related:{title:'Related Services',pending:'Service description, provider and external link pending client approval.',services:['Crane repair','Joystick repair','OptiNect']},
};
export const resources:ResourcesCopy = {
 title:'Resources',description:'Find VisionSure terminology, planning guidance, project references and downloads.',
 cards:{glossary:{title:'Glossary',text:'Understand ADAS, DMS and FCW terminology.'},projects:{title:'Projects in BC',text:'Reference project layouts awaiting real installation information.'},faq:{title:'FAQ',text:'General guidance for planning a visibility system.'}},
 regulations:{title:'Regulations',text:'Reference section for relevant CSA, WorkSafeBC and ISO guidance. Applicable documents, versions and approved explanations must be supplied or reviewed by the client. No product certification is claimed.'},
 guide:{title:'Which system do I need?',text:'Start with the equipment, blind spots and operating conditions. Compare live views, recording, surrounding visibility, radar alerts and remote access. Final selection requires a configuration review.',label:'Explore products'},
 downloads:{title:'Downloads',text:'Approved specification sheets, installation guides and brochures are pending. Download links will be added when the files are supplied.'},
};
export const about:AboutCopy = {
 title:'About VisionSure Technologies',description:'Learn about VisionSure’s focus on visibility technology, its Langley location and contact channels.',
 introTitle:'Visibility with purpose.',historyPending:'Company history, team information and service area will be added after client review.',
 location:{title:'Based in Langley, BC',text:'Discuss your equipment and visibility requirements with VisionSure. Street address, map location and business hours are pending confirmation.'},
 brands:{title:'Brands we carry',text:'VisionSure products are presented under the VisionSure brand. Additional brand information requires client approval; supplier names are not published.'},
 planning:{title:'Start with the right questions.',steps:['Identify the equipment, operating environment and blind spots.','Decide whether you need live views, recording, detection or remote access.','Review camera positions, power, mounting, cables and connectivity.'],label:'Read the planning FAQs'},
 contactTitle:'Contact VisionSure',
};
