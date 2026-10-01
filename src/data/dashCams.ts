import {dashCamEditorial} from '../i18n/locales/en-dash-cams.ts';
import {resolveDashCams} from '../lib/dash-cam-content.ts';
import type {DashCamId} from './dashCamDefinitions.ts';
export type DashCam={slug:DashCamId;title:string;configuration:string;channels:number};
// English adapter for existing consumers; localized pages resolve their messages.
export const dashCams=resolveDashCams(dashCamEditorial);
