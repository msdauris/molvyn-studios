export const relationshipTypes = [
  { id: 'romantic', label: 'Romantic Partnership', icon: '💕' },
  { id: 'family', label: 'Family Connection', icon: '👨‍👩‍👧‍👦' },
  { id: 'friendship', label: 'Friendship', icon: '🤝' },
  { id: 'work', label: 'Professional/Work', icon: '💼' },
  { id: 'creative', label: 'Creative Collaboration', icon: '🎨' }
];

export const relationshipStages = [
  { id: 'new', label: 'Just Beginning', description: 'First few weeks' },
  { id: 'early', label: 'Getting to Know Each Other', description: '1-6 months' },
  { id: 'developing', label: 'Deepening Connection', description: '6 months - 2 years' },
  { id: 'established', label: 'Established Dynamic', description: '2+ years' },
  { id: 'transition', label: 'In Transition', description: 'Major changes happening' },
  { id: 'rekindling', label: 'Reconnecting', description: 'Rebuilding or renewing' }
];

export const sampleQuestions = {
  romantic: {
    new: [
      "What aspect of yourself do you most want them to understand?",
      "How do you naturally show care, and how do they receive it?",
      "What fears about intimacy are you both navigating?",
      "Where do your communication styles complement each other?",
      "What dreams do you share, and where do they diverge?"
    ],
    early: [
      "How do you each define commitment and what does it mean to you?",
      "What are your individual love languages and how do they interact?",
      "Where do you feel most understood and most misunderstood?",
      "What relationship patterns from your past are showing up now?",
      "How do you both handle vulnerability and emotional intimacy?"
    ],
    developing: [
      "What shared values are becoming more important to you both?",
      "How do you navigate differences in life pace and priorities?",
      "Where do you need more individual space versus togetherness?",
      "What conflicts have taught you the most about each other?",
      "How are you both growing as individuals within this relationship?"
    ],
    established: [
      "How has your individual growth changed the relationship dynamic?",
      "What patterns have you fallen into that no longer serve you both?",
      "Where do you need more space, and where do you crave more closeness?",
      "How do you each handle conflict, and what would healing look like?",
      "What new adventure could reignite your shared curiosity?"
    ],
    transition: [
      "What major changes are affecting your relationship right now?",
      "How are you each handling uncertainty and stress differently?",
      "What support do you need from each other during this time?",
      "Where do you need to be more flexible versus more stable?",
      "What opportunities for growth are hidden in this transition?"
    ],
    rekindling: [
      "What drew you together originally that you want to rediscover?",
      "What hurts need healing before you can move forward?",
      "How have you both changed since you were last close?",
      "Where do you need to rebuild trust and intimacy?",
      "What new chapter do you want to write together?"
    ]
  },
  family: {
    new: [
      "What family patterns are you both unconsciously repeating?",
      "How do your different upbringings create friction or harmony?",
      "What does 'family' mean to each of you?",
      "Where do you need boundaries, and where do you need bridges?",
      "What healing could happen through this relationship?"
    ],
    early: [
      "How do your different family backgrounds show up in daily interactions?",
      "What family traditions do you each want to preserve or change?",
      "Where do you feel most supported and most misunderstood?",
      "How do you each handle family conflict and resolution?",
      "What family stories need to be shared or healed?"
    ],
    developing: [
      "How are your individual family roles evolving within this relationship?",
      "What family expectations are you both navigating or challenging?",
      "Where do you need more independence versus family connection?",
      "How do you balance individual growth with family loyalty?",
      "What family patterns are you consciously choosing to break or continue?"
    ],
    established: [
      "How have your roles in the family evolved over time?",
      "What unspoken expectations are creating tension?",
      "Where do you see your parents/ancestors in your interactions?",
      "What forgiveness is ready to emerge between you?",
      "How can you honor both tradition and growth?"
    ],
    transition: [
      "How are major family changes affecting your relationship?",
      "What family support do you each need during this transition?",
      "How do you maintain connection while everything is shifting?",
      "What family roles are changing and how do you adapt?",
      "Where do you need stability versus flexibility in family dynamics?"
    ],
    rekindling: [
      "What family bonds do you want to rebuild or strengthen?",
      "How have you both grown since your family relationship was last close?",
      "What family hurts need acknowledgment and healing?",
      "Where do you want to create new family traditions or memories?",
      "How can you honor the past while creating a new family dynamic?"
    ]
  },
  friendship: {
    new: [
      "What drew you to each other initially?",
      "How do you each define loyalty and support?",
      "What do you hope to learn from this friendship?",
      "Where do your values align, and where do they challenge each other?",
      "What kind of adventures do you want to share?"
    ],
    early: [
      "How do you each prefer to spend time together?",
      "What boundaries feel important in this friendship?",
      "Where do you feel most comfortable being yourself?",
      "How do you each handle disagreements or different opinions?",
      "What shared interests are bringing you closer?"
    ],
    developing: [
      "How do you support each other through challenges?",
      "What have you learned about each other that surprised you?",
      "Where do you need more space versus more connection?",
      "How do you navigate changes in your individual lives?",
      "What deeper conversations are you ready to have?"
    ],
    established: [
      "How has this friendship changed you both over time?",
      "What assumptions about each other need updating?",
      "Where do you need more honesty in your connection?",
      "How do you navigate the different seasons of your lives?",
      "What new depths are waiting to be explored?"
    ],
    transition: [
      "How are life changes affecting your friendship?",
      "What support do you need from each other during this time?",
      "How do you maintain connection despite different circumstances?",
      "Where do you need understanding versus advice?",
      "What aspects of your friendship remain constant through change?"
    ],
    rekindling: [
      "What originally made your friendship special?",
      "How have you both grown since you were last close?",
      "What misunderstandings or distance needs to be addressed?",
      "Where do you want to create new shared experiences?",
      "How can you rebuild trust and intimacy in your friendship?"
    ]
  },
  work: {
    new: [
      "How do your different work styles complement each other?",
      "What are your individual strengths that benefit the team?",
      "How do you each handle stress and deadlines?",
      "What communication approaches work best between you?",
      "Where might your professional values differ?"
    ],
    early: [
      "How do you each prefer to structure your work collaboration?",
      "What professional boundaries are important to establish?",
      "Where do you feel most productive working together?",
      "How do you each handle professional feedback and criticism?",
      "What shared work goals are emerging between you?"
    ],
    developing: [
      "How do you navigate professional disagreements or conflicts?",
      "What have you learned about each other's work approach?",
      "Where do you need more autonomy versus collaboration?",
      "How do you balance individual career goals with team objectives?",
      "What professional skills are you developing together?"
    ],
    established: [
      "How has your working relationship evolved over time?",
      "What unspoken tensions need to be addressed?",
      "How do you each prefer to receive feedback?",
      "Where do you need more collaboration versus independence?",
      "What shared professional goals could strengthen your partnership?"
    ],
    transition: [
      "How are workplace changes affecting your professional relationship?",
      "What support do you need from each other during this transition?",
      "How do you maintain effective collaboration during uncertainty?",
      "Where do you need stability versus adaptability in your work dynamic?",
      "What professional opportunities are emerging from this change?"
    ],
    rekindling: [
      "What originally made your professional partnership effective?",
      "How have your professional skills and perspectives evolved?",
      "What workplace tensions or misunderstandings need resolution?",
      "Where do you want to rebuild trust and collaboration?",
      "How can you create a renewed sense of shared professional purpose?"
    ]
  },
  creative: {
    new: [
      "How do your creative visions align and differ?",
      "What does each of you bring to the creative process?",
      "How do you handle creative disagreements?",
      "What inspires each of you most in collaborative work?",
      "Where do you need structure versus spontaneity?"
    ],
    early: [
      "How do you each prefer to approach creative brainstorming?",
      "What creative boundaries and expectations should you establish?",
      "Where do you feel most creatively energized together?",
      "How do you each handle creative criticism and feedback?",
      "What shared creative goals are beginning to emerge?"
    ],
    developing: [
      "How do you navigate creative differences and conflicting ideas?",
      "What have you discovered about each other's creative process?",
      "Where do you need individual creative space versus collaboration?",
      "How do you balance personal artistic vision with shared projects?",
      "What creative risks are you ready to take together?"
    ],
    established: [
      "How has your creative partnership influenced your individual work?",
      "What creative blocks have you worked through together?",
      "Where do you need more creative freedom versus shared direction?",
      "How do you balance individual recognition with collaboration?",
      "What new creative territories are you ready to explore together?"
    ],
    transition: [
      "How are changes affecting your creative collaboration?",
      "What creative support do you need from each other right now?",
      "How do you maintain creative momentum during uncertainty?",
      "Where do you need creative stability versus experimentation?",
      "What new creative possibilities are opening up through this transition?"
    ],
    rekindling: [
      "What originally sparked your creative connection?",
      "How has your creative vision and style evolved since you last collaborated?",
      "What creative conflicts or disappointments need to be addressed?",
      "Where do you want to reignite creative passion and inspiration?",
      "How can you create a fresh creative partnership while honoring your history?"
    ]
  }
};

export const testimonials = [
  {
    name: "Sarah M.",
    relationship: "Romantic Partnership",
    text: "The questions helped us understand our Mars-Venus square in a completely new way. Instead of seeing our different approaches to conflict as a problem, we learned how to use them as complementary strengths.",
    rating: 5
  },
  {
    name: "David & Alex",
    relationship: "Creative Collaboration",
    text: "As business partners, we thought we knew each other well. The Human Design insights about our different authorities completely transformed how we make decisions together.",
    rating: 5
  },
  {
    name: "Maria L.",
    relationship: "Family Connection",
    text: "Working through these questions with my teenage daughter opened up conversations we'd never had. The astrological timing insights helped us understand why certain topics felt so charged.",
    rating: 5
  }
];

export const pricingTiers = [
  {
    id: 'explorer',
    name: 'Relationship Explorer',
    price: 'Free',
    description: 'Perfect for getting started',
    features: [
      '5 personalized questions',
      'Basic compatibility overview',
      'Sun sign synastry',
      'Relationship stage insights'
    ],
    cta: 'Start Exploring',
    popular: false
  },
  {
    id: 'deepdive',
    name: 'Deep Dive Analysis',
    price: '$29',
    description: 'Comprehensive relationship insights',
    features: [
      '25+ personalized questions',
      'Full synastry chart analysis',
      'Human Design compatibility',
      'Timing insights & transits',
      'Downloadable PDF report',
      'Audio interpretation (15 min)'
    ],
    cta: 'Get Deep Insights',
    popular: true
  },
  {
    id: 'ongoing',
    name: 'Relationship Journey',
    price: '$79',
    description: 'Evolving guidance over time',
    features: [
      'Everything in Deep Dive',
      'Monthly question updates',
      'Transit timing alerts',
      'Relationship evolution tracking',
      'Private consultation (30 min)',
      '6-month access'
    ],
    cta: 'Begin Journey',
    popular: false
  }
];

export const astrologicalAspects = {
  conjunction: { 
    description: "Intense blending of energies", 
    keywords: ["unity", "intensity", "merging"] 
  },
  opposition: { 
    description: "Complementary tensions and attractions", 
    keywords: ["balance", "projection", "completion"] 
  },
  trine: { 
    description: "Natural harmony and flow", 
    keywords: ["ease", "support", "natural talent"] 
  },
  square: { 
    description: "Dynamic tension requiring growth", 
    keywords: ["challenge", "growth", "action"] 
  },
  sextile: { 
    description: "Opportunities for cooperation", 
    keywords: ["opportunity", "skill", "communication"] 
  }
};

export const humanDesignTypes = {
  generator: {
    strategy: "Respond",
    description: "Life force energy, satisfaction through right work"
  },
  manifestor: {
    strategy: "Inform",
    description: "Initiating energy, peace through informing others"
  },
  projector: {
    strategy: "Wait for invitation",
    description: "Guiding energy, success through recognition"
  },
  reflector: {
    strategy: "Wait a lunar cycle",
    description: "Mirroring energy, wisdom through patience"
  }
};
