export const chatterboxMessages = {
  // Messages organized by fold positions
  outerFolds: [
    "The universe conspires in your favor",
    "Trust the process unfolding",
    "Your intuition knows the way",
    "Magic lives in the present moment",
    "You are exactly where you need to be",
    "The answer lies within",
    "Embrace the mystery",
    "Your path is uniquely yours"
  ],
  
  innerFolds: [
    "Release what no longer serves",
    "New opportunities are emerging",
    "Your creativity is your superpower",
    "Love starts with loving yourself",
    "The best is yet to come",
    "You have everything you need",
    "Trust your inner wisdom",
    "Transformation is happening now"
  ],
  
  centerMessages: [
    "You are the author of your story",
    "Your dreams are calling you forward",
    "The threshold awaits your courage",
    "You are more powerful than you know",
    "This too shall pass and transform",
    "Your light illuminates the darkness",
    "The journey is the destination",
    "You are loved beyond measure"
  ],
  
  // Special mystical messages that tie to oracle themes
  mysticalMessages: [
    "The Weaver's threads connect all things",
    "The Wanderer's path leads home to self",
    "The Mirror reflects your true nature",
    "The Phoenix rises from every ending",
    "The Keeper guards ancient wisdom",
    "The Dancer moves with cosmic rhythm",
    "The Anchor holds steady in storms",
    "The Threshold opens to infinite possibility"
  ]
};

export const getFoldMessage = (foldType) => {
  const messages = chatterboxMessages[foldType] || chatterboxMessages.centerMessages;
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

export const getRandomMessage = () => {
  const allMessages = [
    ...chatterboxMessages.outerFolds,
    ...chatterboxMessages.innerFolds,
    ...chatterboxMessages.centerMessages,
    ...chatterboxMessages.mysticalMessages
  ];
  const randomIndex = Math.floor(Math.random() * allMessages.length);
  return allMessages[randomIndex];
};

// Chatterbox fold positions and their corresponding message types
export const foldPositions = [
  { id: 'top-left', type: 'outerFolds', label: 'Past' },
  { id: 'top-right', type: 'outerFolds', label: 'Present' },
  { id: 'bottom-left', type: 'outerFolds', label: 'Future' },
  { id: 'bottom-right', type: 'outerFolds', label: 'Hidden' },
  { id: 'inner-1', type: 'innerFolds', label: 'Action' },
  { id: 'inner-2', type: 'innerFolds', label: 'Emotion' },
  { id: 'inner-3', type: 'innerFolds', label: 'Spirit' },
  { id: 'inner-4', type: 'innerFolds', label: 'Mind' },
  { id: 'center', type: 'centerMessages', label: 'Core Truth' }
];
