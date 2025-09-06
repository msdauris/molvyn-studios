import { motion } from 'framer-motion'
import { useState } from 'react'
import { foldPositions } from '../../data/chatterboxMessages'

const Chatterbox = ({ onFoldClick, isAnimating, currentMessage }) => {
  const [hoveredFold, setHoveredFold] = useState(null)

  const handleFoldClick = (foldId) => {
    if (!isAnimating) {
      onFoldClick(foldId)
    }
  }

  return (
    <div className="relative">
      {/* Main Chatterbox SVG */}
      <motion.svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        className="drop-shadow-lg"
        animate={isAnimating ? { rotateX: [0, 15, -15, 0] } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Base paper background */}
        <rect
          width="280"
          height="280"
          x="10"
          y="10"
          fill="url(#paperGradient)"
          rx="8"
          className="drop-shadow-sm"
        />

        {/* Outer Folds */}
        {foldPositions.slice(0, 4).map((fold, index) => {
          const positions = [
            { x: 40, y: 40, width: 100, height: 100 }, // top-left
            { x: 160, y: 40, width: 100, height: 100 }, // top-right
            { x: 40, y: 160, width: 100, height: 100 }, // bottom-left
            { x: 160, y: 160, width: 100, height: 100 } // bottom-right
          ]
          const pos = positions[index]
          
          return (
            <motion.g key={fold.id}>
              <motion.rect
                {...pos}
                fill={hoveredFold === fold.id ? "url(#hoverGradient)" : "url(#foldGradient)"}
                rx="4"
                className="cursor-pointer"
                onClick={() => handleFoldClick(fold.id)}
                onMouseEnter={() => setHoveredFold(fold.id)}
                onMouseLeave={() => setHoveredFold(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={isAnimating ? { 
                  rotateZ: [0, 5, -5, 0],
                  scale: [1, 1.02, 1]
                } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              />
              <text
                x={pos.x + pos.width / 2}
                y={pos.y + pos.height / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs font-medium fill-gray-700 pointer-events-none"
              >
                {fold.label}
              </text>
            </motion.g>
          )
        })}

        {/* Inner Folds */}
        {foldPositions.slice(4, 8).map((fold, index) => {
          const positions = [
            { x: 80, y: 80, width: 60, height: 60 }, // inner-1
            { x: 160, y: 80, width: 60, height: 60 }, // inner-2
            { x: 80, y: 160, width: 60, height: 60 }, // inner-3
            { x: 160, y: 160, width: 60, height: 60 } // inner-4
          ]
          const pos = positions[index]
          
          return (
            <motion.g key={fold.id}>
              <motion.rect
                {...pos}
                fill={hoveredFold === fold.id ? "url(#hoverGradient)" : "url(#innerFoldGradient)"}
                rx="3"
                className="cursor-pointer"
                onClick={() => handleFoldClick(fold.id)}
                onMouseEnter={() => setHoveredFold(fold.id)}
                onMouseLeave={() => setHoveredFold(null)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                animate={isAnimating ? { 
                  rotateZ: [0, -3, 3, 0],
                  scale: [1, 1.05, 1]
                } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              />
              <text
                x={pos.x + pos.width / 2}
                y={pos.y + pos.height / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs font-medium fill-gray-600 pointer-events-none"
              >
                {fold.label}
              </text>
            </motion.g>
          )
        })}

        {/* Center Circle */}
        <motion.circle
          cx="150"
          cy="150"
          r="25"
          fill={hoveredFold === 'center' ? "url(#hoverGradient)" : "url(#centerGradient)"}
          className="cursor-pointer drop-shadow-sm"
          onClick={() => handleFoldClick('center')}
          onMouseEnter={() => setHoveredFold('center')}
          onMouseLeave={() => setHoveredFold(null)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={isAnimating ? { 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
        <text
          x="150"
          y="150"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-xs font-semibold fill-white pointer-events-none"
        >
          Truth
        </text>

        {/* Fold Lines */}
        <g stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none">
          <line x1="150" y1="10" x2="150" y2="290" />
          <line x1="10" y1="150" x2="290" y2="150" />
          <line x1="40" y1="40" x2="260" y2="260" />
          <line x1="260" y1="40" x2="40" y2="260" />
        </g>

        {/* Gradients */}
        <defs>
          <linearGradient id="paperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fefefe" />
            <stop offset="100%" stopColor="#f8f9fa" />
          </linearGradient>
          <linearGradient id="foldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e5e7eb" />
            <stop offset="100%" stopColor="#d1d5db" />
          </linearGradient>
          <linearGradient id="innerFoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c7cfc7" />
            <stop offset="100%" stopColor="#a3b0a3" />
          </linearGradient>
          <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9466ff" />
            <stop offset="100%" stopColor="#7c2dff" />
          </linearGradient>
          <linearGradient id="hoverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3e8ff" />
            <stop offset="100%" stopColor="#e9d5ff" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Floating Message Preview */}
      {currentMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 max-w-xs text-center border border-white/20"
        >
          <p className="text-sm text-gray-700 font-medium">
            "{currentMessage.slice(0, 50)}{currentMessage.length > 50 ? '...' : ''}"
          </p>
        </motion.div>
      )}

      {/* Instruction Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-xs text-gray-500">
          Click any fold to reveal your message
        </p>
      </motion.div>
    </div>
  )
}

export default Chatterbox
