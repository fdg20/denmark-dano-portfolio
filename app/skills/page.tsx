'use client'

import Navigation from '@/components/Navigation'
import SkillsPage from '@/components/SkillsPage'
import Footer from '@/components/Footer'

export default function Skills() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <SkillsPage />
      <Footer />
    </main>
  )
}

