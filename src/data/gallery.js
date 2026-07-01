import { images } from './images.js';

export const galleryCategories = [
  { id: 'all', name: 'All Photos' },
  { id: 'reception', name: 'Reception & Lounge' },
  { id: 'treatment', name: 'Treatment Rooms' },
  { id: 'sterilization', name: 'Sterilization Area' },
  { id: 'equipment', name: 'Advanced Equipment' },
  { id: 'doctors', name: 'Doctors at Work' },
];

export const galleryItems = [
  {
    id: 1,
    category: 'reception',
    title: 'Warm & Luxury Reception Lounge',
    description: 'Designed for patient comfort with air conditioning, premium seating, and complimentary beverages.',
    image: images.tour.reception,
  },
  {
    id: 2,
    category: 'treatment',
    title: 'Modern Ergonomic Dental Suite',
    description: 'Fully equipped with advanced dental chairs, sterile water systems, and ceiling-mounted entertainment screens.',
    image: images.tour.treatmentRoom,
  },
  {
    id: 3,
    category: 'sterilization',
    title: 'Class B Autoclave Station',
    description: 'Adhering to strict European WHO standards, ensuring 100% sterilization of all surgical instruments.',
    image: images.tour.sterilizationArea,
  },
  {
    id: 4,
    category: 'equipment',
    title: 'Intraoral Scanner & Digital RVG X-Ray',
    description: 'Advanced dental imaging and 3D digital scanners to plan restorations with high accuracy and low radiation.',
    image: images.tour.equipment,
  },
  {
    id: 5,
    category: 'doctors',
    title: 'Dr. Pankaj Shelke at Work',
    description: 'Performing a precise digital dental implant scan on a patient.',
    image: images.tour.doctorAtWork,
  },
  {
    id: 6,
    category: 'treatment',
    title: 'Pediatric Child Station',
    description: 'Friendly environment tailored for our youngest patients to experience anxiety-free treatments.',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 7,
    category: 'sterilization',
    title: 'Vacuum Sealed Sterile Instruments',
    description: 'All instruments are sterilized, sealed in protective pouches, and opened only in front of the patient.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
  }
];
