import { motion } from 'framer-motion'
import { cn } from '@lib/cn'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  type = 'button',
  disabled = false,
  className,
}: ButtonProps) {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'font-heading font-bold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2',
        sizes[size],
        variant === 'primary' && 'bg-gold-gradient text-white shadow-lg hover:shadow-gold-primary/30 hover:shadow-xl',
        variant === 'secondary' && 'border-2 border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-white',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </motion.button>
  )
}
