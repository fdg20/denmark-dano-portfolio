'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomeAbout() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            I&apos;m a seasoned web developer with 9 years of experience specializing in WordPress
            and Shopify development. Currently serving as one of the senior developers/support for Section Store
            Shopify app, supporting 1,000+ merchants with custom solutions and technical support.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
              <div className="text-gray-600 dark:text-gray-400">Stores Managed</div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">9+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1K+</div>
              <div className="text-gray-600 dark:text-gray-400">Merchants Supported</div>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
          >
            Learn More About Me
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

