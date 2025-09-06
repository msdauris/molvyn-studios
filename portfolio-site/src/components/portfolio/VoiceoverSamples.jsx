import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2 } from 'lucide-react'

const VoiceoverSamples = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)

  const samples = [
    {
      id: 'mystical-narration',
      title: 'mystical narration',
      description: 'guided meditation and oracle reading voice work',
      duration: '2:34',
      category: 'spiritual'
    },
    {
      id: 'commercial-warm',
      title: 'commercial voice',
      description: 'warm, approachable tone for lifestyle brands',
      duration: '1:45',
      category: 'commercial'
    },
    {
      id: 'character-work',
      title: 'character voice',
      description: 'playful characters for interactive experiences',
      duration: '1:28',
      category: 'character'
    },
    {
      id: 'documentary',
      title: 'documentary narration',
      description: 'clear, authoritative delivery for educational content',
      duration: '2:12',
      category: 'documentary'
    }
  ]

  const handlePlayPause = (sampleId) => {
    if (currentlyPlaying === sampleId) {
      setCurrentlyPlaying(null)
    } else {
      setCurrentlyPlaying(sampleId)
    }
  }

  return (
    <section className="section-padding bg-cool-gray">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-architectural-xl mb-8">
            voice & narration
          </h2>
          <p className="text-body max-w-2xl leading-relaxed">
            bringing stories to life through voice. each project gets a unique 
            vocal approach that serves the narrative and connects with the audience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {samples.map((sample, index) => (
            <motion.div
              key={sample.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-featured"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-architectural-lg">
                      {sample.title}
                    </h3>
                    <span className="mono-text text-xs px-2 py-1 bg-cool-gray">
                      {sample.category}
                    </span>
                  </div>
                  <p className="text-body text-sm mb-4">
                    {sample.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-subtle">
                    <Volume2 className="h-4 w-4" />
                    <span className="mono-text">{sample.duration}</span>
                  </div>
                </div>
              </div>

              {/* Audio Player Controls */}
              <div className="flex items-center justify-between bg-pure-white border border-gray-100 p-4">
                <button
                  onClick={() => handlePlayPause(sample.id)}
                  className="flex items-center justify-center w-10 h-10 bg-true-black hover:bg-charcoal text-pure-white transition-colors duration-200 micro-hover"
                >
                  {currentlyPlaying === sample.id ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4 ml-0.5" />
                  )}
                </button>

                {/* Waveform Placeholder */}
                <div className="flex-1 mx-4">
                  <div className="flex items-center justify-center h-6">
                    <div className="flex items-end space-x-1 h-4">
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-0.5 bg-medium-gray transition-all duration-300 ${
                            currentlyPlaying === sample.id 
                              ? 'animate-pulse bg-electric-blue' 
                              : ''
                          }`}
                          style={{ 
                            height: `${Math.random() * 100 + 20}%`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <span className="mono-text text-xs text-subtle">
                  demo
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h3 className="text-architectural-lg mb-8">
            voice services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="font-medium text-true-black mb-3">narration</h4>
              <p className="text-body text-sm leading-relaxed">
                documentaries, audiobooks, guided meditations, and educational content
              </p>
            </div>
            <div>
              <h4 className="font-medium text-true-black mb-3">commercial</h4>
              <p className="text-body text-sm leading-relaxed">
                brand videos, advertisements, product demos, and promotional content
              </p>
            </div>
            <div>
              <h4 className="font-medium text-true-black mb-3">interactive</h4>
              <p className="text-body text-sm leading-relaxed">
                games, apps, virtual assistants, and immersive experiences
              </p>
            </div>
            <div>
              <h4 className="font-medium text-true-black mb-3">character work</h4>
              <p className="text-body text-sm leading-relaxed">
                animated characters, storytelling, and creative voice acting
              </p>
            </div>
          </div>
          <a 
            href="#contact" 
            className="btn-primary micro-hover"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            discuss your project
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default VoiceoverSamples