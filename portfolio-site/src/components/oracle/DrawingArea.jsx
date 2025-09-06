import { motion, AnimatePresence } from 'framer-motion'
import Card from './Card'

const DrawingArea = ({ drawnCards, onCardSelect, selectedCard }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const getSpreadLayout = (cardCount) => {
    if (cardCount === 1) {
      return 'justify-center'
    } else if (cardCount <= 3) {
      return 'justify-center gap-4'
    } else if (cardCount <= 5) {
      return 'justify-center gap-3'
    } else {
      return 'justify-start gap-2 flex-wrap'
    }
  }

  return (
    <div className="card-featured min-h-[400px]">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-architectural-lg">
          your reading
        </h2>
        {drawnCards.length > 0 && (
          <div className="mono-text text-xs text-subtle">
            {drawnCards.length} card{drawnCards.length !== 1 ? 's' : ''} drawn
          </div>
        )}
      </div>

      <AnimatePresence>
        {drawnCards.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center justify-center h-64 text-center"
          >
            <div>
              <div className="w-16 h-16 bg-electric-blue/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-architectural-lg mb-3">
                ready for your reading
              </h3>
              <p className="text-body text-sm">
                draw a card from the deck to begin your oracle reading
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`flex ${getSpreadLayout(drawnCards.length)} min-h-[200px] items-center`}
          >
            {drawnCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50, rotateY: 180 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateY: 0,
                  transition: {
                    delay: index * 0.2,
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }}
                className="relative"
              >
                <Card
                  card={card}
                  isRevealed={card.isRevealed}
                  onCardClick={onCardSelect}
                />
                
                {/* Card position indicator for multi-card spreads */}
                {drawnCards.length > 1 && (
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 font-medium">
                    {index + 1}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spread Interpretations */}
      {drawnCards.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: drawnCards.length * 0.2 + 0.5 }}
          className="mt-8 p-6 bg-cool-gray"
        >
          <h3 className="text-architectural-lg mb-3">
            {getSpreadName(drawnCards.length)}
          </h3>
          <p className="text-body text-sm">
            {getSpreadDescription(drawnCards.length)}
          </p>
        </motion.div>
      )}

      {/* Quick Actions */}
      {drawnCards.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 flex gap-3 text-sm"
        >
          <button className="text-electric-blue hover:text-true-black transition-colors duration-200 mono-text text-xs">
            save reading
          </button>
          <button className="text-electric-blue hover:text-true-black transition-colors duration-200 mono-text text-xs">
            share reading
          </button>
          <button className="text-electric-blue hover:text-true-black transition-colors duration-200 mono-text text-xs">
            print cards
          </button>
        </motion.div>
      )}
    </div>
  )
}

const getSpreadName = (cardCount) => {
  const names = {
    1: 'The Singular Truth',
    2: 'The Sacred Dialogue', 
    3: 'The Elemental Trinity',
    4: 'The Four Winds Compass',
    5: 'The Quintessence Cross',
    6: 'The Hexagram of Becoming',
    7: 'The Mystic Heptagon',
    8: 'The Infinite Cycle',
    9: 'The Sacred Mandala'
  }
  return names[cardCount] || `${cardCount}-Card Reading`
}

const getSpreadDescription = (cardCount) => {
  const descriptions = {
    1: 'One card holds the whispered truth your soul needs to hear right now.',
    2: 'Two cards dance together—question and answer, shadow and light, earth and sky.',
    3: 'Three cards weave the eternal pattern: what was, what is, and what wishes to be born.',
    4: 'Four cards call from the cardinal directions, each wind carrying its ancient wisdom to your crossroads.',
    5: 'Five cards form the sacred cross—four elements crowned by spirit, revealing the hidden fifth essence.',
    6: 'Six cards bloom like petals around your question, each facet catching different light from the same truth.',
    7: 'Seven cards spiral through the mystical journey—the sacred number that bridges earth and heaven.',
    8: 'Eight cards complete the eternal wheel, showing how endings become beginnings in the endless dance.',
    9: 'Nine cards create the perfect mandala—three times three, the sacred completion where all wisdom converges.'
  }
  return descriptions[cardCount] || `A ${cardCount}-card reading offering layers of meaning and guidance.`
}

export default DrawingArea
