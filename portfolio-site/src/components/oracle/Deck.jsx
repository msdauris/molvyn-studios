import { motion } from 'framer-motion'
import { Shuffle, RotateCcw, Star } from 'lucide-react'

const Deck = ({ onDrawCard, onShuffle, onClear, cardsRemaining }) => {
  return (
    <div className="card-featured text-center">
      <h2 className="text-architectural-lg mb-8">
        the oracle deck
      </h2>
      
      {/* Deck Visualization */}
      <div className="relative mb-8 flex justify-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onDrawCard}
          className="relative cursor-pointer group micro-hover"
        >
          {/* Stack of cards effect */}
          <div className="absolute inset-0 bg-medium-gray/20 transform rotate-2 opacity-40"></div>
          <div className="absolute inset-0 bg-medium-gray/30 transform rotate-1 opacity-60"></div>
          
          {/* Main card */}
          <div className="relative w-32 h-48 bg-true-black rounded-none shadow-architectural flex items-center justify-center group-hover:shadow-sharp transition-shadow duration-200">
            <div className="text-center text-pure-white">
              <Star className="h-6 w-6 mx-auto mb-2" />
              <div className="mono-text text-xs opacity-90">
                click to draw
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cards Remaining */}
      <div className="mb-8">
        <div className="mono-text text-xs text-subtle mb-2">cards remaining</div>
        <div className="text-2xl font-semibold text-true-black">
          {cardsRemaining} / 33
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 h-1 mt-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(cardsRemaining / 33) * 100}%` }}
            className="bg-electric-blue h-1"
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onDrawCard}
          disabled={cardsRemaining === 0}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed micro-hover"
        >
          {cardsRemaining === 0 ? 'deck empty' : 'draw card'}
        </motion.button>

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onShuffle}
            className="flex-1 btn-secondary flex items-center justify-center gap-2 micro-hover"
          >
            <Shuffle className="h-4 w-4" />
            shuffle
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClear}
            className="flex-1 btn-secondary flex items-center justify-center gap-2 micro-hover"
          >
            <RotateCcw className="h-4 w-4" />
            reset
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Deck