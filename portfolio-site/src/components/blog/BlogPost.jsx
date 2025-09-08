import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const BlogPost = ({ post, isPreview = false, onReadMore = null }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Extract just the first paragraph or first 150 characters for preview
  const getPreviewContent = (content) => {
    if (!isPreview) return content
    
    // Remove markdown headers and get plain text start
    const cleanContent = content
      .replace(/^#+\s*/gm, '') // Remove markdown headers
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold formatting
      .replace(/\*(.*?)\*/g, '$1') // Remove italic formatting
      .replace(/`(.*?)`/g, '$1') // Remove inline code
      .trim()
    
    // Find first meaningful content (skip empty lines)
    const lines = cleanContent.split('\n').filter(line => line.trim())
    const firstMeaningfulLine = lines[0] || ''
    
    // Truncate if too long, but try to end at a word boundary
    if (firstMeaningfulLine.length > 120) {
      const truncated = firstMeaningfulLine.substring(0, 120)
      const lastSpace = truncated.lastIndexOf(' ')
      return lastSpace > 80 ? truncated.substring(0, lastSpace) + '...' : truncated + '...'
    }
    
    return firstMeaningfulLine
  }

  const content = getPreviewContent(post.content)

  return (
    <motion.article 
      className="blog-post"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <header className="blog-post-header">
        <motion.h2 
          className="blog-post-title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {post.title}
        </motion.h2>
        
        <motion.div 
          className="blog-post-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <time dateTime={post.date} className="blog-post-date">
            {formatDate(post.date)}
          </time>
          {post.tags && post.tags.length > 0 && (
            <div className="blog-post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="blog-post-tag">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </header>

      {/* Featured Image - only show in full view */}
      {post.featuredImage && !isPreview && (
        <motion.div 
          className="blog-post-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="blog-image"
          />
        </motion.div>
      )}

      {/* Content */}
      <motion.div 
        className="blog-post-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        {isPreview ? (
          // Simple preview text without markdown processing
          <p className="blog-preview-text">
            {content}
          </p>
        ) : (
          // Full markdown content for detailed view
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              // Custom image rendering for blog images
              img: ({ node, ...props }) => (
                <div className="blog-content-image">
                  <img {...props} className="blog-image" />
                </div>
              ),
              // Style code blocks
              code: ({ node, inline, ...props }) => (
                inline 
                  ? <code className="inline-code" {...props} />
                  : <code className="code-block" {...props} />
              ),
              // Style blockquotes
              blockquote: ({ node, ...props }) => (
                <blockquote className="blog-quote" {...props} />
              )
            }}
          >
            {content}
          </ReactMarkdown>
        )}
        
        {isPreview && onReadMore && (
          <motion.button
            onClick={() => onReadMore(post)}
            className="blog-read-more"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            read more →
          </motion.button>
        )}
      </motion.div>
    </motion.article>
  )
}

export default BlogPost
