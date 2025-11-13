// Rotating main hero image with preloading and smooth crossfade
(function(){
  const container = document.getElementById('hero-rotator');
  if(!container) return;
  const imgA = container.querySelector('img.active');
  const imgB = container.querySelector('img.next');
  let showingA = true;
  let timer;

  function collectCandidates(){
    const list = [];
    AlbumsData.forEach(a=>{
      // Collect all images from all albums (excluding cover images)
      const allImages = a.images.filter(img => img && !img.startsWith('cover-'));
      allImages.forEach(f=> list.push(`${a.path}/${f}`));
      (a.children||[]).forEach(c=> {
        const childImages = c.images.filter(img => img && !img.startsWith('cover-'));
        childImages.forEach(f=> list.push(`${c.path}/${f}`));
      });
    });
    return list;
  }

  const candidates = collectCandidates();
  function pick(){ return candidates[Math.floor(Math.random()*candidates.length)]; }

  function swapTo(url){
    const nextImg = showingA ? imgB : imgA;
    const curImg = showingA ? imgA : imgB;
    const pre = new Image();
    pre.loading = 'eager';
    pre.decoding = 'async';
    pre.src = url;
    pre.onload = ()=>{
      nextImg.src = url;
      nextImg.classList.add('active');
      curImg.classList.remove('active');
      showingA = !showingA;
      // Apply the current hero image as background tint
      document.documentElement.classList.add('hero-tint');
      document.documentElement.style.setProperty('--hero-bg', `url('${url}')`);
      const pseudo = document.querySelector('html::before') || document.documentElement;
      if(pseudo) pseudo.style.backgroundImage = `url('${url}')`;
      document.documentElement.setAttribute('style', `--hero-bg:url('${url}')`);
      const style = document.createElement('style');
      style.textContent = `html::before{background-image:url('${url}')}`;
      document.head.appendChild(style);
    };
  }

  function start(){
    stop();
    timer = setInterval(()=> swapTo(pick()), 7000);
  }
  function stop(){ if(timer) clearInterval(timer); }

  // Kick off and hover-to-advance
  start();
  container.addEventListener('mouseenter', ()=>{
    swapTo(pick());
    start();
  });
})();
