import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Landing.css'

// Import images
import logo from '../../assets/logo.png'
import backgroundImage from '../../assets/background2.jpeg'

const Landing = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  // Words to cycle through
  const rotatingWords = ['Exploring ✧', 'Living ✿', 'Coding </>', 'Research ⚛', 'Celebration ✶', 'Engineering ⋈', 'IIIT-H !!']

  // Auto-rotate words
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) =>
        (prevIndex + 1) % rotatingWords.length
      )
    }, 3000) // Change every 3 seconds

    return () => clearInterval(wordInterval)
  }, [rotatingWords.length])
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.landing-section').nextElementSibling
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const scrollToStudentKit = () => {
    const kitSection = document.querySelector('.life-at-iiith').nextElementSibling;
    if (kitSection) {
      kitSection.scrollIntoView({ behavior: 'smooth' });
    }
  };  
  return (
    <section className="landing-section">
      {/* Background Image */}
      <div className="background-container">
        <div className="background-image-wrapper">
          <img
            src={backgroundImage}
            alt="Background"
            className="background-image"
          />
          <div className="background-overlay"></div>
        </div>
      </div>

      {/* Central content */}
      <div className="landing-content">
        <motion.div
          className="welcome-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.img
            src={logo}
            alt="IIIT-H Logo"
            className="main-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />          
          <motion.h1
            className="main-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <span className="code-bracket">{'{'}</span>
            Welcome to{' '}
            <span className="cycling-word-container">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  className="highlight cycling-word"
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: 90 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                >
                  {rotatingWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="code-bracket">{'}'}</span>
          </motion.h1>



          <motion.button
            className="explore-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToNextSection}
          >
            <span>Life @ IIIT-H</span>
            <svg className="button-arrow" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>          
            </motion.button>      
            <motion.button
            className="explore-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToStudentKit}
          >
            <span>Student Kit</span>
            <svg className="button-arrow" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>          
            </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Landing
