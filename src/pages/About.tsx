import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Shield, Users, Zap, ArrowRight } from 'lucide-react'
import SectionWrapper from '@components/ui/SectionWrapper'
import Button from '@components/ui/Button'

const values = [
  {
    icon: Shield,
    title: 'Integrity First',
    description: 'We operate with complete transparency. No hidden fees, no false promises — only honest guidance and measurable results.',
  },
  {
    icon: Heart,
    title: 'Client-Centered',
    description: 'Every strategy we build is tailored to your unique credit situation. We treat every client\'s financial future as our own.',
  },
  {
    icon: Users,
    title: 'Proven Expertise',
    description: 'Our team of certified credit consultants brings deep knowledge of FCRA, FDCPA, and consumer protection law.',
  },
  {
    icon: Zap,
    title: 'Results-Driven',
    description: 'We are obsessed with outcomes. Our 95% success rate isn\'t marketing — it\'s the product of relentless execution.',
  },
]

const team = [
  { name: 'James Proximity', title: 'Founder & CEO', initials: 'JP' },
  { name: 'Angela Moore', title: 'Head of Credit Strategy', initials: 'AM' },
  { name: 'David Chen', title: 'Lead Credit Analyst', initials: 'DC' },
  { name: 'Tanya Williams', title: 'Client Success Director', initials: 'TW' },
]

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-dark-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-glow" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <span className="section-label">Our Story</span>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-white mb-6">
            About <span className="text-gold-gradient">Proximity</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Founded on the belief that everyone deserves access to financial opportunity — regardless of their credit past.
          </p>
        </div>
      </section>

      {/* Mission */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <span className="section-label">Our Mission</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark-charcoal mb-8">
              Bridging the Gap Between Where You Are and Where You Deserve to Be
            </h2>
            <blockquote className="border-l-4 border-gold-primary bg-offwhite rounded-r-2xl p-8 mb-8">
              <p className="font-body text-xl text-dark-charcoal/80 italic leading-relaxed">
                "We started Proximity because we watched families get denied mortgages, car loans, and apartment rentals — not because they were bad people, but because they had bad information on their credit reports. We exist to fix that."
              </p>
              <footer className="mt-4 text-gold-primary font-heading font-semibold">
                — James Proximity, Founder
              </footer>
            </blockquote>
            <p className="text-muted leading-relaxed text-lg">
              Since 2018, we have helped over 10,000 clients remove inaccurate negative items, boost their credit scores, and access the financial products they deserve. We combine deep legal expertise with personalized service to deliver results that change lives.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper className="bg-offwhite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="section-label">What Drives Us</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark-charcoal">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gold-primary/10 text-center"
              >
                <div className="w-14 h-14 bg-gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <value.icon size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-dark-charcoal mb-3">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper className="bg-dark-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="section-label">The Team</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
              Meet Our Experts
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center group"
              >
                <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-5 font-heading font-extrabold text-2xl text-white group-hover:scale-105 transition-transform duration-300">
                  {member.initials}
                </div>
                <h3 className="font-heading font-semibold text-white text-lg mb-1">{member.name}</h3>
                <p className="text-gold-primary text-sm font-body">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="font-heading font-bold text-4xl text-dark-charcoal mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Your free consultation is waiting. Let our team build your personalized credit repair roadmap — at no cost, no obligation.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Book Free Consultation <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </SectionWrapper>
    </>
  )
}
