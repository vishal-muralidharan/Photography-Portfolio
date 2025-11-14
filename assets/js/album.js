// Album page renderer with flipbook style spreads
// Expects: <body data-album="andaman"> and data.js loaded

(function(){
  function resolveBase(p){
    // Pages are in assets/pages; adjust relative base when needed
    const path = window.location.pathname.replace(/\\/g,'/');
    const deep = path.includes('/assets/pages/') ? '../../' : '';
    return deep + p;
  }
  function chunk(arr, size){
    const out = [];
    for(let i=0;i<arr.length;i+=size) out.push(arr.slice(i,i+size));
    return out;
  }
  function buildLightbox(){
    const lb = document.createElement('div');
    lb.className = 'lightbox hidden';
    lb.innerHTML = `
      <button class="lb-close" aria-label="Close"><i class="ri-close-line"></i></button>
      <button class="lb-prev" aria-label="Previous"><i class="ri-arrow-left-s-line"></i></button>
      <img class="lb-img" alt="photo"/>
      <button class="lb-next" aria-label="Next"><i class="ri-arrow-right-s-line"></i></button>
    `;
    document.body.appendChild(lb);
    return lb;
  }
  function renderImages(wrapper, images, base){
    images.forEach((img, idx)=>{
      const fig = document.createElement('figure');
      fig.className = 'shot';
      const imgEl = document.createElement('img');
      imgEl.src = `${base}/${img}`;
      imgEl.alt = `Photo ${idx+1}`;
      imgEl.loading = 'lazy';
      imgEl.decoding = 'async';
      imgEl.addEventListener('load', ()=> imgEl.classList.add('loaded'));
      imgEl.addEventListener('error', ()=> fig.remove());
      fig.appendChild(imgEl);
      wrapper.appendChild(fig);
    });
  }
  function init(){
    const albumId = document.body.dataset.album;
    if(!albumId){return;}
    const album = findAlbumById(albumId);
    if(!album){return;}
    const allImages = album.images || [];
    
    // Filter out hero/cover entries and drop blanks, preventing empty slots
    const flipbookImages = allImages
      .filter(img => typeof img === 'string')
      .map(img => img.trim())
      .filter(img => img && !img.toLowerCase().startsWith('hero-') && !img.toLowerCase().startsWith('cover-'));
    
    // Calculate optimal images per spread for better distribution
    const totalImages = flipbookImages.length;
    const imagesPerSpread = totalImages <= 12 ? totalImages : 12;
    const pages = chunk(flipbookImages, imagesPerSpread);
    
    const container = document.querySelector('[data-flipbook]');
    const lb = buildLightbox();
    const lbImg = lb.querySelector('.lb-img');
    let currentIndex = 0;
    const shots = [];

    pages.forEach((set, pageIndex)=>{
      const page = document.createElement('section');
      page.className = 'spread';
      const wrapper = document.createElement('div');
      wrapper.className = 'spread-grid';
      renderImages(wrapper, set, resolveBase(album.path));
      page.appendChild(wrapper);
      container.appendChild(page);
      
      // Add click handlers directly to each image as they're created
      wrapper.querySelectorAll('.shot').forEach(fig=> {
        const img = fig.querySelector('img');
        shots.push(img);
        fig.style.cursor = 'zoom-in';
        fig.addEventListener('click', (e)=> {
          e.preventDefault();
          e.stopPropagation();
          open(img);
        });
      });
    });

    function open(img){
      currentIndex = shots.indexOf(img);
      lbImg.src = img.src;
      lb.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
    function close(){
      lb.classList.add('hidden');
      document.body.style.overflow = '';
    }
    function step(d){
      currentIndex = (currentIndex + d + shots.length) % shots.length;
      lbImg.src = shots[currentIndex].src;
    }
    
    // Add lightbox to hero image as well
    const heroImg = document.querySelector('.album-hero-img img');
    if(heroImg){
      heroImg.style.cursor = 'zoom-in';
      heroImg.addEventListener('click', ()=>{
        lbImg.src = heroImg.src;
        lb.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      });
    }
    
    lb.querySelector('.lb-close').onclick = close;
    lb.querySelector('.lb-prev').onclick = ()=> step(-1);
    lb.querySelector('.lb-next').onclick = ()=> step(1);
    lb.addEventListener('click', e=>{ if(e.target===lb) close(); });
    document.addEventListener('keydown', e=>{
      if(lb.classList.contains('hidden')) return;
      if(e.key==='Escape') close();
      if(e.key==='ArrowLeft') step(-1);
      if(e.key==='ArrowRight') step(1);
    });

    // Navigation arrows for flipbook pages
    const prev = document.querySelector('[data-prev]');
    const next = document.querySelector('[data-next]');
    function scrollSpread(delta){
      const spreads = Array.from(document.querySelectorAll('.spread'));
      const viewportLeft = container.scrollLeft;
      const width = container.clientWidth;
      let page = Math.round(viewportLeft / width);
      page = Math.min(Math.max(page + delta,0), spreads.length-1);
      container.scrollTo({left: page*width, behavior:'smooth'});
      updateArrows();
    }
    function updateArrows(){
      const spreads = Array.from(document.querySelectorAll('.spread'));
      const viewportLeft = container.scrollLeft;
      const width = container.clientWidth;
      const page = Math.round(viewportLeft / width);
      if(prev) prev.disabled = page === 0;
      if(next) next.disabled = page >= spreads.length - 1;
    }
    prev && prev.addEventListener('click', ()=> scrollSpread(-1));
    next && next.addEventListener('click', ()=> scrollSpread(1));
    container.addEventListener('scroll', updateArrows);
    updateArrows(); // Initialize on load
  }
  document.addEventListener('DOMContentLoaded', init);
})();
