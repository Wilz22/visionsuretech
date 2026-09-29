import { industries } from '../data/industries';
import { getPublishedSolutions } from './solutions';

export async function getIndustryCatalog() {
  const solutions = await getPublishedSolutions();
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
