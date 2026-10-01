import { getCollection } from 'astro:content';
import {getMessages} from '../i18n';
import {defaultLocale,type Locale} from '../i18n/config';
import {resolveIndustries} from './industry-content';
import {projectDefinitions} from '../data/projectDefinitions';
import { getPublishedProducts } from './products';

// Reference entries are intentionally visible for client review; drafts are not.
export async function getVisibleProjects(locale:Locale=defaultLocale) {
  const industries=resolveIndustries(getMessages(locale).industryEditorial);
  const entries = (await getCollection('projects', ({ data }) => !data.draft && data.locale===locale))
    .sort((a, b) => a.data.order - b.data.order);
  const solutions = await getPublishedProducts(locale);
  for(const definition of projectDefinitions.filter(project=>!project.draft)) {
    if(!entries.some(project=>project.data.slug===definition.slug)) throw new Error(`Missing project translation: ${locale}/${definition.slug}`);
  }

  for (const field of ['slug', 'order'] as const) {
    if (new Set(entries.map(({ data }) => data[field])).size !== entries.length) {
      throw new Error(`Visible projects must have unique ${field} values.`);
    }
  }

  return entries.map((entry) => {
    const industry = industries.find(({ id }) => id === entry.data.industry);
    if (!industry) throw new Error(`Unknown industry in project: ${entry.id}`);
    const systems = entry.data.systems.map(({ code, note }) => {
      const solution = solutions.find(({ data }) => data.systemCode === code);
      if (!solution) throw new Error(`Unavailable system ${code} in project: ${entry.id}`);
      return { solution, note };
    });
    return { entry, industry, systems };
  });
}

export type Project = Awaited<ReturnType<typeof getVisibleProjects>>[number];
