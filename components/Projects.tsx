'use client'

import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'Case Study', image: '/project-1.jpg' },
  { id: 2, title: 'Case Study', image: '/project-2.jpg' },
  { id: 3, title: 'Case Study', image: '/project-3.jpg' },
  { id: 4, title: 'Case Study', image: '/project-4.jpg' },
  { id: 5, title: 'Case Study', image: '/project-5.jpg' },
  { id: 6, title: 'Case Study', image: '/project-6.jpg' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-gray-200 aspect-square cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <span className="text-gray-600 font-medium">View {project.title}</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="px-8 py-4 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium">
            All Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}

