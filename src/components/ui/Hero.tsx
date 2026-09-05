import { motion, useReducedMotion } from 'motion/react'
import { TitleCard } from '../cards/TitleCard'
import { profile } from '../../data/portfolio'
import { responsiveImage } from '../../lib/images'
import { motionTiming } from '../../lib/motion'

export function Hero() {
  const reduced = useReducedMotion()
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-copy">
        <TitleCard title={profile.name} subtitle={profile.title} />
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduced ? 0 : 0.65,
            delay: reduced ? 0 : 0.42,
            ease: motionTiming.ease,
          }}
        >
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View selected work <span aria-hidden="true">↘</span>
            </a>
            <a className="hero-contact" href="#contact">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
      <motion.figure
        className="hero-portrait"
        initial={reduced ? false : { clipPath: 'inset(100% 0% 0% 0%)', y: 35 }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)', y: 0 }}
        transition={{
          duration: reduced ? 0 : 0.95,
          delay: reduced ? 0 : 0.2,
          ease: motionTiming.ease,
        }}
      >
        <motion.img
          src={profile.avatar}
          {...responsiveImage(profile.avatar)}
          sizes="(min-width: 768px) 400px, calc(100vw - 40px)"
          alt="Alif Syaifuddin"
          fetchPriority="high"
          decoding="async"
          initial={reduced ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: reduced ? 0 : 1.2, ease: motionTiming.ease }}
        />
      </motion.figure>
    </section>
  )
}
