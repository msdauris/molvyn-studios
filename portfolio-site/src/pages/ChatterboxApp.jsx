import { useState } from 'react'
import { motion } from 'framer-motion'
import Chatterbox from '../components/chatterbox/Chatterbox'
import { getRandomMessage } from '../data/chatterboxMessages'

const ChatterboxApp = () => {
  const [currentMessage, setCurrentMessage] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  const [foldHistory, setFoldHistory] = useState([])

  const handleFoldClick = (foldId) => {
    if (isAnimating) return
    
    setIsAnimating(true)
    
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
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
        
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            digital<br/>chatterbox
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            interactive fortune teller that unfolds wisdom with each click
          </motion.p>
        </div>
        
        <div className="scroll-indicator"></div>
      </section>

      {/* Chatterbox Interface */}
      <section className="content-section">
        <motion.div 
          className="content-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="content-title">interact</h2>
        </motion.div>
        
        <motion.div 
          className="content-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Chatterbox 
                onFoldClick={handleFoldClick}
                isAnimating={isAnimating}
                currentMessage={currentMessage}
              />
            </div>
            
            <div>
              {currentMessage ? (
                <div style={{ 
                  padding: '2rem', 
                  border: '1px solid #e0e0e0', 
                  marginBottom: '2rem',
                  minHeight: '150px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#000000' }}>
                    "{currentMessage}"
                  </p>
                </div>
              ) : (
                <div style={{ 
                  padding: '2rem', 
                  border: '1px solid #e0e0e0', 
                  marginBottom: '2rem',
                  minHeight: '150px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}>
                  <p className="content-text">
                    click on the chatterbox folds to reveal your message
                  </p>
                </div>
              )}
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  onClick={resetChatterbox}
                  className="btn-secondary"
                  disabled={isAnimating}
                  style={{ flex: 1 }}
                >
                  reset
                </button>
                <button
                  onClick={() => handleFoldClick('random')}
                  className="btn-primary"
                  disabled={isAnimating}
                  style={{ flex: 1 }}
                >
                  {isAnimating ? 'unfolding...' : 'quick draw'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Recent Messages */}
      {foldHistory.length > 0 && (
        <section className="content-section">
          <div className="content-left">
            <h2 className="content-title">recent messages</h2>
          </div>
          <div className="content-right">
            {foldHistory.slice(-3).reverse().map((entry, index) => (
              <div key={entry.timestamp} className="project-card">
                <p className="project-description">"{entry.message}"</p>
                <div className="project-meta">
                  <span>message {foldHistory.length - index}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* About */}
      <section className="content-section">
        <div className="content-left">
          <h2 className="content-title">about</h2>
        </div>
        <div className="content-right">
          <p className="content-text">
            like its paper ancestor, this digital chatterbox holds the wisdom of chance 
            and intention. each fold represents a different aspect of your inner knowing.
          </p>
          <div className="content-meta" style={{ marginTop: '2rem' }}>
            origami-inspired design<br/>
            randomized wisdom<br/>
            playful divination
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChatterboxApp