// data/gallery.js

export const cities = [
  { id: 'haldi', label: 'Haldi' },
  { id: 'mehndi', label: 'Mehndi' },
  { id: 'festivities', label: 'Festivities' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'reception', label: 'Reception' },
];

const img = (fileName) => `/gallery/${encodeURIComponent(fileName)}`;

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
  festivities: buildGalleryItems([
    { img: img('fes1.webp'), label: 'Festivities' },
    { img: img('fes2.webp'), label: 'Festivities' },
    { img: img('fes3.webp'), label: 'Festivities' },
    { img: img('fes4.webp'), label: 'Festivities' },
    { img: img('fes5.webp'), label: 'Festivities' },
    { img: img('fes6.webp'), label: 'Festivities' },
    { img: img('fes7.webp'), label: 'Festivities' },
    { img: img('fes8.webp'), label: 'Festivities' },
  ]),
  wedding: buildGalleryItems([
    { img: img('wedding(1).webp'), label: 'Wedding' },
    { img: img('wedding(2).webp'), label: 'Wedding' },
    { img: img('wedding(3).webp'), label: 'Wedding' },
    { img: img('wedding(4).webp'), label: 'Wedding' },
    { img: img('wedding(5).webp'), label: 'Wedding' },
    { img: img('wedding(6).webp'), label: 'Wedding' },
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
};
