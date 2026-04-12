import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Shield, TrendingUp, FileText, BarChart2, LogOut,
  CheckCircle, Clock, Star, ArrowRight, Bell, Zap, CreditCard,
  BookOpen, Handshake, ShieldCheck, CalendarDays, Mail, Award, ChevronRight,
} from 'lucide-react'
import { useAuthStore } from '@store/authStore'
import { plans } from '@data/plans'
import ProximityLogo from '@components/ui/ProximityLogo'

const ALL_ACTIONS = {
  creditAnalysis: { label: 'Credit Analysis', desc: 'Full 3-bureau report review', icon: BarChart2, href: '/services#credit-analysis' },
  disputeFiling: { label: 'File a Dispute', desc: 'Remove inaccurate items', icon: FileText, href: '/services#dispute-filing' },
  scoreMonitoring: { label: 'Score Monitoring', desc: 'Real-time credit alerts', icon: TrendingUp, href: '/services#score-monitoring' },
  debtValidation: { label: 'Debt Validation', desc: 'Challenge unverifiable debts', icon: Shield, href: '/services#debt-validation' },
  educationalResources: { label: 'Educational Resources', desc: 'Guides, tools & tutorials', icon: BookOpen, href: '/services#educational-resources' },
  creditorNegotiation: { label: 'Creditor Negotiation', desc: 'Pay-for-delete & goodwill letters', icon: Handshake, href: '/services#creditor-negotiation' },
  identityProtection: { label: 'Identity Protection', desc: 'Dark web & fraud monitoring', icon: ShieldCheck, href: '/services#identity-protection' },
  bookConsultation: { label: 'Book Consultation', desc: 'Speak with an expert', icon: Star, href: '/contact' },
  advisorSession: { label: 'Book Advisor Session', desc: 'Weekly 1-on-1 strategy call', icon: CalendarDays, href: '/contact' },
}

function getPlanActions(plan: string) {
  const { creditAnalysis, disputeFiling, scoreMonitoring, debtValidation,
    educationalResources, creditorNegotiation, identityProtection,
    bookConsultation, advisorSession } = ALL_ACTIONS
  if (plan === 'VIP Plan') return [disputeFiling, creditorNegotiation, identityProtection, advisorSession]
  if (plan === 'Premium Plan') return [disputeFiling, creditorNegotiation, educationalResources, advisorSession]
  if (plan === 'Standard Plan') return [scoreMonitoring, debtValidation, educationalResources, bookConsultation]
  if (plan === 'Basic Plan') return [creditAnalysis, disputeFiling, bookConsultation, scoreMonitoring]
  return [creditAnalysis, disputeFiling, scoreMonitoring, bookConsultation]
}

const PLAN_BENEFITS: Record<string, string[]> = {
  'Free Consultation': ['Initial credit report review', 'One-time consultation session'],
  'Basic Plan': ['Up to 5 disputes/month', 'Monthly progress report', 'Email support'],
  'Standard Plan': ['Unlimited dispute letters', 'Credit score monitoring', 'Phone & live chat support'],
  'Premium Plan': ['Dedicated credit advisor', 'Weekly strategy sessions', 'Priority dispute processing'],
  'VIP Plan': ['Unlimited advisor access', 'Identity theft protection', '72-hour dispute processing', 'Satisfaction guarantee'],
}

const PLAN_TIER_COLORS: Record<string, string> = {
  'Free Consultation': 'text-white/50 border-white/20 bg-white/5',
  'Basic Plan': 'text-blue-400 border-blue-400/30 bg-blue-400/10',
  'Standard Plan': 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  'Premium Plan': 'text-gold-primary border-gold-primary/30 bg-gold-primary/10',
  'VIP Plan': 'text-gold-primary border-gold-primary/50 bg-gold-primary/15',
}

function getScoreLabel(score: number | null) {
  if (!score) return { label: 'Not linked', color: '#ffffff30' }
  if (score >= 800) return { label: 'Exceptional', color: '#10b981' }
  if (score >= 740) return { label: 'Very Good', color: '#22c55e' }
  if (score >= 670) return { label: 'Good', color: '#eab308' }
  if (score >= 580) return { label: 'Fair', color: '#f97316' }
  return { label: 'Poor', color: '#ef4444' }
}

function CreditScoreRing({ score }: { score: number | null }) {
  const size = 120
  const strokeWidth = 9
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  const min = 300
  const max = 850
  const capped = score ? Math.min(Math.max(score, min), max) : min
  const progress = score ? (capped - min) / (max - min) : 0
  const dashOffset = circumference * (1 - progress * 0.75)
  const rotation = -225
  const { label, color } = getScoreLabel(score)

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="rotate-0">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#ffffff08"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
            strokeDashoffset={0}
            transform={`rotate(${rotation} ${size / 2} ${size / 2})`}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
            initial={{ strokeDashoffset: circumference * 0.25 + circumference * 0.75 }}
            animate={{ strokeDashoffset: dashOffset }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            transform={`rotate(${rotation} ${size / 2} ${size / 2})`}
            style={{ filter: score ? `drop-shadow(0 0 6px ${color}88)` : 'none' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-heading font-black text-2xl text-white leading-none">
            {score ?? '—'}
          </span>
          <span className="font-body text-[10px] text-white/40 mt-0.5">FICO Score</span>
        </div>
      </div>
      <span className="font-body text-xs font-semibold mt-1" style={{ color }}>
        {label}
      </span>
    </div>
  )
}

function getInitials(name: string) {
  return name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()
}

function getDaysActive(createdAt?: string) {
  if (!createdAt) return 1
  const diff = Date.now() - new Date(createdAt).getTime()
  return Math.max(1, Math.floor(diff / (1000 * 60 * 60 * 24)))
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay, ease: 'easeOut' },
  }
}

export default function Dashboard() {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/', { replace: true })
  }

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : 'Recently'

  const daysActive = getDaysActive(user?.createdAt)
  const currentPlan = user?.plan || 'Free Consultation'
  const benefits = PLAN_BENEFITS[currentPlan] || []
  const isUpgradeable = currentPlan !== 'VIP Plan'
  const quickActions = getPlanActions(currentPlan)
  const planTierClass = PLAN_TIER_COLORS[currentPlan] || PLAN_TIER_COLORS['Free Consultation']

  const matchedPlan = plans.find((p) => `${p.name} Plan` === currentPlan)
  const nextPlan = matchedPlan
    ? plans[Math.min(plans.indexOf(matchedPlan) + 1, plans.length - 1)]
    : plans[0]

  const creditScore = user?.creditScore ?? null
  const initials = user?.name ? getInitials(user.name) : 'U'
  const firstName = user?.name?.split(' ')[0] || 'Client'

  const statCards = [
    {
      label: 'Disputes Filed',
      value: '0',
      sub: 'No disputes yet',
      icon: FileText,
      color: 'from-blue-500/10 to-blue-600/5',
      iconColor: 'text-blue-400',
    },
    {
      label: 'Items Resolved',
      value: '0',
      sub: 'Keep going!',
      icon: CheckCircle,
      color: 'from-emerald-500/10 to-emerald-600/5',
      iconColor: 'text-emerald-400',
    },
    {
      label: 'Days Active',
      value: String(daysActive),
      sub: `Since ${memberSince}`,
      icon: Clock,
      color: 'from-purple-500/10 to-purple-600/5',
      iconColor: 'text-purple-400',
    },
  ]

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Top Nav */}
      <div className="border-b border-gold-primary/15 bg-[#0d0d0d]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ProximityLogo size={34} />
            <div className="hidden sm:block">
              <p className="font-heading font-bold text-white text-sm leading-none">Proximity</p>
              <p className="font-body text-white/35 text-[10px] tracking-widest uppercase">Client Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white/70 hover:bg-white/10 transition-all">
              <Bell size={15} />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white font-body text-sm transition-all duration-200"
            >
              <LogOut size={14} />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-5xl">

        {/* ── Profile Card ─────────────────────────────────────── */}
        <motion.div {...fadeUp(0)} className="mb-6">
          <div className="relative overflow-hidden bg-[#111111] border border-gold-primary/20 rounded-2xl">
            {/* Gold ambient glow top-right */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gold-primary/5 blur-3xl pointer-events-none" />

            <div className="relative p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">

                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-gold-md">
                    <span className="font-heading font-black text-2xl text-white tracking-wide">
                      {initials}
                    </span>
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#111111] flex items-center justify-center">
                    <CheckCircle size={11} className="text-white" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h2 className="font-heading text-2xl font-black text-white">
                      {user?.name || 'Client'}
                    </h2>
                    <span className={`inline-flex items-center gap-1.5 border rounded-full px-2.5 py-0.5 font-body text-[11px] font-bold tracking-wide ${planTierClass}`}>
                      <Award size={10} />
                      {currentPlan}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 mt-2">
                    <div className="flex items-center gap-1.5 text-white/40">
                      <Mail size={12} />
                      <span className="font-body text-sm truncate">{user?.email}</span>
                    </div>
                    <div className="hidden sm:block w-px h-3 bg-white/10" />
                    <div className="flex items-center gap-1.5 text-white/30">
                      <Clock size={12} />
                      <span className="font-body text-xs">Member since {memberSince}</span>
                    </div>
                    <div className="hidden sm:block w-px h-3 bg-white/10" />
                    <div className="flex items-center gap-1.5 text-white/30">
                      <Shield size={12} />
                      <span className="font-body text-xs capitalize">
                        {user?.role === 'admin' ? 'Administrator' : 'Client Account'}
                      </span>
                    </div>
                  </div>

                  {/* Plan benefits preview */}
                  {benefits.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {benefits.slice(0, 3).map((b) => (
                        <span key={b} className="inline-flex items-center gap-1 bg-white/4 border border-white/8 rounded-full px-2.5 py-0.5 font-body text-[11px] text-white/50">
                          <CheckCircle size={9} className="text-emerald-400" /> {b}
                        </span>
                      ))}
                      {benefits.length > 3 && (
                        <span className="inline-flex items-center gap-1 bg-white/4 border border-white/8 rounded-full px-2.5 py-0.5 font-body text-[11px] text-white/40">
                          +{benefits.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Credit Score Ring */}
                <div className="flex-shrink-0 sm:border-l sm:border-white/8 sm:pl-6">
                  <CreditScoreRing score={creditScore} />
                </div>
              </div>

              {/* Upgrade Banner */}
              {isUpgradeable && nextPlan && currentPlan !== 'Free Consultation' && (
                <div className="mt-6 pt-5 border-t border-white/6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <p className="font-body text-white/50 text-xs">
                      <span className="text-gold-primary font-semibold">Upgrade available</span> — unlock more features with {nextPlan.name} Plan
                    </p>
                  </div>
                  <Link
                    to="/pricing"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gold-gradient text-white font-heading font-bold text-xs shadow-gold-sm hover:shadow-gold-md transition-all whitespace-nowrap"
                  >
                    <Zap size={11} /> Upgrade to {nextPlan.name}
                  </Link>
                </div>
              )}

              {/* Free plan CTA */}
              {currentPlan === 'Free Consultation' && (
                <div className="mt-5 pt-5 border-t border-white/6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <p className="font-body text-white/40 text-xs">
                    You're on the free plan. Choose a plan to start your credit repair journey.
                  </p>
                  <Link
                    to="/pricing"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gold-gradient text-white font-heading font-bold text-xs shadow-gold-sm hover:shadow-gold-md transition-all whitespace-nowrap"
                  >
                    <Zap size={11} /> View Plans
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* ── Stats Row ─────────────────────────────────────────── */}
        <motion.div {...fadeUp(0.1)} className="grid grid-cols-3 gap-4 mb-6">
          {statCards.map((card) => (
            <div
              key={card.label}
              className={`bg-gradient-to-br ${card.color} border border-white/8 rounded-2xl p-5`}
            >
              <div className="mb-3">
                <card.icon size={18} className={card.iconColor} />
              </div>
              <p className="font-heading text-2xl font-black text-white">{card.value}</p>
              <p className="font-body text-white/60 text-xs font-semibold mt-0.5">{card.label}</p>
              <p className="font-body text-white/30 text-[11px] mt-1">{card.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Plan Card ─────────────────────────────────────────── */}
        <motion.div {...fadeUp(0.16)} className="mb-6">
          <div className="bg-[#111111] border border-white/8 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gold-primary/10 flex items-center justify-center">
                  <CreditCard size={15} className="text-gold-primary" />
                </div>
                <p className="font-heading font-bold text-white text-sm">
                  Current Plan: <span className="text-gold-primary">{currentPlan}</span>
                </p>
              </div>
              <Link
                to="/pricing"
                className="flex items-center gap-1 text-white/30 hover:text-gold-primary font-body text-xs transition-colors"
              >
                View All <ChevronRight size={12} />
              </Link>
            </div>

            {benefits.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={9} className="text-emerald-400" />
                    </div>
                    <span className="font-body text-white/55 text-xs">{benefit}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* ── Quick Actions ─────────────────────────────────────── */}
        <motion.div {...fadeUp(0.22)} className="mb-6">
          <h3 className="font-heading text-base font-bold text-white mb-3">Your Plan Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="group flex items-center gap-4 bg-[#111111] border border-white/8 hover:border-gold-primary/30 rounded-2xl p-5 transition-all duration-200 hover:bg-[#141414]"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-primary/10 group-hover:bg-gold-primary/20 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                  <action.icon size={18} className="text-gold-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-body font-semibold text-white text-sm">{action.label}</p>
                  <p className="font-body text-white/40 text-xs mt-0.5">{action.desc}</p>
                </div>
                <ArrowRight size={14} className="text-white/20 group-hover:text-gold-primary transition-colors duration-200 flex-shrink-0" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── CTA Banner ────────────────────────────────────────── */}
        <motion.div {...fadeUp(0.28)}>
          <div className="bg-gold-gradient rounded-2xl p-6 text-center">
            <h3 className="font-heading text-xl font-black text-white mb-2">
              Ready to Transform Your Credit, {firstName}?
            </h3>
            <p className="font-body text-white/75 text-sm mb-4">
              Our experts are standing by to build your personalized credit recovery plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-near-black font-heading font-bold text-sm rounded-pill px-6 py-2.5 hover:bg-white/90 transition-colors shadow-md"
              >
                Book Free Consultation <ArrowRight size={14} />
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-heading font-bold text-sm rounded-pill px-6 py-2.5 hover:bg-white/10 transition-colors"
              >
                View Plans <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
