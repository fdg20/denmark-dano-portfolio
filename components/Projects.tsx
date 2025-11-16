'use client'

import { motion } from 'framer-motion'

const projects = [
  { id: 1, title: 'Case Study', image: '/project-1.jpg' },
  { id: 2, title: 'Case Study', image: '/project-2.jpg' },
  { id: 3, title: 'Case Study', image: '/project-3.jpg' },
  { id: 4, title: 'Case Study', image: '/project-4.jpg' },
  { id: 5, title: 'Case Study', image: '/project-5.jpg' },
  { id: 6, title: 'Case Study', image: '/project-6.jpg' },
  { id: 7, title: 'Case Study', image: '/project-7.jpg' },
  { id: 8, title: 'Case Study', image: '/project-8.jpg' },
  { id: 9, title: 'Case Study', image: '/project-9.jpg' },
]

export default function Projects() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
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
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-4 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium">
            All Projects
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
          >
            Book a Free Call
          </button>
        </motion.div>
      </div>
    </section>
  )
}

