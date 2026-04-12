export interface FAQ {
  id: string
  category: string
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    id: '1',
    category: 'About Credit Repair',
    question: 'Is credit repair legal?',
    answer:
      'Yes, absolutely. Credit repair is a legal process governed by the Fair Credit Reporting Act (FCRA) and Credit Repair Organizations Act (CROA). You have the legal right to dispute inaccurate, unverifiable, or outdated information on your credit report. Proximity Credit Repair operates in full compliance with all applicable federal and state laws.',
  },
  {
    id: '2',
    category: 'About Credit Repair',
    question: 'How long does credit repair take?',
    answer:
      'Results vary based on your unique credit situation, but most clients begin seeing meaningful improvements within 30–90 days. Significant score increases typically occur over 3–6 months. The credit bureaus are legally required to investigate and respond to disputes within 30 days, which sets the baseline timeline.',
  },
  {
    id: '3',
    category: 'About Credit Repair',
    question: 'Can you remove accurate negative items?',
    answer:
      'We cannot — and will not — attempt to remove accurate, verifiable information. However, many items on credit reports are inaccurate, reported incorrectly, or cannot be verified by the reporting agency. These can be legally disputed and removed. We also negotiate goodwill deletions with creditors for accurate items in certain cases.',
  },
  {
    id: '4',
    category: 'About Credit Repair',
    question: 'What types of negative items can be removed?',
    answer:
      'Common items that are frequently challenged and removed include: late payments reported incorrectly, accounts that don\'t belong to you (identity theft or mixed files), outdated collections (over 7 years old), charged-off accounts with reporting errors, medical debts that were already paid, and unverifiable collection accounts.',
  },
  {
    id: '5',
    category: 'About Credit Repair',
    question: 'How much can my score improve?',
    answer:
      'This depends on what\'s currently dragging your score down. Clients who have multiple negative items removed typically see increases of 50–200+ points. Our average client sees a 150-point improvement within 6 months. We\'ll give you a realistic assessment during your free consultation based on your actual credit situation.',
  },
  {
    id: '6',
    category: 'Working with Proximity',
    question: 'What happens during the free consultation?',
    answer:
      'During your free consultation, one of our certified credit specialists will review your credit reports, identify negative items impacting your score, and walk you through a personalized repair plan. There is no obligation to enroll — we want you to have all the information you need to make the best decision.',
  },
  {
    id: '7',
    category: 'Working with Proximity',
    question: 'How do I get started?',
    answer:
      'Getting started is simple. Book your free consultation through our Contact page or call us directly. We\'ll pull your credit reports, conduct a full analysis, and present your personalized repair strategy — all at no cost and no obligation.',
  },
  {
    id: '8',
    category: 'Working with Proximity',
    question: 'Do I need to do anything while you\'re working on my credit?',
    answer:
      'We handle all the heavy lifting. However, we may ask you to provide supporting documents (like proof of payment or identity) to strengthen your disputes. We\'ll also provide guidance on actions to avoid — like applying for new credit — that could temporarily impact your score during the repair process.',
  },
  {
    id: '9',
    category: 'Working with Proximity',
    question: 'How do I track my progress?',
    answer:
      'You\'ll receive monthly progress reports detailing every dispute filed, every response received, and every item removed. Our team is also available to answer questions at any time. We believe in radical transparency — you\'ll always know exactly what we\'re doing and why.',
  },
  {
    id: '10',
    category: 'Working with Proximity',
    question: 'What makes Proximity different from other credit repair companies?',
    answer:
      'Three things: results, transparency, and expertise. We have a 95% success rate across thousands of clients, we never make promises we can\'t keep, and our team includes certified credit consultants with deep knowledge of consumer protection law. We treat every client\'s situation as unique and build a custom strategy — not a one-size-fits-all approach.',
  },
]
