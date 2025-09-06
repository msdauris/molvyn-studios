import { useState } from 'react'
import { motion } from 'framer-motion'
import Deck from '../components/oracle/Deck'
import Card from '../components/oracle/Card'
import DrawingArea from '../components/oracle/DrawingArea'
import { useCardDraw } from '../hooks/useCardDraw'

const OracleApp = () => {
  const { drawnCards, drawCard, shuffleDeck, clearCards } = useCardDraw()
  const [selectedCard, setSelectedCard] = useState(null)

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
              threshold oracle
            </h1>
            <p className="text-architectural-xl text-medium-gray leading-relaxed mb-8">
              digital divination tool for daily reflection and insight
            </p>
            <div className="mono-text text-sm text-subtle">
              33 cards • mindful interactions • built with intention
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Oracle Interface */}
      <div className="container-padding py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Deck Section */}
          <div className="lg:col-span-1">
            <Deck 
              onDrawCard={drawCard}
              onShuffle={shuffleDeck}
              onClear={clearCards}
              cardsRemaining={33 - drawnCards.length}
            />
          </div>

          {/* Drawing Area */}
          <div className="lg:col-span-2">
            <DrawingArea 
              drawnCards={drawnCards}
              onCardSelect={setSelectedCard}
              selectedCard={selectedCard}
            />
          </div>
        </div>

        {/* Selected Card Detail */}
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16"
          >
            <Card 
              card={selectedCard} 
              isExpanded={true}
              onClose={() => setSelectedCard(null)}
            />
          </motion.div>
        )}
      </div>

      {/* Instructions */}
      <div className="bg-cool-gray section-padding">
        <div className="container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-architectural-xl mb-8">
              how to draw
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'focus on your question',
                description: 'center yourself and hold your intention clearly'
              },
              {
                step: '02',
                title: 'click the deck',
                description: 'draw one or multiple cards for your reading'
              },
              {
                step: '03',
                title: 'click any drawn card',
                description: 'explore its deeper meaning and symbolism'
              },
              {
                step: '04',
                title: 'shuffle when needed',
                description: 'refresh the deck for new energy'
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-minimal text-center"
              >
                <div className="mono-text text-sm text-electric-blue mb-4">
                  {item.step}
                </div>
                <h3 className="text-architectural-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OracleApp