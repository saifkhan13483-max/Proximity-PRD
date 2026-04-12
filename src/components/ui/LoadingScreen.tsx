import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="bg-near-black min-h-screen flex flex-col items-center justify-center gap-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="font-heading font-extrabold text-4xl gold-gradient-text">Proximity</p>
        <p className="font-body text-white text-sm mt-1">Credit Repair</p>
      </motion.div>

      <div className="flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-gold-primary"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  )
}
