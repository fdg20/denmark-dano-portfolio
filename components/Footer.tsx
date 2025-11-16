'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div>
            <a
              href="mailto:kramdano@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              kramdano@gmail.com
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            &copy; 2017 Denmark Dano. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link
              href="/skills"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
