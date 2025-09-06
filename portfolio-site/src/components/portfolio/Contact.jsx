import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Calendar, Send, CheckCircle, Heart } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
    timeline: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const projectTypes = [
    'web application',
    'voice & audio work',
    'consultation',
    'other'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        project: '',
        message: '',
        timeline: ''
      })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section-padding bg-cool-gray">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-architectural-xl mb-8">
            let's build something
          </h2>
          <p className="text-body max-w-2xl leading-relaxed">
            interested in working together? send a message about your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-true-black mb-3">
                    name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-true-black mb-3">
                    email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-true-black mb-3">
                    project type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">select type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-true-black mb-3">
                    project details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea-field"
                    placeholder=""
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary micro-hover"
                >
                  send message
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12"
              >
                <div className="mb-6">
                  <CheckCircle className="h-8 w-8 text-true-black mb-4" />
                  <h3 className="text-architectural-lg mb-2">
                    message sent
                  </h3>
                  <p className="text-body">
                    will respond within 24 hours
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-12">
              <div>
                <h3 className="text-architectural-lg mb-6">
                  process
                </h3>
                <div className="space-y-4 text-body">
                  <p>initial conversation to understand scope</p>
                  <p>proposal with timeline and approach</p>
                  <p>iterative development with regular check-ins</p>
                  <p>delivery and handoff</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-architectural-lg mb-6">
                  availability
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-electric-blue"></div>
                    <span className="text-body">accepting new projects</span>
                  </div>
                  <p className="mono-text text-sm text-subtle ml-5">
                    next start: early 2025
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-architectural-lg mb-6">
                  contact
                </h3>
                <div className="space-y-2">
                  <p className="text-body">hello@molvynstudios.com</p>
                  <p className="mono-text text-sm text-subtle">
                    response within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
