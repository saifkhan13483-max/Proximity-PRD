import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import SectionWrapper from '@components/ui/SectionWrapper'
import Button from '@components/ui/Button'
import { faqs } from '@data/faqs'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gold-primary/10 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left bg-white hover:bg-offwhite transition-colors"
      >
        <span className="font-heading font-semibold text-dark-charcoal">{question}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-gold-primary"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 bg-white border-t border-gold-primary/10">
              <p className="text-muted leading-relaxed pt-4">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const categories = ['About Credit Repair', 'Working with Proximity']

  return (
    <>
      <section className="pt-32 pb-16 bg-dark-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-glow" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <span className="section-label">FAQ</span>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-white mb-6">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Everything you need to know about credit repair and working with Proximity.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-offwhite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {categories.map((category) => (
            <div key={category} className="mb-16">
              <h2 className="font-heading font-bold text-2xl text-dark-charcoal mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-gold-gradient rounded-full" />
                {category}
              </h2>
              <div className="space-y-3">
                {faqs
                  .filter((faq) => faq.category === category)
                  .map((faq) => (
                    <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
                  ))}
              </div>
            </div>
          ))}

          <div className="text-center bg-dark-hero rounded-2xl p-12 border border-gold-primary/20">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-white/60 mb-8">
              Our team is happy to answer anything — reach out for a free, no-obligation conversation.
            </p>
            <Link to="/contact">
              <Button>
                Contact Us <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
