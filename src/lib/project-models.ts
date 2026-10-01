import type {Project} from './projects.ts';
import type {Messages} from '../i18n/types.ts';
import {formatMessage} from '../i18n/format.ts';
import {projectUrl,industryUrl,productUrl} from './routes.ts';
import {routes} from '../data/company.ts';
export function buildProjectDetail(project:Project,messages:Messages,resolveHref:(href:string)=>string=href=>href) {
 const {entry:{data},industry,systems}=project;
 const reference=data.status==='reference';
 const copy=messages.projectUi;
 const keys=['client','location','equipment','completed'] as const;
 return {project,data,industry,reference,title:reference?formatMessage(copy.referenceTitle,{title:data.title}):data.title,
  facts:keys.filter(key=>reference||data[key]).map(key=>({id:key,label:copy.facts[key],value:data[key]??copy.pendingInfo})),
  approachTitle:reference?copy.referenceApproach:copy.solution,resultsTitle:reference?copy.pendingResults:copy.results,systemsTitle:reference?copy.referenceSystems:copy.systems,
  homeHref:resolveHref(routes.home),projectsHref:resolveHref(routes.projects),industryHref:resolveHref(industryUrl(industry.id)),
  systems:systems.map(item=>({...item,categoryName:messages.navigation.labels[item.solution.data.category],href:resolveHref(productUrl(item.solution.data))})),
  galleryPlaceholders:copy.galleryLabels.map(label=>formatMessage(copy.photoPendingFor,{label})),
 };
}
export type ProjectDetailModel=ReturnType<typeof buildProjectDetail>;
export function buildProjectOverview(projects:Project[],resolveHref:(href:string)=>string=href=>href) {
 return {hasReferences:projects.some(project=>project.entry.data.status==='reference'),hasPublished:projects.some(project=>project.entry.data.status==='published'),cards:projects.map(project=>({project,href:resolveHref(projectUrl(project.entry.data.slug))}))};
}
export type ProjectOverviewModel=ReturnType<typeof buildProjectOverview>;
