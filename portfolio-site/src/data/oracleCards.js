export const oracleCards = [
  {
    id: 1,
    name: "The Threshold",
    suit: "Passages",
    element: "Spirit",
    number: "I",
    image: "/assets/cards/threshold.jpg",
    meaning: "Standing at the edge of transformation, you hold the key to your own becoming. The threshold awaits your courage to step through.",
    keywords: ["transformation", "courage", "new beginnings", "potential"],
    reversed: "Fear of change holds you back. The door remains closed until you choose to open it."
  },
  {
    id: 2,
    name: "The Weaver",
    suit: "Craft",
    element: "Earth",
    number: "II",
    image: "/assets/cards/weaver.jpg",
    meaning: "Your hands shape reality thread by thread. Each choice weaves the tapestry of your existence.",
    keywords: ["creation", "patience", "skill", "manifestation"],
    reversed: "Tangled threads require careful unraveling. Step back and see the larger pattern."
  },
  {
    id: 3,
    name: "The Wanderer",
    suit: "Journeys",
    element: "Air",
    number: "III",
    image: "/assets/cards/wanderer.jpg",
    meaning: "The path reveals itself to those who dare to walk it. Trust your inner compass.",
    keywords: ["exploration", "freedom", "discovery", "intuition"],
    reversed: "Lost in circles, you've forgotten your destination. Pause and remember your true north."
  },
  {
    id: 4,
    name: "The Mirror",
    suit: "Reflections",
    element: "Water",
    number: "IV",
    image: "/assets/cards/mirror.jpg",
    meaning: "What you see in others lives within you. The reflection shows both shadow and light.",
    keywords: ["self-awareness", "projection", "truth", "clarity"],
    reversed: "Illusions cloud your vision. Look deeper than surface appearances."
  },
  {
    id: 5,
    name: "The Phoenix",
    suit: "Passages",
    element: "Fire",
    number: "V",
    image: "/assets/cards/phoenix.jpg",
    meaning: "From ashes of the old, something magnificent rises. Destruction births creation.",
    keywords: ["rebirth", "renewal", "resilience", "transformation"],
    reversed: "Clinging to what must die prevents your resurrection. Release and rise."
  },
  // Add more cards to reach 33 total
  {
    id: 6,
    name: "The Keeper",
    suit: "Wisdom",
    element: "Earth",
    number: "VI",
    image: "/assets/cards/keeper.jpg",
    meaning: "Ancient knowledge flows through you. You are both student and teacher.",
    keywords: ["wisdom", "tradition", "guidance", "knowledge"],
    reversed: "Rigid thinking blocks new understanding. Wisdom requires flexibility."
  },
  {
    id: 7,
    name: "The Dancer",
    suit: "Harmony",
    element: "Air",
    number: "VII",
    image: "/assets/cards/dancer.jpg",
    meaning: "Life is movement, rhythm, flow. Find your dance within the cosmic choreography.",
    keywords: ["grace", "rhythm", "flow", "harmony"],
    reversed: "You've lost your rhythm. Return to the music of your soul."
  },
  {
    id: 8,
    name: "The Anchor",
    suit: "Foundations",
    element: "Earth",
    number: "VIII",
    image: "/assets/cards/anchor.jpg",
    meaning: "Stability in chaos, roots in storm. You are the calm center of your world.",
    keywords: ["stability", "grounding", "security", "foundation"],
    reversed: "Rigidity masquerades as strength. True stability allows for movement."
  }
  // ... Continue with more cards to reach 33 total
];

export const cardSuits = {
  "Passages": { element: "Spirit", color: "purple" },
  "Craft": { element: "Earth", color: "sage" },
  "Journeys": { element: "Air", color: "beige" },
  "Reflections": { element: "Water", color: "blue" },
  "Wisdom": { element: "Earth", color: "sage" },
  "Harmony": { element: "Air", color: "beige" },
  "Foundations": { element: "Earth", color: "sage" }
};

export const getRandomCard = () => {
  const randomIndex = Math.floor(Math.random() * oracleCards.length);
  return oracleCards[randomIndex];
};

export const shuffleDeck = () => {
  const shuffled = [...oracleCards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
