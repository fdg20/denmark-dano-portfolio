'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 mb-4"
        >
          Crafting Unique Brand Identities
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
        >
          Branding that you need{' '}
          <span className="text-blue-600">Indeed</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
          >
            Get Started Now
          </button>
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium"
          >
            See Projects
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-col items-center"
        >
          <p className="text-sm text-gray-500 mb-2">Scroll down</p>
          <p className="text-sm text-gray-500 mb-4">to see projects</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

