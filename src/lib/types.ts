export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  createdAt: Date;
}

export interface Feature {
  icon: any; // LucideIcon
  title: string;
  description: string;
}