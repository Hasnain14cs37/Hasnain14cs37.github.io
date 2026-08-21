import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export interface Stat { value: string; label: string; }
export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  year: string;
  color: string;
}
export interface Social { label: string; href: string; icon: string; }
export interface Service { icon: string; title: string; desc: string; points: string[]; }
export interface ProcessStep { n: string; title: string; desc: string; }
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  sample: boolean;
}

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

  readonly config = environment;

  readonly stats: Stat[] = [
    { value: '4+', label: 'Years experience' },
    { value: '7+', label: 'Projects shipped' },
    { value: '100%', label: 'API-driven' },
    { value: '3+', label: 'Cloud platforms' },
  ];

  readonly techStack: string[] = [
    'JavaScript', 'TypeScript', 'Angular', '.NET', 'SQL', 'MongoDB',
    'OpenAI API', 'Claude AI', 'Cursor', 'REST APIs', 'Azure', 'Netlify', 'Heroku',
  ];

  readonly projects: Project[] = [
    {
      title: 'AI Agent — Automated Bug Detection & Resolution',
      description: 'Intelligent AI agent that automatically detects, diagnoses, and resolves software bugs across .NET and Angular codebases. Powered by the OpenAI API to analyse stack traces, suggest fixes, and apply patches with minimal human intervention.',
      tags: ['.NET', 'Angular', 'OpenAI API', 'TypeScript'],
      category: 'AI / .NET',
      image: 'img/ai-agent.png',
      year: '2025',
      color: '#a78bfa',
    },
    {
      title: 'ATOM — Advanced Trial Optimization & Management',
      description: 'Enterprise clinical trial management platform for DMClinical. Streamlines the full trial lifecycle — site management, patient enrollment, protocol compliance, data collection, and regulatory reporting — giving sponsors and CROs real-time visibility.',
      tags: ['.NET', 'Angular', 'SQL', 'Full Stack'],
      category: 'Full Stack',
      image: 'img/atom.png',
      year: '2024',
      color: '#0ea5e9',
    },
    {
      title: 'Hospital Inspection Application',
      description: 'A comprehensive hospital inspection and compliance system. Inspectors conduct structured audits, log findings, track corrective actions, and generate detailed compliance reports across hospital departments.',
      tags: ['.NET', 'Angular', 'SQL', 'Full Stack'],
      category: 'Full Stack',
      image: 'img/hospital-inspection.png',
      year: '2024',
      color: '#34d399',
    },
    {
      title: 'BistroKoo — Restaurant Ordering',
      description: 'A full-featured online restaurant ordering and management platform. Real-time order tracking, menu management, and payment integration built end-to-end on the MERN stack.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      category: 'MERN Stack',
      image: 'img/bistro.jpg',
      year: '2023',
      color: '#6c63ff',
    },
    {
      title: 'DarPatente — Driving Education',
      description: 'Online driving education and exam preparation platform for international students. Multi-language support, progress tracking, and interactive lessons.',
      tags: ['Full Stack', 'React.js', 'Node.js', 'SQL'],
      category: 'Full Stack',
      image: 'img/darpa.jpg',
      year: '2023',
      color: '#f093fb',
    },
    {
      title: 'Salon SPA Advisor & FlexStaf-IT',
      description: 'Maintenance-engineer role on two live platforms — a salon operations suite (bookings, staff, inventory, analytics) and an IT staffing platform (job matching, profiles, contract workflows).',
      tags: ['Full Stack', 'React.js', 'Node.js', 'SQL'],
      category: 'Maintenance',
      image: 'img/salonspa.jpg',
      year: '2019–20',
      color: '#00d4ff',
    },
  ];

  readonly socials: Social[] = [
    { label: 'LinkedIn', href: environment.linkedin, icon: 'in' },
    { label: 'Upwork', href: environment.upwork, icon: 'up' },
    { label: 'GitHub', href: environment.github, icon: 'gh' },
  ];

  readonly services: Service[] = [
    {
      icon: '🧩',
      title: 'Full-Stack Web Development',
      desc: 'End-to-end apps with Angular front ends and .NET / SQL back ends — clean architecture, responsive UI, production-ready.',
      points: ['Angular & TypeScript', '.NET & SQL / MongoDB', 'Responsive, accessible UI'],
    },
    {
      icon: '🔗',
      title: 'API Design & Integration',
      desc: 'REST APIs, third-party integrations, and data models that scale. 100% of my projects are API-driven.',
      points: ['REST API architecture', 'Third-party integrations', 'Cloud deploy: Azure / Netlify / Heroku'],
    },
    {
      icon: '🤖',
      title: 'AI-Powered Development',
      desc: 'Prompt engineering and AI agents that automate the tedious parts — including a bug-fixing agent for .NET & Angular.',
      points: ['OpenAI & Claude integrations', 'Prompt engineering', 'AI agents & automation'],
    },
  ];

  readonly process: ProcessStep[] = [
    { n: '01', title: 'Discover', desc: 'Understand the problem, users, and constraints.' },
    { n: '02', title: 'Design', desc: 'Architecture, data model, and UI direction.' },
    { n: '03', title: 'Build', desc: 'Clean, tested, AI-accelerated development.' },
    { n: '04', title: 'Review', desc: 'QA, performance, and security checks.' },
    { n: '05', title: 'Ship', desc: 'Deploy to the cloud with monitoring.' },
  ];

  readonly testimonials: Testimonial[] = [
    {
      quote: 'Hasnain did an excellent job as a Senior Software Engineer. He showed strong expertise in .NET, Angular, and AI-focused development, and delivered quality work professionally.',
      name: '',
      role: 'Upwork Client · 5.0 ★',
      company: 'Senior Software Engineer, .NET & Angular · 2026',
      sample: false,
    },
    {
      quote: 'Muhammad is a highly professional and capable Full Stack Developer with strong expertise in C#/.NET and Angular. He consistently demonstrates technical proficiency and problem-solving ability.',
      name: '',
      role: 'Upwork Client · 5.0 ★',
      company: 'C#/.NET Application Debugging · 2026',
      sample: false,
    },
    {
      quote: 'Muhammad delivered good work on my project, and his skills are reasonably strong. I enjoyed working with him.',
      name: '',
      role: 'Upwork Client · 5.0 ★',
      company: 'MERN Stack Project · 2023',
      sample: false,
    },
  ];
}
