import { motion } from 'framer-motion'

const FoldAnimation = ({ isActive, children, foldType = 'default' }) => {
  const getFoldVariants = (type) => {
    const variants = {
      default: {
        closed: { 
          rotateX: 0, 
          rotateY: 0, 
          scale: 1,
          opacity: 1 
        },
        opening: { 
          rotateX: [0, -15, 15, 0], 
          rotateY: [0, 10, -10, 0],
          scale: [1, 1.05, 1.02, 1],
          opacity: [1, 0.8, 0.9, 1]
        },
        open: { 
          rotateX: 0, 
          rotateY: 0, 
          scale: 1.02,
          opacity: 1 
        }
      },
      corner: {
        closed: { 
          rotate: 0, 
          scale: 1,
          transformOrigin: 'center center' 
        },
        opening: { 
          rotate: [0, 15, -10, 5, 0], 
          scale: [1, 1.1, 0.95, 1.05, 1],
          transformOrigin: 'center center'
        },
        open: { 
          rotate: 0, 
          scale: 1.05,
          transformOrigin: 'center center' 
        }
      },
      center: {
        closed: { 
          scale: 1, 
          rotate: 0,
          filter: 'brightness(1)' 
        },
        opening: { 
          scale: [1, 1.3, 0.9, 1.1, 1], 
          rotate: [0, 180, 360],
          filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1.1)', 'brightness(1)']
        },
        open: { 
          scale: 1.1, 
          rotate: 360,
          filter: 'brightness(1.1)' 
        }
      }
    }
    return variants[type] || variants.default
  }

  const variants = getFoldVariants(foldType)

  const getAnimationState = () => {
    if (!isActive) return 'closed'
    return 'opening'
  }

  return (
    <motion.div
      variants={variants}
      initial="closed"
      animate={getAnimationState()}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        times: [0, 0.3, 0.6, 0.8, 1]
      }}
      style={{ perspective: '1000px' }}
    >
      {children}
    </motion.div>
  )
}

export const PaperFoldEffect = ({ isAnimating, children, intensity = 1 }) => {
  return (
    <motion.div
      animate={isAnimating ? {
        rotateX: [0, 5 * intensity, -5 * intensity, 0],
        rotateY: [0, -3 * intensity, 3 * intensity, 0],
        scale: [1, 1 + 0.02 * intensity, 1 - 0.01 * intensity, 1],
        filter: [
          'brightness(1) contrast(1)',
          'brightness(1.1) contrast(1.05)',
          'brightness(0.95) contrast(0.98)',
          'brightness(1) contrast(1)'
        ]
      } : {}}
      transition={{
        duration: 0.6,
        ease: "easeInOut"
      }}
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </motion.div>
  )
}

export const OrigamiFold = ({ 
  isActive, 
  children, 
  direction = 'horizontal',
  delay = 0 
}) => {
  const foldVariants = {
    horizontal: {
      closed: { 
        rotateX: 0,
        scaleY: 1,
        transformOrigin: 'center center'
      },
      folding: { 
        rotateX: [0, -90, -180, -90, 0],
        scaleY: [1, 0.8, 0.6, 0.8, 1],
        transformOrigin: 'center center'
      }
    },
    vertical: {
      closed: { 
        rotateY: 0,
        scaleX: 1,
        transformOrigin: 'center center'
      },
      folding: { 
        rotateY: [0, -90, -180, -90, 0],
        scaleX: [1, 0.8, 0.6, 0.8, 1],
        transformOrigin: 'center center'
      }
    },
    diagonal: {
      closed: { 
        rotateZ: 0,
        scale: 1,
        transformOrigin: 'center center'
      },
      folding: { 
        rotateZ: [0, 45, 90, 45, 0],
        scale: [1, 0.9, 0.8, 0.9, 1],
        transformOrigin: 'center center'
      }
    }
  }

  const variants = foldVariants[direction] || foldVariants.horizontal

  return (
    <motion.div
      variants={variants}
      initial="closed"
      animate={isActive ? "folding" : "closed"}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
        delay: delay,
        times: [0, 0.25, 0.5, 0.75, 1]
      }}
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </motion.div>
  )
}

export default FoldAnimation
