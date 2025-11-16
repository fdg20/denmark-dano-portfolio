'use client'

import { motion } from 'framer-motion'

export default function SkillsPage() {
  const coreSkills = [
    {
      title: 'Shopify Development',
      icon: '🛒',
      description: '5 years experience with 100+ stores managed',
      skills: [
        'Custom theme development from scratch',
        'Liquid templating & custom sectioning',
        'API integration & app development',
        'Store migration (1.0 to 2.0)',
        'Performance optimization',
      ],
      level: 95,
    },
    {
      title: 'Section Store App Development',
      icon: '⚙️',
      description: 'One of the senior developers/support for Shopify app with 1,000+ active merchants',
      skills: [
        'One of the senior developers/support for Section Store Shopify app',
        'Support for 1,000+ active merchants',
        'Technical troubleshooting and issue resolution',
        'App feature development and maintenance',
        'Team collaboration and project management',
      ],
      level: 98,
    },
    {
      title: 'WordPress Development',
      icon: '💻',
      description: '4 years experience with custom themes and plugins',
      skills: [
        'Custom theme development',
        'Plugin development & customization',
        'PHP & MySQL integration',
        'Responsive design',
        'Performance optimization',
      ],
      level: 90,
    },
    {
      title: 'Performance Optimization',
      icon: '⚡',
      description: 'Speed and conversion optimization expertise',
      skills: [
        'Page speed optimization',
        'SEO best practices',
        'Conversion rate optimization',
        'Core Web Vitals',
        'Analytics & tracking',
      ],
      level: 92,
    },
    {
      title: 'Custom Solutions',
      icon: '🔧',
      description: 'API integrations and custom functionality',
      skills: [
        'Third-party API integrations',
        'Custom app development',
        'Database design',
        'Automation workflows',
        'Payment gateway integration',
      ],
      level: 88,
    },
  ]

  const additionalSkills = {
    'Design & UX': ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Wireframing', 'Prototyping'],
    'Backend & Database': ['Node.js', 'PHP', 'MySQL', 'MongoDB', 'REST APIs'],
    'Tools & Platforms': ['Git & GitHub', 'VS Code', 'Shopify CLI', 'Webpack', 'Docker'],
    'E-commerce Platforms': ['Shopify Plus', 'WooCommerce', 'Magento', 'BigCommerce', 'Shopify Markets'],
  }

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 dark:text-white">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive technical skills and professional expertise in e-commerce development
          </p>
        </motion.div>

        {/* Core Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Core Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{skill.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">{skill.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {skill.skills.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Expert</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Additional Skills */}
        <section>
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Additional Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(additionalSkills).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-bold mb-4 dark:text-white">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

