document.querySelectorAll<HTMLElement>('[data-gallery]').forEach(gallery=>{
  const main=gallery.closest('figure')!.querySelector<HTMLImageElement>('[data-gallery-main]')!;
  gallery.querySelectorAll<HTMLButtonElement>('button').forEach(button=>button.addEventListener('click',()=>{
    main.src=button.dataset.src!;main.alt=button.dataset.alt!;
    main.width=Number(button.dataset.width);main.height=Number(button.dataset.height);
    gallery.querySelectorAll('button').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  }));
});
