import type { Specialist } from '../types';

export const specialists: Specialist[] = [
  {
    id: 'dr-astrid-lindholm',
    name: 'Dr. Astrid Lindholm',
    title: 'Founder & Clinical Director',
    danishTitle: 'Tandlæge, Cand.odont, Ph.d.',
    specialty: 'Aesthetic Dentistry, Biomimetic Restorations & Smile Architecture',
    education: 'University of Copenhagen (Faculty of Health and Medical Sciences) & Fellowship at King\'s College London',
    experienceYears: 16,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    bio: 'Astrid founded AURA Dental Studio with a firm conviction: dental healthcare in Copenhagen deserved an atmosphere of tranquility, architectural purity, and unhurried clinical excellence. Following advanced fellowships in minimally invasive biomimetic dentistry in London and Geneva, Astrid specializes in bespoke porcelain veneers, composite artistry, and comprehensive smile rehabilitation that respects the biological sanctity of natural tooth structure.',
    quote: 'True Scandinavian beauty is understated and natural. We do not manufacture standardized smiles; we restore harmony, proportion, and quiet confidence.',
    languages: ['Danish (Native)', 'English (Fluent)', 'Swedish'],
    availableDays: ['Monday', 'Tuesday', 'Thursday'],
    treatmentsHandled: ['cosmetic-dentistry', 'general-dentistry', 'teeth-whitening'],
    memberships: [
      'Tandlægeforeningen (Danish Dental Association)',
      'European Academy of Esthetic Dentistry (EAED)',
      'British Academy of Cosmetic Dentistry (BACD)'
    ]
  },
  {
    id: 'dr-magnus-moller',
    name: 'Dr. Magnus Møller',
    title: 'Oral & Maxillofacial Surgeon',
    danishTitle: 'Specialtandlæge i Kæbekirurgi',
    specialty: 'Guided Dental Implants, Bone Reconstruction & Micro-Surgical Extraction',
    education: 'Aarhus University School of Dentistry & Rigshospitalet Department of Oral and Maxillofacial Surgery',
    experienceYears: 18,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    bio: 'Dr. Magnus Møller brings nearly two decades of precision surgical practice to AURA. Trained at Rigshospitalet and leading Swiss research institutes, Magnus specializes in computer-navigated implant placement and bone preservation. He is widely respected for his calm demeanor, gentle tactile technique, and mastery of 3D computer-guided keyhole surgery, making complex implantology feel remarkably straightforward and comfortable for nervous patients.',
    quote: 'Precision engineering meets gentle biological healing. When surgery is calculated down to the tenth of a millimeter, recovery is peaceful and predictable.',
    languages: ['Danish (Native)', 'English (Fluent)', 'German'],
    availableDays: ['Tuesday', 'Wednesday', 'Friday'],
    treatmentsHandled: ['dental-implants', 'general-dentistry'],
    memberships: [
      'Dansk Selskab for Oral og Maxillofacial Kirurgi (DSOMK)',
      'International Team for Implantology (ITI)',
      'European Association for Osseointegration (EAO)'
    ]
  },
  {
    id: 'dr-freja-vestergaard',
    name: 'Dr. Freja Vestergaard',
    title: 'Specialist in Orthodontics',
    danishTitle: 'Specialtandlæge i Ortodonti',
    specialty: 'Clear Aligner Biomechanics, Facial Balance & Adult Orthodontics',
    education: 'University of Copenhagen & Postdoctoral Specialization in Orthodontics at Malmö University',
    experienceYears: 12,
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80',
    bio: 'Freja is dedicated to the intersection of digital airway orthodontics and facial aesthetics. Rather than solely straightening front teeth, she assesses the holistic relationship between tooth alignment, lip profile, and jaw joint biomechanics. Certified in advanced digital clear aligner protocols, she creates bespoke movement plans that optimize both functional chewing harmony and breathtaking natural smile balance.',
    quote: 'Orthodontics should never compromise your lifestyle. Invisible aligners allow us to guide your teeth into perfect balance with quiet, elegant precision.',
    languages: ['Danish (Native)', 'English (Fluent)', 'Norwegian'],
    availableDays: ['Monday', 'Wednesday', 'Thursday', 'Saturday'],
    treatmentsHandled: ['orthodontics', 'teeth-whitening'],
    memberships: [
      'Dansk Ortodontisk Selskab (DOS)',
      'European Orthodontic Society (EOS)',
      'World Federation of Orthodontists (WFO)'
    ]
  },
  {
    id: 'emilie-dahl',
    name: 'Emilie Dahl',
    title: 'Lead Dental Hygienist & Prevention Director',
    danishTitle: 'Aut. Professionsbachelor i Tandpleje',
    specialty: 'Guided Biofilm Therapy (GBT), Periodontal Health & Hypersensitivity Management',
    education: 'University of Copenhagen School of Dental Hygiene & Advanced Swiss EMS Master Certification',
    experienceYears: 9,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    bio: 'Emilie is passionate about re-imagining the dental hygiene experience. Renowned for her soothing touch and meticulous attention to comfort, she pioneered AURA\'s warm-water Swiss Airflow therapy protocol. Emilie works extensively with patients suffering from dental anxiety and dentin hypersensitivity, guiding each individual on a personalized, stress-free path to vibrant oral wellness.',
    quote: 'Preventive care should feel like a wellness retreat for your mouth, where you leave feeling revitalized, light, and deeply cared for.',
    languages: ['Danish (Native)', 'English (Fluent)'],
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    treatmentsHandled: ['dental-cleaning', 'teeth-whitening'],
    memberships: [
      'Danske Tandplejere (Danish Association of Dental Hygienists)',
      'International Federation of Dental Hygienists (IFDH)'
    ]
  }
];
