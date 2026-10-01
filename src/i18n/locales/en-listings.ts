import type {CatalogCategoryCopy,ProductOverviewCopy,CategoryListingCopy,IndustryOverviewCopy} from '../listing-types.ts';
export const catalogCategories:CatalogCategoryCopy = {
 'multi-camera-systems':{title:'Multi-camera systems (4–8CH)',description:'Explore live views, onboard recording and connected fleet monitoring.'},
 '360-camera-systems':{title:'360° Around View systems',description:'Bring surrounding camera views together for awareness around the equipment.'},
 'radar-detection':{title:'Radar detection',description:'Explore proximity alerts alongside camera visibility.'},
 'crane-cameras':{title:'Crane cameras',description:'Explore zoom and boom-tip visibility for lifting operations.'},
 'cameras-monitors':{title:'Individual cameras & monitors',description:'Review cameras and monitors used in VisionSure systems.'},
 accessories:{title:'Accessories & parts',description:'Review optional components and controls for your configuration.'},
};
export const productOverview:ProductOverviewCopy = {title:'Products',description:'Explore VisionSure camera systems, recording, 360° visibility, radar detection and crane cameras.',navigationLabel:'Product categories',heading:'Find a system'};
export const categoryListing:CategoryListingCopy = {componentsHeading:'Components from reference configurations',componentsNotice:'Availability and standalone part details await the verified Product Master Sheet. Items below retain their original system context; they are not a confirmed standalone sales catalog.',component:'Component',description:'Description',system:'System',relatedIndustries:'Related industries'};
export const industryOverview:IndustryOverviewCopy = {title:'Industries',description:'Explore visibility applications for cranes, construction, trucks, mining, ports, agriculture and forestry.',explore:'Explore application'};
