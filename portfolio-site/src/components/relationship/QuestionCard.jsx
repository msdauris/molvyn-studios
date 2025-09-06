import { motion } from 'framer-motion'
import { Heart, BookOpen, Star, MessageCircle } from 'lucide-react'

const QuestionCard = ({ question, index, category, onFavorite, isFavorited = false }) => {
  const getCardIcon = (index) => {
    const icons = [Heart, BookOpen, Star, MessageCircle]
    const IconComponent = icons[index % icons.length]
    return IconComponent
  }

  const IconComponent = getCardIcon(index)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -2, scale: 1.01 }}
      className="card-featured group cursor-pointer relative micro-hover"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 bg-electric-blue/10 text-electric-blue">
          <IconComponent className="h-5 w-5" />
        </div>
        
        {onFavorite && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onFavorite()
            }}
            className={`p-2 transition-colors duration-200 ${
              isFavorited 
                ? 'text-warm-amber' 
                : 'text-medium-gray hover:text-warm-amber'
            }`}
          >
            <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
          </button>
        )}
      </div>

      {/* Category */}
      {category && (
        <div className="mono-text text-xs text-subtle mb-4 uppercase tracking-wider">
          {category}
        </div>
      )}

      {/* Question */}
      <div className="mb-8">
        <p className="text-body leading-relaxed font-medium">
          {question}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="mono-text text-xs text-subtle">question {index + 1}</span>
        <div className="flex items-center gap-1">
          <span className="w-1 h-1 bg-medium-gray"></span>
          <span className="w-1 h-1 bg-medium-gray"></span>
          <span className="w-1 h-1 bg-electric-blue"></span>
        </div>
      </div>
    </motion.div>
  )
}

export const QuestionCardExpanded = ({ 
  question, 
  index, 
  category, 
  onClose, 
  onNext, 
  onPrevious,
  totalQuestions 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 bg-true-black/50 flex items-center justify-center p-6 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-pure-white shadow-architectural max-w-2xl w-full p-12"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="mono-text text-sm text-electric-blue mb-2">
              question {index + 1} of {totalQuestions}
            </div>
            <div className="mono-text text-xs text-subtle uppercase tracking-wider">
              {category}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 transition-colors duration-200"
          >
            <svg className="w-5 h-5 text-medium-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Question */}
        <div className="mb-10">
          <h2 className="text-architectural-xl text-true-black leading-relaxed">
            {question}
          </h2>
        </div>

        {/* Reflection Space */}
        <div className="mb-10">
          <label className="block text-sm font-medium text-true-black mb-4">
            your reflection
          </label>
          <textarea
            rows={6}
            className="textarea-field"
            placeholder="take your time to reflect on this question. what comes up for you?"
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={onPrevious}
            disabled={index === 0}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed micro-hover"
          >
            previous
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalQuestions }).map((_, i) => (
              <div
                key={i}
                className={`w-1 h-1 ${
                  i === index ? 'bg-electric-blue' : 'bg-medium-gray'
                }`}
              />
            ))}
          </div>

          <button
            onClick={onNext}
            disabled={index === totalQuestions - 1}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed micro-hover"
          >
            {index === totalQuestions - 1 ? 'complete' : 'next'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default QuestionCard