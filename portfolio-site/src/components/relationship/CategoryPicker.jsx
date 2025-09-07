import { motion } from 'framer-motion'

const CategoryPicker = ({ options, onSelect, selected, title }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {options.map((option, index) => (
        <motion.button
          key={option.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          onClick={() => onSelect(option)}
          className={`relative h-full p-8 border-2 transition-colors duration-150 text-left micro-hover flex flex-col shadow-gentle ${
            selected?.id === option.id
              ? 'border-electric-blue bg-blue-50/50'
              : 'border-gray-200 bg-pure-white hover:border-electric-blue/50'
          }`}
        >
          <div className="flex-1">
            {option.icon && (
              <div className="text-3xl mb-4 text-center">
                {option.icon}
              </div>
            )}
            <div>
              <h3 className={`font-medium text-lg mb-3 ${
                selected?.id === option.id ? 'text-true-black' : 'text-true-black'
              }`}>
                {option.label}
              </h3>
              <div className="min-h-[1.5rem]">
                {option.description && (
                  <p className={`text-sm leading-relaxed ${
                    selected?.id === option.id ? 'text-charcoal' : 'text-medium-gray'
                  }`}>
                    {option.description}
                  </p>
                )}
              </div>
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