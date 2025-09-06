import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Main Content */}
      <div className="container-padding text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-architectural"
        >
          <h1 className="text-display mb-12">
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              molvyn studios
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-dramatic"
          >
            <p className="text-architectural-xl text-body max-w-3xl mx-auto mb-16">
              digital tools built with intention
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mb-20 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={scrollToWork}
              className="btn-primary micro-hover"
            >
              view recent work
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary micro-hover"
            >
              start a project
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-body leading-relaxed">
              currently building tools that bridge the technical and mystical
            </p>
            <div className="mt-8 space-y-2">
              <p className="text-subtle mono-text text-sm">
                crafted independently with ai partnership
              </p>
              <p className="text-subtle mono-text text-sm">
                available for select projects
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
