// Auto-generated albums data mapping
// Each album has: id, title, path, images:[], children:[] (for nested albums like Kerala)

const AlbumsData = [
  {
    id: 'andaman',
    title: 'Andaman',
    path: 'Photos/Andaman',
    images: [
      'hero-andaman.jpg',
      '3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg','30.jpg','31.jpg','32.jpg'
    ],
    children: []
  },
  {
    id: 'birds',
    title: 'Birds',
    path: 'Photos/Birds',
    images: [
      'hero-birds.jpg','cover-birds.jpg',
      '3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.jpg','17.jpg','18.jpg','19.jpg','20.jpg','21.jpg','22.jpg','23.jpg','24.jpg','25.jpg','26.jpg','27.jpg','28.jpg','29.jpg','30.jpg','31.jpg','32.jpg','33.jpg','34.jpg','35.jpg','36.jpg','37.jpg','38.jpg','39.jpg','40.jpg','41.jpg','42.jpg','43.jpg','44.jpg','45.jpg','46.jpg','47.jpg','48.jpg','49.jpg'
    ],
    children: []
  },
  {
    id: 'diwali',
    title: 'Diwali',
    path: 'Photos/Diwali',
    images: [
      'hero-diwali.jpg','cover-diwali.jpg',
      '3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg'
    ],
    children: []
  },
  {
    id: 'kerala',
    title: 'Kerala',
    path: 'Photos/Kerala',
    images: [],
    children: [
      { id: 'kerala-boats', title: 'Boats', path: 'Photos/Kerala/Boats', images: ['hero-kerala.jpg','cover-kerala.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg'] },
      { id: 'kerala-jeeps', title: 'Jeeps', path: 'Photos/Kerala/Jeeps', images: ['hero-jeeps.jpg','cover-jeeps.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'] },
      { id: 'kerala-people', title: 'People', path: 'Photos/Kerala/People', images: ['hero-people.jpg','cover-people.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'] }
    ]
  },
  {
    id: 'landscape',
    title: 'Landscape',
    path: 'Photos/Landscape',
    images: [
      'hero-landscape.jpg','cover-landscape.jpg',
      '3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.jpg'
    ],
    children: []
  }
];

// Helper to find album or sub album by id
function findAlbumById(id){
  for(const album of AlbumsData){
    if(album.id === id) return album;
    const child = album.children.find(c=> c.id === id);
    if(child) return child;
  }
  return null;
}
