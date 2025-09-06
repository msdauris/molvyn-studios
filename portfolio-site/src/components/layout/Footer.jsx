import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ 
      padding: '4rem 2rem 2rem', 
      borderTop: '1px solid #f0f0f0',
      background: '#ffffff'
    }}>
      <motion.div 
        style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          textAlign: 'center'
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div style={{ 
          fontSize: '0.9rem', 
          color: '#999999', 
          fontFamily: 'Courier New, monospace',
          lineHeight: '1.6'
        }}>
          © {currentYear} molvyn studios<br/>
          crafted with intention and ai partnership<br/>
          valencia, spain
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer