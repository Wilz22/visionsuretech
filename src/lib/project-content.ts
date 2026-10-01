import {projectDefinitions} from '../data/projectDefinitions.ts';
export interface ProjectEditorial {
  locale:string;projectId:string;title:string;summary:string;
  client?:string;location?:string;equipment?:string;challenge:string;approach:string;
  installation:string[];results:string[];systems:{code:string;note:string}[];
  photos:{src:string;alt:string;caption:string}[];
}
interface ProjectDefinition {
  slug:string;order:number;status:string;draft:boolean;industry:string;completed?:string;
  systemCodes:readonly string[];photos:readonly {src:string;width:number;height:number}[];
}
export function resolveProjectData(copy:ProjectEditorial) {
  const definition:ProjectDefinition|undefined=projectDefinitions.find(project=>project.slug===copy.projectId);
  if(!definition) throw new Error(`Unknown project: ${copy.projectId}`);
  const validate=(actual:string[],expected:readonly string[],context:string)=>{
    if(new Set(actual).size!==actual.length || actual.length!==expected.length || actual.some(id=>!expected.includes(id))) throw new Error(`Invalid project identities: ${copy.projectId}/${context}`);
  };
  validate(copy.systems.map(system=>system.code),definition.systemCodes,'systems');
  validate(copy.photos.map(photo=>photo.src),definition.photos.map(photo=>photo.src),'photos');
  const notes=new Map(copy.systems.map(system=>[system.code,system.note]));
  const photos=new Map(copy.photos.map(photo=>[photo.src,photo]));
  return {
    locale:copy.locale,slug:definition.slug,order:definition.order,status:definition.status,
    draft:definition.draft,industry:definition.industry,
    ...(definition.completed?{completed:definition.completed}:{}),
    title:copy.title,summary:copy.summary,
    ...(copy.client?{client:copy.client}:{}),...(copy.location?{location:copy.location}:{}),...(copy.equipment?{equipment:copy.equipment}:{}),
    challenge:copy.challenge,approach:copy.approach,installation:[...copy.installation],results:[...copy.results],
    systems:definition.systemCodes.map(code=>({code,note:notes.get(code)!})),
    photos:definition.photos.map(photo=>({...photo,alt:photos.get(photo.src)!.alt,caption:photos.get(photo.src)!.caption})),
  };
}
