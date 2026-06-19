import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

  readonly config = environment;

  readonly roles = [
    'Full Stack Developer',
    'Angular Developer',
    '.NET Developer',
    'Prompt Engineer',
  ];

  readonly stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '7+', label: 'Projects Built' },
    { value: '100%', label: 'API Integration' },
    { value: '3+', label: 'Cloud Platforms' },
  ];

  readonly info = [
    { icon: '📍', label: 'Location', value: environment.location },
    { icon: '📧', label: 'Email', value: environment.email },
    { icon: '📱', label: 'Phone', value: environment.phone },
    { icon: '💼', label: 'Available', value: 'Freelance & Full-time' },
  ];

  readonly techStack = [
    'JavaScript', 'TypeScript', 'Angular', '.NET',
    'SQL', 'MongoDB', 'OpenAI API', 'REST APIs',
    'Azure', 'Netlify', 'Heroku', 'Cursor', 'Claude AI',
  ];

  readonly skills = [
    { name: 'Angular Development', level: 95, color: '#6c63ff' },
    { name: '.NET Development', level: 90, color: '#f093fb' },
    { name: 'API Design & Integration', level: 100, color: '#00f5a0' },
    { name: 'Full Stack Development', level: 90, color: '#00d4ff' },
    { name: 'SQL & Database Management', level: 85, color: '#6c63ff' },
    { name: 'Prompt Engineering', level: 90, color: '#f093fb' },
    { name: 'Responsive Web Design', level: 95, color: '#00f5a0' },
    { name: 'Azure Deployment', level: 80, color: '#00d4ff' },
  ];

  readonly tools = [
    { name: 'Angular', icon: '🔴' },
    { name: '.NET', icon: '💜' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'JavaScript', icon: '🟡' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'OpenAI API', icon: '🤖' },
    { name: 'Claude AI', icon: '🧠' },
    { name: 'Cursor', icon: '🖱️' },
    { name: 'REST APIs', icon: '🔗' },
    { name: 'Azure', icon: '🔵' },
    { name: 'Netlify', icon: '🟩' },
    { name: 'Heroku', icon: '🟣' },
  ];

  readonly filters = ['All', 'MERN Stack', 'Full Stack', 'AI / .NET'];

  readonly projects = [
    {
      title: 'AI Agent — Automated Bug Detection & Resolution',
      description: 'Intelligent AI agent that automatically detects, diagnoses, and resolves software bugs across .NET and Angular codebases. Powered by OpenAI API to analyse stack traces, suggest fixes, and apply patches with minimal human intervention.',
      tags: ['.NET', 'Angular', 'OpenAI API', 'TypeScript'],
      category: 'AI / .NET',
      image: 'img/ai-agent.png',
      year: '2025',
      color: '#a78bfa',
    },
    {
      title: 'ATOM — Advanced Trial Optimization & Management',
      description: 'Enterprise clinical trial management platform for DMClinical. Streamlines the full trial lifecycle — site management, patient enrollment, protocol compliance, data collection, and regulatory reporting — giving sponsors and CROs real-time visibility into trial progress.',
      tags: ['.NET', 'Angular', 'SQL', 'Full Stack'],
      category: 'Full Stack',
      image: 'img/atom.png',
      year: '2024',
      color: '#0ea5e9',
    },
    {
      title: 'Hospital Inspection Application',
      description: 'A comprehensive hospital inspection and compliance management system. Enables inspectors to conduct structured audits, log findings, track corrective actions, and generate detailed compliance reports across hospital departments.',
      tags: ['.NET', 'Angular', 'SQL', 'Full Stack'],
      category: 'Full Stack',
      image: 'img/hospital-inspection.png',
      year: '2024',
      color: '#34d399',
    },
    {
      title: 'BistroKoo — Restaurant Ordering',
      description: 'A full-featured online restaurant ordering and management platform. Real-time order tracking, menu management, and payment integration built with the MERN stack.',
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
      title: 'Salon SPA Advisor',
      description: 'Worked as a maintenance engineer on this business management system for salon operations. Appointment booking, staff management, inventory tracking, and customer analytics dashboard.',
      tags: ['Full Stack', 'React.js', 'Node.js', 'MongoDB'],
      category: 'Full Stack',
      image: 'img/salonspa.jpg',
      year: '2020',
      color: '#00d4ff',
    },
    {
      title: 'FlexStaf-IT — Staffing Platform',
      description: 'Worked as a maintenance engineer on this IT staffing and talent acquisition platform connecting clients with tech professionals. Job matching algorithms, profile management, and contract workflows.',
      tags: ['Full Stack', 'JavaScript', 'Node.js', 'SQL'],
      category: 'Full Stack',
      image: 'img/flexstaf-it.jpg',
      year: '2019',
      color: '#00f5a0',
    },
  ];

  readonly contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: environment.email,
      href: `mailto:${environment.email}`,
      color: '#6c63ff',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: environment.phone,
      href: `tel:${environment.phone.replace(/\s/g, '')}`,
      color: '#f093fb',
    },
    {
      icon: '📍',
      label: 'Location',
      value: environment.location,
      href: '#',
      color: '#00d4ff',
    },
  ];

  readonly socials = [
    { label: 'LinkedIn', href: environment.linkedin, icon: 'in' },
    { label: 'Upwork', href: environment.upwork, icon: 'up' },
    { label: 'GitHub', href: environment.github, icon: 'gh' },
  ];
}
