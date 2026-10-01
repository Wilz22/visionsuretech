import {dashCamDefinitions} from '../data/dashCamDefinitions.ts';
import type {DashCamEditorial} from '../i18n/dash-cam-types.ts';
import type {DashCam} from '../data/dashCams.ts';
export function resolveDashCams(editorial:DashCamEditorial):DashCam[] {
  return dashCamDefinitions.map(({slug,channels})=>{
    const copy=editorial[slug];
    if(!copy?.title || !copy.configuration) throw new Error(`Missing dash cam content: ${slug}`);
    return {slug,channels,title:copy.title,configuration:copy.configuration};
  });
}
