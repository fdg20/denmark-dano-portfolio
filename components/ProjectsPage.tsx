'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'Farm View Market',
      description: 'Fresh produce marketplace with local farm integration, seasonal products, and community-focused e-commerce experience.',
      image: '/images/projects/farmview-screenshot.jpg',
      tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
      features: [
        'Local farm integration',
        'Seasonal product management',
        'Community marketplace',
        'Fresh produce focus',
        'Mobile optimization',
      ],
      results: [
        'Enhanced local shopping',
        'Better product visibility',
        'Community engagement',
        'Mobile-first design',
      ],
      link: 'https://www.farmviewmarket.com/',
      category: 'E-commerce',
    },
    {
      id: 2,
      title: 'SW Hacker',
      description: 'Tech-focused e-commerce platform with developer tools, software products, and technical solutions for professionals.',
      image: '/images/projects/swhacker-screenshot.jpg',
      tech: ['Shopify', 'Custom themes', 'Performance', 'Analytics'],
      features: [
        'Developer-focused design',
        'Technical product showcase',
        'Performance optimization',
        'Professional UX',
        'Code integration',
      ],
      results: [
        'Enhanced developer experience',
        'Better product presentation',
        'Improved performance',
        'Professional appearance',
      ],
      link: 'https://swhacker.com/',
      category: 'Tech',
    },
    {
      id: 3,
      title: 'Flavor & Fettle',
      description: 'Culinary and wellness e-commerce with recipe integration, meal planning, and health-focused product curation.',
      image: '/images/projects/flavorandfettle-screenshot.jpg',
      tech: ['Shopify Plus', 'Liquid', 'JavaScript', 'CSS3'],
      features: [
        'Recipe integration',
        'Meal planning tools',
        'Health-focused curation',
        'Culinary experience',
        'Wellness products',
      ],
      results: [
        'Enhanced culinary experience',
        'Better meal planning',
        'Health-focused shopping',
        'Recipe integration',
      ],
      link: 'https://flavorandfettle.com/',
      category: 'Food & Wellness',
    },
    {
      id: 4,
      title: 'Ruggable',
      description: 'Premium washable rug e-commerce platform with AR visualization, custom sizing, and room planning features.',
      image: '/images/projects/ruggable-screenshot.jpg',
      tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
      features: [
        'AR visualization',
        'Product configurator',
        'Room planner',
        'Custom sections',
        'Mobile optimization',
      ],
      results: [
        'Enhanced product visualization',
        'Better customer experience',
        'Improved conversion rates',
        'Mobile-first design',
      ],
      link: 'https://ruggable.com/',
      category: 'Home Decor',
    },
    {
      id: 5,
      title: 'Allbirds - Sustainable Footwear',
      description: 'Sustainable footwear store with custom product pages, subscription model, and AR visualization features.',
      image: '/images/projects/allbirds-screenshot.jpg',
      tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
      features: [
        'Custom product pages',
        'Subscription model',
        'AR visualization',
        'Sustainability focus',
        'Mobile-first design',
      ],
      results: [
        'Enhanced user experience',
        'Improved product visualization',
        'Better conversion rates',
        'Mobile optimization',
      ],
      link: 'https://www.allbirds.com/',
      category: 'Fashion',
    },
    {
      id: 6,
      title: 'Earth Beer Company',
      description: 'Craft beer e-commerce with brewery integration, seasonal brews, and sustainable brewing practices showcase.',
      image: '/images/projects/earthbeer-screenshot.jpg',
      tech: ['Shopify', 'Brewery Integration', 'Liquid', 'JavaScript'],
      features: [
        'Craft beer showcase',
        'Brewery integration',
        'Seasonal brews',
        'Sustainable brewing',
        'Beer education',
      ],
      results: [
        'Enhanced beer experience',
        'Better brewery showcase',
        'Sustainable brewing focus',
        'Craft beer education',
      ],
      link: 'https://www.earthbeercompany.com.au/',
      category: 'Beverage',
    },
    {
      id: 7,
      title: 'Brini Wines',
      description: 'Premium wine e-commerce with vineyard integration, wine education, and sophisticated wine shopping experience.',
      image: '/images/projects/briniwines-screenshot.jpg',
      tech: ['Shopify', 'Wine Integration', 'Liquid', 'JavaScript'],
      features: [
        'Premium wine showcase',
        'Vineyard integration',
        'Wine education',
        'Sophisticated shopping',
        'Wine pairing guides',
      ],
      results: [
        'Enhanced wine experience',
        'Better vineyard showcase',
        'Wine education focus',
        'Premium shopping experience',
      ],
      link: 'https://briniwines.com.au/',
      category: 'Wine & Spirits',
    },
    {
      id: 8,
      title: 'Boss Outdoor',
      description: 'Outdoor gear and adventure equipment with adventure focus, gear reviews, and outdoor lifestyle products.',
      image: '/images/projects/bossoutdoor-screenshot.jpg',
      tech: ['Shopify', 'Outdoor Integration', 'Liquid', 'JavaScript'],
      features: [
        'Outdoor gear showcase',
        'Adventure equipment',
        'Gear reviews',
        'Outdoor lifestyle',
        'Adventure focus',
      ],
      results: [
        'Enhanced outdoor experience',
        'Better gear presentation',
        'Adventure lifestyle',
        'Outdoor equipment focus',
      ],
      link: 'https://www.bossoutdoor.com.au/',
      category: 'Outdoor',
    },
    {
      id: 9,
      title: 'Kendamil - Baby Formula',
      description: 'Premium baby nutrition with 100+ stores managed, custom themes, and specialized baby product e-commerce.',
      image: '/images/projects/kendamil-screenshot.jpg',
      tech: ['Shopify', 'Baby Products', 'Liquid', 'JavaScript'],
      features: [
        '100+ stores managed',
        'Baby nutrition focus',
        'Custom themes',
        'Specialized products',
        'Parent education',
      ],
      results: [
        'Enhanced baby nutrition',
        'Better parent experience',
        'Specialized products',
        'Nutrition education',
      ],
      link: 'https://kendamil.com/',
      category: 'Baby & Family',
    },
  ]

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 dark:text-white">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing successful Shopify projects and e-commerce solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedProject(project.id)}
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
                <div className="absolute top-4 right-4 px-2 py-1 bg-blue-600 text-white text-xs rounded">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find((p) => p.id === selectedProject)
                  if (!project) return null

                  return (
                    <>
                      <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-start">
                        <div>
                          <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                            {project.category}
                          </div>
                          <h2 className="text-3xl font-bold dark:text-white mb-2">{project.title}</h2>
                          <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          ×
                        </button>
                      </div>

                      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative h-64 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                          {project.image ? (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                              style={{ height: '105%' }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-6xl">
                              🛍️
                            </div>
                          )}
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h3 className="font-bold mb-2 dark:text-white">Key Features</h3>
                            <ul className="space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                                  <span className="text-blue-500 mt-1">•</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-bold mb-2 dark:text-white">Results Achieved</h3>
                            <ul className="space-y-1">
                              {project.results.map((result, i) => (
                                <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                                  <span className="text-green-500 mt-1">•</span>
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-bold mb-2 dark:text-white">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded text-gray-700 dark:text-gray-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 border-t border-gray-200 dark:border-gray-700 text-center">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          View Live Project
                        </a>
                      </div>
                    </>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

