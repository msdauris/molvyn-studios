import { motion } from 'framer-motion'
import BlogPost from './BlogPost'

const BlogFeed = ({ posts, onPostSelect }) => {
  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="blog-feed">
      {sortedPosts.length === 0 ? (
        <motion.div 
          className="blog-empty"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="blog-empty-title">no posts yet</h3>
          <p className="blog-empty-text">
            check back soon for updates on my creative journey
          </p>
        </motion.div>
      ) : (
        <div className="blog-posts">
          {sortedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.15, 1.2) }}
            >
              <BlogPost 
                post={post} 
                isPreview={true}
                onReadMore={onPostSelect}
              />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogFeed
