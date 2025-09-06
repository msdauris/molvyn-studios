import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/portfolio/Hero'
import Projects from '../components/portfolio/Projects'
import About from '../components/portfolio/About'
import Contact from '../components/portfolio/Contact'
import VoiceoverSamples from '../components/portfolio/VoiceoverSamples'

const Home = () => {
  useEffect(() => {
    // Handle hash scrolling when navigating to homepage with hash
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100) // Small delay to ensure page is loaded
    }
  }, [])

  return (
    <div className="space-y-0">
      <Hero />
      <Projects />
      <VoiceoverSamples />
      <About />
      <Contact />
    </div>
  )
}

export default Home
