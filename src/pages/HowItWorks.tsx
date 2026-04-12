import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageSquare, Search, FileCheck, BarChart2, ArrowRight } from 'lucide-react'
import SectionWrapper from '@components/ui/SectionWrapper'
import Button from '@components/ui/Button'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Free Consultation',
    description:
      'We start with a free, no-obligation consultation where our certified credit specialists pull and review your credit reports from all three bureaus. We identify every negative item, assess the impact on your score, and answer all your questions.',
    details: ['No cost, no obligation', 'All three bureau review', 'Personalized assessment', 'Same-day scheduling available'],
  },
  {
    number: '02',
    icon: Search,
    title: 'Full Credit Review',
    description:
      'Our team conducts a deep analysis of your full credit history. We categorize every negative item — late payments, collections, charge-offs, inquiries — and build a prioritized repair strategy targeting the items with the greatest impact on your score.',
    details: ['Tri-bureau analysis', 'Score impact prioritization', 'Custom repair roadmap', 'Legal strategy selection'],
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Dispute & Repair',
    description:
      'We draft and submit legally compliant dispute letters to credit bureaus and creditors under the FCRA and FDCPA. We handle all follow-up correspondence, escalations, and goodwill deletion requests — you don\'t have to lift a finger.',
    details: ['FCRA-compliant disputes', 'Bureau & creditor disputes', 'Goodwill deletion requests', 'CFPB escalation if needed'],
  },
  {
    number: '04',
    icon: BarChart2,
    title: 'Monitor Your Progress',
    description:
      'We monitor your credit in real-time and keep you fully informed every step of the way. Monthly progress reports show every dispute filed, every response received, and every item removed. Watch your score climb.',
    details: ['24/7 credit monitoring', 'Monthly progress reports', 'Real-time score alerts', 'Ongoing support'],
  },
]

export default function HowItWorks() {
  return (
    <>
      <section className="pt-32 pb-16 bg-dark-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-glow" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <span className="section-label">The Process</span>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-white mb-6">
            How It <span className="text-gold-gradient">Works</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            A transparent, proven four-step process that takes you from damaged credit to financial freedom.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center font-heading font-extrabold text-white text-xl shadow-lg shadow-gold-primary/20">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 bg-offwhite rounded-xl flex items-center justify-center">
                      <step.icon size={22} className="text-gold-primary" />
                    </div>
                  </div>
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark-charcoal mb-5">{step.title}</h2>
                  <p className="text-muted leading-relaxed text-lg mb-8">{step.description}</p>
                  <ul className="grid grid-cols-2 gap-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-dark-charcoal/80 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-primary shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-64 h-64 bg-gold-gradient rounded-full flex items-center justify-center shadow-2xl shadow-gold-primary/20">
                    <step.icon size={80} className="text-white opacity-90" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <section className="bg-dark-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-glow" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center relative z-10">
          <h2 className="font-heading font-bold text-4xl text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Step one is free. Book your consultation today and get a full credit analysis at no cost.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Book Free Consultation <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
