// Rotating thumbnail near title picking random images across albums
(function(){
  function pickRandomImage(){
    // Flatten list excluding hero & cover duplicates for variety
    const candidates = [];
    AlbumsData.forEach(a=>{
      const imgs = a.images.filter(n=> !/^hero-/.test(n) && !/^cover-/.test(n));
      if(imgs.length){
        candidates.push({base: a.path, file: imgs[Math.floor(Math.random()*imgs.length)]});
      }
      if(a.children){
        a.children.forEach(c=>{
          const cimgs = c.images.filter(n=> !/^hero-/.test(n) && !/^cover-/.test(n));
          if(cimgs.length){
            candidates.push({base: c.path, file: cimgs[Math.floor(Math.random()*cimgs.length)]});
          }
        });
      }
    });
    if(!candidates.length) return null;
    return candidates[Math.floor(Math.random()*candidates.length)];
  }
  function cycle(){
    const holder = document.querySelector('.title-rotator img');
    if(!holder) return;
    const pick = pickRandomImage();
    if(pick){
      holder.src = `${pick.base}/${pick.file}`;
    }
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    cycle();
    setInterval(cycle, 6000);
  });
})();
