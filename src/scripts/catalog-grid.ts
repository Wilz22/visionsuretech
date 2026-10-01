import {matchesCatalogProduct} from '../lib/catalog-filters';
import {formatCount} from '../i18n/format';
import type {CountCopy} from '../i18n/catalog-types';
document.querySelectorAll<HTMLElement>('[data-catalog]').forEach(grid=>{
  const input=grid.querySelector<HTMLInputElement>('[data-search-input]')!;
  const select=grid.querySelector<HTMLSelectElement>('[data-class-input]')!;
  const cards=[...grid.querySelectorAll<HTMLElement>('[data-product-card]')];
  const countCopy:CountCopy=JSON.parse(grid.dataset.countCopy!);
  const update=()=>{
    let count=0;
    cards.forEach(card=>{
      card.hidden=!matchesCatalogProduct({search:card.dataset.search!,catalogClass:card.dataset.class!},{query:input.value,catalogClass:select.value});
      if(!card.hidden)count++;
    });
    grid.querySelector('[data-count]')!.textContent=formatCount(count,countCopy,grid.dataset.locale!);
    grid.querySelector<HTMLElement>('[data-empty]')!.hidden=count!==0;
  };
  input.addEventListener('input',update);select.addEventListener('change',update);
});
