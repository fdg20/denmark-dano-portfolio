'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Richards Johnson',
    role: 'Creative Director & Lead Designer',
    text: 'Working with Meily was a seamless experience. Her ability to merge creativity with functionality resulted in designs that not only looked stunning but also drove meaningful engagement. Highly recommended!',
    rating: 5.0,
  },
  {
    name: 'June Lee',
    role: 'CEO of GreenRoots',
    text: 'Meily\'s strategic approach to design brought our brand vision to life. The packaging and brand elements she developed elevated our aesthetic and aligned perfectly with our sustainability values.',
    rating: 5.0,
  },
  {
    name: 'Jona Carter',
    role: 'Founder of EcoLux',
    text: 'Every project Meily touches turns into a perfect blend of design and purpose. She crafted packaging that reflected our eco-friendly mission while making our products stand out on the shelves.',
    rating: 5.0,
  },
  {
    name: 'Sofia Toms',
    role: 'Founder at GreenK Studios',
    text: 'Meily\'s designs speak for themselves — bold, strategic, and impactful. She took the time to understand our brand, delivering packaging concepts that resonated with our target audience and boosted our product\'s visibility.',
    rating: 5.0,
  },
]

const stats = [
  { value: '180+', label: 'design projects completed.' },
  { value: '96%', label: 'Client satisfaction rate.' },
  { value: '15+', label: 'Years of experience' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-gray-500 mb-2">Reviews</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Reviews</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from clients who trusted my design expertise to elevate their brands successfully.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="text-yellow-500 font-semibold">{testimonial.rating}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

