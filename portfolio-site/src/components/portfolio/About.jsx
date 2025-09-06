import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="content-section">
      <motion.div 
        className="content-left"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="content-title">currently</h2>
      </motion.div>
      
      <motion.div 
        className="content-right"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="content-text">
          building tools that honor both innovation and intuition. each project explores 
          the intersection of ancient wisdom and modern technology.
        </p>
        
        <p className="content-text">
          crafted independently with ai partnership, focused on meaningful connection 
          over meaningless metrics.
        </p>
        
        <div className="content-meta">
          available for select projects<br/>
          based in valencia, spain<br/>
          working with intention since 2024
        </div>
      </motion.div>
    </section>
  )
}

export default About