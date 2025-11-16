'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Portfolio</div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              onClick={(e) => smoothScroll(e, 'services')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={(e) => smoothScroll(e, 'projects')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Projects
            </a>
            <a
              href="#testimonials"
              onClick={(e) => smoothScroll(e, 'testimonials')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, 'contact')}
              className="text-gray-700 hover:text-black transition-colors"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, 'contact')}
              className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Get Template
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

