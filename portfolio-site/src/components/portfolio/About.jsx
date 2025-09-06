import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-architectural-xl mb-8">
            about the work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column - Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-architectural-lg mb-6">
                approach
              </h3>
              <p className="text-body leading-relaxed mb-6">
                each project starts with understanding the human need behind the technology. 
                whether it's a divination tool or a relationship questionnaire, the focus 
                is always on meaningful interaction over flashy features.
              </p>
              <p className="text-body leading-relaxed">
                the work sits at the intersection of ancient wisdom and modern capability—
                using ai and contemporary web technologies to create experiences that 
                feel both timeless and forward-thinking.
              </p>
            </div>

            <div>
              <h3 className="text-architectural-lg mb-6">
                process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-electric-blue mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-true-black mb-1">research & discovery</h4>
                    <p className="text-subtle text-sm">understanding the problem space and user needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-warm-amber mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-true-black mb-1">prototype & iterate</h4>
                    <p className="text-subtle text-sm">rapid testing of concepts and interactions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-electric-blue mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-true-black mb-1">craft & refine</h4>
                    <p className="text-subtle text-sm">attention to detail in both code and experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Technical & Personal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-architectural-lg mb-6">
                capabilities
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="card-minimal">
                  <h4 className="font-medium text-true-black mb-2">web development</h4>
                  <p className="text-subtle text-sm">react, javascript, modern css</p>
                </div>
                <div className="card-minimal">
                  <h4 className="font-medium text-true-black mb-2">voice & audio</h4>
                  <p className="text-subtle text-sm">narration, sound design</p>
                </div>
                <div className="card-minimal">
                  <h4 className="font-medium text-true-black mb-2">interaction design</h4>
                  <p className="text-subtle text-sm">user experience, prototyping</p>
                </div>
                <div className="card-minimal">
                  <h4 className="font-medium text-true-black mb-2">ai integration</h4>
                  <p className="text-subtle text-sm">thoughtful automation</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-architectural-lg mb-6">
                background
              </h3>
              <p className="text-body leading-relaxed mb-6">
                independent creator working at the intersection of technology and meaning. 
                background in both technical development and creative practices, with a 
                focus on tools that serve human connection rather than replace it.
              </p>
              <div className="mono-text text-sm text-subtle space-y-1">
                <p>based in [location]</p>
                <p>available for select projects</p>
                <p>collaborating with ai since 2023</p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <p className="text-body leading-relaxed mb-6">
                interested in working together? let's start with a conversation 
                about what you're building and how it might serve your community.
              </p>
              <a 
                href="#contact" 
                className="btn-primary micro-hover"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                start a conversation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About