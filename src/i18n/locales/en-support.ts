import type {ReferencePageCopy,GlossaryCopy,NotFoundCopy} from '../page-types.ts';
export const warranty:ReferencePageCopy = {
 title:'Warranty Policy',description:'VisionSure warranty policy reference page awaiting approved terms.',
 sections:[{title:'Warranty terms pending approval',text:'This is a reference page, not an active warranty policy. The client must confirm coverage by product, duration, installation workmanship, exclusions, claim documentation, shipping and return procedures, and the relationship between supplier and VisionSure warranties.'},{title:'Before purchasing',text:'Ask VisionSure for the applicable written warranty and service terms for your selected configuration.'}],action:'Contact VisionSure',
};
export const memberOffers:ReferencePageCopy = {
 title:'Member Offers',description:'A space for approved VisionSure member benefits and offer conditions.',
 sections:[{title:'Member programme details are being prepared.',text:'Eligible memberships, benefits, validity periods and redemption conditions are pending client confirmation. No discount or membership offer is active on this reference page.'}],action:'Contact VisionSure',
};
export const whyBuyLocal:ReferencePageCopy = {
 title:'Why Buy Local',description:'Plan a personal-vehicle camera configuration with VisionSure in Langley.',
 sections:[{title:'Discuss your vehicle before choosing.',text:'Reference copy: an assessment can identify the views you need, possible camera positions and installation questions. The client will confirm local installation scope, support arrangements and approved service benefits.'}],action:'Book a free assessment',
};
export const glossary:GlossaryCopy = {
 title:'Glossary',description:'Reference definitions for ADAS, DMS and FCW used in visibility and camera systems.',navigationLabel:'Glossary terms',
 terms:{adas:{title:'ADAS — Advanced Driver Assistance Systems',text:'Reference definition: functions that assist a driver with awareness or driving tasks. Supported functions must be confirmed for each product.'},dms:{title:'DMS — Driver Monitoring System',text:'Reference definition: a system for monitoring aspects of driver behaviour or attention. Product capabilities, alerts and data handling are pending verification.'},fcw:{title:'FCW — Forward Collision Warning',text:'Reference definition: a warning about a potential forward collision. It does not imply automatic braking or replace driver responsibility.'}},
 notice:'These reference definitions await editorial approval. A term appearing here does not mean every VisionSure product supports that feature.',
};
export const notFound:NotFoundCopy = {
 title:'Page not found',description:'This page could not be found. Explore VisionSure solutions or return to the home page.',eyebrow:'404 / PAGE NOT FOUND',heading:['Let’s get you','back in view.'],text:'The page may have moved, or the address may be incorrect. Use one of the links below to continue.',home:'Back to Home',products:'Explore solutions',navigationLabel:'More ways to continue',
 cards:{industries:{title:'Find your industry',text:'Explore applications for your operation.'},faq:{title:'Find an answer',text:'Compare functions and plan your configuration.'},quote:{title:'Plan a request',text:'Start with your equipment requirements.'}},
};
