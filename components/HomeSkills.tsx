'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomeSkills() {
  const skills = [
    {
      icon: '🛒',
      title: 'Shopify Development',
      description: '5 years experience with custom themes, apps, and store optimization',
    },
    {
      icon: '💻',
      title: 'WordPress Development',
      description: '4 years experience with custom themes and plugin development',
    },
    {
      icon: '⚡',
      title: 'App Development',
      description: 'One of the senior developers/support for Section Store app with 1,000+ active merchants',
    },
    {
      icon: '🔧',
      title: 'Technical Support',
      description: 'Handling 1,000+ merchant requests and troubleshooting',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Creating intuitive user experiences and modern interfaces',
    },
    {
      icon: '📈',
      title: 'Performance Optimization',
      description: 'Speed optimization and Core Web Vitals improvement',
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Skills & Expertise</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 text-center"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/skills"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
          >
            View All Skills
          </Link>
        </div>
      </div>
    </section>
  )
}

