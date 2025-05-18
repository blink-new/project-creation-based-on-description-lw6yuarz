import { Task } from './types';
import { Zap, Shield, BarChart, Palette, Code, Globe } from 'lucide-react';

export const sampleTasks: Task[] = [
  {
    id: '1',
    title: 'Create project plan',
    description: 'Draft a comprehensive project plan including timeline, resources, and milestones.',
    priority: 'high',
    completed: false,
    createdAt: new Date(Date.now() - 86400000 * 2) // 2 days ago
  },
  {
    id: '2',
    title: 'Design user interface',
    description: 'Create wireframes and mockups for the main application screens.',
    priority: 'medium',
    completed: true,
    createdAt: new Date(Date.now() - 86400000 * 1) // 1 day ago
  },
  {
    id: '3',
    title: 'Code review',
    description: 'Review pull requests and provide feedback to team members.',
    priority: 'medium',
    completed: false,
    createdAt: new Date() // Today
  },
  {
    id: '4',
    title: 'Team meeting',
    description: 'Weekly team sync to discuss progress and blockers.',
    priority: 'low',
    completed: false,
    createdAt: new Date() // Today
  }
];

export const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built on top of Vite for instant hot module replacement and optimized builds.'
  },
  {
    icon: Shield,
    title: 'Type Safety',
    description: 'Full TypeScript support with strict typing for safer, more maintainable code.'
  },
  {
    icon: BarChart,
    title: 'Analytics Ready',
    description: 'Built-in support for tracking user behavior and application performance.'
  },
  {
    icon: Palette,
    title: 'Beautiful UI',
    description: 'Professionally designed components that look great out of the box.'
  },
  {
    icon: Code,
    title: 'Developer Experience',
    description: 'Intuitive APIs and comprehensive documentation for a smooth development experience.'
  },
  {
    icon: Globe,
    title: 'Responsive Design',
    description: 'Mobile-first approach ensures your app looks great on any device.'
  }
];