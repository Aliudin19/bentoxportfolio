import type {
  ExperienceItem,
  ExpertiseItem,
  NavItem,
  ProfileData,
  ProjectItem,
  SocialLink,
  TestimonialItem,
} from '../types/portfolio'

export const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

export const profile: ProfileData = {
  name: 'Alif Syaifuddin',
  title: 'Full-stack developer & UI/UX designer',
  location: 'Jakarta / Remote',
  intro: 'Crafting digital experiences with a blend of design and code.',
  bio: "I design and build modern system experiences that feel fast, clear, and memorable. My approach blends visual direction, practical UX, and production-ready full-stack engineering.",
  availability: 'Available for freelance projects',
  avatar: '/images/alif-2.1.png',
  signature: 'Alif Syaifuddin',
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Full-stack Developer',
    company: 'Pelita Teknologi Global',
    period: 'Aug 2025 - Present',
    location: 'jakarta',
    highlights:
      'Building a B2B SaaS platform for supply chain management, responsible for both front-end and back-end development using angular, spring boot, and PostgreSQL.',
  },
  {
    role: 'Front-End Developer',
    company: 'Pelita Teknologi Global',
    period: 'Jun 2024 - jun 2025',
    location: 'Jakarta',
    highlights:
      'Translated product requirements into high-fidelity prototypes and implemented polished UI implementations, with a focus on conversion and usability.',
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
    title: 'Full-stack Development',
    description:
      'Proficient in both front-end and back-end technologies, delivering end-to-end solutions that are performant, scalable, and maintainable.',
  },
  {
    title: 'Web / App Design',
    description:
      'Design systems and product interfaces that balance brand expression with usability and speed.',
  },
  {
    title: 'Software Testing',
    description:
      'Experienced in manual and automated testing methodologies, ensuring software quality and reliability through comprehensive test plans and execution.',
  },
  
]

export const projects: ProjectItem[] = [
  {
    slug: 'learning-management-system',
    title: 'Learning Management System',
    thumbnail: '/images/LMS-capture.png',
    heroImage: '/images/LMS-capture.png',
    link: 'https://example.com/celestia',
    category: 'Learning System',
    tags: ['Curriculum', 'Lecture Notes', 'PostgreSQL', 'Learning Management'],
    stack: ['Vue', 'Tailwind CSS', 'spring boot', 'PostgreSQL', 'sonarQube'],
    description: 'A comprehensive LMS platform for corporate training and development.',
    summary:
      'A full-featured learning management system designed to facilitate corporate training and development, with a focus on user engagement, content management, and performance tracking.',
    role: 'UI design, front-end development, and back-end API implementation.',
    year: '2026',
    featured: true,
  },
  {
    slug: 'konectgo',
    title: 'KonectGo',
    thumbnail: '/images/konectgo-capture.png',
    heroImage: '/images/konectgo-capture.png',
    link: 'https://example.com/konectgo',
    category: 'Esim, simcard services',
    tags: ['Simcard', 'Esim', 'Quota roaming',],
    stack: ['React', 'go fiber', 'Responsive Layout', 'Editorial UI'],
    description: 'Platform for esim and simcard services, seamless and user-friendly.',
    summary:
      'A dynamic platform for esim and simcard services, featuring a user-friendly design and seamless interactions to enhance customer experience and drive engagement.',
    role: 'Back-end development, front-end implementation, and product management.',
    year: '2025',
    featured: true,
  },
  // {
  //   slug: 'frameflow-portfolio',
  //   title: 'Frameflow Portfolio',
  //   thumbnail: '/images/project-frameflow.svg',
  //   heroImage: '/images/project-frameflow.svg',
  //   link: 'https://example.com/frameflow',
  //   category: 'Personal Brand System',
  //   tags: ['TypeScript', 'UI System'],
  //   stack: ['TypeScript', 'Vue', 'Design System', 'Bento Layout'],
  //   description: 'Personal brand platform with modular bento sections.',
  //   summary:
  //     'A modular portfolio system built around reusable bento sections, compact storytelling, and easy content updates.',
  //   role: 'Design system planning, component architecture, and production front-end build.',
  //   year: '2024',
  //   featured: true,
  // },
  // {
  //   slug: 'Project Management Dashboard',
  //   title: 'Project Management Dashboard',
  //   thumbnail: '/images/dashboard-capture.png',
  //   heroImage: '/images/dashboard-capture.png',
  //   link: 'https://example.com/dashboard',
  //   category: 'Project Management Tool',
  //   tags: ['React', 'Node.js', 'MongoDB', 'Project Management'],
  //   stack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT Authentication'],
  //   description:
  //     'A project management dashboard for teams to track tasks, deadlines, and collaboration.',
  //   summary:
  //     'A comprehensive project management tool designed to help teams organize tasks, manage deadlines, and facilitate collaboration through an intuitive interface and robust feature set.',
  //   role: 'Full-stack development, including front-end design and back-end API implementation.',
  //   year: '2025',
  //   featured: false,
  // }
]

export const testimonials: TestimonialItem[] = [
  {
    name: 'David Rodriguez',
    role: 'Creative Director',
    company: 'Xbox',
    quote:
      'Alif combines design taste and engineering discipline. The final product looked premium and stayed performant.',
    logo: 'XBX',
  },
  {
    name: 'Jessica Parker',
    role: 'Marketing Manager',
    company: 'Activision',
    quote:
      'The collaboration was smooth and transparent. We launched with strong feedback from both users and stakeholders.',
    logo: 'ATV',
  },
  {
    name: 'James Connor',
    role: 'Project Lead',
    company: 'Airbus',
    quote:
      'Strong ownership from planning to handoff. Every milestone was delivered with clarity and excellent attention to detail.',
    logo: 'ARB',
  },
  {
    name: 'Emily Carter',
    role: 'Head of Product',
    company: 'Notion Labs',
    quote:
      'Design decisions were always grounded in user flow. The final interface feels both elegant and practical.',
    logo: 'NTS',
  },
]

export const socials: SocialLink[] = [
  { platform: 'github', url: 'https://github.com/Aliudin19' },
  { platform: 'linkedin', url: 'https://www.linkedin.com/in/alif-syaifuddin-798970275' },
  { platform: 'instagram', url: 'https://www.instagram.com/alixudin/' },
  { platform: 'x', url: 'https://x.com' },
]
