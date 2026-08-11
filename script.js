document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(b=>b.classList.remove('active'));document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));btn.classList.add('active');document.getElementById(btn.dataset.tab).classList.add('active')}));const toggle=document.querySelector('.menu-toggle');toggle.addEventListener('click',()=>document.querySelector('.header').classList.toggle('open'));document.querySelectorAll('.header nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.header').classList.remove('open')));
const menuToggle=document.querySelector('.menu-toggle'); if(menuToggle){menuToggle.setAttribute('aria-expanded','false');menuToggle.addEventListener('click',()=>menuToggle.setAttribute('aria-expanded',document.querySelector('.header').classList.contains('open')?'true':'false'));}

const galleryTrigger=document.querySelector('.food-gallery-trigger');
const foodLightbox=document.getElementById('foodLightbox');
if(galleryTrigger && foodLightbox){
  const main=foodLightbox.querySelector('.lightbox-main');
  const thumbs=[...foodLightbox.querySelectorAll('.thumb')];
  const closeBtn=foodLightbox.querySelector('.lightbox-close');
  const prev=foodLightbox.querySelector('.lightbox-prev');
  const next=foodLightbox.querySelector('.lightbox-next');
  let current=0;
  const show=(i)=>{current=(i+thumbs.length)%thumbs.length;const t=thumbs[current];main.src=t.dataset.src;main.alt=t.dataset.alt||'Treehouse food';thumbs.forEach((x,n)=>x.classList.toggle('active',n===current));};
  const open=()=>{foodLightbox.classList.add('open');foodLightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';show(current);closeBtn.focus();};
  const close=()=>{foodLightbox.classList.remove('open');foodLightbox.setAttribute('aria-hidden','true');document.body.style.overflow='';galleryTrigger.focus();};
  galleryTrigger.addEventListener('click',open);
  galleryTrigger.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
  thumbs.forEach((t,i)=>t.addEventListener('click',()=>show(i)));
  prev.addEventListener('click',()=>show(current-1));next.addEventListener('click',()=>show(current+1));closeBtn.addEventListener('click',close);
  foodLightbox.addEventListener('click',e=>{if(e.target===foodLightbox)close();});
  document.addEventListener('keydown',e=>{if(!foodLightbox.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(current-1);if(e.key==='ArrowRight')show(current+1);});
}
