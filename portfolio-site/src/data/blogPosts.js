// Sample blog posts data structure
// In a real application, this would come from a CMS or database

export const sampleBlogPosts = [
  {
    id: 'ceramic-experiments-001',
    title: 'late night ceramic experiments',
    content: `# working in the quiet hours

there's something magical about being in the studio when the world sleeps. tonight i'm experimenting with a new **copper carbonate glaze** that promises green flashes when fired in reduction.

## the process

- mixed 50g copper carbonate with my base clear glaze
- added a pinch of tin oxide for opacity  
- testing on three different clay bodies

the anticipation is always the hardest part. you never know what the fire will reveal.

![Ceramic pieces before firing](https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800)

*pieces waiting for their transformation*

> "The kiln is both destroyer and creator, taking our intentions and making them real through fire and time."

tomorrow i'll know if this batch holds the magic i'm hoping for.`,
    date: '2024-01-20',
    tags: ['ceramics', 'glazes', 'process'],
    featuredImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80'
  },
  {
    id: 'oracle-card-redesign',
    title: 'redesigning the oracle interface',
    content: `# digital intuition meets code

spent the weekend reworking the oracle card experience. the old shuffle button felt too mechanical, too removed from the mystery of divination.

## what changed

the deck now auto-shuffles on every reset and page refresh. no buttons, no conscious control - just pure chance guided by the moment you arrive.

\`\`\`javascript
// Auto-shuffle on initialization  
const [deck, setDeck] = useState(() => shuffleDeck())

useEffect(() => {
  setDeck(shuffleDeck())
}, [])
\`\`\`

sometimes the best interfaces are the ones that disappear entirely.

the cards feel more alive now, less like a database and more like a living deck that responds to your presence.`,
    date: '2024-01-18',
    tags: ['code', 'oracle', 'interface design'],
    featuredImage: ''
  }
]

export const defaultWelcomePost = {
  id: 'welcome-post',
  title: 'welcome to my creative journal',
  content: `# hello there ✨

welcome to my little corner of the internet where i share glimpses into my creative process, ceramic adventures, and digital experiments.

this space will be filled with:
- **ceramic pieces** i'm working on in my studio
- **digital art** experiments and oracle card designs  
- **process shots** and behind-the-scenes moments
- **thoughts** on creativity, intuition, and making things

## what to expect

each post is a small window into whatever has captured my attention lately. sometimes it'll be a new glaze experiment that turned out unexpectedly beautiful, other times it might be code snippets from building interactive experiences.

i believe in documenting the journey, not just the destination.

*thanks for being here* 🌙`,
  date: '2024-01-15',
  tags: ['welcome', 'ceramics', 'digital art'],
  featuredImage: ''
}
