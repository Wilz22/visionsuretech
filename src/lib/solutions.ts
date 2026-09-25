import { getCollection } from 'astro:content';

export async function getPublishedSolutions() {
  const solutions = (await getCollection('solutions', ({ data }) => !data.draft))
    .sort((a, b) => a.data.order - b.data.order);

  for (const field of ['slug', 'systemCode', 'order'] as const) {
    const values = solutions.map(({ data }) => data[field]);
    if (new Set(values).size !== values.length) {
      throw new Error(`Published solutions must have unique ${field} values.`);
    }
  }
  return solutions;
}
