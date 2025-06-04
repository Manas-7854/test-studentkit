import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Users,
  Calendar,
  FlaskConical,
  Building,
  Home,
  Link
} from 'lucide-react';
import './LifeAtIIITH.css';

// Import images
import acadsImg from '../../assets/lifeAtIIITH/krb.jpg';
import clubsImg from '../../assets/lifeAtIIITH/clubs.png';
import festImg from '../../assets/lifeAtIIITH/fest.png';
import researchImg from '../../assets/lifeAtIIITH/research.png';
import campusAndHostelsImg from '../../assets/lifeAtIIITH/parijat.jpg';

const LifeAtIIITH = () => {
  const [activeSection, setActiveSection] = useState('academics');

  const sections = {
    academics: {
      title: 'Academics',
      description: 'World-class education with cutting-edge curriculum, distinguished faculty, and state-of-the-art facilities. Experience rigorous academic programs designed to foster innovation and critical thinking.',
      image: acadsImg,
      icon: <GraduationCap size={24} />
    },
    clubs: {
      title: 'Clubs',
      description: 'Vibrant student clubs spanning technology, arts, sports, and cultural activities. Join passionate communities and develop skills beyond the classroom while building lifelong friendships.',
      image: clubsImg,
      icon: <Users size={24} />
    },
    fest: {
      title: 'Fest',
      description: 'Annual cultural and technical festivals that bring together brilliant minds from across the country. Experience spectacular events, competitions, and celebrations that define campus life.',
      image: festImg,
      icon: <Calendar size={24} />
    },
    research: {
      title: 'Research',
      description: 'Groundbreaking research opportunities in AI, machine learning, computer vision, and emerging technologies. Work alongside renowned faculty on projects that shape the future.',
      image: researchImg,
      icon: <FlaskConical size={24} />
    },
    'campus and hostel': {
      title: 'Campus and Hostel',
      description: 'Beautiful modern campus with world-class infrastructure, comfortable hostels, recreational facilities, and a green environment that provides the perfect setting for learning and growth.',
      image: campusAndHostelsImg,
      icon: <Building size={24} />
    }
  };

  const rotatingWords = ['IIIT-H']

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const scrollToStudentKit = () => {
    const kitSection = document.querySelector('.life-at-iiith').nextElementSibling;
    if (kitSection) {
      kitSection.scrollIntoView({ behavior: 'smooth' });
    }
  };  
  const scrollToLanding = () => {
    const landingSection = document.querySelector('.landing-section') ;
    if (landingSection) {
      landingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="life-at-iiith">
      <div className="life-container">
        <motion.h1
          className="life-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <span className="code-bracket">{'{'}</span>
          Life @ IIIT-H
          <span className="code-bracket">{'}'}</span>
        </motion.h1>

        <nav className="life-navbar">
          {Object.keys(sections).map((section) => (
            <motion.button
              key={section}
              className={`nav-item ${activeSection === section ? 'active' : ''}`}
              onClick={() => handleSectionClick(section)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* {sections[section].icon} */}
              <span>{sections[section].title}</span>
            </motion.button>
          ))}
        </nav>    
        <div className="content-section">
          <div className="image-container">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSection}
                src={sections[activeSection].image}
                alt={sections[activeSection].title}
                className="section-image"
                initial={{
                  opacity: 0,
                  clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'
                }}
                animate={{
                  opacity: 1,
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
                }}
                exit={{
                  opacity: 0,
                  clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              />
            </AnimatePresence>

            <div className="text-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  className="text-wrapper"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="content-title">
                    {(activeSection === 'fest' || activeSection === 'research' || activeSection === 'clubs') ? (
                      <a 
                        href={activeSection === 'fest' 
                          ? "https://felicity.iiit.ac.in/"
                          : activeSection === 'research' 
                          ? "https://www.iiit.ac.in/research-centres/#"
                          : "https://clubs.iiit.ac.in/"
                        } 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                      >
                        {sections[activeSection].title}
                        <Link size={20} style={{ marginLeft: '4px' }} />
                      </a>
                    ) : sections[activeSection].title}
                  </h3>
                  <p className="content-description">{sections[activeSection].description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.div
          className="explore-kit-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button
            className="explore-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToLanding}
          >
            <span>Welcome To IIIT-H</span>
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
            <span>Checkout Student Kit</span>
            <svg className="button-arrow" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>    
            </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default LifeAtIIITH
