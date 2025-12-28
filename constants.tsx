
import { Project, Service } from './types';

export const COLORS = {
  primary: '#30B250',
  background: '#050505',
  surface: '#0a0a0a',
  text: '#ffffff',
  textSecondary: '#a1a1aa'
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Lumina Branding',
    category: 'Visual Identity',
    imageUrl: 'https://picsum.photos/seed/lumina/800/600',
    description: 'A holistic brand system for a next-gen solar energy provider.'
  },
  {
    id: '2',
    title: 'Nexus Platform',
    category: 'UI/UX Design',
    imageUrl: 'https://picsum.photos/seed/nexus/800/600',
    description: 'Cloud-native architecture for enterprise scale collaboration.'
  },
  {
    id: '3',
    title: 'Aura Skincare',
    category: 'Packaging',
    imageUrl: 'https://picsum.photos/seed/aura/800/600',
    description: 'Sustainable packaging design for luxury organic skincare.'
  },
  {
    id: '4',
    title: 'Zenith App',
    category: 'Product Design',
    imageUrl: 'https://picsum.photos/seed/zenith/800/600',
    description: 'Mindfulness tracker with generative ambient soundscapes.'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Brand Strategy',
    description: 'We define the core essence of your brand, positioning you for long-term growth and recognition.',
    icon: 'Layers'
  },
  {
    title: 'Digital Design',
    description: 'High-performance UI/UX that prioritizes user experience while maintaining high visual impact.',
    icon: 'Monitor'
  },
  {
    title: 'Motion Graphics',
    description: 'Fluid animations that bring stories to life and enhance digital interactions across platforms.',
    icon: 'Zap'
  }
];
