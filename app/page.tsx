'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Process from '@/components/Process'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Process />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
