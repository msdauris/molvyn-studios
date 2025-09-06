import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="content-section">
      <motion.div 
        className="content-left"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="content-title">let's connect</h2>
      </motion.div>
      
      <motion.div 
        className="content-right"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {!isSubmitted ? (
          <>
            <p className="content-text">
              interested in working together? let's start with a conversation about 
              what you're building and how it might serve your community.
            </p>
            
            <form onSubmit={handleSubmit} style={{ marginTop: '3rem' }}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="project" className="form-label">project type</label>
                <input
                  type="text"
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="web application, consultation, etc."
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                  placeholder="tell me about your project..."
                />
              </div>
              
              <button type="submit" className="btn-primary">
                send message
              </button>
            </form>
          </>
        ) : (
          <div>
            <p className="content-text">
              thank you for reaching out. i'll respond within 24 hours.
            </p>
            <div className="content-meta" style={{ marginTop: '2rem' }}>
              message sent successfully<br/>
              expect a response soon
            </div>
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default Contact