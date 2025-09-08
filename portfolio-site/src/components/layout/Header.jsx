import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  const location = useLocation()

  const navigation = [
    { name: 'work', href: '#work' },
    { name: 'about', href: '#about' },
    { name: 'contact', href: '#contact' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    
    // If we're not on the homepage, navigate there first
    if (location.pathname !== '/') {
      // Use React Router navigation instead of window.location
      // This will trigger the Home component which clears hash and scrolls to top
      // Then we'll handle the section scrolling separately
      window.location.href = '/'
      // Store the intended section in sessionStorage for after navigation
      sessionStorage.setItem('scrollToSection', href)
      return
    }
    
    // If we're on homepage, scroll to section immediately
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Brand mark - fixed position */}
      <motion.div 
        className="brand-fixed"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Link 
          to="/" 
          className="text-inherit no-underline"
          onClick={(e) => {
            // If already on homepage, scroll to top
            if (location.pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
            // If on other pages, let normal navigation happen (will go to top via Home useEffect)
          }}
        >
          molvyn studios
        </Link>
      </motion.div>

      {/* Navigation - floating */}
      <motion.nav 
        className="nav-floating"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {navigation.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
          >
            {item.name}
          </motion.a>
        ))}
      </motion.nav>
    </>
  )
}

export default Header