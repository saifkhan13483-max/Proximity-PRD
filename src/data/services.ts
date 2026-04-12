export interface Service {
  id: string
  icon: string
  title: string
  shortDescription: string
  fullDescription: string
  benefits: string[]
}

export const services: Service[] = [
  {
    id: 'credit-analysis',
    icon: 'BarChart3',
    title: 'Credit Analysis',
    shortDescription: 'Deep dive into your credit reports to identify every negative item holding you back.',
    fullDescription:
      'Our certified credit analysts pull and review your reports from all three major bureaus — Equifax, Experian, and TransUnion — identifying inaccurate, outdated, and unverifiable items that are suppressing your score.',
    benefits: [
      'Full tri-bureau credit report review',
      'Detailed score impact assessment',
      'Personalized repair roadmap',
      'Monthly progress tracking',
    ],
  },
  {
    id: 'dispute-filing',
    icon: 'FileText',
    title: 'Dispute Filing',
    shortDescription: 'We draft and submit legally compliant disputes to bureaus and creditors on your behalf.',
    fullDescription:
      'Our team prepares customized dispute letters backed by consumer protection law (FCRA & FDCPA) targeting each negative item specifically. We handle all correspondence so you don\'t have to.',
    benefits: [
      'FCRA-compliant dispute letters',
      'Direct bureau and creditor disputes',
      'Goodwill deletion requests',
      'Escalation to CFPB when necessary',
    ],
  },
  {
    id: 'score-monitoring',
    icon: 'TrendingUp',
    title: 'Score Monitoring',
    shortDescription: 'Real-time alerts and monthly reporting so you always know where your score stands.',
    fullDescription:
      'We monitor your credit 24/7 and send alerts the moment your score changes, new items appear, or a dispute is resolved. Full monthly progress reports keep you informed every step of the way.',
    benefits: [
      '24/7 credit monitoring',
      'Real-time score change alerts',
      'Monthly progress reports',
      'Identity theft protection alerts',
    ],
  },
  {
    id: 'debt-validation',
    icon: 'Shield',
    title: 'Debt Validation',
    shortDescription: 'Force collectors to prove the debt is yours — and remove it if they can\'t.',
    fullDescription:
      'Under the FDCPA, you have the right to demand that any debt collector validate the debt. We send legally compliant validation letters and, when collectors fail to respond properly, pursue removal from your credit report.',
    benefits: [
      'FDCPA debt validation letters',
      'Collection account removal strategies',
      'Cease and desist if needed',
      'Harassment protection guidance',
    ],
  },
]
