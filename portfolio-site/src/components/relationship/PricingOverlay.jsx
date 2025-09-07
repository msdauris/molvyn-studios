import { motion } from 'framer-motion'

const PricingOverlay = ({ isOpen, onClose, selectedType, selectedStage }) => {
  if (!isOpen) return null

  const pricingTiers = [
    {
      id: 'explorer',
      name: 'relationship explorer',
      price: 'free',
      features: [
        '5 personalized questions',
        'basic compatibility overview',
        'sun sign synastry',
        'relationship stage insights'
      ],
      cta: 'start exploring',
      popular: false
    },
    {
      id: 'deepdive',
      name: 'deep dive analysis',
      price: '€29',
      features: [
        '25+ personalized questions',
        'full synastry chart analysis',
        'human design compatibility',
        'timing insights & transits',
        'downloadable PDF report',
        'audio interpretation (15 min)'
      ],
      cta: 'get deep insights',
      popular: true
    },
    {
      id: 'ongoing',
      name: 'relationship journey',
      price: '€79',
      features: [
        'everything in deep dive',
        'monthly question updates',
        'transit timing alerts',
        'relationship evolution tracking',
        'private consultation (30 min)',
        '6-month access'
      ],
      cta: 'begin journey',
      popular: false
    }
  ]

  const testimonials = [
    {
      name: "sarah m.",
      relationship: "romantic partnership",
      text: "the questions helped us understand our mars-venus square in a completely new way. instead of seeing our different approaches to conflict as a problem, we learned how to use them as complementary strengths."
    },
    {
      name: "david & alex",
      relationship: "creative collaboration", 
      text: "as business partners, we thought we knew each other well. the human design insights about our different authorities completely transformed how we make decisions together."
    },
    {
      name: "maria l.",
      relationship: "family connection",
      text: "working through these questions with my teenage daughter opened up conversations we'd never had. the astrological timing insights helped us understand why certain topics felt so charged."
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/20 flex items-center justify-center p-8 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        {/* Development Notice */}
        <div className="bg-black text-white p-4 text-center">
          <p className="text-sm font-mono">
            ⚠ development preview — full functionality coming soon
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-black transition-colors duration-200 z-10"
        >
          ×
        </button>

        {/* Header */}
        <div className="p-8 pb-0">
          <div className="content-title mb-4">analysis preview</div>
          <h2 className="hero-title text-4xl mb-4">
            {selectedType?.label.toLowerCase()}<br/>
            {selectedStage?.label.toLowerCase()}
          </h2>
          <p className="content-text mb-8">
            personalized astrological and human design insights for deeper connection
          </p>
        </div>

        {/* What You'll Discover */}
        <div className="px-8 mb-12">
          <div className="content-title mb-6">what you'll discover</div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-2 h-2 bg-black mb-4"></div>
              <h4 className="font-medium text-black mb-2">astrological synastry</h4>
              <p className="text-sm text-gray-600 leading-relaxed">planetary connections, aspects, and cosmic compatibility patterns</p>
            </div>
            <div>
              <div className="w-2 h-2 bg-black mb-4"></div>
              <h4 className="font-medium text-black mb-2">human design insights</h4>
              <p className="text-sm text-gray-600 leading-relaxed">energy types, authorities, and strategic interactions</p>
            </div>
            <div>
              <div className="w-2 h-2 bg-black mb-4"></div>
              <h4 className="font-medium text-black mb-2">personalized questions</h4>
              <p className="text-sm text-gray-600 leading-relaxed">conversation starters based on your unique dynamics</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="px-8 mb-12">
          <div className="content-title mb-6">choose your journey</div>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`border transition-all duration-200 ${
                  tier.popular
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <div className="p-6">
                  {tier.popular && (
                    <div className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-wider">
                      most popular
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-lg text-black mb-2">{tier.name}</h4>
                    <div className="text-2xl font-bold text-black mb-4">{tier.price}</div>
                  </div>

                  <ul className="space-y-2 mb-8 text-sm text-gray-600">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-black mt-1">—</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-4 text-sm font-medium transition-all duration-200 ${
                      tier.popular
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'border border-gray-300 text-black hover:border-black'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="px-8 pb-8">
          <div className="content-title mb-6">what others are saying</div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6">
                <p className="text-sm text-gray-600 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="text-xs font-mono text-gray-400">
                  <div>{testimonial.name}</div>
                  <div>{testimonial.relationship}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default PricingOverlay