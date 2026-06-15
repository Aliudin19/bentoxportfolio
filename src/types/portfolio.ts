export type SectionId = 'about' | 'work' | 'contact'

export interface NavItem {
  id: SectionId
  label: string
}

export interface ProfileData {
  name: string
  title: string
  location: string
  intro: string
  bio: string
  availability: string
  avatar: string
  signature: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  location: string
  highlights: string
}

export interface ProjectItem {
  slug: string
  title: string
  thumbnail: string
  heroImage: string
  link: string
  category: string
  tags: string[]
  stack: string[]
  description: string
  summary: string
  impact: string
  focus: string[]
  metric: string
  role: string
  year: string
  featured: boolean
}

export interface ExpertiseItem {
  title: string
  description: string
}

export interface TestimonialItem {
  name: string
  role: string
  company: string
  quote: string
  logo: string
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'instagram' | 'x'
  url: string
}

export interface ContactFormInput {
  name: string
  email: string
  message: string
}
