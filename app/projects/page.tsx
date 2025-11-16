'use client'

import Navigation from '@/components/Navigation'
import ProjectsPage from '@/components/ProjectsPage'
import Footer from '@/components/Footer'

export default function Projects() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <ProjectsPage />
      <Footer />
    </main>
  )
}

