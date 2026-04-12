import { motion } from 'framer-motion'
import { Star, ArrowRight, Play } from 'lucide-react'
import SectionWrapper from '@components/ui/SectionWrapper'
import Button from '@components/ui/Button'
import { testimonials } from '@data/testimonials'

const badges = [
  { label: 'BBB Accredited', rating: 'A+' },
  { label: 'Google Reviews', rating: '4.9★' },
  { label: 'Trustpilot', rating: 'Excellent' },
  { label: 'NACCC Member', rating: 'Certified' },
]

export default function Testimonials() {
  return (
    <>
      <section className="pt-32 pb-16 bg-near-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-glow" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <span className="section-label">Client Stories</span>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-white mb-6">
            Real Results, Real <span className="gold-gradient-text">People</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Over 10,000 clients have transformed their credit and their lives with Proximity. Here are their stories.
          </p>
        </div>
      </section>

      <div className="bg-card-black border-y border-gold-primary/10 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {badges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-1">
                <span className="font-heading font-bold text-gold-primary text-lg">{badge.rating}</span>
                <span className="text-white/50 text-sm">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-offwhite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-near-black rounded-card aspect-video max-w-3xl mx-auto mb-16 flex items-center justify-center relative overflow-hidden border border-gold-primary/20 cursor-pointer group"
          >
            <div className="absolute inset-0 bg-gold-glow" />
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold-lg group-hover:scale-110 transition-transform duration-300">
                <Play size={32} className="text-white ml-1" />
              </div>
              <p className="text-white font-heading font-semibold text-lg">Watch Client Testimonials</p>
              <p className="text-white/50 text-sm mt-1">Video coming soon</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-card p-8 shadow-sm border border-gold-primary/10 relative"
              >
                <div className="absolute top-6 right-6 text-6xl font-heading text-gold-primary/10 font-extrabold leading-none">"</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={15} className="text-gold-primary fill-gold-primary" />
                  ))}
                </div>
                <p className="text-body-text/80 text-sm leading-relaxed mb-6 italic relative z-10">"{t.text}"</p>
                <div className="flex justify-between items-center border-t border-gold-primary/10 pt-4">
                  <div>
                    <p className="font-heading font-semibold text-body-text text-sm">{t.clientName}</p>
                    <p className="text-muted-text text-xs">{t.city}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-offwhite rounded-pill px-3 py-1.5">
                    <span className="text-red-500 font-heading font-bold text-xs">{t.beforeScore}</span>
                    <ArrowRight size={10} className="text-gold-primary" />
                    <span className="text-green-500 font-heading font-bold text-xs">{t.afterScore}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <section className="bg-near-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-glow" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center relative z-10">
          <h2 className="font-heading font-bold text-4xl text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Join thousands of clients who transformed their credit with Proximity.
          </p>
          <Button href="/contact" size="lg">
            Get Started Free <ArrowRight size={20} />
          </Button>
        </div>
      </section>
    </>
  )
}
