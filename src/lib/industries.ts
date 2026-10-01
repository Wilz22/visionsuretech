import {getMessages} from '../i18n';
import {defaultLocale,type Locale} from '../i18n/config';
import {resolveIndustries} from './industry-content';
import { getPublishedProducts } from './products';

export async function getIndustryCatalog(locale:Locale=defaultLocale) {
  const industries=resolveIndustries(getMessages(locale).industryEditorial);
  const solutions = await getPublishedProducts(locale);
  const byCode = new Map(solutions.map((solution) => [solution.data.systemCode, solution]));

  return industries.map((industry) => ({
    ...industry,
    systems: industry.solutionMatches.map(({ systemCode, reason }) => {
      const solution = byCode.get(systemCode);
      if (!solution) {
        throw new Error(`Industry "${industry.id}" references an unavailable system: ${systemCode}`);
      }
      return { solution, reason };
    }),
  }));
}
