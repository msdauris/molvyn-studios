import { useState, useCallback, useRef } from 'react'

export const useAnimation = (duration = 300) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef(null)

  const startAnimation = useCallback((callback) => {
    if (isAnimating) return

    setIsAnimating(true)
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false)
      if (callback) callback()
    }, duration)
  }, [isAnimating, duration])

  const stopAnimation = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsAnimating(false)
  }, [])

  return {
    isAnimating,
    startAnimation,
    stopAnimation
  }
}

export const useSequentialAnimation = (items, delay = 100) => {
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [isComplete, setIsComplete] = useState(false)
  const timeoutRefs = useRef([])

  const startSequence = useCallback(() => {
    setCurrentIndex(-1)
    setIsComplete(false)
    
    // Clear any existing timeouts
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout))
    timeoutRefs.current = []

    items.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setCurrentIndex(index)
        
        if (index === items.length - 1) {
          setTimeout(() => setIsComplete(true), delay)
        }
      }, index * delay)
      
      timeoutRefs.current.push(timeout)
    })
  }, [items, delay])

  const resetSequence = useCallback(() => {
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout))
    timeoutRefs.current = []
    setCurrentIndex(-1)
    setIsComplete(false)
  }, [])

  return {
    currentIndex,
    isComplete,
    startSequence,
    resetSequence,
    isItemActive: (index) => index <= currentIndex
  }
}

export const useHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false)

  const hoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  }

  return {
    isHovered,
    hoverProps
  }
}
