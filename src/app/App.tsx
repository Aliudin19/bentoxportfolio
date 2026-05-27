import { useEffect, useMemo, useState } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'

import { ContactForm } from '../components/sections/ContactForm'
import { ExperienceList } from '../components/sections/ExperienceList'
import { MainNav } from '../components/layout/MainNav'
import { InfoCard } from '../components/cards/InfoCard'
import { ProjectCard } from '../components/cards/ProjectCard'
import { SectionCard } from '../components/cards/SectionCard'
import { TitleCard } from '../components/cards/TitleCard'
import { Reveal } from '../components/ui/Reveal'
import { SocialButtons } from '../components/ui/SocialButtons'
import {
  experiences,
  expertise,
  navItems,
  profile,
  projects,
  socials,
} from '../data/portfolio'
import type { ProjectItem } from '../types/portfolio'

const toolbox = [
  { short: 'Dc', name: 'Docker', slug: 'docker' },
  { short: 'Sb', name: 'Spring Boot', slug: 'springboot' },
  { short: 'Pm', name: 'Postman', slug: 'postman' },
  { short: 'Nd', name: 'Node.js', slug: 'nodedotjs' },
  { short: 'Ts', name: 'TypeScript', slug: 'typescript' },
  { short: 'Pg', name: 'PostgreSQL', slug: 'postgresql' },
  { short: 'Gt', name: 'Git', slug: 'git' },
  { short: 'Rc', name: 'React', slug: 'react' },
]

type PageView = 'home' | 'projects'

interface RouteState {
  page: PageView
  projectSlug: string | null
}

interface ShowcasePageProps {
  selectedSlug: string | null
  onBackHome: (event?: ReactMouseEvent<HTMLElement>) => void
  onSelectProject: (projectSlug: string, event?: ReactMouseEvent<HTMLElement>) => void
}

function getRouteFromUrl(): RouteState {
  const params = new URLSearchParams(window.location.search)

  if (params.get('page') !== 'projects') {
    return { page: 'home', projectSlug: null }
  }

  return { page: 'projects', projectSlug: params.get('project') }
}

function getHrefFor(page: PageView, projectSlug?: string | null) {
  if (page === 'home') {
    return '/'
  }

  const params = new URLSearchParams({ page: 'projects' })
  if (projectSlug) {
    params.set('project', projectSlug)
  }

  return `?${params.toString()}`
}

function getProjectBySlug(projectSlug: string | null): ProjectItem {
  return projects.find((project) => project.slug === projectSlug) ?? projects[0]
}

function AppBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(132,204,22,0.32),transparent_26%),radial-gradient(circle_at_92%_96%,rgba(34,197,94,0.30),transparent_32%),linear-gradient(180deg,#05070b_0%,#020403_100%)]" />
  )
}

function ShowcasePage({ selectedSlug, onBackHome, onSelectProject }: ShowcasePageProps) {
  const selectedProject = useMemo(() => getProjectBySlug(selectedSlug), [selectedSlug])

  return (
    <main className="relative min-h-screen bg-[#05070b] text-zinc-100">
      <AppBackground />
      <div className="relative mx-auto max-w-[1240px] px-3 pb-6 pt-3 sm:px-5 sm:pb-8 sm:pt-4 lg:px-6">
        <header className="sticky top-3 z-30">
          <div className="rounded-2xl border border-white/10 bg-black/70 px-3 py-3 shadow-[0_14px_30px_rgba(0,0,0,0.35)] backdrop-blur sm:px-5 sm:py-4">
            <nav className="flex items-center justify-between gap-3">
              <a
                href="/"
                onClick={onBackHome}
                className="font-display text-lg font-semibold uppercase tracking-wide text-white sm:text-xl"
              >
                ALIFPORTFOLIO
              </a>
              <a
                href="/"
                onClick={onBackHome}
                className="rounded-lg px-2 py-2 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-zinc-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300/80 sm:px-3 sm:text-sm"
              >
                Back Home
              </a>
            </nav>
          </div>
        </header>

        <section className="mt-3 lg:hidden" aria-label="Project selector">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {projects.map((project) => {
              const isActive = project.slug === selectedProject.slug

              return (
                <a
                  key={project.slug}
                  href={getHrefFor('projects', project.slug)}
                  onClick={(event) => onSelectProject(project.slug, event)}
                  className={`flex min-w-[178px] items-center gap-3 rounded-2xl border p-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300/80 ${
                    isActive
                      ? 'border-lime-300/60 bg-lime-300/10'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black">
                    <img
                      src={project.thumbnail}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-display text-sm font-semibold text-white">
                      {project.title}
                    </span>
                    <span className="mt-1 block truncate text-[0.68rem] uppercase tracking-[0.12em] text-zinc-400">
                      {project.year}
                    </span>
                  </span>
                </a>
              )
            })}
          </div>
        </section>

        <section className="mt-4 grid gap-3 lg:grid-cols-12">
          <Reveal className="order-1 lg:order-none lg:col-span-8" delay={40}>
            <SectionCard className="flex h-full min-h-[180px] flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.16em] text-zinc-400">{selectedProject.category}</p>
                <h1 className="mt-4 font-display text-4xl font-semibold uppercase leading-[0.94] tracking-tight text-white sm:text-6xl">
                  {selectedProject.title}
                </h1>
              </div>
              <p className="mt-5 text-base italic leading-snug text-zinc-300 sm:text-lg">
                {selectedProject.description}
              </p>
            </SectionCard>
          </Reveal>

          <Reveal className="order-3 lg:order-none lg:col-span-4" delay={70}>
            <SectionCard className="h-full">
              <p className="text-base leading-relaxed text-zinc-200">{selectedProject.summary}</p>
              <p className="mt-5 border-t border-white/10 pt-4 text-sm uppercase tracking-[0.14em] text-zinc-400">
                {projects.length} Projects Curated
              </p>
            </SectionCard>
          </Reveal>

          <Reveal className="order-2 lg:order-none lg:col-span-8" delay={100}>
            <SectionCard className="relative min-h-[260px] overflow-hidden p-0 sm:min-h-[460px]" padded={false}>
              <img
                src={selectedProject.heroImage}
                alt={`${selectedProject.title} project preview`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </SectionCard>
          </Reveal>

          <div className="order-4 grid gap-3 lg:order-none lg:col-span-4">
            <Reveal delay={130}>
              <SectionCard>
                <p className="text-sm uppercase tracking-[0.14em] text-zinc-400">Project Info</p>
                <div className="mt-4 text-sm">
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                    <p className="text-zinc-500">Year</p>
                    <p className="mt-1 font-medium text-white">{selectedProject.year}</p>
                  </div>
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-sm uppercase tracking-[0.14em] text-zinc-400">Role</p>
                  <p className="mt-3 text-base leading-relaxed text-zinc-200">{selectedProject.role}</p>
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-sm uppercase tracking-[0.14em] text-zinc-400">Stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.stack.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <span
                  className="mt-5 inline-flex w-full cursor-not-allowed items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500"
                  aria-disabled="true"
                >
                  Visit Project
                  <span aria-hidden="true">↗</span>
                </span>
              </SectionCard>
            </Reveal>
          </div>
        </section>

        <section className="mt-4">
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-zinc-500">Showcase</p>
              <h2 className="font-display text-4xl font-semibold uppercase tracking-tight text-white">
                More Projects
              </h2>
            </div>
            <p className="text-sm text-zinc-400">Pick a project to preview the detail.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={80 + index * 35}>
                <ProjectCard
                  project={project}
                  href={getHrefFor('projects', project.slug)}
                  external={false}
                  ctaLabel={project.slug === selectedProject.slug ? 'Selected' : 'Open'}
                  onClick={(event) => onSelectProject(project.slug, event)}
                />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

function HomePage({
  onOpenProjects,
}: {
  onOpenProjects: (projectSlug: string | null, event?: ReactMouseEvent<HTMLElement>) => void
}) {
  const featuredHighlights = useMemo(() => projects.filter((project) => project.featured).slice(0, 2), [])

  return (
    <main id="top" className="relative min-h-screen bg-[#05070b] text-zinc-100">
      <AppBackground />

      <div className="relative mx-auto max-w-[1240px] px-3 pb-6 pt-3 sm:px-5 sm:pb-8 sm:pt-4 lg:px-6">
        <MainNav brand="ALIFPORTFOLIO" items={navItems} />

        <section className="bento-showcase mt-2 sm:mt-4">
          <Reveal className="hero-name">
            <SectionCard className="h-full min-h-[190px] sm:min-h-[360px]">
              <TitleCard title={profile.name} subtitle={profile.title} />
            </SectionCard>
          </Reveal>

          <Reveal className="hero-photo" delay={70}>
            <SectionCard className="relative h-full min-h-[430px] overflow-hidden p-0 sm:min-h-[520px] lg:min-h-0">
              <img
                src={profile.avatar}
                alt={`Portrait of ${profile.name}`}
                className="hero-avatar-image absolute inset-0 h-full w-full"
              />
            </SectionCard>
          </Reveal>

          <Reveal className="hero-exp" delay={90}>
            <SectionCard className="h-full min-h-[380px] lg:min-h-0">
              <ExperienceList items={experiences} />
            </SectionCard>
          </Reveal>

          <Reveal className="hero-about" delay={120}>
            <SectionCard id="about" className="h-full p-5 sm:p-6">
              <InfoCard heading="About" body={profile.bio} />
            </SectionCard>
          </Reveal>

          <Reveal className="hero-mail" delay={150}>
            <SectionCard className="group h-full p-5 sm:p-6">
              <a
                href="mailto:alif.saifuddin79@gmail.com"
                className="flex h-full flex-col justify-between rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300/80"
              >
                <p className="text-base leading-snug text-zinc-400 sm:text-lg">Wanna get in touch?</p>
                <div className="flex items-end justify-between gap-2">
                  <p className="font-display text-4xl font-semibold uppercase leading-[0.9] tracking-tight text-white sm:text-[2.9rem] xl:text-[3.15rem]">
                    <span className="block">Email</span>
                    <span className="block">Me</span>
                  </p>
                  <span className="pb-1 text-4xl text-zinc-200 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </div>
              </a>
            </SectionCard>
          </Reveal>
          <Reveal className="featured-title" delay={60}>
            <SectionCard id="work" className="h-full px-7 py-6">
              <h2 className="font-display text-4xl font-semibold uppercase tracking-tight text-white sm:text-6xl lg:text-5xl">
                Featured Work
              </h2>
            </SectionCard>
          </Reveal>

          {featuredHighlights.map((project, index) => (
            <Reveal key={project.title} className={`featured-card-${index + 1}`} delay={100 + index * 40}>
              <ProjectCard
                project={project}
                href={getHrefFor('projects', project.slug)}
                external={false}
                ctaLabel="Open"
                onClick={(event) => onOpenProjects(project.slug, event)}
              />
            </Reveal>
          ))}

          <Reveal className="featured-more" delay={180}>
            <SectionCard className="featured-more-card">
              <a
                href={getHrefFor('projects')}
                onClick={(event) => onOpenProjects(null, event)}
                className="group flex h-full flex-col justify-between rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300/80"
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.14em] text-zinc-400">Showcase</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold uppercase leading-[0.92] tracking-tight text-white sm:text-4xl">
                    More Projects
                  </h3>
                </div>
                <div className="flex items-end justify-between gap-3">
                  <p className="text-sm text-zinc-300">{projects.length}+ projects done</p>
                  <span className="text-3xl text-zinc-200 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </div>
              </a>
            </SectionCard>
          </Reveal>

          <Reveal className="mid-expertise" delay={120}>
            <SectionCard className="h-full">
              <section>
                <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
                  Expertise
                </h2>
                <div className="mt-4 space-y-4">
                  {expertise.map((item) => (
                    <article key={item.title} className="border-t border-white/10 pt-3">
                      <h3 className="text-2xl font-medium text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-300">{item.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            </SectionCard>
          </Reveal>

          <Reveal className="mid-toolbox" delay={70}>
            <SectionCard className="h-full">
              <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">Toolbox</h2>
              <div className="toolbox-marquee mt-4">
                <div className="toolbox-track">
                  {[...toolbox, ...toolbox].map((tool, index) => (
                    <div
                      key={`${tool.slug}-${index}`}
                      className="toolbox-item"
                      aria-hidden={index >= toolbox.length}
                      aria-label={index < toolbox.length ? tool.name : undefined}
                      title={tool.name}
                    >
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                        <img
                          src={`https://cdn.simpleicons.org/${tool.slug}`}
                          alt={`${tool.name} logo`}
                          className="h-7 w-7 object-contain"
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.style.display = 'none'
                            const fallback = event.currentTarget.nextElementSibling as HTMLSpanElement | null
                            if (fallback) fallback.style.display = 'block'
                          }}
                        />
                        <span className="hidden text-sm font-semibold text-zinc-200" aria-hidden="true">
                          {tool.short}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionCard>
          </Reveal>

          <Reveal className="mid-motivation" delay={90}>
            <SectionCard className="h-full">
              <section>
                <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
                  Motivation
                </h2>
                <div className="mt-5 space-y-4">
                  <p className="border-t border-white/10 pt-4 text-base leading-relaxed text-zinc-300">
                    Driven by meaningful product outcomes, not trends. I focus on creating interfaces
                    that feel premium, fast, and clear while solving real user goals.
                  </p>
                  <p className="text-sm uppercase tracking-[0.14em] text-zinc-400">{profile.location}</p>
                  <p className="font-signature pt-2 text-3xl text-zinc-100 sm:text-4xl">{profile.signature}</p>
                </div>
              </section>
            </SectionCard>
          </Reveal>

          <Reveal className="mid-contact" delay={140}>
            <SectionCard id="contact" className="h-full">
              <div className="mb-5 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                <p className="flex items-center gap-3 text-base font-medium text-zinc-100 sm:text-lg">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.75)]" />
                  {profile.availability}
                </p>
              </div>
              <ContactForm />
            </SectionCard>
          </Reveal>
        </section>

        <Reveal className="mt-4" delay={140}>
          <SectionCard className="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-300">
              © {new Date().getFullYear()} {profile.name}. Designed & built with React and Tailwind.
            </p>
            <SocialButtons items={socials} />
          </SectionCard>
        </Reveal>
      </div>
    </main>
  )
}

export default function App() {
  const [route, setRoute] = useState<RouteState>(() => getRouteFromUrl())

  useEffect(() => {
    const onPopState = () => {
      setRoute(getRouteFromUrl())
    }

    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigateTo = (
    nextPage: PageView,
    options: { event?: ReactMouseEvent<HTMLElement>; projectSlug?: string | null } = {},
  ) => {
    const projectSlug = options.projectSlug ?? null

    options.event?.preventDefault()

    const url = new URL(window.location.href)
    if (nextPage === 'projects') {
      url.searchParams.set('page', 'projects')
      if (projectSlug) {
        url.searchParams.set('project', projectSlug)
      } else {
        url.searchParams.delete('project')
      }
    } else {
      url.searchParams.delete('page')
      url.searchParams.delete('project')
    }
    url.hash = ''

    window.history.pushState({}, '', `${url.pathname}${url.search}`)
    setRoute({ page: nextPage, projectSlug: nextPage === 'projects' ? projectSlug : null })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (route.page === 'projects') {
    return (
      <ShowcasePage
        selectedSlug={route.projectSlug}
        onBackHome={(event) => navigateTo('home', { event })}
        onSelectProject={(projectSlug, event) => navigateTo('projects', { event, projectSlug })}
      />
    )
  }

  return (
    <HomePage
      onOpenProjects={(projectSlug, event) => navigateTo('projects', { event, projectSlug })}
    />
  )
}
