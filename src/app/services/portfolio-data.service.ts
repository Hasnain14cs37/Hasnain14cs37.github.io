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
export interface Experience { role: string; company: string; location: string; period: string; points: string[]; }
export interface MiniProject { title: string; desc: string; tags: string[]; }
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
    'C#', 'TypeScript', '.NET Core', 'Angular', 'React', 'Node.js', 'SQL Server', 'PostgreSQL',
    'MongoDB', 'Redis', 'SignalR', 'OpenAI API', 'Docker', 'Azure DevOps', 'REST APIs', 'Tailwind CSS',
  ];

  readonly projects: Project[] = [
    {
      title: 'AI Agent — Automated Bug Detection & Resolution',
      description: 'A production AI agent (OpenAI API) at DMCR that monitors systems, autonomously detects bugs, analyzes root causes, and generates ready-to-apply fixes — cutting MTTR. Prompt pipelines feed logs and code context to the LLM; contributed to a 96% SQL query speedup.',
      tags: ['.NET Core', 'OpenAI API', 'Prompt Engineering', 'Azure DevOps'],
      category: 'AI / .NET',
      image: 'img/ai-agent.png',
      year: '2025',
      color: '#a78bfa',
    },
    {
      title: 'ATOM — Advanced Trial Optimization & Management',
      description: 'Centralized clinical-trial management platform at DM Clinical Research, built on .NET Core, Angular & SQL Server. Led the Angular front end, integrated REST APIs, and engineered SQL stored procedures, views, and triggers; revamped UI/UX and core architecture for scale.',
      tags: ['.NET Core', 'Angular', 'SQL Server', 'Azure DevOps'],
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
      title: 'Salon SPA Advisor',
      description: 'Maintenance-engineer role on this salon operations suite — appointment booking, staff management, inventory tracking, and a customer-analytics dashboard.',
      tags: ['Full Stack', 'React.js', 'Node.js', 'MongoDB'],
      category: 'Maintenance',
      image: 'img/salonspa.jpg',
      year: '2020',
      color: '#00d4ff',
    },
    {
      title: 'FlexStaf-IT — Staffing Platform',
      description: 'Maintenance-engineer role on this IT staffing and talent-acquisition platform — job matching, profile management, and contract workflows connecting clients with tech professionals.',
      tags: ['Full Stack', 'JavaScript', 'Node.js', 'SQL'],
      category: 'Maintenance',
      image: 'img/flexstaf-it.jpg',
      year: '2019',
      color: '#00f5a0',
    },
  ];

  readonly moreProjects: MiniProject[] = [
    {
      title: 'SixaTaxis — Real-Time Ride Platform',
      desc: 'Live ride-status updates with SignalR + Redis; Dockerized .NET Core backend for consistent, scalable deploys.',
      tags: ['.NET Core', 'SignalR', 'Redis', 'Docker'],
    },
    {
      title: 'E-Diary — Document Management',
      desc: 'Document management with role-based access control (RBAC) and automated workflow routing across an org hierarchy.',
      tags: ['.NET Core', 'Angular', 'SQL Server', 'RBAC'],
    },
    {
      title: 'E-Service — Complaint & Inspection',
      desc: 'Complaint & inspection module with Business WhatsApp API integration and real-time SyncFusion dashboards.',
      tags: ['.NET Core', 'Angular', 'WhatsApp API'],
    },
    {
      title: 'Restaurant POS System',
      desc: 'Point-of-sale with JWT auth, custom authorization middleware, and RESTful API integration on the MERN stack.',
      tags: ['MERN', 'Node.js', 'MongoDB', 'JWT'],
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
      desc: 'End-to-end apps with Angular front ends and .NET Core / SQL Server back ends — clean architecture, responsive UI, production-ready.',
      points: ['Angular & TypeScript', '.NET Core & SQL Server', 'Real-time features with SignalR'],
    },
    {
      icon: '🔗',
      title: 'API Design & Integration',
      desc: 'REST APIs, third-party integrations, and data models that scale. 100% of my projects are API-driven.',
      points: ['REST API architecture', 'Redis caching & performance', 'Docker & Azure DevOps CI/CD'],
    },
    {
      icon: '🤖',
      title: 'AI-Powered Development',
      desc: 'Prompt engineering and AI agents that automate the tedious parts — including a bug-fixing agent for .NET & Angular.',
      points: ['OpenAI & Claude integrations', 'Prompt engineering', 'AI agents & automation'],
    },
  ];

  readonly experience: Experience[] = [
    {
      role: 'Full-Stack Software Engineer',
      company: 'DM Clinical Research (DMCR)',
      location: 'Remote — Houston, TX',
      period: 'Apr 2025 – Present',
      points: [
        'Built a production AI agent (OpenAI API) that autonomously detects bugs, analyzes root causes, and generates ready-to-apply fixes — cutting mean time to resolution.',
        'Building ATOM, a clinical-trial management platform on .NET Core, Angular & SQL Server; revamped UI/UX and core architecture for scale.',
        'Set up and manage Azure DevOps CI/CD pipelines and end-to-end Agile sprint delivery.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Punjab Healthcare Commission',
      location: 'Lahore, PK',
      period: 'May 2023 – Apr 2025',
      points: [
        'Developed full-stack healthcare inspection & complaint systems with Angular, .NET Core & SQL Server.',
        'Integrated the Business WhatsApp API for automated complaint handling and faster response times.',
        'Used a self-built AI agent to optimize SQL — cut a query from 1.4 min to 4.5 sec (96% faster).',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Lab Code',
      location: 'Bahawalpur, PK',
      period: 'Aug 2022 – Apr 2023',
      points: [
        'Built Ed-Tech and FinTech products on the MERN stack.',
        'Designed secure REST APIs with JWT auth; optimized MongoDB queries for faster responses.',
      ],
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
