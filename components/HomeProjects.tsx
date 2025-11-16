'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeProjects() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Store Redesign',
      description: 'Complete Shopify store redesign resulting in 40% increase in conversion rates',
      tech: ['Shopify', 'Liquid', 'JavaScript'],
      image: '/images/projects/farmview-screenshot.jpg',
    },
    {
      id: 2,
      title: 'Mobile-First Theme',
      description: 'Custom mobile-optimized theme with advanced filtering and search',
      tech: ['Shopify', 'CSS3', 'JavaScript'],
      image: '/images/projects/swhacker-screenshot.jpg',
    },
    {
      id: 3,
      title: 'Performance Optimization',
      description: 'Store speed optimization achieving 95+ PageSpeed score',
      tech: ['Shopify', 'Performance', 'SEO'],
      image: '/images/projects/flavorandfettle-screenshot.jpg',
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Recent Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    style={{ height: '105%' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl">
                    🛍️
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

