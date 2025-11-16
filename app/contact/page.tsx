'use client'

import Navigation from '@/components/Navigation'
import ContactPage from '@/components/ContactPage'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <ContactPage />
      <Footer />
    </main>
  )
}

