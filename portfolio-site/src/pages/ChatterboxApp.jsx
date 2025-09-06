import { useState } from 'react'
import { motion } from 'framer-motion'
import Chatterbox from '../components/chatterbox/Chatterbox'
import FoldAnimation from '../components/chatterbox/FoldAnimation'
import { getRandomMessage } from '../data/chatterboxMessages'

const ChatterboxApp = () => {
  const [currentMessage, setCurrentMessage] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  const [foldHistory, setFoldHistory] = useState([])

  const handleFoldClick = (foldId) => {
    if (isAnimating) return
    
    setIsAnimating(true)
    
    // Simulate fold animation delay
    setTimeout(() => {
      const message = getRandomMessage()
      setCurrentMessage(message)
      setFoldHistory(prev => [...prev, { foldId, message, timestamp: Date.now() }])
      setIsAnimating(false)
    }, 800)
  }

  const resetChatterbox = () => {
    setCurrentMessage('')
    setFoldHistory([])
    setIsAnimating(false)
  }

  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <div className="hero-section bg-pure-white pt-20">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-display mb-8">
              digital chatterbox
            </h1>
            <p className="text-architectural-xl text-medium-gray leading-relaxed mb-8">
              interactive fortune teller that unfolds wisdom with each click
            </p>
            <div className="mono-text text-sm text-subtle">
              origami-inspired • randomized messages • playful divination
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Chatterbox Interface */}
      <div className="container-padding py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Chatterbox Component */}
          <div className="flex justify-center">
            <Chatterbox 
              onFoldClick={handleFoldClick}
              isAnimating={isAnimating}
              currentMessage={currentMessage}
            />
          </div>

          {/* Message Display & Controls */}
          <div className="space-y-8">
            {/* Current Message */}
            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-featured min-h-[200px] flex items-center justify-center"
            >
              {currentMessage ? (
                <div className="text-center">
                  <p className="text-architectural-lg text-true-black leading-relaxed mb-6">
                    "{currentMessage}"
                  </p>
                  <div className="w-12 h-px bg-electric-blue mx-auto"></div>
                </div>
              ) : (
                <p className="text-body text-center">
                  click on the chatterbox folds to reveal your message
                </p>
              )}
            </motion.div>

            {/* Controls */}
            <div className="flex gap-4">
              <button
                onClick={resetChatterbox}
                className="btn-secondary flex-1 micro-hover"
                disabled={isAnimating}
              >
                reset
              </button>
              <button
                onClick={() => handleFoldClick('random')}
                className="btn-primary flex-1 micro-hover"
                disabled={isAnimating}
              >
                {isAnimating ? 'unfolding...' : 'quick draw'}
              </button>
            </div>

            {/* Fold History */}
            {foldHistory.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="card-minimal"
              >
                <h3 className="text-architectural-lg mb-4">recent messages</h3>
                <div className="space-y-3 max-h-40 overflow-y-auto">
                  {foldHistory.slice(-5).reverse().map((entry, index) => (
                    <motion.div
                      key={entry.timestamp}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-sm text-body p-3 bg-cool-gray"
                    >
                      {entry.message}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-cool-gray section-padding">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-architectural-xl mb-8">
              the art of digital divination
            </h2>
            <div className="space-y-6 text-body leading-relaxed">
              <p>
                like its paper ancestor, this digital chatterbox holds the wisdom of chance 
                and intention. each fold represents a different aspect of your inner knowing—
                past, present, future, and the hidden currents that flow between them.
              </p>
              <p>
                the messages within are drawn from the same mystical well as the threshold oracle, 
                connecting you to the deeper patterns that guide your journey.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ChatterboxApp