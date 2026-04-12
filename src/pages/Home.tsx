import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { ArrowRight, ChevronDown, Star, Users, TrendingUp, DollarSign, BarChart3, FileText, Shield, CheckCircle } from 'lucide-react'
import SectionWrapper from '@components/ui/SectionWrapper'
import Button from '@components/ui/Button'
import { services } from '@data/services'
import { testimonials } from '@data/testimonials'

const stats = [
  { icon: Users, value: 10000, suffix: '+', label: 'Clients Helped' },
  { icon: TrendingUp, value: 95, suffix: '%', label: 'Success Rate' },
  { icon: DollarSign, value: 2, suffix: 'M+', label: 'In Debt Resolved', prefix: '$' },
]

const steps = [
  { number: '01', title: 'Free Consultation', desc: 'We review your credit reports and identify every item impacting your score.' },
  { number: '02', title: 'Full Credit Review', desc: 'Our experts analyze all three bureaus and build your personalized repair plan.' },
  { number: '03', title: 'Dispute & Repair', desc: 'We file legally compliant disputes and negotiate on your behalf.' },
  { number: '04', title: 'Monitor Progress', desc: 'Track your score improvements with real-time monitoring and monthly reports.' },
]

function StatCard({ icon: Icon, value, suffix, prefix, label }: { icon: React.ElementType, value: number, suffix: string, prefix?: string, label: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })
  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <Icon className="text-gold-primary mb-1" size={32} />
      <div className="font-heading font-extrabold text-4xl text-white">
        {prefix}
        {inView && <CountUp end={value} duration={2.5} separator="," />}
        {suffix}
      </div>
      <p className="text-white/60 text-sm font-body">{label}</p>
    </div>
  )
}

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  FileText,
  TrendingUp,
  Shield,
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen bg-dark-hero flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-glow" />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold-primary/40"
            style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [-10, 10, -10], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-32 pb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="section-label">Proximity Credit Repair</span>
            <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Restore Your Credit.{' '}
              <span className="text-gold-gradient">Reclaim Your Life.</span>
            </h1>
            <p className="font-body text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">
              Expert credit repair that removes negative items, boosts your score, and opens doors to better rates, loans, and financial opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg">
                  Start Free Consultation <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="secondary" size="lg">
                  How It Works
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <div className="relative z-10 border-t border-gold-primary/20 bg-dark-card/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold-primary"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </section>

      {/* Services Preview */}
      <SectionWrapper className="bg-offwhite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="section-label">What We Do</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark-charcoal">
              Comprehensive Credit Repair Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon]
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gold-primary/10 hover:border-gold-primary/30 hover:shadow-lg hover:shadow-gold-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center mb-5">
                    {Icon && <Icon size={22} className="text-white" />}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-dark-charcoal mb-3">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{service.shortDescription}</p>
                  <Link to="/services" className="text-gold-primary text-sm font-heading font-semibold hover:text-gold-dark transition-colors flex items-center gap-1">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* How It Works Strip */}
      <SectionWrapper className="bg-dark-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="section-label">The Process</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-5 font-heading font-extrabold text-white text-lg shadow-lg shadow-gold-primary/20">
                  {step.number}
                </div>
                <h3 className="font-heading font-semibold text-white text-lg mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="section-label">Client Results</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark-charcoal">
              Real Stories, Real Results
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-offwhite rounded-2xl p-8 border border-gold-primary/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="text-gold-primary fill-gold-primary" />
                  ))}
                </div>
                <p className="text-dark-charcoal/80 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-heading font-semibold text-dark-charcoal">{t.name}</p>
                    <p className="text-muted text-xs">{t.city}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted">Score</span>
                      <span className="text-red-500 font-bold font-heading text-sm">{t.beforeScore}</span>
                      <ArrowRight size={12} className="text-gold-primary" />
                      <span className="text-green-500 font-bold font-heading text-sm">{t.afterScore}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="secondary">See All Client Stories</Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section className="bg-dark-hero py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-glow" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-gold-gradient mb-6">
              Your Better Credit Score Starts Today
            </h2>
            <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of clients who restored their credit and achieved financial freedom with Proximity.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Get Your Free Consultation <ArrowRight size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
