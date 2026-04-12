import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import SectionWrapper from '@components/ui/SectionWrapper'
import Button from '@components/ui/Button'
import { faqs } from '@data/faqs'
import type { FAQItem } from '@/types/index'

function FAQAccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gold-primary/10 rounded-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left bg-white hover:bg-offwhite transition-colors"
      >
        <span className="font-heading font-semibold text-body-text">{question}</span>
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
              <p className="text-muted-text leading-relaxed pt-4">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const categoryConfig: { key: FAQItem['category']; label: string }[] = [
  { key: 'about-credit-repair', label: 'About Credit Repair' },
  { key: 'working-with-proximity', label: 'Working with Proximity' },
]

export default function FAQ() {
  return (
    <>
      <section className="pt-32 pb-16 bg-near-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-glow" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <span className="section-label">FAQ</span>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-white mb-6">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Everything you need to know about credit repair and working with Proximity.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-offwhite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {categoryConfig.map(({ key, label }) => (
            <div key={key} className="mb-16">
              <h2 className="font-heading font-bold text-2xl text-body-text mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-gold-gradient rounded-full" />
                {label}
              </h2>
              <div className="space-y-3">
                {faqs
                  .filter((faq) => faq.category === key)
                  .map((faq) => (
                    <FAQAccordionItem key={faq.id} question={faq.question} answer={faq.answer} />
                  ))}
              </div>
            </div>
          ))}

          <div className="text-center bg-near-black rounded-card p-12 border border-gold-primary/20">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">Still have questions?</h3>
            <p className="text-white/60 mb-8">
              Our team is happy to answer anything — reach out for a free, no-obligation conversation.
            </p>
            <Button href="/contact">
              Contact Us <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
