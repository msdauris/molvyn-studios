import { useState } from 'react'
import { motion } from 'framer-motion'
import Deck from '../components/oracle/Deck'
import Card from '../components/oracle/Card'
import DrawingArea from '../components/oracle/DrawingArea'
import { useCardDraw } from '../hooks/useCardDraw'

const OracleApp = () => {
  const { 
    drawnCards, 
    drawCard, 
    shuffleDeck, 
    clearCards, 
    cardsRemaining, 
    maxCards, 
    canDrawMore, 
    cardsDrawn 
  } = useCardDraw()
  const [selectedCard, setSelectedCard] = useState(null)

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
            threshold<br/>oracle
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            digital divination tool for daily reflection and insight
          </motion.p>
        </div>
        
        <div className="scroll-indicator"></div>
      </section>

      {/* Oracle Interface */}
      <section className="content-section">
        <motion.div 
          className="content-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="content-title">draw cards</h2>
        </motion.div>
        
        <motion.div 
          className="content-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
            <Deck 
              onDrawCard={drawCard}
              onShuffle={shuffleDeck}
              onClear={clearCards}
              cardsRemaining={cardsRemaining}
              maxCards={maxCards}
              canDrawMore={canDrawMore}
              cardsDrawn={cardsDrawn}
            />
            
            <DrawingArea 
              drawnCards={drawnCards}
              onCardSelect={setSelectedCard}
              selectedCard={selectedCard}
            />
          </div>
        </motion.div>
      </section>

      {/* Selected Card Detail */}
      {selectedCard && (
        <section className="content-section">
          <div className="content-left">
            <h2 className="content-title">card meaning</h2>
          </div>
          <div className="content-right">
            <Card 
              card={selectedCard} 
              isExpanded={true}
              onClose={() => setSelectedCard(null)}
            />
          </div>
        </section>
      )}

      {/* Instructions */}
      <section className="content-section">
        <div className="content-left">
          <h2 className="content-title">how to use</h2>
        </div>
        <div className="content-right">
          <p className="content-text">
            focus on your question or intention. click the deck to draw one or multiple cards 
            for your reading. click any drawn card to explore its deeper meaning and symbolism.
          </p>
        </div>
      </section>

      {/* About the Oracle */}
      <section className="content-section">
        <div className="content-left">
          <h2 className="content-title">about</h2>
        </div>
        <div className="content-right">
          <div className="content-meta">
            <p>33 unique cards</p>
            <p>mindful interactions</p>
            <p>built with intention</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OracleApp