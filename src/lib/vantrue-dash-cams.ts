import {vantrueDashCamDefinitions} from '../data/vantrueDashCamDefinitions.ts';
import type {VantrueCopy} from '../i18n/vantrue-types';
export function resolveVantrueDashCams(copy:VantrueCopy) {
  return vantrueDashCamDefinitions.map(definition=>{
    const editorial=copy.models[definition.sku];
    if(!editorial?.title || !editorial.configuration)throw new Error('Missing Vantrue editorial content: '+definition.sku);
    return {...definition,title:editorial.title,configuration:editorial.configuration,statusLabel:definition.contentStatus==='complete'?copy.detailsReady:copy.previewTitle,image:{...definition.image,alt:editorial.title}};
  });
}
export type VantrueDashCam = ReturnType<typeof resolveVantrueDashCams>[number];
