import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FileText, 
  Calendar, 
  Users, 
  MapPin, 
  Navigation, 
  Camera, 
  BookOpen,
  Sun,
  Moon,
  ExternalLink,
  Code,
} from 'lucide-react'
import './App.css'

import Landing from './components/Landing/Landing'
import LifeAtIIITH from './components/LifeAtIIITH/LifeAtIIITH'
import Kit from './components/Kit/Kit'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const categories = [
    {
      id: 'documents',
      title: 'Documents Required',
      icon: FileText,
      color: 'from-blue-500 to-purple-600',
      description: 'Essential documents for admission and hostel allocation',
      techHint: '$ ls Documents'
    },
    {
      id: 'schedule',
      title: 'Induction Schedule',
      icon: Calendar,
      color: 'from-green-500 to-teal-600',
      description: 'Complete timeline of orientation activities',
      techHint: '$ grep "movie_night" schedule.txt'
    },
    {
      id: 'alumni',
      title: 'Echoes from Alumni',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      description: 'Valuable insights and tips from seniors',
      techHint: '$ cat alumni.txt'
    },
    {
      id: 'hotels',
      title: 'Hotels near IIIT-H',
      icon: MapPin,
      color: 'from-pink-500 to-rose-600',
      description: 'Accommodation options for visiting families',
      techHint: '$ curl localhost:3000/hotels',
    },
    {
      id: 'directions',
      title: 'How to reach campus',
      icon: Navigation,
      color: 'from-indigo-500 to-blue-600',
      description: 'Travel guides from major cities and airports',
      techHint: '$ cd /path/to/iiith'
    },
    {
      id: 'places',
      title: 'Places to Visit',
      icon: Camera,
      color: 'from-cyan-500 to-blue-500',
      description: 'Tourist attractions around Hyderabad',
      techHint: '$ ls -l /places/to/visit'
    },
    {
      id: 'brochure',
      title: 'Informal Brochure',
      icon: BookOpen,
      color: 'from-violet-500 to-purple-600',
      description: 'Unofficial guide to campus life and culture',
      techHint: '$ cat README.md'
    }
  ]

  const toggleTheme = () => setIsDark(!isDark)

  const openCategory = (category) => {
    setSelectedCategory(category)
  }

  const closeModal = () => {
    setSelectedCategory(null)
  }
  return (
    <div className="app">
      {/* Landing Section */}
      <Landing />
      
      {/* Life at IIIT-H Section */}
      <LifeAtIIITH />

      {/* Categories Section */}
      <Kit></Kit>
      
    </div>
  )
}

export default App
