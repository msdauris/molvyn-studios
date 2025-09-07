import { useState, useCallback } from 'react'
import { oracleCards, shuffleDeck } from '../data/oracleCards'

export const useCardDraw = () => {
  const [drawnCards, setDrawnCards] = useState([])
  const [deck, setDeck] = useState(oracleCards)
  const MAX_CARDS = 9

  const drawCard = useCallback(() => {
    if (deck.length === 0 || drawnCards.length >= MAX_CARDS) return null

    const randomIndex = Math.floor(Math.random() * deck.length)
    const drawnCard = deck[randomIndex]
    
    // Remove card from deck
    const newDeck = deck.filter((_, index) => index !== randomIndex)
    setDeck(newDeck)
    
    // Add to drawn cards with animation state
    const cardWithState = {
      ...drawnCard,
      id: `${drawnCard.id}-${Date.now()}`, // Unique ID for this draw
      isRevealed: false,
      drawTime: Date.now()
    }
    
    setDrawnCards(prev => [...prev, cardWithState])
    
    // Reveal card after animation delay
    setTimeout(() => {
      setDrawnCards(prev => 
        prev.map(card => 
          card.id === cardWithState.id 
            ? { ...card, isRevealed: true }
            : card
        )
      )
    }, 600)
    
    return cardWithState
  }, [deck])

  const shuffleCards = useCallback(() => {
    const shuffled = shuffleDeck()
    setDeck(shuffled)
  }, [])

  const clearCards = useCallback(() => {
    setDrawnCards([])
    setDeck(oracleCards)
  }, [])

  const drawMultiple = useCallback((count) => {
    const cards = []
    const maxDrawable = Math.min(count, MAX_CARDS - drawnCards.length)
    for (let i = 0; i < maxDrawable && deck.length > 0; i++) {
      const card = drawCard()
      if (card) cards.push(card)
    }
    return cards
  }, [drawCard, deck.length, drawnCards.length, MAX_CARDS])

  return {
    drawnCards,
    deck,
    drawCard,
    shuffleDeck: shuffleCards,
    clearCards,
    drawMultiple,
    cardsRemaining: deck.length,
    maxCards: MAX_CARDS,
    canDrawMore: drawnCards.length < MAX_CARDS && deck.length > 0,
    cardsDrawn: drawnCards.length
  }
}
