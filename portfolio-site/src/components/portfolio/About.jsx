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
          crafting digital tools and strategies that connect brands with their communities. 
          focused on meaningful engagement over vanity metrics.
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