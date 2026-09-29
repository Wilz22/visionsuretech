import { getCollection } from 'astro:content';
import { industries } from '../data/industries';
import { getPublishedSolutions } from './solutions';

// Reference entries are intentionally visible for client review; drafts are not.
export async function getVisibleProjects() {
  const entries = (await getCollection('projects', ({ data }) => !data.draft))
    .sort((a, b) => a.data.order - b.data.order);
  const solutions = await getPublishedSolutions();

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
