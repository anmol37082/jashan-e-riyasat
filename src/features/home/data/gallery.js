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
    { img: img('haldi06.WEBP'),label: 'Haldi' },
    { img: img('haldi07.WEBP'),label: 'Haldi' },
    { img: img('haldi8.webp'), label: 'Haldi' },
   
    // ...tumhari actual haldi images yahan daalo
  ]),
  mehndi: buildGalleryItems([
    { img: img('IMG_0414.JPG.jpeg.webp'), label: 'Bridal Portrait' },
    // ...
  ]),
  festivities: buildGalleryItems([
    // ...
  ]),
  wedding: buildGalleryItems([
    // ...
  ]),
  reception: buildGalleryItems([
    // ...
  ]),
};