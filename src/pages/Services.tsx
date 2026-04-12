import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BarChart3, FileText, TrendingUp, Shield, CheckCircle, ArrowRight } from 'lucide-react'
import SectionWrapper from '@components/ui/SectionWrapper'
import Button from '@components/ui/Button'
import { services } from '@data/services'

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  FileText,
  TrendingUp,
  Shield,
}

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-16 bg-dark-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-glow" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-4 font-body">
            <Link to="/" className="hover:text-gold-light transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold-primary">Services</span>
          </div>
          <span className="section-label">What We Offer</span>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-white mb-6">
            Our <span className="text-gold-gradient">Services</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Comprehensive credit repair solutions designed to remove negative items, boost your score, and restore your financial opportunities.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-offwhite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon]
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-10 shadow-sm border border-gold-primary/10 hover:border-gold-primary/30 hover:shadow-lg hover:shadow-gold-primary/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gold-gradient rounded-2xl flex items-center justify-center shrink-0">
                      {Icon && <Icon size={26} className="text-white" />}
                    </div>
                    <div className="flex-1">
                      <h2 className="font-heading font-bold text-2xl text-dark-charcoal mb-3">{service.title}</h2>
                      <p className="text-muted leading-relaxed mb-6">{service.fullDescription}</p>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-3 text-dark-charcoal/80 text-sm">
                            <CheckCircle size={16} className="text-gold-primary shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Bottom CTA */}
      <section className="bg-dark-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-glow" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center relative z-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Talk to one of our credit experts — free, no obligation, no pressure.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Talk to an Expert <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
