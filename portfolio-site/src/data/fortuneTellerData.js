// Fortune Teller Data - Directions, Numbers, Objects, and Fortunes

export const directions = [
  {
    name: 'NORTH',
    symbol: '↑',
    meaning: 'New Beginnings',
    description: 'The path of fresh starts and untapped potential'
  },
  {
    name: 'EAST', 
    symbol: '→',
    meaning: 'Illumination',
    description: 'Where the sun rises and wisdom dawns'
  },
  {
    name: 'SOUTH',
    symbol: '↓', 
    meaning: 'Manifestation',
    description: 'The realm of bringing dreams into reality'
  },
  {
    name: 'WEST',
    symbol: '←',
    meaning: 'Reflection',
    description: 'Where the sun sets and deep knowing emerges'
  }
]

export const mysticalNumbers = [
  {
    number: 7,
    name: 'Seven',
    meaning: 'Spiritual Awakening',
    description: 'The number of mystical completion and inner wisdom'
  },
  {
    number: 13,
    name: 'Thirteen', 
    meaning: 'Transformation',
    description: 'The sacred number of death and rebirth cycles'
  },
  {
    number: 21,
    name: 'Twenty-One',
    meaning: 'Mastery',
    description: 'The culmination of learning and spiritual maturity'
  },
  {
    number: 33,
    name: 'Thirty-Three',
    meaning: 'Divine Service',
    description: 'The master number of compassionate leadership'
  }
]

export const mundaneObjects = [
  {
    name: 'Keys',
    emoji: '🗝️',
    meaning: 'Access',
    description: 'Unlocking hidden doors and secret knowledge'
  },
  {
    name: 'Coins',
    emoji: '🪙',
    meaning: 'Exchange',
    description: 'The flow of energy and material abundance'
  },
  {
    name: 'Books',
    emoji: '📚',
    meaning: 'Knowledge',
    description: 'Ancient wisdom waiting to be discovered'
  },
  {
    name: 'Mirrors',
    emoji: '🪞',
    meaning: 'Reflection',
    description: 'Seeing truth beyond surface appearances'
  },
  {
    name: 'Candles',
    emoji: '🕯️',
    meaning: 'Illumination',
    description: 'Light piercing through darkness and confusion'
  },
  {
    name: 'Feathers',
    emoji: '🪶',
    meaning: 'Messages',
    description: 'Communications from higher realms'
  }
]

export const fortuneTemplates = [
  {
    opener: "The {direction} winds whisper of {number_meaning}...",
    influence: "Through the lens of {object_meaning}, you will discover",
    message: "A profound shift awaits you. Trust in the process of {direction_meaning} as {object_description}. The energy of {number_name} suggests that this transformation will unfold in divine timing.",
    summary: "Embrace the wisdom of {direction} and let {object_name} guide your path forward."
  },
  {
    opener: "From the {direction} realm, {number_name} calls to you...",
    influence: "The {object_name} reveals the hidden truth:",
    message: "Your journey toward {direction_meaning} is blessed by cosmic forces. {object_description} while the sacred number {number} amplifies your spiritual growth. Trust what emerges.",
    summary: "The universe conspires in your favor through {direction_meaning} and {object_meaning}."
  },
  {
    opener: "Ancient wisdom flows from the {direction}...",
    influence: "The mystical {object_name} illuminates your path:",
    message: "You stand at the threshold of {number_meaning}. {direction_description} as {object_description}. This is your moment of awakening and transformation.",
    summary: "Let {direction} energy and {object_name} wisdom guide your next steps."
  },
  {
    opener: "The sacred {number} resonates with {direction} energy...",
    influence: "Through {object_name}, the message becomes clear:",
    message: "Your soul's journey toward {direction_meaning} is supported by divine guidance. {object_description} while {number_meaning} unfolds in your life. Trust the process completely.",
    summary: "Harmony between {direction}, {number_name}, and {object_name} creates your destiny."
  }
]

export const generateFortune = (direction, number, object) => {
  const template = fortuneTemplates[Math.floor(Math.random() * fortuneTemplates.length)]
  
  return {
    opener: template.opener
      .replace('{direction}', direction.name)
      .replace('{number_meaning}', number.meaning)
      .replace('{number_name}', number.name)
      .replace('{number}', number.number),
    
    influence: template.influence
      .replace('{object_meaning}', object.meaning)
      .replace('{object_name}', object.name),
    
    message: template.message
      .replace('{direction_meaning}', direction.meaning)
      .replace('{direction_description}', direction.description)
      .replace('{object_description}', object.description)
      .replace('{object_meaning}', object.meaning)
      .replace('{number_name}', number.name)
      .replace('{number}', number.number)
      .replace('{number_meaning}', number.meaning),
    
    summary: template.summary
      .replace('{direction}', direction.name)
      .replace('{direction_meaning}', direction.meaning)
      .replace('{object_name}', object.name)
      .replace('{object_meaning}', object.meaning)
      .replace('{number_name}', number.name)
  }
}
