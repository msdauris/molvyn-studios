import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useParams } from 'react-router-dom'
import { Plus, Settings, ArrowLeft } from 'lucide-react'
import BlogFeed from '../components/blog/BlogFeed'
import BlogPost from '../components/blog/BlogPost'
import BlogAdmin from '../components/blog/BlogAdmin'
import { sampleBlogPosts, defaultWelcomePost } from '../data/blogPosts'

const Blog = () => {
  const navigate = useNavigate()
  const { postId } = useParams()
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)
  const [showAdmin, setShowAdmin] = useState(false)
  const [editingPost, setEditingPost] = useState(null)
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  const getDefaultPosts = () => [
    defaultWelcomePost,
    ...sampleBlogPosts
  ]

  // Load posts from localStorage on component mount
  useEffect(() => {
    const savedPosts = localStorage.getItem('molvyn-blog-posts')
    if (savedPosts) {
      try {
        const parsedPosts = JSON.parse(savedPosts)
        // Check if we have valid posts with actual content
        if (Array.isArray(parsedPosts) && parsedPosts.length > 0 && parsedPosts.some(post => post.content && post.content.trim())) {
          setPosts(parsedPosts)
        } else {
          // Load default posts if localStorage is empty or contains invalid data
          const defaultPosts = getDefaultPosts()
          setPosts(defaultPosts)
        }
      } catch (error) {
        console.error('Error loading posts:', error)
        setPosts(getDefaultPosts())
      }
    } else {
      setPosts(getDefaultPosts())
    }
    setIsInitialized(true)
  }, [])

  // Save posts to localStorage whenever posts change (but only after initialization)
  useEffect(() => {
    if (isInitialized && posts.length > 0) {
      localStorage.setItem('molvyn-blog-posts', JSON.stringify(posts))
    }
  }, [posts, isInitialized])

  // Handle URL-based post selection
  useEffect(() => {
    if (postId && posts.length > 0) {
      const post = posts.find(p => p.id === postId)
      setSelectedPost(post || null)
    } else {
      setSelectedPost(null)
    }
  }, [postId, posts])

  const handleSavePost = (postData) => {
    if (editingPost) {
      // Update existing post
      setPosts(posts.map(p => p.id === editingPost.id ? postData : p))
    } else {
      // Add new post
      setPosts([postData, ...posts])
    }
    setEditingPost(null)
    setShowAdmin(false)
  }

  const handleEditPost = (post) => {
    setEditingPost(post)
    setShowAdmin(true)
  }

  const handleDeletePost = (postId) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(p => p.id !== postId))
      if (selectedPost?.id === postId) {
        setSelectedPost(null)
      }
    }
  }

  const handleNewPost = () => {
    setEditingPost(null)
    setShowAdmin(true)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
        
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            creative<br/>journal
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            thoughts, process, and glimpses behind the scenes
          </motion.p>
        </div>
        
        <div className="scroll-indicator"></div>
      </section>

      {/* Admin Toggle (hidden by default, accessible via triple-click) */}
      <motion.button
        className="blog-admin-toggle"
        onClick={() => setIsAdminMode(!isAdminMode)}
        onMouseDown={(e) => {
          // Triple-click to toggle admin mode
          if (e.detail === 3) {
            setIsAdminMode(!isAdminMode)
          }
        }}
        style={{ 
          position: 'fixed', 
          top: '20px', 
          right: '20px', 
          opacity: isAdminMode ? 1 : 0.1,
          zIndex: 1000 
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Settings className="h-5 w-5" />
      </motion.button>

      {/* Main Content */}
      <section className="content-section blog-content">
        <AnimatePresence mode="wait">
          {selectedPost ? (
            /* Single Post View */
            <motion.div
              key="single-post"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="blog-single-view"
            >
              <div className="content-left">
                <button 
                  onClick={() => {
                    // Clear any stored navigation from sessionStorage
                    sessionStorage.removeItem('scrollToSection')
                    navigate('/blog')
                  }}
                  className="blog-back-btn"
                >
                  <ArrowLeft className="h-4 w-4" />
                  back to posts
                </button>
              </div>
              
              <div className="content-right">
                <BlogPost 
                  post={selectedPost} 
                  isPreview={false}
                />
                
                {isAdminMode && (
                  <div className="blog-post-admin">
                    <button 
                      onClick={() => handleEditPost(selectedPost)}
                      className="btn-secondary"
                    >
                      edit post
                    </button>
                    <button 
                      onClick={() => handleDeletePost(selectedPost.id)}
                      className="btn-destructive"
                    >
                      delete post
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            /* Blog Feed View */
            <motion.div
              key="blog-feed"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
            >
              <div className="content-left">
                <h2 className="content-title">recent posts</h2>
                
                {isAdminMode && (
                  <motion.button
                    onClick={handleNewPost}
                    className="blog-new-post-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Plus className="h-4 w-4" />
                    new post
                  </motion.button>
                )}
              </div>
              
              <div className="content-right">
                <BlogFeed 
                  posts={posts}
                  onPostSelect={(post) => navigate(`/blog/${post.id}`)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Blog Admin Modal */}
      <AnimatePresence>
        {showAdmin && (
          <BlogAdmin
            onSavePost={handleSavePost}
            onClose={() => {
              setShowAdmin(false)
              setEditingPost(null)
            }}
            existingPost={editingPost}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Blog
