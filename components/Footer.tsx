'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-400 mb-4">Available For Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Curious about what we can create together? Let's bring something extraordinary to life!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-medium"
            >
              Book a Free Call
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <a href="mailto:hello@framebase.design" className="text-gray-400 hover:text-white transition-colors">
              hello@framebase.design
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            Design In Framer
          </div>
          <div className="text-gray-400 text-sm">
            All rights reserved, ©2025
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

