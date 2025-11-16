'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import HomeSkills from '@/components/HomeSkills'
import HomeProjects from '@/components/HomeProjects'
import HomeAbout from '@/components/HomeAbout'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <Hero />
      <HomeSkills />
      <HomeProjects />
      <HomeAbout />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
