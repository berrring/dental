export interface FAQItem {
  id: string;
  category: 'general' | 'anxiety' | 'pricing' | 'treatments' | 'visit';
  question: string;
  answer: string;
}

export const generalFaqs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'anxiety',
    question: 'How do you care for patients who experience dental anxiety or fear?',
    answer: 'Dental anxiety is at the very core of our architectural and clinical design. From the moment you arrive, you will notice the absence of sharp antiseptic scents or buzzing waiting rooms. We operate on "Slow Dentistry" principles: your appointment is never rushed, we agree on a hand-stop signal beforehand so you remain in 100% control, and each treatment suite is equipped with noise-dampening timber paneling, warm blankets, and Bose noise-canceling headphones.'
  },
  {
    id: 'faq-2',
    category: 'visit',
    question: 'Where is AURA located, and how do I get there by public transit?',
    answer: 'Our studio is situated at Bredgade 34, 1260 København K, in the historic design district of Frederiksstaden. We are a brief 4-minute walk from the Kongens Nytorv Metro Station (M1, M2, M3, M4) and 3 minutes from Marmorkirken Metro Station. If arriving by car, parking is available at the nearby Jeudan underground car park at Dronningens Tværgade 4.'
  },
  {
    id: 'faq-3',
    category: 'pricing',
    question: 'How does reimbursement from Sygeforsikringen "danmark" work?',
    answer: 'If you are a member of Group 1, 2, or 5 in Sygeforsikringen "danmark", we report your invoice automatically and electronically through the Danish healthcare portal directly after your appointment. The applicable subsidy will be credited directly to your registered bank account without any paperwork on your part.'
  },
  {
    id: 'faq-4',
    category: 'general',
    question: 'What should I expect during my first visit as a new patient?',
    answer: 'Your first appointment lasts 60 minutes and is dedicated to discovery and comprehensive diagnostics. We take high-resolution 3D intraoral scans, low-dose digital radiographs, examine gum health, and evaluate tooth vitality. Afterward, you sit together with your dentist over a cup of Danish herbal tea or sparkling water to review the 3D imagery on screen with total transparency.'
  },
  {
    id: 'faq-5',
    category: 'pricing',
    question: 'Do you offer monthly payment installments?',
    answer: 'Yes. For treatments exceeding 5,000 DKK (such as clear aligners, porcelain veneers, or dental implants), we partner with vetted Danish medical financing providers (e.g. Sundhedskonto / Resurs) offering flexible 6, 12, or 24-month interest-free installment arrangements.'
  },
  {
    id: 'faq-6',
    category: 'treatments',
    question: 'What is the difference between composite bonding and porcelain veneers?',
    answer: 'Composite bonding uses tooth-colored resin sculpted directly onto the tooth in a single appointment, making it an excellent minimally invasive option for small chips and minor shape tweaks. Porcelain veneers are ultra-thin ceramic shells individually handcrafted by a master dental laboratory in Copenhagen; they offer superior optical translucency, stain resistance, and last 15-20+ years.'
  },
  {
    id: 'faq-7',
    category: 'visit',
    question: 'What should I do if I experience an acute dental emergency?',
    answer: 'We reserve emergency time slots daily for acute toothache, chipped front teeth, or trauma during our normal opening hours (07:30 - 18:00). Please call us immediately at +45 33 12 40 80. For acute emergencies outside opening hours and on weekends, contact Tandlægevagten Region Hovedstaden on +45 70 20 02 55.'
  },
  {
    id: 'faq-8',
    category: 'general',
    question: 'Is AURA an environmentally sustainable clinic?',
    answer: 'Yes. We are proud to run on 100% certified Danish offshore wind energy. Our practice is entirely digital (paperless), mercury-free, and we utilize bio-degradable barriers and autoclaved reusable stainless steel instruments wherever medically safe.'
  }
];
