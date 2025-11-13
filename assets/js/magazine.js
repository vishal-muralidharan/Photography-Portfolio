// Build dynamic magazine index from AlbumsData
(function(){
  function coverForAlbum(album){
    // prefer cover-* then hero-* then first image
    const cover = album.images.find(i=> i.startsWith('cover-')) || album.images.find(i=> i.startsWith('hero-')) || album.images[0];
    return `${album.path}/${cover}`;
  }
  function heroTaglines(id){
    const map = {
      andaman: 'Island Life',
      birds: 'Wild Wonders',
      diwali: 'Festival of Lights',
      kerala: 'Backwaters & Culture',
      landscape: 'Earth Tones'
    };
    return map[id] || '';
  }
  function albumPage(id){
    return {
      'andaman':'andaman.html','birds':'birds.html','diwali':'diwali.html','kerala':'kerala.html','landscape':'landscape.html','kerala-boats':'kerala-boats.html','kerala-jeeps':'kerala-jeeps.html','kerala-people':'kerala-people.html'
    }[id] || `gallery.html?album=${id}`;
  }
  function buildMagazine(){
    const host = document.getElementById('magazine');
    if(!host) return;
    AlbumsData.forEach(album=>{
      // main album card
      const card = document.createElement('a');
      card.href = albumPage(album.id);
      card.className = 'mag-card';
      card.innerHTML = `
        <img src="${coverForAlbum(album)}" alt="${album.title} cover" loading="lazy" />
        <div class="info">
          <h3>${album.title}</h3>
          <span>${heroTaglines(album.id)}</span>
        </div>
      `;
      host.appendChild(card);
      // If album has children (Kerala), also show their covers
      if(album.children && album.children.length){
        album.children.forEach(child=>{
          const sub = document.createElement('a');
          sub.href = albumPage(child.id);
          sub.className = 'mag-card';
          const childCover = coverForAlbum(child);
          sub.innerHTML = `
            <img src="${childCover}" alt="${child.title} cover" loading="lazy" />
            <div class="info">
              <h3>${child.title}</h3>
              <span>${album.title} Subalbum</span>
            </div>
          `;
          host.appendChild(sub);
        });
      }
    });
  }
  document.addEventListener('DOMContentLoaded', buildMagazine);
})();
