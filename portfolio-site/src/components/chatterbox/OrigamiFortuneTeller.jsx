import { useEffect, useRef, useState, useCallback } from 'react'

const OrigamiFortuneTeller = () => {
  const canvasRef = useRef(null)
  const animationFrameRef = useRef(null)
  const [gameState, setGameState] = useState('direction') // 'direction', 'number', 'object', 'fortune'
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedNumber, setSelectedNumber] = useState(null)
  const [selectedObject, setSelectedObject] = useState(null)
  const [fortune, setFortune] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationCount, setAnimationCount] = useState(0)
  const [maxAnimations, setMaxAnimations] = useState(0)
  const [animationPhase, setAnimationPhase] = useState(0)

  // Canvas dimensions
  const width = 300
  const height = 300
  const w = 100

  // Draw origami using exact reference code geometry
  const drawOrigami = useCallback((phase = 0, isHorizontal = true) => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const context = canvas.getContext('2d')
    
    // Calculate animated positions based on animation axis
    let x = 0
    let y = 0
    
    if (isHorizontal) {
      // X-AXIS (HORIZONTAL) ANIMATION - only x moves
      x = phase * w
      x = Math.max(x, w / 2) - (w / 2)
      y = 0 // No vertical movement
    } else {
      // Y-AXIS (VERTICAL) ANIMATION - only y moves  
      x = 0 // No horizontal movement
      y = phase * w
      y = Math.max(y, w / 2) - (w / 2)
    }
    
    context.clearRect(0, 0, width, height)
    
    // Inside triangles (lighter colors)
    context.fillStyle = '#e74c3c' // Red
    context.strokeStyle = '#c0392b'
    context.lineWidth = 2
    
    // NE inside triangles
    context.beginPath()
    context.moveTo(width/2 + x, height/2 - y)
    context.lineTo(width/2, height/2)
    context.lineTo(width/2 + w, height/2)
    context.fill()
    context.stroke()
    
    context.beginPath()
    context.moveTo(width/2 + x, height/2 - y)
    context.lineTo(width/2, height/2)
    context.lineTo(width/2, height/2 - w)
    context.fill()
    context.stroke()
    
    // SE inside triangles
    context.fillStyle = '#3498db' // Blue
    context.strokeStyle = '#2980b9'
    
    context.beginPath()
    context.moveTo(width/2 + x, height/2 + y)
    context.lineTo(width/2, height/2)
    context.lineTo(width/2 + w, height/2)
    context.fill()
    context.stroke()
    
    context.beginPath()
    context.moveTo(width/2 + x, height/2 + y)
    context.lineTo(width/2, height/2)
    context.lineTo(width/2, height/2 + w)
    context.fill()
    context.stroke()
    
    // NW inside triangles
    context.fillStyle = '#9b59b6' // Purple
    context.strokeStyle = '#8e44ad'
    
    context.beginPath()
    context.moveTo(width/2 - x, height/2 - y)
    context.lineTo(width/2, height/2)
    context.lineTo(width/2 - w, height/2)
    context.fill()
    context.stroke()
    
    context.beginPath()
    context.moveTo(width/2 - x, height/2 - y)
    context.lineTo(width/2, height/2)
    context.lineTo(width/2, height/2 - w)
    context.fill()
    context.stroke()
    
    // SW inside triangles
    context.fillStyle = '#27ae60' // Green
    context.strokeStyle = '#229954'
    
    context.beginPath()
    context.moveTo(width/2 - x, height/2 + y)
    context.lineTo(width/2, height/2)
    context.lineTo(width/2 - w, height/2)
    context.fill()
    context.stroke()
    
    context.beginPath()
    context.moveTo(width/2 - x, height/2 + y)
    context.lineTo(width/2, height/2)
    context.lineTo(width/2, height/2 + w)
    context.fill()
    context.stroke()
    
    // Outside flaps (darker colors)
    context.fillStyle = '#c0392b' // Darker red
    context.strokeStyle = '#a93226'
    
    // NE outside flap
    context.beginPath()
    context.moveTo(width/2 + x, height/2 - y)
    context.lineTo(width/2 + w, height/2)
    context.lineTo(width/2 + w - x, height/2 - w + y)
    context.lineTo(width/2, height/2 - w)
    context.closePath()
    context.fill()
    context.stroke()
    
    // SE outside flap
    context.fillStyle = '#2980b9' // Darker blue
    context.strokeStyle = '#21618c'
    
    context.beginPath()
    context.moveTo(width/2 + x, height/2 + y)
    context.lineTo(width/2 + w, height/2)
    context.lineTo(width/2 + w - x, height/2 + w - y)
    context.lineTo(width/2, height/2 + w)
    context.closePath()
    context.fill()
    context.stroke()
    
    // NW outside flap
    context.fillStyle = '#8e44ad' // Darker purple
    context.strokeStyle = '#7d3c98'
    
    context.beginPath()
    context.moveTo(width/2 - x, height/2 - y)
    context.lineTo(width/2 - w, height/2)
    context.lineTo(width/2 - w + x, height/2 - w + y)
    context.lineTo(width/2, height/2 - w)
    context.closePath()
    context.fill()
    context.stroke()
    
    // SW outside flap
    context.fillStyle = '#229954' // Darker green
    context.strokeStyle = '#1e8449'
    
    context.beginPath()
    context.moveTo(width/2 - x, height/2 + y)
    context.lineTo(width/2 - w, height/2)
    context.lineTo(width/2 - w + x, height/2 + w - y)
    context.lineTo(width/2, height/2 + w)
    context.closePath()
    context.fill()
    context.stroke()
    
    // Draw text labels if needed
    if (gameState === 'direction') {
      context.fillStyle = 'white'
      context.font = 'bold 14px Arial'
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      
      context.fillText('North', width/2 - w/2, height/2 - w/2)
      context.fillText('East', width/2 + w/2, height/2 - w/2)
      context.fillText('South', width/2 - w/2, height/2 + w/2)
      context.fillText('West', width/2 + w/2, height/2 + w/2)
    }
    
    if (gameState === 'number' && selectedColor) {
      context.fillStyle = 'white'
      context.font = 'bold 18px Arial'
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      
      // Show different numbers based on final position
      const numbers = selectedColor.finalHorizontal ? ['1', '2', '3', '4'] : ['5', '6', '7', '8']
      context.fillText(numbers[0], width/2 - w/2, height/2 - w/2)
      context.fillText(numbers[1], width/2 + w/2, height/2 - w/2)
      context.fillText(numbers[2], width/2 - w/2, height/2 + w/2)
      context.fillText(numbers[3], width/2 + w/2, height/2 + w/2)
    }
    
    if (gameState === 'object' && selectedNumber) {
      context.fillStyle = 'white'
      context.font = 'bold 12px Arial'
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      
      // Oracle card objects - different sets based on final position after number selection
      const horizontalObjects = ['Pebble', 'Rusted Key', 'Doll', 'Mushroom']
      const verticalObjects = ['Spilled Tea', 'Puddle', 'Tiny Shell', 'Seaweed']
      
      // Show objects based on position after direction + number counting
      const totalCounts = selectedColor.count + selectedNumber
      const currentIsHorizontal = totalCounts % 2 === 1
      const objects = currentIsHorizontal ? horizontalObjects : verticalObjects
      
      context.fillText(objects[0], width/2 - w/2, height/2 - w/2)
      context.fillText(objects[1], width/2 + w/2, height/2 - w/2)
      context.fillText(objects[2], width/2 - w/2, height/2 + w/2)
      context.fillText(objects[3], width/2 + w/2, height/2 + w/2)
    }
  }, [gameState, selectedColor, width, height, w])

  // Animate origami with alternating horizontal/vertical counting
  const animateOrigami = (totalCounts, onComplete) => {
    setIsAnimating(true)
    setAnimationCount(0)
    setMaxAnimations(totalCounts)
    
    let currentCount = 0
    let startTime = Date.now()
    const cycleDuration = 1000 // 1 second per count
    
    function animate() {
      const elapsed = Date.now() - startTime
      const cycleProgress = (elapsed % cycleDuration) / cycleDuration
      
      if (elapsed >= totalCounts * cycleDuration) {
        // Animation complete - draw final static state
        setIsAnimating(false)
        setAnimationCount(0)
        setMaxAnimations(0)
        
        // Final position depends on whether total count is odd (horizontal) or even (vertical)
        const finalIsHorizontal = totalCounts % 2 === 1
        drawOrigami(0, finalIsHorizontal) // Closed state in final orientation
        
        if (onComplete) onComplete()
        return
      }
      
      const newCount = Math.floor(elapsed / cycleDuration) + 1
      if (newCount !== currentCount) {
        currentCount = newCount
        setAnimationCount(currentCount)
      }
      
      // Determine if current count is horizontal (odd) or vertical (even)
      const isHorizontal = currentCount % 2 === 1
      
      // Create sine wave animation for smooth opening/closing
      const phase = (Math.sin(cycleProgress * Math.PI * 2) + 1) / 2
      drawOrigami(phase, isHorizontal)
      
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    
    animate()
  }

  // Initialize canvas
  useEffect(() => {
    drawOrigami(0, true) // Start in closed horizontal position
  }, [drawOrigami])

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const handleColorSelect = (colorName) => {
    if (gameState !== 'direction' || isAnimating) return
    
    // Map color names to letter counts
    const colorCounts = {
      'North': 1,
      'East': 2, 
      'South': 3,
      'West': 4
    }
    
    const letterCount = colorCounts[colorName] || 3
    console.log(`Selected ${colorName} - ${letterCount} letters, will count ${letterCount} times`)
    
    // Store the final position (odd = horizontal, even = vertical)
    const finalIsHorizontal = letterCount % 2 === 1
    
    // Animate for letter count
    animateOrigami(letterCount, () => {
      setTimeout(() => {
        setGameState('number')
        // Store color selection with final position info
        setSelectedColor({ name: colorName, count: letterCount, finalHorizontal: finalIsHorizontal })
      }, 500)
    })
  }

  const handleNumberSelect = (number) => {
    if (gameState !== 'number' || isAnimating) return
    
    setSelectedNumber(number)
    
    // Count the actual number value (1, 2, 3, 4, 5, 6, 7, 8)
    console.log(`Selected ${number} - will count ${number} times`)
    
    // Animate based on the number itself
    animateOrigami(number, () => {
      setTimeout(() => {
        setGameState('object')
      }, 500)
    })
  }

  const handleObjectSelect = (object) => {
    if (gameState !== 'object' || isAnimating) return
    
    setSelectedObject(object)
    
    // Count based on letters in object name (e.g., "Pebble" = 6 letters)
    const objectLetterCount = object.name.replace(/\s+/g, '').length // Remove spaces for counting
    console.log(`Selected ${object.name} - ${objectLetterCount} letters, will count ${objectLetterCount} times`)
    
    // Animate based on object name length
    animateOrigami(objectLetterCount, () => {
      setTimeout(() => {
        // Create a simple fortune using the selected elements
        const fortune = {
          opener: `The ${selectedColor.name} path leads to ${object.name}...`,
          influence: `Through the power of ${selectedNumber}, you discover:`,
          message: object.meaning,
          summary: `Trust in the wisdom of ${selectedColor.name}, ${selectedNumber}, and ${object.name}.`
        }
        setFortune(fortune)
        setGameState('fortune')
      }, 500)
    })
  }

  const handleCanvasClick = (event) => {
    if (isAnimating) return
    
    const canvas = canvasRef.current
    if (!canvas) return
    
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    
    // Convert to canvas coordinates
    const canvasX = (x / rect.width) * width
    const canvasY = (y / rect.height) * height
    
    // Determine which quadrant was clicked
    if (gameState === 'direction') {
      if (canvasX < width/2 && canvasY < height/2) {
        handleColorSelect('North') // Top-left
      } else if (canvasX >= width/2 && canvasY < height/2) {
        handleColorSelect('East') // Top-right
      } else if (canvasX < width/2 && canvasY >= height/2) {
        handleColorSelect('South') // Bottom-left
      } else {
        handleColorSelect('West') // Bottom-right
      }
    } else if (gameState === 'number') {
      // Handle number selection based on quadrant
      const numbers = selectedColor?.finalHorizontal ? [1, 2, 3, 4] : [5, 6, 7, 8]
      let selectedNum
      
      if (canvasX < width/2 && canvasY < height/2) {
        selectedNum = numbers[0] // Top-left
      } else if (canvasX >= width/2 && canvasY < height/2) {
        selectedNum = numbers[1] // Top-right
      } else if (canvasX < width/2 && canvasY >= height/2) {
        selectedNum = numbers[2] // Bottom-left
      } else {
        selectedNum = numbers[3] // Bottom-right
      }
      
      handleNumberSelect(selectedNum)
    } else if (gameState === 'object') {
      // Handle object selection based on quadrant
      const horizontalObjects = [
        { name: 'Pebble', meaning: 'Small weight carries ancient memory.' },
        { name: 'Rusted Key', meaning: 'What once opened still remembers the way.' },
        { name: 'Doll', meaning: 'Forgotten play holds tomorrow\'s truth.' },
        { name: 'Mushroom', meaning: 'Hidden networks speak beneath your feet.' }
      ]
      const verticalObjects = [
        { name: 'Spilled Tea', meaning: 'Accidents pour wisdom onto unexpected places.' },
        { name: 'Puddle', meaning: 'Temporary mirrors reflect permanent truths.' },
        { name: 'Tiny Shell', meaning: 'Ocean whispers fit in the palm of your hand.' },
        { name: 'Seaweed', meaning: 'Underwater roots anchor surface grace.' }
      ]
      
      // Determine current position after direction + number counting
      const totalCounts = selectedColor.count + selectedNumber
      const currentIsHorizontal = totalCounts % 2 === 1
      const objects = currentIsHorizontal ? horizontalObjects : verticalObjects
      
      let selectedObject
      if (canvasX < width/2 && canvasY < height/2) {
        selectedObject = objects[0] // Top-left
      } else if (canvasX >= width/2 && canvasY < height/2) {
        selectedObject = objects[1] // Top-right
      } else if (canvasX < width/2 && canvasY >= height/2) {
        selectedObject = objects[2] // Bottom-left
      } else {
        selectedObject = objects[3] // Bottom-right
      }
      
      handleObjectSelect(selectedObject)
    }
  }

  const resetGame = () => {
    if (isAnimating) return
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    
    setGameState('direction')
    setSelectedColor(null)
    setSelectedNumber(null)
    setSelectedObject(null)
    setFortune(null)
    setAnimationCount(0)
    setMaxAnimations(0)
    drawOrigami(0, true) // Reset to closed horizontal position
  }

  const getStepTitle = () => {
    switch (gameState) {
      case 'direction': return 'Choose a Direction'
      case 'number': return 'Select a Number'
      case 'object': return 'Pick an Object'
      case 'fortune': return 'Your Fortune Awaits'
      default: return ''
    }
  }

  const getStepDescription = () => {
    switch (gameState) {
      case 'direction': return 'Click on a direction to begin counting'
      case 'number': return 'Choose a number from the revealed sections'
      case 'object': return 'Select the object that speaks to you'
      case 'fortune': return 'The universe has revealed its wisdom'
      default: return ''
    }
  }

  return (
    <div className="origami-fortune-teller">
      {/* Animation Counter */}
      {isAnimating && (
        <div className="animation-counter">
          <p>Counting: {animationCount} / {maxAnimations}</p>
          <p>
            {selectedColor && `${selectedColor.name} (${selectedColor.count} letters)`}
            {selectedNumber && `Number ${selectedNumber} (${selectedNumber} counts)`}
            {selectedObject && `${selectedObject.name} (${selectedObject.name.replace(/\s+/g, '').length} letters)`}
          </p>
          <p>
            {animationCount % 2 === 1 ? 'X-AXIS (HORIZONTAL)' : 'Y-AXIS (VERTICAL)'}
          </p>
        </div>
      )}

      <div className="container">
        {/* Step Title */}
        <div className="step">
          <h2>{getStepTitle()}</h2>
          <p>{getStepDescription()}</p>
        </div>

        {/* Canvas Origami */}
        <div className="origami-container">
          <canvas
            ref={canvasRef}
            className="origami-canvas"
            width={width}
            height={height}
            onClick={handleCanvasClick}
            style={{ 
              cursor: 'pointer',
              border: '2px solid #333',
              borderRadius: '10px',
              filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.4))'
            }}
          />
        </div>

        {/* Instructions */}
        <div className="instructions">
          {gameState === 'direction' && (
            <p>Click on a direction to begin counting</p>
          )}
          {gameState === 'number' && (
            <p>Choose a number from the revealed sections</p>
          )}
          {gameState === 'object' && (
            <p>Select the object that draws your attention</p>
          )}
        </div>

        {/* Fortune Display */}
        {gameState === 'fortune' && fortune && (
          <div className="fortune-display">
            <h3>Your Fortune</h3>
            <div className="fortune-content">
              <p className="fortune-opener">{fortune.opener}</p>
              <p className="fortune-influence">{fortune.influence}</p>
              <p className="fortune-message">{fortune.message}</p>
              <p className="fortune-summary">{fortune.summary}</p>
            </div>
            <button className="btn-primary" onClick={resetGame}>
              Seek Another Fortune
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrigamiFortuneTeller
