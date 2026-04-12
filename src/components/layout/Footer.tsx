import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import { siteConfig, navLinks } from '@config/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-hero border-t border-gold-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-heading font-extrabold text-2xl text-gold-gradient">
                PROXIMITY
              </span>
              <span className="block font-heading font-medium text-white/60 text-sm">
                Credit Repair
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Helping thousands of clients restore their credit, achieve financial freedom, and build the life they deserve.
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.social.facebook} className="text-white/40 hover:text-gold-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href={siteConfig.social.instagram} className="text-white/40 hover:text-gold-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href={siteConfig.social.linkedin} className="text-white/40 hover:text-gold-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-gold-light text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-5">Services</h3>
            <ul className="space-y-3">
              {['Credit Analysis', 'Dispute Filing', 'Score Monitoring', 'Debt Validation'].map(
                (service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-white/60 hover:text-gold-light text-sm transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold-primary mt-1 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="text-white/60 hover:text-gold-light text-sm transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold-primary mt-1 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-white/60 hover:text-gold-light text-sm transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-primary mt-1 shrink-0" />
                <span className="text-white/60 text-sm">{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-12 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-gold-light transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gold-light transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
