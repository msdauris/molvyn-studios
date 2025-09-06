import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 'oracle',
      title: 'threshold oracle',
      description: 'digital divination tool',
      link: '/oracle',
      status: 'live'
    },
    {
      id: 'chatterbox',
      title: 'digital chatterbox',
      description: 'interactive fortune teller',
      link: '/chatterbox',
      status: 'live'
    },
    {
      id: 'synastry',
      title: 'relationship 8-ball',
      description: 'astrological compatibility questions',
      link: '/relationship',
      status: 'development'
    }
  ]

  return (
    <section id="work" className="section-padding">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-architectural-xl mb-8">
            recent work
          </h2>
        </motion.div>

        <div className="grid-architectural">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-featured micro-hover h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-architectural-lg mb-2">
                      {project.title}
                    </h3>
                    <p className="text-body">
                      {project.description}
                    </p>
                  </div>
                  <span className="mono-text text-xs px-2 py-1 bg-cool-gray">
                    {project.status}
                  </span>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-6">
                  <Link
                    to={project.link}
                    className="inline-flex items-center gap-2 text-subtle hover:text-true-black transition-colors duration-200"
                  >
                    <span className="mono-text text-sm">explore</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-gray-100"
        >
          <div className="max-w-2xl">
            <p className="text-body leading-relaxed mb-6">
              each tool is crafted with intention, combining human creativity with ai partnership. 
              the focus is on meaningful interaction rather than flashy features.
            </p>
            <div className="mono-text text-sm text-subtle space-y-1">
              <p>built with: react, tailwind, framer motion</p>
              <p>process: design → prototype → refine → ship</p>
              <p>approach: minimal, functional, purposeful</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
