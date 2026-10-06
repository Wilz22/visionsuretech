import Carousel from 'flowbite/lib/esm/components/carousel';

function initMediaCarousels(){
  document.querySelectorAll<HTMLElement>('[data-media-carousel]').forEach(root=>{
    if(root.dataset.ready)return;
    root.dataset.ready='true';
    const slides=Array.from(root.querySelectorAll<HTMLElement>('[data-media-slide]'));
    const dots=Array.from(root.querySelectorAll<HTMLButtonElement>('[data-media-dot]'));
    const dialog=root.querySelector<HTMLDialogElement>('[data-media-dialog]')!;
    const expanded=root.querySelector<HTMLImageElement>('[data-media-expanded]')!;
    const viewer=root.querySelector<HTMLElement>('[data-media-viewer]')!;
    const canvas=root.querySelector<HTMLElement>('[data-media-canvas]')!;
    const zoomButton=root.querySelector<HTMLButtonElement>('[data-media-zoom]')!;
    const carousel=new Carousel(root,slides.map((el,position)=>({el,position})),{
      indicators:{items:[],activeClasses:'',inactiveClasses:''},
      onChange(instance){
        const active=instance.getActiveItem().position;
        root.dataset.active=String(active);
        slides.forEach((slide,i)=>{slide.inert=i!==active;slide.setAttribute('aria-hidden',String(i!==active));});
        dots.forEach((dot,i)=>dot.setAttribute('aria-current',String(i===active)));
      },
    },{id:root.id,override:true});
    // Manual looping keeps product copy stable while customers read it.
    root.querySelector('[data-media-prev]')?.addEventListener('click',()=>carousel.prev());
    root.querySelector('[data-media-next]')?.addEventListener('click',()=>carousel.next());
    dots.forEach((dot,i)=>dot.addEventListener('click',()=>carousel.slideTo(i)));
    let startX=0,startY=0,swiped=false;
    const track=root.querySelector<HTMLElement>('[data-media-track]')!;
    track.addEventListener('touchstart',event=>{startX=event.touches[0].clientX;startY=event.touches[0].clientY;swiped=false;},{passive:true});
    track.addEventListener('touchend',event=>{
      const dx=event.changedTouches[0].clientX-startX,dy=event.changedTouches[0].clientY-startY;
      if(slides.length>1&&Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.3){swiped=true;dx<0?carousel.next():carousel.prev();}
    },{passive:true});
    slides.forEach(slide=>slide.querySelector('[data-media-open]')!.addEventListener('click',()=>{
      if(swiped){swiped=false;return;}
      const image=slide.querySelector('img')!;
      expanded.src=image.src;expanded.alt=image.alt;expanded.width=image.width;expanded.height=image.height;
      setZoom(false);viewer.scrollTop=0;viewer.scrollLeft=0;
      dialog.showModal();
    }));
    root.addEventListener('keydown',event=>{
      if(dialog.open||slides.length<2)return;
      if(event.key==='ArrowRight'){event.preventDefault();carousel.next();}
      if(event.key==='ArrowLeft'){event.preventDefault();carousel.prev();}
    });
    root.querySelector('[data-media-close]')!.addEventListener('click',()=>dialog.close());
    function setZoom(enabled:boolean){
      viewer.toggleAttribute('data-zoomed',enabled);zoomButton.setAttribute('aria-pressed',String(enabled));
      if(enabled){
        const ratio=expanded.naturalWidth/expanded.naturalHeight;
        const fitWidth=Math.min(viewer.clientWidth,viewer.clientHeight*ratio);
        const width=fitWidth*2.5,height=width/ratio;
        expanded.style.width=`${width}px`;expanded.style.height=`${height}px`;
        canvas.style.width=`${Math.max(width,viewer.clientWidth)}px`;canvas.style.height=`${Math.max(height,viewer.clientHeight)}px`;
        viewer.scrollLeft=(canvas.offsetWidth-viewer.clientWidth)/2;viewer.scrollTop=(canvas.offsetHeight-viewer.clientHeight)/2;
      }else{expanded.style.width='';expanded.style.height='';canvas.style.width='';canvas.style.height='';}
    }
    zoomButton.addEventListener('click',()=>setZoom(!viewer.hasAttribute('data-zoomed')));
    let drag:{x:number;y:number;left:number;top:number;pointer:number}|null=null,moved=false;
    viewer.addEventListener('pointerdown',event=>{
      moved=false;if(!viewer.hasAttribute('data-zoomed')||event.button!==0)return;
      drag={x:event.clientX,y:event.clientY,left:viewer.scrollLeft,top:viewer.scrollTop,pointer:event.pointerId};
      viewer.setPointerCapture(event.pointerId);viewer.setAttribute('data-dragging','');event.preventDefault();
    });
    viewer.addEventListener('pointermove',event=>{
      if(!drag)return;
      const dx=event.clientX-drag.x,dy=event.clientY-drag.y;
      if(Math.abs(dx)+Math.abs(dy)>5)moved=true;
      viewer.scrollLeft=drag.left-dx;viewer.scrollTop=drag.top-dy;
    });
    const endDrag=()=>{drag=null;viewer.removeAttribute('data-dragging');};
    viewer.addEventListener('pointerup',endDrag);viewer.addEventListener('pointercancel',endDrag);
    viewer.addEventListener('click',event=>{if(moved){event.preventDefault();moved=false;return;}if(event.target===expanded||viewer.hasAttribute('data-zoomed'))setZoom(!viewer.hasAttribute('data-zoomed'));});
    dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  });
}
initMediaCarousels();
document.addEventListener('astro:page-load',initMediaCarousels);
