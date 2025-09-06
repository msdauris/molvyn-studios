import { motion } from 'framer-motion'
import { X, RotateCcw } from 'lucide-react'

const Card = ({ card, isExpanded = false, onClose, onCardClick, isRevealed = true }) => {
  if (!card) return null

  const cardVariants = {
    hidden: { 
      rotateY: 180, 
      scale: 0.8, 
      opacity: 0 
    },
    visible: { 
      rotateY: 0, 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  }

  const getSuitColor = (suit) => {
    const colors = {
      'Passages': 'from-electric-blue to-charcoal',
      'Craft': 'from-warm-amber to-charcoal',
      'Journeys': 'from-medium-gray to-charcoal',
      'Reflections': 'from-electric-blue to-true-black',
      'Wisdom': 'from-warm-amber to-true-black',
      'Harmony': 'from-medium-gray to-true-black',
      'Foundations': 'from-charcoal to-true-black'
    }
    return colors[suit] || 'from-charcoal to-true-black'
  }

  if (isExpanded) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900">
                {card.name}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-gray-600">{card.suit}</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600">{card.element}</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm font-medium text-electric-blue">{card.number}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Card Image Placeholder */}
            <div className={`w-full h-64 bg-gradient-to-br ${getSuitColor(card.suit)} rounded-xl mb-6 flex items-center justify-center text-white`}>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold mb-2">{card.number}</div>
                <div className="text-xl">{card.name}</div>
                <div className="text-sm opacity-80 mt-2">{card.element}</div>
              </div>
            </div>

            {/* Meaning */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Meaning</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {card.meaning}
              </p>
            </div>

            {/* Keywords */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {card.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-3 py-1 bg-electric-blue/10 text-electric-blue text-sm font-medium mono-text"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Reversed Meaning */}
            {card.reversed && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 flex items-center gap-2">
                  <RotateCcw className="h-5 w-5" />
                  Reversed Meaning
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {card.reversed}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isRevealed ? "visible" : "hidden"}
      whileHover="hover"
      onClick={() => onCardClick && onCardClick(card)}
      className="cursor-pointer"
    >
      <div className={`w-24 h-36 bg-gradient-to-br ${getSuitColor(card.suit)} rounded-lg shadow-lg flex items-center justify-center text-white relative overflow-hidden`}>
        {/* Card Back (when not revealed) */}
        {!isRevealed && (
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-true-black flex items-center justify-center">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-white rounded-full mb-2 mx-auto"></div>
              <div className="text-xs opacity-80">Oracle</div>
            </div>
          </div>
        )}

        {/* Card Front */}
        {isRevealed && (
          <div className="text-center p-2">
            <div className="text-lg font-serif font-bold mb-1">{card.number}</div>
            <div className="text-xs font-medium leading-tight">{card.name}</div>
            <div className="text-xs opacity-80 mt-1">{card.element}</div>
          </div>
        )}

        {/* Mystical border effect */}
        <div className="absolute inset-0 border border-white/20 rounded-lg"></div>
      </div>
    </motion.div>
  )
}

export default Card
