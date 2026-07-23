  // data/gallery.js
// All gallery content lives here so WeddingGallery.jsx stays purely presentational.

const galleryFileNames = [
  'IMG_0412.JPG.jpeg',
  'IMG_0413.JPG.jpeg',
  'IMG_0414.JPG.jpeg',
  'IMG_0415.JPG.jpeg',
  'IMG_0419.JPG.jpeg',
  'IMG_0420.JPG.jpeg',
  'IMG_0373.PNG',
  'f3048142-e84e-4b3c-8eee-8cb4a266ac39.png',
  'ChatGPT Image Jul 17, 2026, 06_14_21 PM (1).png',
  'ChatGPT Image Jul 17, 2026, 06_15_42 PM (1).png',
  'ChatGPT Image Jul 17, 2026, 06_27_50 PM (1).png',
  'ChatGPT Image Jul 18, 2026 at 06_33_19 PM.png',
  'ChatGPT Image Jul 18, 2026 at 06_37_04 PM.png',
  'ChatGPT Image Jul 18, 2026 at 06_37_50 PM.png',
  'ChatGPT Image Jul 18, 2026 at 06_40_25 PM.png',
  'ChatGPT Image Jul 18, 2026, 06_02_35 PM (1).png',
  'ChatGPT Image Jul 18, 2026, 06_06_58 PM (1).png',
  'ChatGPT Image Jul 23, 2026, 12_28_08 PM.png',
  'ChatGPT Image Jul 23, 2026, 12_31_22 PM.png',
  'ChatGPT Image Jul 23, 2026, 12_41_24 PM.png',
];

const galleryImagePaths = galleryFileNames.map((fileName) => `/gallery/${encodeURIComponent(fileName)}`);

export const cities = [
  { id: 'melbourne', label: 'Melbourne' },
  { id: 'sydney', label: 'Sydney' },
  { id: 'brisbane', label: 'Brisbane' },
  { id: 'adelaide', label: 'Adelaide' },
  { id: 'perth', label: 'Perth' },
];

const buildGalleryItems = (labels, startIndex = 0) =>
  labels.map((label, index) => ({
    img: galleryImagePaths[(startIndex + index) % galleryImagePaths.length],
    label,
    isCenter: index === labels.length - 1,
  }));

export const galleryData = {
  melbourne: buildGalleryItems(
    [
      'Luxury Decor',
      'Floral Design',
      'The Ceremony',
      'Royal Venue',
      'Golden Hour',
      'First Dance',
      'The Mandap',
      'Stage Setup',
      'Beachside',
      'Outdoor Aisle',
    ],
    0,
  ),
  sydney: buildGalleryItems(
    [
      'Reception Night',
      'Candle Ceremony',
      'Grand Entry',
      'Bridal Portrait',
      'Sunset Ceremony',
      'Grand Reception',
      'The Archway',
      'Centerpiece',
      'Garden Setup',
      'The Aisle',
    ],
    10,
  ),
  brisbane: buildGalleryItems(
    [
      'The Mandap',
      'Table Design',
      'Ambient Lighting',
      'Garden Setup',
      'Evening Vows',
      'Celebration Night',
      'The Aisle',
      'Floral Design',
      'Elegant Decor',
      'Royal Theme',
    ],
    5,
  ),
  adelaide: buildGalleryItems(
    [
      'Traditional Setup',
      'Rose Detail',
      'Candle Ceremony',
      'Palace Wedding',
      'Golden Hour Vows',
      'First Dance',
      'The Archway',
      'Centerpiece',
      'Sunset Vows',
      'Classic Aisle',
    ],
    8,
  ),
  perth: buildGalleryItems(
    [
      'Sunset Vows',
      'Ocean View',
      'Bridal Bouquet',
      'Elegant Decor',
      'Beach Sunset Vows',
      'Ocean Reception',
      'Royal Theme',
      'Classic Aisle',
      'Venue View',
      'Decor Detail',
    ],
    12,
  ),
};
