import {matchesCameraChannels} from '../lib/catalog-filters';
import {formatCount} from '../i18n/format';
import type {CountCopy} from '../i18n/catalog-types';
document.querySelectorAll<HTMLElement>('[data-dash-list]').forEach(list=>{
  const select=list.querySelector<HTMLSelectElement>('[data-dash-filter]')!;
  const copy:CountCopy=JSON.parse(list.dataset.countCopy!);
  select.addEventListener('change',()=>{
    let count=0;
    list.querySelectorAll<HTMLElement>('[data-dash-channel]').forEach(card=>{
      card.hidden=!matchesCameraChannels(Number(card.dataset.dashChannel),select.value);
      if(!card.hidden)count++;
    });
    list.querySelector('[data-dash-count]')!.textContent=formatCount(count,copy,list.dataset.locale!);
    list.querySelector<HTMLElement>('[data-dash-empty]')!.hidden=count!==0;
  });
});
