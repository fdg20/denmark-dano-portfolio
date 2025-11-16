'use client'

import Navigation from '@/components/Navigation'
import AboutPage from '@/components/AboutPage'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <AboutPage />
      <Footer />
    </main>
  )
}

