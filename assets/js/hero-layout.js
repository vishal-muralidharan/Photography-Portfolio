// Automatically detect hero image orientation and apply appropriate layout
(function(){
  const hero = document.querySelector('.album-page-hero');
  if(!hero) return;
  
  const heroImg = hero.querySelector('.album-hero-img img');
  if(!heroImg) return;
  
  function checkOrientation(){
    // Wait for image to load to get natural dimensions
    if(heroImg.complete && heroImg.naturalWidth > 0){
      const isLandscape = heroImg.naturalWidth > heroImg.naturalHeight;
      if(isLandscape){
        hero.classList.add('landscape-hero');
      } else {
        hero.classList.remove('landscape-hero');
      }
    }
  }
  
  // Check on load
  heroImg.addEventListener('load', checkOrientation);
  
  // Check immediately if already loaded
  checkOrientation();
})();
