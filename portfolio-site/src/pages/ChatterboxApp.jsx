import { motion } from 'framer-motion'
import OrigamiFortuneTeller from '../components/chatterbox/OrigamiFortuneTeller'

const ChatterboxApp = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
        
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            origami<br/>fortune teller
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            interactive divination that unfolds wisdom through ancient paper folding
          </motion.p>
        </div>
        
        <div className="scroll-indicator"></div>
      </section>

      {/* Fortune Teller Interface */}
      <section className="content-section">
        <motion.div 
          className="content-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="content-title">divine</h2>
        </motion.div>
        
        <motion.div 
          className="content-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <OrigamiFortuneTeller />
        </motion.div>
      </section>

      {/* About */}
      <section className="content-section">
        <div className="content-left">
          <h2 className="content-title">about</h2>
        </div>
        <div className="content-right">
          <p className="content-text">
            this digital origami fortune teller recreates the ancient art of paper folding divination. 
            choose your direction, select a mystical number, pick an object, and let the universe 
            reveal its wisdom through the sacred geometry of folded paper.
          </p>
          <div className="content-meta" style={{ marginTop: '2rem' }}>
            svg-based origami simulation<br/>
            gsap vector point animations<br/>
            mystical number sequences<br/>
            personalized fortune generation
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChatterboxApp