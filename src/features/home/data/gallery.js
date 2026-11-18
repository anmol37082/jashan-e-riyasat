// data/gallery.js

export const cities = [
  { id: 'haldi', label: 'Haldi' },
  { id: 'mehndi', label: 'Mehndi' },
  { id: 'cocktail', label: 'Cocktail Party' },
  { id: 'sufi-night', label: 'Sufi Night' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'reception', label: 'Reception' },
  { id: 'international', label: 'International' },
];

const img = (fileName) => `/gallery/${encodeURIComponent(fileName)}`;
const globalImg = (fileName) => `/global/${encodeURIComponent(fileName)}`;

const buildGalleryItems = (items) =>
  items.map((item, index) => ({
    ...item,
    isCenter: index === items.length - 1,
  }));

export const galleryData = {
  haldi: buildGalleryItems([
    { img: img('haldi01.webp'), label: 'Haldi' },
    { img: img('haldi02.webp'), label: 'Haldi' },
    { img: img('haldi03.webp'), label: 'Haldi' },
    { img: img('haldi04.webp'), label: 'Haldi' },
    { img: img('haldi05.webp'), label: 'Haldi' },
    { img: img('haldi006.webp'), label: 'Haldi' },
    { img: img('haldi007.webp'), label: 'Haldi' },
    { img: img('haldi08.webp'), label: 'Haldi' },
   
    // ...tumhari actual haldi images yahan daalo
  ]),
  mehndi: buildGalleryItems([
    { img: img('mehndi(1).webp'), label: 'Mehndi' },
    { img: img('mehndi(2).webp'), label: 'Mehndi' },
    { img: img('mehndi(3).webp'), label: 'Mehndi' },
    { img: img('mehndi(4).webp'), label: 'Mehndi' },
    { img: img('mehndi(5).webp'), label: 'Mehndi' },
    { img: img('mehndi(6).webp'), label: 'Mehndi' },
    { img: img('mehndi(7).webp'), label: 'Mehndi' },
    { img: img('mehndi(8).webp'), label: 'Mehndi' },
  ]),
  cocktail: buildGalleryItems([
    { img: img('rec1.webp'), label: 'Cocktail Party' },
    { img: img('Rec2.webp'), label: 'Cocktail Party' },
    { img: img('rec3.webp'), label: 'Cocktail Party' },
    { img: img('Rec4.webp'), label: 'Cocktail Party' },
    { img: img('Rec5.webp'), label: 'Cocktail Party' },
    { img: img('Rec6.webp'), label: 'Cocktail Party' },
    { img: img('rec7.webp'), label: 'Cocktail Party' },
    { img: img('Rec8.webp'), label: 'Cocktail Party' },
  ]),
  'sufi-night': buildGalleryItems([
    { img: img('Rec6.webp'), label: 'Sufi Night' },
    { img: img('rec7.webp'), label: 'Sufi Night' },
    { img: img('Rec10.webp'), label: 'Sufi Night' },
    { img: img('Rec4.webp'), label: 'Sufi Night' },
    { img: img('rec1.webp'), label: 'Sufi Night' },
    { img: img('Rec2.webp'), label: 'Sufi Night' },
    { img: img('rec3.webp'), label: 'Sufi Night' },
    { img: img('Rec8.webp'), label: 'Sufi Night' },
  ]),
  wedding: buildGalleryItems([
    { img: img('wedding(1).webp'), label: 'Wedding' },
    { img: img('wedding2.webp'), label: 'Wedding' },
    { img: img('wedding3.webp'), label: 'Wedding' },
    { img: img('wedding(4).webp'), label: 'Wedding' },
    { img: img('wedding5.webp'), label: 'Wedding' },
    { img: img('wedding6.webp'), label: 'Wedding' },
    { img: img('wedding(7).webp'), label: 'Wedding' },
    { img: img('wedding(8).webp'), label: 'Wedding' },
  ]),
  reception: buildGalleryItems([
    { img: img('rec1.webp'), label: 'Reception' },
    { img: img('Rec2.webp'), label: 'Reception' },
    { img: img('rec3.webp'), label: 'Reception' },
    { img: img('Rec4.webp'), label: 'Reception' },
    { img: img('Rec5.webp'), label: 'Reception' },
    { img: img('Rec6.webp'), label: 'Reception' },
    { img: img('rec7.webp'), label: 'Reception' },
    { img: img('Rec8.webp'), label: 'Reception' },
  ]),
  international: buildGalleryItems([
    { img: globalImg('img1.webp'), label: 'International' },
    { img: globalImg('img2.webp'), label: 'International' },
    { img: globalImg('img3.webp'), label: 'International' },
    { img: globalImg('img4.webp'), label: 'International' },
    { img: globalImg('img5.webp'), label: 'International' },
    { img: globalImg('img6.webp'), label: 'International' },
    { img: globalImg('img7.webp'), label: 'International' },
    { img: globalImg('img8.webp'), label: 'International' },
  ]),
};
