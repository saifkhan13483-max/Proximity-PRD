import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '@components/layout/Navbar'
import Footer from '@components/layout/Footer'

const Home = lazy(() => import('@pages/Home'))
const About = lazy(() => import('@pages/About'))
const Services = lazy(() => import('@pages/Services'))
const HowItWorks = lazy(() => import('@pages/HowItWorks'))
const Testimonials = lazy(() => import('@pages/Testimonials'))
const FAQ = lazy(() => import('@pages/FAQ'))
const Contact = lazy(() => import('@pages/Contact'))

function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-dark-hero flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-gold-primary border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
