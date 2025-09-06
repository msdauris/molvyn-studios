import { motion } from 'framer-motion'

const CategoryPicker = ({ options, onSelect, selected, title }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {options.map((option, index) => (
        <motion.button
          key={option.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect(option)}
          className={`p-8 border-2 transition-all duration-200 text-left micro-hover ${
            selected?.id === option.id
              ? 'border-electric-blue bg-blue-50/50 shadow-sharp'
              : 'border-gray-200 bg-pure-white hover:border-electric-blue/50 hover:shadow-gentle'
          }`}
        >
          <div className="flex items-start gap-4">
            {option.icon && (
              <div className="text-2xl flex-shrink-0 mt-1">
                {option.icon}
              </div>
            )}
            <div className="flex-1">
              <h3 className={`font-medium text-lg mb-3 ${
                selected?.id === option.id ? 'text-true-black' : 'text-true-black'
              }`}>
                {option.label}
              </h3>
              {option.description && (
                <p className={`text-sm leading-relaxed ${
                  selected?.id === option.id ? 'text-charcoal' : 'text-medium-gray'
                }`}>
                  {option.description}
                </p>
              )}
            </div>
          </div>
          
          {selected?.id === option.id && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-4 right-4 w-5 h-5 bg-electric-blue flex items-center justify-center"
            >
              <svg className="w-3 h-3 text-pure-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </motion.div>
          )}
        </motion.button>
      ))}
    </div>
  )
}

export default CategoryPicker