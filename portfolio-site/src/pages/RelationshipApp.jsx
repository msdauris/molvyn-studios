import { useState } from 'react'
import { motion } from 'framer-motion'
import CategoryPicker from '../components/relationship/CategoryPicker'
import QuestionCard from '../components/relationship/QuestionCard'
import { relationshipTypes, relationshipStages, sampleQuestions } from '../data/synastryPreviewData'

const RelationshipApp = () => {
  const [selectedType, setSelectedType] = useState(null)
  const [selectedStage, setSelectedStage] = useState(null)
  const [currentQuestions, setCurrentQuestions] = useState([])

  const generateQuestions = () => {
    if (!selectedType || !selectedStage) return

    const typeQuestions = sampleQuestions[selectedType.id] || {}
    const stageQuestions = typeQuestions[selectedStage.id] || []
    const fallbackQuestions = sampleQuestions['romantic']?.['new'] || []
    const questionsToUse = stageQuestions.length > 0 ? stageQuestions : fallbackQuestions
    
    setCurrentQuestions(questionsToUse.slice(0, 3))
  }

  const resetForm = () => {
    setSelectedType(null)
    setSelectedStage(null)
    setCurrentQuestions([])
  }

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
        
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            relationship<br/>deepener
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            astrological compatibility questions for deeper connection
          </motion.p>
        </div>
        
        <div className="scroll-indicator"></div>
      </section>

      {/* Relationship Type Selection */}
      {!selectedType && (
        <section className="content-section">
          <div className="content-left">
            <h2 className="content-title">relationship type</h2>
          </div>
          <div className="content-right">
            <p className="content-text">
              what type of relationship are you exploring?
            </p>
            <div style={{ marginTop: '2rem' }}>
              <CategoryPicker
                options={relationshipTypes}
                onSelect={setSelectedType}
                selected={selectedType}
              />
            </div>
          </div>
        </section>
      )}

      {/* Relationship Stage Selection */}
      {selectedType && !selectedStage && (
        <section className="content-section">
          <div className="content-left">
            <h2 className="content-title">relationship stage</h2>
          </div>
          <div className="content-right">
            <p className="content-text">
              what stage is your {selectedType.label.toLowerCase()}?
            </p>
            <button 
              onClick={() => setSelectedType(null)}
              style={{ 
                background: 'none', 
                border: 'none', 
                color: '#666666', 
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: '0.9rem',
                marginBottom: '2rem'
              }}
            >
              ← change relationship type
            </button>
            <div>
              <CategoryPicker
                options={relationshipStages}
                onSelect={setSelectedStage}
                selected={selectedStage}
              />
            </div>
          </div>
        </section>
      )}

      {/* Generate Questions */}
      {selectedType && selectedStage && currentQuestions.length === 0 && (
        <section className="content-section">
          <div className="content-left">
            <h2 className="content-title">generate</h2>
          </div>
          <div className="content-right">
            <p className="content-text">
              ready to explore your {selectedType.label.toLowerCase()}? we'll generate 
              personalized questions based on astrological synastry and human design 
              compatibility insights.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
              <button onClick={resetForm} className="btn-secondary">
                start over
              </button>
              <button onClick={generateQuestions} className="btn-primary">
                generate questions
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Sample Questions */}
      {currentQuestions.length > 0 && (
        <section className="content-section">
          <div className="content-left">
            <h2 className="content-title">sample questions</h2>
          </div>
          <div className="content-right">
            <p className="content-text">
              here's a preview of personalized questions for your {selectedStage.label.toLowerCase()} {selectedType.label.toLowerCase()}:
            </p>
            
            <div style={{ marginTop: '3rem' }}>
              {currentQuestions.map((question, index) => (
                <div key={index} className="project-card">
                  <h3 className="project-title">question {index + 1}</h3>
                  <p className="project-description">{question}</p>
                  <div className="project-meta">
                    <span>{selectedType.label} • {selectedStage.label}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #f0f0f0' }}>
              <p className="content-text">
                this is just a preview. the full experience includes 25+ personalized questions, 
                detailed astrological analysis, and human design compatibility insights.
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <button onClick={resetForm} className="btn-secondary">
                  try different relationship
                </button>
                <button className="btn-primary">
                  get full analysis
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default RelationshipApp