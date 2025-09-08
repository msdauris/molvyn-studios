import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/portfolio/Hero'
import Projects from '../components/portfolio/Projects'
import About from '../components/portfolio/About'
import Contact from '../components/portfolio/Contact'
import VoiceoverSamples from '../components/portfolio/VoiceoverSamples'

const Home = () => {
  useEffect(() => {
    // Always clear hash first
    window.history.replaceState(null, null, '/')
    
    // Check if we need to scroll to a specific section (from nav click)
    const scrollToSection = sessionStorage.getItem('scrollToSection')
    
    if (scrollToSection) {
      // Clear the stored section
      sessionStorage.removeItem('scrollToSection')
      // Scroll to the intended section after a delay
      setTimeout(() => {
        const element = document.querySelector(scrollToSection)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Default behavior: scroll to top (for back button)
      window.scrollTo(0, 0)
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
