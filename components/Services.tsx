'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Brand Identity',
    description: 'Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems — ensuring every touchpoint reflects your brand\'s essence.',
  },
  {
    title: 'Package Design',
    description: 'Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview of how your packaging and visuals will stand out in the real world.',
  },
  {
    title: 'Brand Design',
    description: 'Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers — turning first impressions into lasting brand loyalty.',
  },
  {
    title: 'Mockup Design',
    description: 'Tailored design mockups that align perfectly with your brand\'s aesthetic — because every detail matters when showcasing your product\'s true potential.',
  },
]

const additionalServices = [
  'Slide Decks',
  'Copywriting',
  'Brand Graphics',
  'Brand Migration',
  'Package Design',
  'Branding',
  'Optimization',
  'Brand Landing Pages',
  'Social Media',
  'Icons',
  'Brand Visibility',
  'Brand Integrations',
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-gray-500 mb-2">Design services</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Helping businesses standout with brand identity packaging that captivates and converts effectively.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {additionalServices.map((service, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white rounded-full text-sm border border-gray-200"
            >
              {service}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

