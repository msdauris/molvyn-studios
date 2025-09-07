import { useEffect, useRef, useState, useCallback } from 'react'
import { oracleCards } from '../../data/oracleCards'

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
  const [isHovering, setIsHovering] = useState(false)

  // Canvas dimensions - Much larger for better presence
  const width = 450
  const height = 450
  const w = 150

  // Randomize oracle cards for objects - filter out names longer than 10 characters
  const getRandomObjects = useCallback(() => {
    const filteredCards = oracleCards.filter(card => card.name.length <= 10)
    const shuffled = [...filteredCards].sort(() => Math.random() - 0.5)
    return {
      horizontal: shuffled.slice(0, 4),
      vertical: shuffled.slice(4, 8)
    }
  }, [])

  const [randomObjects, setRandomObjects] = useState(() => getRandomObjects())

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
    
    // Add subtle hover breathing effect
    if (isHovering && !isAnimating) {
      const breathe = Math.sin(Date.now() / 800) * 3
      x += breathe * 0.3
      y += breathe * 0.3
    }
    
    context.clearRect(0, 0, width, height)
    
    // No shadow for now
    context.shadowColor = 'transparent'
    context.shadowOffsetX = 0
    context.shadowOffsetY = 0
    
    // Inside triangles - Sophisticated gradient colors
    // Create gradients for each quadrant
    const neGradient = context.createLinearGradient(width/2, height/2 - w, width/2 + w, height/2)
    neGradient.addColorStop(0, '#f8f9fa')
    neGradient.addColorStop(1, '#e9ecef')
    
    context.fillStyle = neGradient
    context.strokeStyle = '#dee2e6'
    context.lineWidth = 1
    
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
    const seGradient = context.createLinearGradient(width/2, height/2, width/2 + w, height/2 + w)
    seGradient.addColorStop(0, '#f1f3f4')
    seGradient.addColorStop(1, '#e8eaed')
    
    context.fillStyle = seGradient
    context.strokeStyle = '#dee2e6'
    
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
    const nwGradient = context.createLinearGradient(width/2 - w, height/2 - w, width/2, height/2)
    nwGradient.addColorStop(0, '#f5f5f5')
    nwGradient.addColorStop(1, '#eeeeee')
    
    context.fillStyle = nwGradient
    context.strokeStyle = '#dee2e6'
    
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
    const swGradient = context.createLinearGradient(width/2 - w, height/2, width/2, height/2 + w)
    swGradient.addColorStop(0, '#f3f4f6')
    swGradient.addColorStop(1, '#e5e7eb')
    
    context.fillStyle = swGradient
    context.strokeStyle = '#dee2e6'
    
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
    
    // Outside flaps (shadow gradients)
    const neOuterGradient = context.createLinearGradient(width/2, height/2 - w, width/2 + w, height/2)
    neOuterGradient.addColorStop(0, '#e9ecef')
    neOuterGradient.addColorStop(1, '#ced4da')
    
    context.fillStyle = neOuterGradient
    context.strokeStyle = '#adb5bd'
    
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
    const seOuterGradient = context.createLinearGradient(width/2, height/2, width/2 + w, height/2 + w)
    seOuterGradient.addColorStop(0, '#e8eaed')
    seOuterGradient.addColorStop(1, '#ced4da')
    
    context.fillStyle = seOuterGradient
    context.strokeStyle = '#adb5bd'
    
    context.beginPath()
    context.moveTo(width/2 + x, height/2 + y)
    context.lineTo(width/2 + w, height/2)
    context.lineTo(width/2 + w - x, height/2 + w - y)
    context.lineTo(width/2, height/2 + w)
    context.closePath()
    context.fill()
    context.stroke()
    
    // NW outside flap
    const nwOuterGradient = context.createLinearGradient(width/2 - w, height/2 - w, width/2, height/2)
    nwOuterGradient.addColorStop(0, '#eeeeee')
    nwOuterGradient.addColorStop(1, '#d1d5db')
    
    context.fillStyle = nwOuterGradient
    context.strokeStyle = '#adb5bd'
    
    context.beginPath()
    context.moveTo(width/2 - x, height/2 - y)
    context.lineTo(width/2 - w, height/2)
    context.lineTo(width/2 - w + x, height/2 - w + y)
    context.lineTo(width/2, height/2 - w)
    context.closePath()
    context.fill()
    context.stroke()
    
    // SW outside flap
    const swOuterGradient = context.createLinearGradient(width/2 - w, height/2, width/2, height/2 + w)
    swOuterGradient.addColorStop(0, '#e5e7eb')
    swOuterGradient.addColorStop(1, '#d1d5db')
    
    context.fillStyle = swOuterGradient
    context.strokeStyle = '#adb5bd'
    
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
      context.fillStyle = '#333333' // Charcoal color
      context.font = 'bold 14px Arial'
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      
      context.fillText('North', width/2 - w/2, height/2 - w/2)
      context.fillText('East', width/2 + w/2, height/2 - w/2)
      context.fillText('South', width/2 - w/2, height/2 + w/2)
      context.fillText('West', width/2 + w/2, height/2 + w/2)
    }
    
    if (gameState === 'number' && selectedColor) {
      context.fillStyle = '#333333' // Charcoal color
      context.font = 'bold 18px Arial'
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      
      // Show different numbers based on final position - authentic origami layout
      const numbers = selectedColor.finalHorizontal ? ['1', '4', '5', '8'] : ['2', '3', '6', '7']
      context.fillText(numbers[0], width/2 - w/2, height/2 - w/2)
      context.fillText(numbers[1], width/2 + w/2, height/2 - w/2)
      context.fillText(numbers[2], width/2 - w/2, height/2 + w/2)
      context.fillText(numbers[3], width/2 + w/2, height/2 + w/2)
    }
    
    if (gameState === 'object' && selectedNumber) {
      context.fillStyle = '#333333' // Charcoal color
      context.font = 'bold 12px Arial'
      context.textAlign = 'center'
      context.textBaseline = 'middle'
      
      // Use randomized oracle cards based on final position after number selection
      const totalCounts = selectedColor.count + selectedNumber
      const currentIsHorizontal = totalCounts % 2 === 1
      const objects = currentIsHorizontal ? randomObjects.horizontal : randomObjects.vertical
      
      context.fillText(objects[0].name, width/2 - w/2, height/2 - w/2)
      context.fillText(objects[1].name, width/2 + w/2, height/2 - w/2)
      context.fillText(objects[2].name, width/2 - w/2, height/2 + w/2)
      context.fillText(objects[3].name, width/2 + w/2, height/2 + w/2)
    }
  }, [gameState, selectedColor, selectedNumber, randomObjects, isAnimating, animationCount, width, height, w])

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

  // Hover animation loop
  useEffect(() => {
    let hoverAnimationFrame
    
    const animateHover = () => {
      if (isHovering && !isAnimating) {
        drawOrigami(0, true)
        hoverAnimationFrame = requestAnimationFrame(animateHover)
      }
    }
    
    if (isHovering && !isAnimating) {
      animateHover()
    }
    
    return () => {
      if (hoverAnimationFrame) {
        cancelAnimationFrame(hoverAnimationFrame)
      }
    }
  }, [isHovering, isAnimating, drawOrigami])

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
        // Create a simple fortune using just the object's meaning
        const fortune = {
          message: object.meaning
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
      // Handle number selection based on quadrant - authentic origami layout
      const numbers = selectedColor?.finalHorizontal ? [1, 4, 5, 8] : [2, 3, 6, 7]
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
      // Handle object selection using randomized oracle cards
      // Determine current position after direction + number counting
      const totalCounts = selectedColor.count + selectedNumber
      const currentIsHorizontal = totalCounts % 2 === 1
      const objects = currentIsHorizontal ? randomObjects.horizontal : randomObjects.vertical
      
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
    
    // Generate new random objects for next game
    setRandomObjects(getRandomObjects())
    
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
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{ 
              cursor: 'pointer',
              border: 'none',
              borderRadius: '8px',
              transition: 'transform 0.2s ease'
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

        {/* Fortune Display Overlay */}
        {gameState === 'fortune' && fortune && (
          <>
            <div className="fortune-backdrop" onClick={resetGame}></div>
            <div className="fortune-display">
              <h3>Your Fortune</h3>
              <p className="fortune-message">{fortune.message}</p>
              <button className="btn-primary" onClick={resetGame}>
                Seek Another Fortune
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default OrigamiFortuneTeller
