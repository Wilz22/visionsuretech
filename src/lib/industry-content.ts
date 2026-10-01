import {industryDefinitions} from '../data/industryDefinitions.ts';
import type {IndustryEditorial} from '../i18n/industry-types.ts';
import type {Industry} from '../data/industries.ts';

export function resolveIndustries(editorial:IndustryEditorial):Industry[] {
  return industryDefinitions.map(definition=>{
    const copy=editorial[definition.id];
    if(!copy) throw new Error(`Missing industry content: ${definition.id}`);
    return {
      id:definition.id,number:definition.number,
      gradient:definition.gradient,orb:definition.orb,icon:definition.icon,
      title:copy.title,label:copy.label,description:copy.description,overview:copy.overview,
      needs:[...copy.needs],
      solutionMatches:definition.systemCodes.map(systemCode=>{
        const reason=copy.reasons[systemCode];
        if(!reason) throw new Error(`Missing industry recommendation: ${definition.id}/${systemCode}`);
        return {systemCode,reason};
      }),
    };
  });
}
