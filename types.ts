
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export enum Page {
  Home = 'home',
  Services = 'services',
  Projects = 'projects',
  About = 'about',
  Contact = 'contact'
}
