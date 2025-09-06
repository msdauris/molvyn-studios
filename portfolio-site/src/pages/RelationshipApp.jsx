import { useState } from 'react'
import { motion } from 'framer-motion'
import CategoryPicker from '../components/relationship/CategoryPicker'
import QuestionCard from '../components/relationship/QuestionCard'
import { relationshipTypes, relationshipStages, sampleQuestions, pricingTiers, testimonials } from '../data/synastryPreviewData'

const RelationshipApp = () => {
  const [selectedType, setSelectedType] = useState(null)
  const [selectedStage, setSelectedStage] = useState(null)
  const [currentQuestions, setCurrentQuestions] = useState([])
  const [showPricing, setShowPricing] = useState(false)

  const generateQuestions = () => {
    if (!selectedType || !selectedStage) return

    // Fix: Look for questions using the selected type and stage IDs
    const typeQuestions = sampleQuestions[selectedType.id] || {}
    const stageQuestions = typeQuestions[selectedStage.id] || []
    
    // If no specific questions found, use romantic partnership as fallback but adapt the text
    const fallbackQuestions = sampleQuestions['romantic']?.['beginning'] || []
    const questionsToUse = stageQuestions.length > 0 ? stageQuestions : fallbackQuestions
    
    setCurrentQuestions(questionsToUse.slice(0, 3)) // Show first 3 as preview
  }

  const resetForm = () => {
    setSelectedType(null)
    setSelectedStage(null)
    setCurrentQuestions([])
    setShowPricing(false)
  }

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
              relationship 8-ball
            </h1>
            <p className="text-architectural-xl text-medium-gray leading-relaxed mb-8">
              astrological compatibility questions for deeper connection
            </p>
            <div className="mono-text text-sm text-subtle">
              personalized questions • privacy-first • meaningful conversations
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container-padding py-20">
        {!showPricing ? (
          <>
            {/* Relationship Type Selection */}
            {!selectedType && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
              >
                <h2 className="text-architectural-xl text-center mb-12">
                  what type of relationship are you exploring?
                </h2>
                <CategoryPicker
                  options={relationshipTypes}
                  onSelect={setSelectedType}
                  selected={selectedType}
                />
              </motion.div>
            )}

            {/* Relationship Stage Selection */}
            {selectedType && !selectedStage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
              >
                <div className="text-center mb-12">
                  <h2 className="text-architectural-xl mb-6">
                    what stage is your {selectedType.label.toLowerCase()}?
                  </h2>
                  <button
                    onClick={() => setSelectedType(null)}
                    className="mono-text text-sm text-electric-blue hover:text-true-black transition-colors duration-200"
                  >
                    ← change relationship type
                  </button>
                </div>
                <CategoryPicker
                  options={relationshipStages}
                  onSelect={setSelectedStage}
                  selected={selectedStage}
                />
              </motion.div>
            )}

            {/* Generate Questions Button */}
            {selectedType && selectedStage && currentQuestions.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <div className="card-featured max-w-2xl mx-auto">
                  <h3 className="text-architectural-lg mb-6">
                    ready to explore your {selectedType.label.toLowerCase()}?
                  </h3>
                  <p className="text-body mb-8 leading-relaxed">
                    personalized questions based on astrological synastry 
                    and human design compatibility insights for your {selectedStage.label.toLowerCase()} {selectedType.label.toLowerCase()}.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button onClick={resetForm} className="btn-secondary micro-hover">
                      start over
                    </button>
                    <button onClick={generateQuestions} className="btn-primary micro-hover">
                      generate questions
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Sample Questions Display */}
            {currentQuestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
              >
                <div className="text-center mb-12">
                  <h2 className="text-architectural-xl mb-6">
                    sample questions for your journey
                  </h2>
                  <p className="text-body max-w-2xl mx-auto leading-relaxed">
                    here's a preview of personalized questions for your {selectedStage.label.toLowerCase()} {selectedType.label.toLowerCase()}:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {currentQuestions.map((question, index) => (
                    <QuestionCard
                      key={index}
                      question={question}
                      index={index}
                      category={`${selectedType.label} • ${selectedStage.label}`}
                    />
                  ))}
                </div>

                <div className="text-center">
                  <div className="card-featured max-w-2xl mx-auto">
                    <p className="text-body mb-8 leading-relaxed">
                      this is just a preview. the full experience includes 25+ personalized questions, 
                      detailed astrological analysis, and human design compatibility insights.
                    </p>
                    <div className="flex gap-4 justify-center">
                      <button onClick={resetForm} className="btn-secondary micro-hover">
                        try different relationship
                      </button>
                      <button 
                        onClick={() => setShowPricing(true)} 
                        className="btn-primary micro-hover"
                      >
                        get full analysis
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </>
        ) : (
          /* Pricing Section */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-center mb-16">
              <button
                onClick={() => setShowPricing(false)}
                className="mono-text text-sm text-electric-blue hover:text-true-black transition-colors duration-200 mb-8"
              >
                ← back to questions
              </button>
              <h2 className="text-architectural-xl mb-6">
                choose your depth of exploration
              </h2>
              <p className="text-body max-w-2xl mx-auto leading-relaxed">
                each tier offers deeper insights into your relationship dynamics through 
                the lens of astrology and human design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {pricingTiers.map((tier) => (
                <motion.div
                  key={tier.id}
                  whileHover={{ scale: 1.02 }}
                  className={`card-featured relative ${tier.popular ? 'ring-2 ring-electric-blue' : ''}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-electric-blue text-pure-white px-4 py-1 text-sm font-medium mono-text">
                        most popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-architectural-lg mb-3">{tier.name}</h3>
                    <div className="text-3xl font-semibold text-true-black mb-3">{tier.price}</div>
                    <p className="text-body text-sm mb-8">{tier.description}</p>
                    <ul className="space-y-3 mb-8 text-sm text-left">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-electric-blue mr-3 mt-0.5">•</span>
                          <span className="text-body">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full micro-hover ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}>
                      {tier.cta}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="bg-cool-gray p-12">
              <h3 className="text-architectural-xl text-center mb-12">
                what people are saying
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card-minimal"
                  >
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-warm-amber">★</span>
                      ))}
                    </div>
                    <p className="text-body text-sm mb-6 leading-relaxed">"{testimonial.text}"</p>
                    <div className="text-sm">
                      <div className="font-medium text-true-black">{testimonial.name}</div>
                      <div className="mono-text text-xs text-subtle">{testimonial.relationship}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default RelationshipApp