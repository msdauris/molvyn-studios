import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2 } from 'lucide-react'

const VoiceoverSamples = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)
  const [progress, setProgress] = useState({})
  const audioRefs = useRef({})

  const samples = [
    {
      id: 'podcast',
      title: 'podcast intro',
      description: 'energetic, welcoming tone for creative content',
      script: '"Welcome back to Creative Rebels, the podcast where we celebrate the dreamers, the makers..."',
      duration: '0:19',
      category: 'media',
      audioFile: '/audio/podcast-45s.mp3'
    },
    {
      id: 'luxury-car',
      title: 'luxury car commercial',
      description: 'sophisticated, confident delivery for premium automotive brand',
      script: '"Some journeys change everything. The new Meridian Series. Where British engineering meets effortless elegance..."',
      duration: '0:25',
      category: 'commercial',
      audioFile: '/audio/luxury-car-30s.mp3'
    },
    {
      id: 'artisanal',
      title: 'artisanal brand',
      description: 'authentic storytelling for handcrafted heritage brands',
      script: '"Three generations. One passion. At Thornfield Ceramics, we still shape each piece by hand..."',
      duration: '0:30',
      category: 'commercial',
      audioFile: '/audio/artisanal-35s.mp3'
    },
    {
      id: 'documentary',
      title: 'documentary narration',
      description: 'authoritative yet engaging style for educational content',
      script: '"Beneath the surface of the Mediterranean, an ancient world lies waiting. For centuries, these underwater caves..."',
      duration: '0:30',
      category: 'narration',
      audioFile: '/audio/documentary-60s.mp3'
    },
    {
      id: 'tech-product',
      title: 'tech product launch',
      description: 'clean, modern tone building excitement for innovation',
      script: '"Imagine if your workspace understood you. Really understood you. Introducing FlowStream Pro..."',
      duration: '0:29',
      category: 'commercial',
      audioFile: '/audio/tech-product-45s.mp3'
    }
  ]

  useEffect(() => {
    // Initialize audio elements
    samples.forEach(sample => {
      if (!audioRefs.current[sample.id]) {
        audioRefs.current[sample.id] = new Audio(sample.audioFile)
        
        // Add event listeners
        audioRefs.current[sample.id].addEventListener('ended', () => {
          setCurrentlyPlaying(null)
          setProgress(prev => ({ ...prev, [sample.id]: 0 }))
        })
        
        audioRefs.current[sample.id].addEventListener('timeupdate', () => {
          const audio = audioRefs.current[sample.id]
          const progressPercent = (audio.currentTime / audio.duration) * 100
          setProgress(prev => ({ ...prev, [sample.id]: progressPercent }))
        })
      }
    })

    return () => {
      // Cleanup
      Object.values(audioRefs.current).forEach(audio => {
        audio.pause()
        audio.currentTime = 0
      })
    }
  }, [])

  const handlePlayPause = async (sampleId) => {
    // Pause any currently playing audio
    if (currentlyPlaying && currentlyPlaying !== sampleId) {
      audioRefs.current[currentlyPlaying].pause()
      audioRefs.current[currentlyPlaying].currentTime = 0
    }

    const audio = audioRefs.current[sampleId]
    
    if (currentlyPlaying === sampleId) {
      // Pause current
      audio.pause()
      setCurrentlyPlaying(null)
    } else {
      // Play new
      try {
        audio.currentTime = 0
        await audio.play()
        setCurrentlyPlaying(sampleId)
      } catch (error) {
        console.log('Audio play failed:', error)
      }
    }
  }

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
        
        <div className="voiceover-grid">
          {samples.map((sample, index) => (
            <motion.div
              key={sample.id}
              className="voiceover-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="voiceover-header">
                <div className="voiceover-info">
                  <h3 className="voiceover-title">{sample.title}</h3>
                  <span className="voiceover-category">{sample.category}</span>
                </div>
                <button 
                  className="play-button"
                  onClick={() => handlePlayPause(sample.id)}
                  aria-label={currentlyPlaying === sample.id ? 'Pause' : 'Play'}
                >
                  {currentlyPlaying === sample.id ? 
                    <Pause className="h-4 w-4" /> : 
                    <Play className="h-4 w-4 ml-0.5" />
                  }
                </button>
              </div>
              
              <p className="voiceover-description">{sample.description}</p>
              <p className="voiceover-script">{sample.script}</p>
              
              <div className="voiceover-meta">
                <span className="duration">
                  <Volume2 className="h-3 w-3 inline mr-1" />
                  {sample.duration}
                </span>
                <span className="status">
                  {currentlyPlaying === sample.id ? 'playing...' : 'ready'}
                </span>
              </div>

              {/* Progress bar */}
              {progress[sample.id] > 0 && (
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${progress[sample.id] || 0}%` }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
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