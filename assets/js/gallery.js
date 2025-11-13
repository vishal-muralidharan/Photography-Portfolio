// Gallery page logic: reads ?album=<id> or shows top-level albums

function qs(name){
  const p = new URLSearchParams(location.search);
  return p.get(name);
}

function pageForAlbum(id){
  const map = {
    'andaman':'andaman.html',
    'birds':'birds.html',
    'diwali':'diwali.html',
    'kerala':'kerala.html',
    'landscape':'landscape.html',
    'kerala-boats':'kerala-boats.html',
    'kerala-jeeps':'kerala-jeeps.html',
    'kerala-people':'kerala-people.html'
  };
  return map[id] || `gallery.html?album=${id}`;
}

function buildCard({id, title, cover, count}){
  const a = document.createElement('a');
  a.className = 'card';
  a.href = pageForAlbum(id);
  a.innerHTML = `
    <div class="card-media">
      <img loading="lazy" src="${cover}" alt="${title}"/>
    </div>
    <div class="card-meta">
      <h3>${title}</h3>
      <span>${count} photos</span>
    </div>
  `;
  return a;
}

function buildLightbox(){
  const lb = document.createElement('div');
  lb.className = 'lightbox hidden';
  lb.innerHTML = `
    <button class="lb-close" aria-label="Close">×</button>
    <button class="lb-prev" aria-label="Previous">‹</button>
    <img class="lb-img" alt="photo"/>
    <button class="lb-next" aria-label="Next">›</button>
  `;
  document.body.appendChild(lb);
  return lb;
}

function renderGrid(images, base){
  const grid = document.querySelector('[data-grid]');
  const lb = buildLightbox();
  const lbImg = lb.querySelector('.lb-img');
  const prev = lb.querySelector('.lb-prev');
  const next = lb.querySelector('.lb-next');
  const close = lb.querySelector('.lb-close');
  let index = 0;

  const open = (i)=>{
    index = i;
    lbImg.src = `${base}/${images[i]}`;
    lb.classList.remove('hidden');
  };
  const delta = (d)=>{
    index = (index + d + images.length) % images.length;
    lbImg.src = `${base}/${images[index]}`;
  };
  prev.onclick = ()=> delta(-1);
  next.onclick = ()=> delta(1);
  close.onclick = ()=> lb.classList.add('hidden');
  lb.addEventListener('click', (e)=>{ if(e.target===lb) close.click(); });
  document.addEventListener('keydown', (e)=>{
    if(lb.classList.contains('hidden')) return;
    if(e.key==='Escape') close.click();
    if(e.key==='ArrowLeft') prev.click();
    if(e.key==='ArrowRight') next.click();
  });

  images.forEach((img, i)=>{
    const figure = document.createElement('figure');
    figure.className = 'shot';
    figure.innerHTML = `
      <img loading="lazy" src="${base}/${img}" alt="Photo ${i+1}"/>
    `;
    figure.addEventListener('click', ()=> open(i));
    grid.appendChild(figure);
  });
}

function render(){
  const albumId = qs('album');
  const container = document.querySelector('[data-container]');
  if(!albumId){
    // Show top level albums
    const top = AlbumsData.map(a=> ({
      id: a.id,
      title: a.title,
      cover: a.children.length ? `${a.children[0].path}/${a.children[0].images[0]}` : `${a.path}/${a.images[0]}`,
      count: a.children.length ? a.children.reduce((n,c)=> n + c.images.length, 0) : a.images.length
    }));
    const grid = document.createElement('div');
    grid.className = 'cards';
    top.forEach(info=> grid.appendChild(buildCard(info)));
    container.appendChild(grid);
    return;
  }

  // Find album or subalbum
  const album = findAlbumById(albumId);
  if(!album){
    container.innerHTML = `<p>Album not found.</p>`;
    return;
  }

  document.querySelector('[data-album-title]').textContent = album.title;

  if(album.images && album.images.length){
    // render photos
    document.querySelector('[data-view="photos"]').classList.remove('hidden');
    renderGrid(album.images, album.path);
  } else if(album.children && album.children.length){
    // render sub albums
    document.querySelector('[data-view="albums"]').classList.remove('hidden');
    const grid = document.querySelector('[data-subcards]');
    album.children.forEach(c=>{
      const info = {
        id: c.id,
        title: c.title,
        cover: `${c.path}/${c.images[0]}`,
        count: c.images.length
      };
      grid.appendChild(buildCard(info));
    });
  }
}

document.addEventListener('DOMContentLoaded', render);
