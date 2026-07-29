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
    { img: img('haldi1.webp'), label: 'Haldi' },
    { img: img('haldi2.webp'), label: 'Haldi' },
    { img: img('haldi3.webp'), label: 'Haldi' },
    { img: img('haldi4.webp'), label: 'Haldi' },
    { img: img('haldi5.webp'), label: 'Haldi' },
    { img: img('haldi06.webp'),label: 'Haldi' },
    { img: img('haldi07.webp'),label: 'Haldi' },
    { img: img('haldi8.webp'), label: 'Haldi' },
   
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
    { img: img('festivites(1).webp'), label: 'Festivities' },
    { img: img('festivites(2).webp'), label: 'Festivities' },
    { img: img('festivites(3).webp'), label: 'Festivities' },
    { img: img('festivites(4).webp'), label: 'Festivities' },
  ]),
  wedding: buildGalleryItems([
    { img: img('wedding(1).webp'), label: 'Wedding' },
    { img: img('wedding(2).webp'), label: 'Wedding' },
    { img: img('wedding(3).webp'), label: 'Wedding' },
    { img: img('wedding(4).webp'), label: 'Wedding' },
    { img: img('wedding(5).webp'), label: 'Wedding' },
    { img: img('wedding(6).webp'), label: 'Wedding' },
    { img: img('wedding(7).webp'), label: 'Wedding' },
  ]),
  reception: buildGalleryItems([
    // ...
  ]),
};
