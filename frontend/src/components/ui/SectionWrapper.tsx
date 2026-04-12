import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { cn } from '@lib/cn'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('py-24', className)}
    >
      {children}
    </motion.section>
  )
}
