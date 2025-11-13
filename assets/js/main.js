// Main interactions shared across pages

(function(){
  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if(navToggle && nav){
    navToggle.addEventListener('click', ()=>{
      nav.classList.toggle('open');
    });
  }

  // Smooth scroll for internal links
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
      nav && nav.classList.remove('open');
    }
  });

  // Lazy load images
  const lazyImages = document.querySelectorAll('img[data-src]');
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries, obs)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          obs.unobserve(img);
        }
      });
    }, {rootMargin:'200px'});
    lazyImages.forEach(img=> io.observe(img));
  } else {
    lazyImages.forEach(img=> img.src = img.dataset.src);
  }

  // Fade-in once loaded for any images on page
  document.querySelectorAll('img').forEach(img=>{
    if(img.complete) img.classList.add('loaded');
    img.addEventListener('load', ()=> img.classList.add('loaded'));
  });
})();
