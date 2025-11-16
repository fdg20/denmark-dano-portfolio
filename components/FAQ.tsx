'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'What services do you provide?',
    answer: 'I specialize in brand identity and package design, with experience in web design, UI/UX, and to create brand experiences.',
  },
  {
    question: 'How do I start working with you?',
    answer: 'You can start by booking a free call through the contact section. We\'ll discuss your project needs and how I can help bring your vision to life.',
  },
  {
    question: 'What design tools do you use?',
    answer: 'I primarily use Figma, Photoshop, and other industry-standard design tools to create high-quality designs.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Most projects are completed within 2-3 days, depending on the scope and complexity. I ensure timely delivery without compromising on quality.',
  },
  {
    question: 'Do you provide revisions?',
    answer: 'Yes, I provide revisions to ensure the final design meets your expectations and aligns with your vision.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'I work with various industries including eco-friendly brands, startups, and established businesses looking to elevate their brand identity.',
  },
  {
    question: 'Do you offer development services?',
    answer: 'I focus on design services. For development needs, I can recommend trusted partners.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Pricing varies based on project scope. Contact me for a customized quote that fits your budget and needs.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Yes, I can help redesign your existing website to better reflect your brand identity and improve user experience.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-gray-500 mb-2">FAQ&apos;S</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Answers</h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about my design process, services etc…
          </p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  className="text-xl"
                >
                  ↓
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 py-4 text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

