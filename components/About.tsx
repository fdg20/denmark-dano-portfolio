'use client'

import { motion } from 'framer-motion'

const skills = [
  'Product Design',
  'Brand Identity Design',
  'UX Design',
  'Branding',
  'Packaging Design',
  'Figma',
  'Photoshop',
]

const experience = [
  {
    role: 'Freelance',
    company: 'GreenLeaf Co',
    period: 'Currently',
    description: 'Brand Designer',
  },
  {
    role: 'Brand Designer',
    company: 'UrbanFit Studio',
    period: '2023-24',
  },
  {
    role: 'Package Designer',
    company: 'GreenK Studio',
    period: '2020-22',
  },
]

const recentWorks = [
  { id: 1, title: 'Case Study', image: '/project-1.jpg' },
  { id: 2, title: 'Case Study', image: '/project-2.jpg' },
  { id: 3, title: 'Case Study', image: '/project-3.jpg' },
  { id: 4, title: 'Case Study', image: '/project-4.jpg' },
  { id: 5, title: 'Case Study', image: '/project-5.jpg' },
]

export default function About() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Meily</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I&apos;m Meily, a passionate Brand Identity & Package Designer based in tokyo. I specialize in crafting bold visual identities and packaging that captivate and inspire, blending creativity with strategy to elevate brands.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-white rounded-full text-sm border border-gray-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                {exp.description && (
                  <p className="text-gray-600 text-sm mt-2">{exp.description}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8">Recent Works</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {recentWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-gray-200 aspect-square cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-sm">View {work.title}</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium"
            >
              See Projects
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
            >
              Book a Free Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

