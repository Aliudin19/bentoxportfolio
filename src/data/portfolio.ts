import type {
  ExperienceItem,
  ExpertiseItem,
  NavItem,
  ProfileData,
  ProjectItem,
  SocialLink,
} from '../types/portfolio'

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

export const profile: ProfileData = {
  name: 'Alif Syaifuddin',
  title: 'Full-stack developer',
  email: 'alif.saifuddin79@gmail.com',
  location: 'Jakarta / Remote',
  intro:
    'I build business applications, from supply chain platforms to learning systems.',
  bio: 'Based in Jakarta, I work across front-end interfaces and back-end APIs. My experience includes B2B supply chain software, corporate learning systems, and eSIM services.',
  avatar: '/images/alif-portrait-960.webp',
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Full-stack Developer',
    company: 'Pelita Teknologi Global',
    period: 'Aug 2025 - Present',
    location: 'Jakarta',
    highlights:
      'Building a B2B SaaS platform for supply chain management, responsible for both front-end and back-end development using Angular, Spring Boot, and PostgreSQL.',
  },
  {
    role: 'Front-End Developer',
    company: 'Pelita Teknologi Global',
    period: 'Jun 2024 - Jun 2025',
    location: 'Jakarta',
    highlights:
      'Translated product requirements into high-fidelity prototypes and implemented the front-end interfaces.',
  },
  {
    role: 'Software Test Engineer',
    company: 'Ameliore Solusi Analitika',
    period: 'Jan 2023 - Apr 2023',
    location: 'Jakarta',
    highlights:
      'Developed automated test suites, identified and documented bugs, and worked closely with developers to ensure code quality and performance.',
  },
]

export const expertise: ExpertiseItem[] = [
  {
    title: 'Front-end',
    description: 'Product interfaces built with Angular, React, and Vue.',
  },
  {
    title: 'Back-end',
    description:
      'API implementation with Spring Boot and Go Fiber, using PostgreSQL.',
  },
  {
    title: 'Quality',
    description:
      'Manual testing, automated test suites, and bug documentation.',
  },
]

export const technologies = [
  { name: 'Angular', icon: 'angular', color: '#F34B7D' },
  { name: 'React', icon: 'react', color: '#61DAFB' },
  { name: 'Vue', icon: 'vuejs', color: '#42B883' },
  { name: 'TypeScript', icon: 'typescript', color: '#5599E3' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', color: '#38BDF8' },
  { name: 'Spring Boot', icon: 'spring', color: '#8AC653' },
  { name: 'Go Fiber', icon: 'go', color: '#00ADD8' },
  { name: 'PostgreSQL', icon: 'postgresql', color: '#75A4CB' },
  { name: 'Docker', icon: 'docker', color: '#2496ED' },
  { name: 'Git', icon: 'git', color: '#F57760' },
  { name: 'Postman', icon: 'postman', color: '#FF8A65' },
  { name: 'SonarQube', icon: 'sonarqube', color: '#72B7DC' },
]

export const projects: ProjectItem[] = [
  {
    slug: 'learning-management-system',
    title: 'Learning Management System',
    thumbnail: '/images/lms-1920.webp',
    heroImage: '/images/lms-1920.webp',
    gallery: [
      {
        src: '/images/lms-1920.webp',
        alt: 'LMS dashboard showing learning assignments and course recommendations',
        caption:
          'Learning dashboard — assignments, required courses, and recommendations.',
      },
    ],
    category: 'Learning System',
    tags: ['Curriculum', 'Lecture Notes', 'PostgreSQL', 'Learning Management'],
    stack: ['Vue', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL', 'SonarQube'],
    description:
      'Course delivery, assignments, and learning materials for corporate training.',
    summary:
      'A corporate learning platform for organizing training content and tracking learning progress.',
    impact:
      'Simplified course delivery, assignment flow, and learning material access for internal training teams.',
    focus: ['Course structure', 'Assignment workflow', 'Admin reporting'],
    role: 'UI design, front-end development, and back-end API implementation.',
    year: '2026',
    featured: true,
  },
  {
    slug: 'konectgo',
    title: 'KonectGo',
    thumbnail: '/images/konectgo-1920.webp',
    heroImage: '/images/konectgo-1920.webp',
    gallery: [
      {
        src: '/images/konectgo-1920.webp',
        alt: 'KonectGo homepage with destination search and data packages',
        caption:
          'Service homepage — destination search and popular data packages.',
      },
    ],
    category: 'eSIM & Simcard Services',
    tags: ['Simcard', 'eSIM', 'Quota Roaming'],
    stack: ['React', 'Go Fiber'],
    description:
      'A platform for discovering eSIM, SIM card, and roaming data services.',
    summary:
      'An eSIM and SIM card service platform with destination browsing and a purchase journey for roaming data packages.',
    impact:
      'Created a clearer purchase journey for roaming quota, simcard, and eSIM service discovery.',
    focus: ['Catalog browsing', 'Checkout clarity', 'Service management'],
    role: 'Back-end development, front-end implementation, and product management.',
    year: '2025',
    featured: true,
  },
]

export const socials: SocialLink[] = [
  { platform: 'github', url: 'https://github.com/Aliudin19' },
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/alif-syaifuddin-798970275',
  },
  { platform: 'instagram', url: 'https://www.instagram.com/alixudin/' },
]
