
import { Service, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Building Construction',
    description: 'Specializing in high-rise commercial complexes and luxury residential estates with precision engineering.',
    icon: 'fa-city',
    image: 'https://i.postimg.cc/4yMMsZg1/sdsf.jpg'
  },
  {
    id: '2',
    title: 'Industrial Renovation',
    description: 'Transforming aging industrial spaces into modern, efficient facilities while maintaining structural integrity.',
    icon: 'fa-tools',
    image: 'https://i.postimg.cc/2jsRsFSC/trr.jpg'
  },
  {
    id: '3',
    title: 'Interior Design',
    description: 'Premium architectural interior solutions that blend functionality with modern industrial aesthetics.',
    icon: 'fa-couch',
    image: 'https://i.postimg.cc/Z5Yf2Cpy/fa5509e5-9f44-45ec-a84b-71cf991876a4.jpg'
  },
  {
    id: '4',
    title: 'Structural Engineering',
    description: 'Expert analysis and design for complex structures ensuring safety, longevity, and cost-effectiveness.',
    icon: 'fa-drafting-compass',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'The Sky-Reach Plaza',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    description: 'A 50-story commercial hub in the heart of the business district.'
  },
  {
    id: 'p2',
    title: 'Iron-Forge Warehouse',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=1200',
    description: 'Modern logistics facility with sustainable energy integration.'
  },
  {
    id: 'p3',
    title: 'Lumina Residences',
    category: 'Residential',
    image: 'https://i.postimg.cc/BQzsn9p3/df.jpg',
    description: 'Luxury smart-apartments featuring industrial-modern finishes.'
  }
];
