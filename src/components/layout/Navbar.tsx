import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, siteConfig } from '@config/site'
import { cn } from '@lib/cn'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-dark-hero/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading font-extrabold text-xl text-gold-gradient">
            PROXIMITY
          </span>
          <span className="font-heading font-medium text-white text-sm hidden sm:block">
            Credit Repair
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'font-body text-sm font-medium transition-colors duration-200',
                location.pathname === link.path
                  ? 'text-gold-primary'
                  : 'text-white/80 hover:text-gold-light'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/contact"
            className="btn-primary text-sm px-6 py-3"
          >
            Free Consultation
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-hero/98 backdrop-blur-md border-t border-gold-primary/10"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'font-body font-medium py-2 transition-colors',
                    location.pathname === link.path
                      ? 'text-gold-primary'
                      : 'text-white/80'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-primary text-center mt-2">
                Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
