import { faqGroups } from '../data/faq';
import { getPublishedSolutions } from './solutions';

export async function getFaqGroups() {
  const solutions = await getPublishedSolutions();
  return faqGroups.map((group) => ({
    ...group,
    items: group.items.map((item) => ({
      ...item,
      links: (item.systemCodes ?? []).map((code) => {
        const solution = solutions.find(({ data }) => data.systemCode === code);
        if (!solution) throw new Error(`FAQ ${item.id} references unavailable system ${code}`);
        return { href: `/solutions/${solution.data.slug}`, label: `${code} · ${solution.data.title}` };
      }),
    })),
  }));
}

export type FaqEntry = Awaited<ReturnType<typeof getFaqGroups>>[number]['items'][number];
