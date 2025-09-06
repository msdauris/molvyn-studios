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

  const getdirectionColor = (direction) => {
    const colors = {
      'North': { background: 'linear-gradient(to bottom right, #f97316, #000000)' },     // Orange to black
      'East': { background: 'linear-gradient(to bottom right, #3b82f6, #000000)' },      // Blue to black
      'West': { background: 'linear-gradient(to bottom right, #6b7280, #000000)' },      // Gray to black  
      'South': { background: 'linear-gradient(to bottom right, #ef4444, #000000)' },     // Red to black
      'Aether': { background: 'linear-gradient(to bottom right, #8b5cf6, #000000)' }     // Purple to black
    }
    return colors[direction] || { background: 'linear-gradient(to bottom right, #374151, #000000)' }
  }

  if (isExpanded) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center p-8 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          style={{ 
            boxShadow: '0 0 0 1px rgba(0,0,0,0.05)',
            border: 'none'
          }}
        >
          {/* Close Button - Minimal */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 p-2 hover:bg-gray-50 transition-colors duration-200 z-10"
            style={{ background: 'none', border: 'none' }}
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>

          {/* Content Grid */}
          <div className="content-section" style={{ padding: '6rem 4rem' }}>
            <div className="content-left" style={{ position: 'static' }}>
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>
                {card.name}
              </h2>
              
              {/* Card Meta */}
              <div style={{ marginBottom: '3rem' }}>
                <div className="mono-text text-xs text-subtle" style={{ marginBottom: '0.5rem' }}>
                  {card.direction} • {card.element} • {card.number}
                </div>
              </div>
            </div>
            
            <div className="content-right">
              {/* Card Visual */}
              <div 
                style={{ 
                  width: '200px',
                  height: '300px',
                  marginBottom: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  ...getdirectionColor(card.direction)
                }}
              >
                <div style={{ textAlign: 'center', padding: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '0.5rem' }}>
                    {card.number}
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '600', lineHeight: '1.2' }}>
                    {card.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '0.5rem' }}>
                    {card.element}
                  </div>
                </div>
                
                {/* Mystical border effect - matching original cards */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}></div>
              </div>

              {/* Meaning */}
              <div style={{ marginBottom: '3rem' }}>
                <h3 className="text-xl font-semibold mb-4 text-true-black">Meaning</h3>
                <p className="content-text" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                  {card.meaning}
                </p>
              </div>

              {/* Keywords */}
              <div style={{ marginBottom: '3rem' }}>
                <h3 className="text-xl font-semibold mb-4 text-true-black">Keywords</h3>
                {card.keywords && Array.isArray(card.keywords) && card.keywords.length > 0 ? (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {card.keywords.map((keyword, index) => (
                      <span
                        key={`${keyword}-${index}`}
                        className="mono-text"
                        style={{
                          display: 'inline-block',
                          padding: '0.5rem 1rem',
                          backgroundColor: '#f8f8f8',
                          color: '#000000',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          border: '1px solid #e0e0e0',
                          letterSpacing: '0.5px'
                        }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="content-text" style={{ fontStyle: 'italic', color: '#666666' }}>
                    No keywords available for this card.
                  </p>
                )}
              </div>

            </div>
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
      <div 
        style={{
          width: '96px',
          height: '144px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          ...getdirectionColor(card.direction)
        }}
      >
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
        <div className="absolute inset-0 border border-white/20"></div>
      </div>
    </motion.div>
  )
}

export default Card
