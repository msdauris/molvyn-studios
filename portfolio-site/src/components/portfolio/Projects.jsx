import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Projects = () => {
  const projects = [
    {
      id: 'oracle',
      title: 'threshold oracle',
      description: 'digital divination tool for daily reflection and insight',
      link: '/oracle',
      status: 'live',
      type: 'digital'
    },
    {
      id: 'chatterbox',
      title: 'digital chatterbox',
      description: 'interactive fortune teller that unfolds wisdom with each click',
      link: '/chatterbox',
      status: 'live',
      type: 'digital'
    },
    {
      id: 'vendemmia',
      title: 'vendemmia',
      description: 'documentary-style video capturing local harvest traditions in spanish',
      link: '#',
      status: 'editing',
      type: 'video'
    },
    {
      id: 'drone-work',
      title: 'aerial perspectives',
      description: 'cinematic drone footage exploring landscapes and architecture',
      link: '#',
      status: 'coming soon',
      type: 'video'
    },
    {
      id: 'synastry',
      title: 'relationship deepener',
      description: 'astrological compatibility questions for deeper connection',
      link: '/relationship',
      status: 'development',
      type: 'digital'
    }
  ]

  return (
    <section id="work" className="content-section">
      <motion.div 
        className="content-left"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="content-title">recent work</h2>
      </motion.div>
      
      <motion.div 
        className="content-right"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-meta">
              <span>{project.status}</span>
              <span>•</span>
              {project.type === 'digital' ? (
                <Link to={project.link} className="project-link">
                  explore →
                </Link>
              ) : (
                <span className="project-link project-link-disabled">
                  {project.status === 'coming soon' ? 'preview soon' : 'watch soon'} →
                </span>
              )}
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
          digital: react, tailwind, framer motion<br/>
          video: premiere, after effects, drone cinematography<br/>
          philosophy: minimal, functional, purposeful
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects