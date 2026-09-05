import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { CSSProperties, MouseEvent } from 'react'
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useReducedMotion,
} from 'motion/react'
import { MainNav } from '../components/layout/MainNav'
import { Hero } from '../components/ui/Hero'
import { ProjectCard } from '../components/cards/ProjectCard'
import { ExperienceList } from '../components/sections/ExperienceList'
import { Technologies } from '../components/ui/Technologies'
import { SocialButtons } from '../components/ui/SocialButtons'
import { Reveal } from '../components/ui/Reveal'
import {
  experiences,
  expertise,
  navItems,
  profile,
  projects,
  socials,
} from '../data/portfolio'
import { responsiveImage } from '../lib/images'
import { motionTiming } from '../lib/motion'
import type { ProjectItem } from '../types/portfolio'

type Route = { page: 'home' | 'projects'; slug: string | null }
type Navigate = (
  event: MouseEvent<HTMLAnchorElement>,
  slug?: string | null,
  home?: boolean,
) => void
function readRoute(): Route {
  const query = new URLSearchParams(location.search)
  return {
    page: query.get('page') === 'projects' ? 'projects' : 'home',
    slug: query.get('project'),
  }
}
function projectHref(slug: string) {
  return `?${new URLSearchParams({ page: 'projects', project: slug })}`
}
const homeHref = () => location.pathname

function SectionHeading({
  number,
  title,
  detail,
}: {
  number: string
  title: string
  detail?: string
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{number}</p>
        <h2>{title}</h2>
      </div>
      {detail && <p>{detail}</p>}
    </div>
  )
}
function Footer() {
  return (
    <footer className="site-footer">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span>Jakarta, Indonesia</span>
    </footer>
  )
}
function Home({ navigate }: { navigate: Navigate }) {
  return (
    <>
      <MainNav items={navItems} />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <section id="work" className="page-section">
          <SectionHeading number="01 / Projects" title="Selected work." />
          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.12}>
                <ProjectCard
                  project={project}
                  href={projectHref(project.slug)}
                  onClick={(event) => navigate(event, project.slug)}
                />
              </Reveal>
            ))}
          </div>
        </section>
        <section className="page-section" aria-labelledby="experience-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Experience</p>
              <h2 id="experience-heading">Building across the stack.</h2>
            </div>
          </div>
          <Reveal>
            <ExperienceList items={experiences} />
          </Reveal>
        </section>
        <section id="about" className="page-section">
          <SectionHeading
            number="03 / About & technologies"
            title="Interfaces, APIs, and the work between."
          />
          <Reveal>
            <div className="about-grid">
              <div>
                <p className="about-intro">{profile.bio}</p>
                <p>
                  My work has included UI design, front-end development,
                  back-end implementation, and software testing.
                </p>
              </div>
              <div className="capabilities">
                {expertise.map((item) => (
                  <div key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <Technologies />
          </Reveal>
        </section>
        <section id="contact" className="page-section contact">
          <Reveal>
            <p className="eyebrow">04 / Contact</p>
            <h2>Let’s talk about your team.</h2>
            <p>
              For full-stack roles or a conversation about my work, reach me by
              email or LinkedIn.
            </p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
              <span aria-hidden="true">↗</span>
            </a>
            <SocialButtons
              items={socials.filter(
                (item) =>
                  item.platform === 'github' || item.platform === 'linkedin',
              )}
            />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  )
}
function Gallery({ project }: { project: ProjectItem }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const opener = useRef<HTMLButtonElement | null>(null)
  const [active, setActive] = useState(0)
  const [zoomed, setZoomed] = useState(false)
  const items = project.gallery?.length
    ? project.gallery
    : [
        {
          src: project.heroImage,
          alt: `${project.title} interface`,
          caption: `${project.title} overview.`,
        },
      ]
  const current = items[active]
  return (
    <div className="gallery">
      {items.map((item, index) => (
        <figure key={item.src}>
          <button
            className="screenshot-button"
            aria-label={`Enlarge screenshot: ${item.caption}`}
            aria-haspopup="dialog"
            onClick={(event) => {
              opener.current = event.currentTarget
              setActive(index)
              setZoomed(false)
              dialog.current?.showModal()
            }}
          >
            <img
              src={item.src}
              {...responsiveImage(item.src)}
              sizes="(min-width: 1120px) 1120px, calc(100vw - 40px)"
              alt={item.alt}
              decoding="async"
              loading="lazy"
            />
            <span>
              Enlarge screenshot <span aria-hidden="true">↗</span>
            </span>
          </button>
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
      <dialog
        ref={dialog}
        className="image-dialog"
        aria-labelledby="image-dialog-caption"
        onClose={() => opener.current?.focus()}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close()
        }}
      >
        <div className="dialog-content">
          <button
            className="button dialog-close"
            autoFocus
            onClick={() => dialog.current?.close()}
          >
            Close screenshot <span aria-hidden="true">×</span>
          </button>
          <button
            className="button zoom-button"
            aria-pressed={zoomed}
            onClick={() => setZoomed(!zoomed)}
          >
            {zoomed ? 'Fit to screen' : 'View at full size'}
          </button>
          <div
            className={`dialog-image-scroll${zoomed ? ' is-zoomed' : ''}`}
            tabIndex={zoomed ? 0 : undefined}
            role="region"
            aria-label="Project screenshot; scroll to explore when zoomed"
          >
            <img src={current.src} alt={current.alt} />
          </div>
          <p id="image-dialog-caption">{current.caption}</p>
        </div>
      </dialog>
    </div>
  )
}
function ProjectPage({
  slug,
  navigate,
}: {
  slug: string | null
  navigate: Navigate
}) {
  const project =
    slug === null ? projects[0] : projects.find((item) => item.slug === slug)
  return (
    <>
      <header className="site-header">
        <nav className="site-nav" aria-label="Project navigation">
          <a
            className="brand"
            href={homeHref()}
            onClick={(event) => navigate(event, null, true)}
          >
            alif<span>.</span>
          </a>
          <a
            className="back-link"
            href={homeHref()}
            onClick={(event) => navigate(event, null, true)}
          >
            ← Back home
          </a>
        </nav>
      </header>
      <main id="main-content" tabIndex={-1}>
        {project ? (
          <>
            <section className="project-heading">
              <p className="eyebrow">
                {project.category} / {project.year}
              </p>
              <h1 tabIndex={-1} data-page-heading>
                {project.title}
              </h1>
              <p className="project-lede">{project.description}</p>
            </section>
            <Gallery project={project} />
            <section
              className="project-story page-section"
              aria-label="Project overview"
            >
              <div>
                <p className="eyebrow">Overview</p>
                <h2>The context.</h2>
                <p>{project.summary}</p>
                <h3>My contribution</h3>
                <p>{project.role}</p>
                <h3>What the work supported</h3>
                <p>{project.impact}</p>
              </div>
              <aside>
                <h3>Areas of focus</h3>
                <ul className="focus-list">
                  {project.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3>Technologies</h3>
                <ul className="technology-list">
                  {project.stack.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
                {project.link && (
                  <a
                    className="button"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit project ↗
                  </a>
                )}
              </aside>
            </section>
            <section className="page-section other-project">
              <SectionHeading number="Keep exploring" title="Other project" />
              <div className="project-grid">
                {projects
                  .filter((item) => item.slug !== project.slug)
                  .map((item) => (
                    <ProjectCard
                      key={item.slug}
                      project={item}
                      href={projectHref(item.slug)}
                      onClick={(event) => navigate(event, item.slug)}
                    />
                  ))}
              </div>
            </section>
          </>
        ) : (
          <section className="not-found">
            <p className="eyebrow">Project overview</p>
            <h1 tabIndex={-1} data-page-heading>
              Project not found
            </h1>
            <p>Choose one of the available projects below.</p>
            <div className="project-grid">
              {projects.map((item) => (
                <ProjectCard
                  key={item.slug}
                  project={item}
                  href={projectHref(item.slug)}
                  onClick={(event) => navigate(event, item.slug)}
                />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
function PageFrame({
  route,
  navigate,
  focusPage,
}: {
  route: Route
  navigate: Navigate
  focusPage: boolean
}) {
  const reduced = useReducedMotion()
  useLayoutEffect(() => {
    if (focusPage) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      document
        .querySelector<HTMLElement>('[data-page-heading]')
        ?.focus({ preventScroll: true })
    } else if (location.hash) {
      document
        .getElementById(decodeURIComponent(location.hash.slice(1)))
        ?.scrollIntoView({ behavior: 'instant' })
    }
  }, [focusPage])
  return (
    <motion.div
      initial={{ opacity: reduced ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: reduced ? 1 : 0 }}
      transition={{ duration: reduced ? 0 : motionTiming.page }}
    >
      {route.page === 'home' ? (
        <Home navigate={navigate} />
      ) : (
        <ProjectPage slug={route.slug} navigate={navigate} />
      )}
    </motion.div>
  )
}
export default function App() {
  const [route, setRoute] = useState(readRoute)
  const [focusPage, setFocusPage] = useState(false)
  const routeKey = `${route.page}:${route.page === 'projects' ? (route.slug ?? projects[0].slug) : ''}`
  useEffect(() => {
    const onPop = () => {
      const next = readRoute()
      if (
        next.page === route.page &&
        (next.page === 'home' ||
          (next.slug ?? projects[0].slug) === (route.slug ?? projects[0].slug))
      )
        return
      setFocusPage(true)
      setRoute(next)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [route])
  const navigate: Navigate = (event, slug = null, home = false) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.defaultPrevented
    )
      return
    event.preventDefault()
    const next = {
      page: home ? ('home' as const) : ('projects' as const),
      slug,
    }
    const nextKey = `${next.page}:${home ? '' : (slug ?? projects[0].slug)}`
    if (routeKey === nextKey) return
    history.pushState(
      {},
      '',
      home ? homeHref() : projectHref(slug ?? projects[0].slug),
    )
    setFocusPage(true)
    setRoute(next)
  }
  useEffect(() => {
    const project = projects.find((item) => item.slug === route.slug)
    document.title =
      route.page === 'home'
        ? 'Alif Syaifuddin — Full-stack developer'
        : `${project?.title ?? (route.slug === null ? projects[0].title : 'Project not found')} — Alif Syaifuddin`
  }, [route])
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div
        className="site-shell"
        id="top"
        style={
          {
            '--interaction-duration': `${motionTiming.interaction}s`,
          } as CSSProperties
        }
      >
        <AnimatePresence mode="wait">
          <PageFrame
            key={routeKey}
            route={route}
            navigate={navigate}
            focusPage={focusPage}
          />
        </AnimatePresence>
      </div>
    </MotionConfig>
  )
}
