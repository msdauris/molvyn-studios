import { useState } from 'react'
import { motion } from 'framer-motion'
import { Save, X, Image, Plus, Trash2 } from 'lucide-react'

const BlogAdmin = ({ onSavePost, onClose, existingPost = null }) => {
  const [post, setPost] = useState({
    title: existingPost?.title || '',
    content: existingPost?.content || '',
    tags: existingPost?.tags || [],
    featuredImage: existingPost?.featuredImage || '',
    date: existingPost?.date || new Date().toISOString().split('T')[0]
  })
  
  const [newTag, setNewTag] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [showImageInput, setShowImageInput] = useState(false)

  const handleSave = () => {
    if (!post.title.trim() || !post.content.trim()) {
      alert('Please fill in both title and content')
      return
    }

    const postData = {
      ...post,
      id: existingPost?.id || Date.now().toString(),
      date: post.date || new Date().toISOString().split('T')[0]
    }

    onSavePost(postData)
    onClose()
  }

  const addTag = () => {
    if (newTag.trim() && !post.tags.includes(newTag.trim())) {
      setPost({
        ...post,
        tags: [...post.tags, newTag.trim()]
      })
      setNewTag('')
    }
  }

  const removeTag = (tagToRemove) => {
    setPost({
      ...post,
      tags: post.tags.filter(tag => tag !== tagToRemove)
    })
  }

  const addImage = () => {
    if (imageUrl.trim()) {
      // Insert markdown image syntax at cursor position or end of content
      const imageMarkdown = `\n\n![Image](${imageUrl})\n\n`
      setPost({
        ...post,
        content: post.content + imageMarkdown
      })
      setImageUrl('')
      setShowImageInput(false)
    }
  }

  return (
    <motion.div 
      className="blog-admin-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="blog-admin-modal"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="blog-admin-header">
          <h2 className="blog-admin-title">
            {existingPost ? 'edit post' : 'new post'}
          </h2>
          <button 
            onClick={onClose}
            className="blog-admin-close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <div className="blog-admin-form">
          {/* Title */}
          <div className="blog-admin-field">
            <label className="blog-admin-label">title</label>
            <input
              type="text"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              className="blog-admin-input"
              placeholder="enter post title..."
            />
          </div>

          {/* Date */}
          <div className="blog-admin-field">
            <label className="blog-admin-label">date</label>
            <input
              type="date"
              value={post.date}
              onChange={(e) => setPost({ ...post, date: e.target.value })}
              className="blog-admin-input"
            />
          </div>

          {/* Featured Image */}
          <div className="blog-admin-field">
            <label className="blog-admin-label">featured image (optional)</label>
            <input
              type="url"
              value={post.featuredImage}
              onChange={(e) => setPost({ ...post, featuredImage: e.target.value })}
              className="blog-admin-input"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Tags */}
          <div className="blog-admin-field">
            <label className="blog-admin-label">tags</label>
            <div className="blog-admin-tags">
              {post.tags.map(tag => (
                <span key={tag} className="blog-admin-tag">
                  #{tag}
                  <button 
                    onClick={() => removeTag(tag)}
                    className="blog-admin-tag-remove"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
              <div className="blog-admin-tag-input">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTag()}
                  className="blog-admin-input-small"
                  placeholder="add tag..."
                />
                <button onClick={addTag} className="blog-admin-tag-add">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="blog-admin-field">
            <div className="blog-admin-content-header">
              <label className="blog-admin-label">content (markdown supported)</label>
              <button 
                onClick={() => setShowImageInput(!showImageInput)}
                className="blog-admin-image-btn"
              >
                <Image className="h-4 w-4" />
                add image
              </button>
            </div>
            
            {showImageInput && (
              <div className="blog-admin-image-input">
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="blog-admin-input"
                  placeholder="https://example.com/image.jpg"
                />
                <button onClick={addImage} className="blog-admin-image-add">
                  add
                </button>
              </div>
            )}

            <textarea
              value={post.content}
              onChange={(e) => setPost({ ...post, content: e.target.value })}
              className="blog-admin-textarea"
              placeholder="write your post content here... markdown is supported for formatting"
              rows={15}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="blog-admin-actions">
          <button 
            onClick={onClose}
            className="btn-secondary"
          >
            cancel
          </button>
          <button 
            onClick={handleSave}
            className="btn-primary"
          >
            <Save className="h-4 w-4" />
            save post
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default BlogAdmin
