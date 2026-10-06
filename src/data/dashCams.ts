import {dashCamEditorial} from '../i18n/locales/en-dash-cams.ts';
import {resolveDashCams} from '../lib/dash-cam-content.ts';
export type DashCam={slug:string;title:string;configuration:string;channels:number;brand?:string;image?:{src:string;width:number;height:number;alt:string};availabilityLabel?:string;statusLabel?:string};
// English adapter for existing consumers; localized pages resolve their messages.
export const dashCams=resolveDashCams(dashCamEditorial);
