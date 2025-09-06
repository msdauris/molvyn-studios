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
    
    // If we're not on the homepage, navigate there first then scroll
    if (location.pathname !== '/') {
      window.location.href = `/${href}`
      return
    }
    
    // If we're on homepage, scroll to section
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
        <Link to="/" className="text-inherit no-underline">
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