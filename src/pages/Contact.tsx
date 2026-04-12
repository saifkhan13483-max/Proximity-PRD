import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react'
import Button from '@components/ui/Button'
import SectionWrapper from '@components/ui/SectionWrapper'
import { siteConfig } from '@config/site'

const contactSchema = z.object({
  name: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const serviceOptions = [
  'Credit Analysis',
  'Dispute Filing',
  'Score Monitoring',
  'Debt Validation',
  'General Inquiry',
  'Free Consultation',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form submitted:', data)
    setSubmitted(true)
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-dark-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-glow" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <span className="section-label">Get In Touch</span>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-white mb-6">
            Start Your Free <span className="text-gold-gradient">Consultation</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl">
            Fill out the form below and a credit specialist will reach out within 24 hours. No cost, no obligation.
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-offwhite">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading font-bold text-2xl text-dark-charcoal mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-gradient rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-muted text-xs mb-1 uppercase tracking-wide font-heading">Phone</p>
                      <a href={`tel:${siteConfig.phone}`} className="text-dark-charcoal font-body font-medium hover:text-gold-primary transition-colors">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-gradient rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-muted text-xs mb-1 uppercase tracking-wide font-heading">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-dark-charcoal font-body font-medium hover:text-gold-primary transition-colors">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-gradient rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-muted text-xs mb-1 uppercase tracking-wide font-heading">Address</p>
                      <p className="text-dark-charcoal font-body">{siteConfig.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-dark-hero rounded-2xl h-48 flex items-center justify-center border border-gold-primary/20">
                <div className="text-center">
                  <MapPin size={32} className="text-gold-primary mx-auto mb-2" />
                  <p className="text-white/50 text-sm">Miami, Florida</p>
                </div>
              </div>

              <div className="bg-dark-hero rounded-2xl p-6 border border-gold-primary/20">
                <h3 className="font-heading font-semibold text-white mb-2">Office Hours</h3>
                <div className="space-y-1 text-sm text-white/60">
                  <p>Monday – Friday: 9:00 AM – 7:00 PM EST</p>
                  <p>Saturday: 10:00 AM – 4:00 PM EST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gold-primary/10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                        className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle size={40} className="text-white" />
                      </motion.div>
                      <h3 className="font-heading font-bold text-2xl text-dark-charcoal mb-3">Message Sent!</h3>
                      <p className="text-muted leading-relaxed max-w-sm mx-auto">
                        Thank you for reaching out. A credit specialist will contact you within 24 business hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <h2 className="font-heading font-bold text-2xl text-dark-charcoal mb-6">
                        Request a Free Consultation
                      </h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-heading font-semibold text-dark-charcoal/80 mb-2">
                            Full Name *
                          </label>
                          <input
                            {...register('name')}
                            className={`w-full px-4 py-3 rounded-xl border bg-offwhite font-body text-dark-charcoal placeholder-muted outline-none transition-colors focus:border-gold-primary ${
                              errors.name ? 'border-red-400' : 'border-gold-primary/10 hover:border-gold-primary/30'
                            }`}
                            placeholder="John Smith"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-heading font-semibold text-dark-charcoal/80 mb-2">
                            Email Address *
                          </label>
                          <input
                            {...register('email')}
                            type="email"
                            className={`w-full px-4 py-3 rounded-xl border bg-offwhite font-body text-dark-charcoal placeholder-muted outline-none transition-colors focus:border-gold-primary ${
                              errors.email ? 'border-red-400' : 'border-gold-primary/10 hover:border-gold-primary/30'
                            }`}
                            placeholder="john@example.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-heading font-semibold text-dark-charcoal/80 mb-2">
                            Phone Number *
                          </label>
                          <input
                            {...register('phone')}
                            type="tel"
                            className={`w-full px-4 py-3 rounded-xl border bg-offwhite font-body text-dark-charcoal placeholder-muted outline-none transition-colors focus:border-gold-primary ${
                              errors.phone ? 'border-red-400' : 'border-gold-primary/10 hover:border-gold-primary/30'
                            }`}
                            placeholder="(555) 000-0000"
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-heading font-semibold text-dark-charcoal/80 mb-2">
                            Service of Interest *
                          </label>
                          <select
                            {...register('service')}
                            className={`w-full px-4 py-3 rounded-xl border bg-offwhite font-body text-dark-charcoal outline-none transition-colors focus:border-gold-primary ${
                              errors.service ? 'border-red-400' : 'border-gold-primary/10 hover:border-gold-primary/30'
                            }`}
                          >
                            <option value="">Select a service</option>
                            {serviceOptions.map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                          {errors.service && (
                            <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-heading font-semibold text-dark-charcoal/80 mb-2">
                          Message *
                        </label>
                        <textarea
                          {...register('message')}
                          rows={5}
                          className={`w-full px-4 py-3 rounded-xl border bg-offwhite font-body text-dark-charcoal placeholder-muted outline-none transition-colors focus:border-gold-primary resize-none ${
                            errors.message ? 'border-red-400' : 'border-gold-primary/10 hover:border-gold-primary/30'
                          }`}
                          placeholder="Tell us about your credit situation and what you'd like to achieve..."
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>

                      <p className="text-muted text-xs text-center">
                        By submitting this form, you agree to be contacted about your credit repair inquiry. No spam, ever.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
