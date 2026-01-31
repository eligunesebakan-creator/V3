import { Property, Service } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Pinnacle Financial Center',
    type: 'Office',
    location: 'Central Business District',
    size: '145,000 sq ft',
    price: '$52,000,000',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: '2',
    title: 'Gateway Logistics East',
    type: 'Industrial',
    location: 'Metro Distribution Zone',
    size: '320,000 sq ft',
    price: '$34,500,000',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: '3',
    title: 'Promenade Retail Suites',
    type: 'Retail',
    location: 'Bayside Shopping District',
    size: '22,000 sq ft',
    price: 'Contact for Lease',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: '4',
    title: 'Starlight Multi-Family Portfolio',
    type: 'Multi-family',
    location: 'Uptown Village',
    size: '120 Units',
    price: '$21,750,000',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    featured: false
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Tailored Investment Strategies',
    description: 'Our team crafts refined investment strategies, meticulously aligning each opportunity with the unique objectives and risk profiles of discerning clients across the commercial real estate spectrum.',
    icon: 'fa-compass'
  },
  {
    title: 'Comprehensive Market Analysis',
    description: 'Benefit from our advanced market intelligence and analytical prowess, ensuring every transaction is underpinned by a comprehensive understanding of prevailing trends and future projections.',
    icon: 'fa-magnifying-glass-chart'
  },
  {
    title: 'Discreet Acquisition & Disposition',
    description: "We manage every stage of the acquisition and disposition process with utmost discretion and efficiency, safeguarding our clients' interests while securing advantageous positions in the marketplace.",
    icon: 'fa-user-shield'
  },
  {
    title: 'Dedicated Client Partnerships',
    description: "Imar Commercial is committed to fostering enduring client relationships, built upon trust, transparency, and an unwavering dedication to the advancement of our clients' investment ambitions.",
    icon: 'fa-handshake'
  }
];