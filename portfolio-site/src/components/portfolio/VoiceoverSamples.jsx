import { motion } from 'framer-motion'

const VoiceoverSamples = () => {
  const samples = [
    {
      id: 'mystical-narration',
      title: 'narration',
      description: 'ethereal storytelling for guided meditations and oracle readings',
      duration: '2:34'
    },
    {
      id: 'commercial-warm',
      title: 'commercial',
      description: 'friendly, approachable tone for lifestyle and wellness brands',
      duration: '1:45'
    },
    {
      id: 'character-whimsical',
      title: 'character',
      description: 'playful voice work for interactive experiences and games',
      duration: '1:28'
    }
  ]

  return (
    <section className="content-section">
      <motion.div 
        className="content-left"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="content-title">voice & sound</h2>
      </motion.div>
      
      <motion.div 
        className="content-right"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="content-text">
          bringing stories to life through voice. from mystical meditations to commercial work, 
          each project gets a unique vocal approach that serves the narrative.
        </p>
        
        {samples.map((sample, index) => (
          <motion.div
            key={sample.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="project-title">{sample.title}</h3>
            <p className="project-description">{sample.description}</p>
            <div className="project-meta">
              <span>{sample.duration}</span>
              <span>•</span>
              <a href="#" className="project-link">
                listen →
              </a>
            </div>
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="content-meta"
          style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #f0f0f0' }}
        >
          services: narration, commercial, character work<br/>
          formats: audiobooks, meditations, brand content<br/>
          approach: authentic, intentional, story-driven
        </motion.div>
      </motion.div>
    </section>
  )
}

export default VoiceoverSamples