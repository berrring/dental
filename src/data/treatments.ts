import type { Treatment } from '../types';

export const treatments: Treatment[] = [
  {
    id: 'dental-cleaning',
    slug: 'dental-cleaning',
    title: 'Dental Hygiene & Airflow Therapy',
    subtitle: 'Gentle biofilm management using warm water and Swiss erythritol micro-powder.',
    category: 'preventive',
    categoryLabel: 'Preventive Care',
    shortDescription: 'Gentle, warm-water ultrasonic cleaning combined with EMS Swiss Airflow technology to remove stubborn stains and biofilm with zero enamel abrasion.',
    fullDescription: 'At AURA, our preventive hygiene appointments are designed as an unhurried, restorative ritual rather than an abrasive procedure. Utilizing the patented EMS Guided Biofilm Therapy (GBT) system from Switzerland, we warm our water delivery to body temperature and apply microscopic erythritol powder. This painlessly lifts tea, coffee, wine, and nicotine pigments while preserving delicate gingival tissue and natural enamel luster.',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    ],
    durationMinutes: 45,
    durationLabel: '45 - 60 minutes',
    indicativePriceDKK: 850,
    priceLabel: 'From 850 DKK',
    danmarkRefundEligible: true,
    danmarkRefundEstimateDKK: 280,
    benefits: [
      'Temperature-calibrated water eliminates sensitivity triggers during scaling',
      'Sub-gingival biofilm clearance without traditional metal scraping',
      'Restores the natural, radiant micro-texture of tooth surfaces',
      'Thorough periodontal charting and personalized saliva pH assessment',
      'Quiet, noise-dampened handpieces in acoustic timber treatment rooms'
    ],
    procedureSteps: [
      {
        step: 1,
        title: 'Diagnostic Disclosing & Assessment',
        description: 'A harmless vegetable dye gently highlights bacterial biofilm, showing you exactly where brushing technique can be optimized.'
      },
      {
        step: 2,
        title: 'Airflow Erythritol Spray',
        description: 'A soothing jet of warm water and ultra-fine Swiss erythritol powder glides over enamel, interdental gaps, and tongue margins.'
      },
      {
        step: 3,
        title: 'Piezon Ultrasonic Precision',
        description: 'Targeted removal of hardened calculus with intelligent tactile feedback sensors that only engage where mineralized deposits exist.'
      },
      {
        step: 4,
        title: 'Mineral Remineralization & Finish',
        description: 'Application of bio-active biomimetic hydroxyapatite paste to reinforce enamel crystalline structures and seal tubules.'
      }
    ],
    suitability: [
      'Patients with sensitive root surfaces or cold vulnerability',
      'Regular 6-month preventive maintenance for all adults',
      'Individuals wearing orthodontic aligners or with porcelain veneers',
      'Those seeking removal of deep coffee, matcha, or red wine discoloration'
    ],
    aftercareAdvice: [
      'Refrain from heavily pigmented beverages (coffee, dark berries) for 2 hours post-treatment',
      'Enjoy the silky smooth texture: no special restrictions on eating or normal hydration',
      'Follow your personalized interdental brush gauge recommendations provided at checkout'
    ],
    faqs: [
      {
        question: 'Does Airflow cleaning hurt if I have sensitive teeth?',
        answer: 'Not at all. Unlike older cold-water ultrasonic scalers, our Swiss EMS system heats the water to a comfortable 37°C and uses microscopic powder that feels like a soft warm mist.'
      },
      {
        question: 'How often should I book a preventive hygiene visit?',
        answer: 'For most adults in good oral health, every 6 months is ideal. If you are managing periodontal tendencies or wearing clear aligners, we may recommend a 3 to 4-month interval.'
      },
      {
        question: 'Is this covered by Sygeforsikringen "danmark"?',
        answer: 'Yes. "danmark" Group 1, 2, and 5 members receive direct electronic reimbursement subsidies (typically 200 - 320 DKK depending on diagnostic codes).'
      }
    ],
    comparisonData: {
      optionA: {
        name: 'AURA Guided Biofilm Therapy (Airflow)',
        idealFor: 'Sensitive gums, regular maintenance, orthodontic wearers',
        duration: '45 mins',
        longevity: 'Every 6 months',
        investment: 'From 850 DKK'
      },
      optionB: {
        name: 'Deep Periodontal Therapy (Scaling & Root Planing)',
        idealFor: 'Active gum inflammation, deep pocket depths (>4mm)',
        duration: '75 mins (often 2 sessions)',
        longevity: 'Targeted healing phase',
        investment: 'From 1,800 DKK'
      }
    }
  },
  {
    id: 'general-dentistry',
    slug: 'general-dentistry',
    title: 'General & Conservative Dentistry',
    subtitle: 'Biomimetic restorations, preventive exams, and comprehensive oral care.',
    category: 'restorative',
    categoryLabel: 'Restorative Care',
    shortDescription: 'Minimally invasive checkups, composite bonding restorations, digital radiographs, and structural tooth preservation using biomimetic principles.',
    fullDescription: 'Our approach to general dentistry revolves around structural conservation. We treat dental health as an interconnected biological ecosystem. Rather than aggressively cutting natural tooth structure, we deploy biomimetic adhesive protocols that mimic the natural flex, elasticity, and optics of intact teeth. All diagnostics utilize ultra-low radiation Green-CBCT digital radiography and high-magnification Carl Zeiss optics.',
    heroImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80'
    ],
    durationMinutes: 60,
    durationLabel: '45 - 90 minutes',
    indicativePriceDKK: 1200,
    priceLabel: 'From 1,200 DKK',
    danmarkRefundEligible: true,
    danmarkRefundEstimateDKK: 450,
    benefits: [
      'Micro-invasive composite restorations that preserve maximum natural tooth structure',
      'Comprehensive 3D intraoral scans with real-time bite analysis',
      '100% mercury-free, biocompatible resin and ceramic materials',
      'Zeiss dental operating microscopes for sub-millimeter margin accuracy',
      'Compassionate care tailored for dental anxiety and nervous patients'
    ],
    procedureSteps: [
      {
        step: 1,
        title: '3D High-Definition Intraoral Mapping',
        description: 'No uncomfortable impression trays. A handheld wand captures a photorealistic 3D model of your dentition and gingiva.'
      },
      {
        step: 2,
        title: 'Diagnostic Review & Transparent Planning',
        description: 'You review your scans on an eye-level high-resolution screen with your dentist, discussing clear conservative options.'
      },
      {
        step: 3,
        title: 'Micro-Preparation Under Rubber Dam',
        description: 'Isolating the tooth in a sterile dry field ensures that composite bonds achieve maximum long-term chemical adhesion.'
      },
      {
        step: 4,
        title: 'Stratified Biomimetic Layering',
        description: 'Multiple shades of translucent nano-hybrid composite are layered to reproduce natural dentin and enamel gradients.'
      }
    ],
    suitability: [
      'Patients overdue for a thorough annual dental examination',
      'Chipped, worn, or cracked molars needing aesthetic repair',
      'Replacement of failing amalgam or discolored older fillings',
      'Unresolved sensitivity, night grinding (bruxism), or jaw stiffness'
    ],
    aftercareAdvice: [
      'Local anaesthetic typically dissipates within 2-3 hours; avoid hot liquids until sensation returns',
      'Composite materials cure immediately under high-intensity blue light: you can chew once numb feeling resolves',
      'Minor sensitivity to temperature can occur for 48 hours as the tooth nerve calms'
    ],
    faqs: [
      {
        question: 'What makes biomimetic dentistry different?',
        answer: 'Traditional dentistry frequently relied on crowns that shaved away 60-70% of healthy tooth structure. Biomimetic dentistry uses advanced adhesive resins to bond only to damaged areas, keeping your natural tooth intact.'
      },
      {
        question: 'Do you treat patients with severe dental anxiety?',
        answer: 'Yes, this is central to our philosophy. Our clinic features soundproofed acoustic rooms, noise-canceling headphones with your choice of music, slow pacing, and complete patient control (a stop-signal protocol at all times).'
      },
      {
        question: 'How long do modern composite restorations last?',
        answer: 'With proper oral hygiene and regular preventive cleanings, contemporary nano-hybrid composite restorations typically last 8 to 12 years or longer.'
      }
    ],
    comparisonData: {
      optionA: {
        name: 'Biomimetic Composite Restoration',
        idealFor: 'Small to moderate decay, chipped incisors, aesthetic fillings',
        duration: '45 - 60 mins',
        longevity: '8 - 12+ years',
        investment: 'From 1,200 DKK'
      },
      optionB: {
        name: 'Porcelain Onlay / Partial Crown',
        idealFor: 'Extensively fractured molars, high chewing stress',
        duration: '2 appointments or single-day CAD/CAM',
        longevity: '15 - 20+ years',
        investment: 'From 4,800 DKK'
      }
    }
  },
  {
    id: 'teeth-whitening',
    slug: 'teeth-whitening',
    title: 'Professional Teeth Whitening',
    subtitle: 'Enamel-safe, scientifically formulated brightening with zero dehydration shock.',
    category: 'cosmetic',
    categoryLabel: 'Aesthetic Care',
    shortDescription: 'Tailored in-studio LED brightening and bespoke vacuum-formed home trays using potassium-nitrate desensitized carbamide peroxide.',
    fullDescription: 'Rather than harsh, unregulated chemical bleaches that cause acute enamel dehydration and sharp post-treatment shocks, AURA provides medically supervised whitening systems. We custom-calibrate the gel concentration to your unique enamel density and baseline shade. Choose between our relaxing 90-minute in-studio Scandinavian lounge treatment or bespoke custom night trays made from high-precision 3D digital impressions.',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
    ],
    durationMinutes: 90,
    durationLabel: '90 mins (or 14-day home system)',
    indicativePriceDKK: 3200,
    priceLabel: 'From 3,200 DKK',
    danmarkRefundEligible: false,
    benefits: [
      'Formulated with desensitizing potassium nitrate and amorphous calcium phosphate',
      'Brightens natural tooth shade by 4 to 8 calibrated shades without chalky opacity',
      'Digital 3D-scanned scalloped trays prevent gel overflow onto delicate gum tissue',
      'Long-lasting results that maintain their natural, light-catching vitality',
      'Complimentary touch-up syringe and shade guide included with all full packages'
    ],
    procedureSteps: [
      {
        step: 1,
        title: 'Shade Mapping & Enamel Health Exam',
        description: 'Using a digital spectrophotometer, we record baseline enamel values and ensure absence of untreated micro-cavities.'
      },
      {
        step: 2,
        title: 'Gingival Barrier Protection',
        description: 'A light-cured protective barrier is placed along the gum line to insulate sensitive soft tissues from active brightening gel.'
      },
      {
        step: 3,
        title: 'Calibrated Photonic Application',
        description: 'Three 15-minute cycles of professional hydrogen peroxide gel activated under cold LED wavelengths in our quiet relaxation suite.'
      },
      {
        step: 4,
        title: 'Desensitizing Mineral Infusion',
        description: 'Application of fluoride and biomimetic calcium solution to immediately restore hydration and prevent post-procedure tingling.'
      }
    ],
    suitability: [
      'Adults with natural teeth discolored by coffee, tea, red wine, or age',
      'Patients preparing for porcelain restorations who want to brighten adjacent teeth first',
      'Bridal or celebratory aesthetic prep',
      'Patients with previous bad experiences with painful over-the-counter whitening strips'
    ],
    aftercareAdvice: [
      'Adhere to the "White Diet" for 48 hours (white fish, rice, oats, poultry, water, milk)',
      'Avoid colored drinks, berry fruits, curries, and soy sauce while enamel tubules re-seal',
      'Brush gently with non-abrasive sensitivity toothpaste provided in your take-home care kit'
    ],
    faqs: [
      {
        question: 'Will professional whitening damage my dental enamel?',
        answer: 'No. When performed under dental supervision with pH-neutral professional gels, whitening works by lifting embedded organic chromophores through safe oxidation without etching or eroding mineral enamel.'
      },
      {
        question: 'Will whitening work on fillings, crowns, or veneers?',
        answer: 'Whitening only lightens natural dental enamel. Ceramic restorations and resin fillings do not change color, which is why we always plan whitening prior to placing visible front restorations.'
      },
      {
        question: 'How long do the results last?',
        answer: 'Results typically remain vibrant for 18 to 24 months. With occasional home touch-ups every 6 to 9 months using your custom trays, results can be maintained indefinitely.'
      }
    ],
    comparisonData: {
      optionA: {
        name: 'In-Studio LED Brightening (90 min)',
        idealFor: 'Instant results, upcoming events, maximum convenience',
        duration: 'Single 90-minute visit',
        longevity: '18 - 24 months',
        investment: '3,800 DKK'
      },
      optionB: {
        name: 'Bespoke At-Home 3D Tray System',
        idealFor: 'Gradual whitening, sensitive teeth, long-term self-maintenance',
        duration: '14 consecutive nights (30-60 min/day)',
        longevity: '24+ months (reusable trays)',
        investment: '3,200 DKK'
      }
    }
  },
  {
    id: 'orthodontics',
    slug: 'orthodontics',
    title: 'Clear Aligners & Invisible Orthodontics',
    subtitle: 'Digitally simulated orthodontic alignment designed around your facial harmony.',
    category: 'orthodontics',
    categoryLabel: 'Orthodontics',
    shortDescription: 'Custom, nearly invisible medical-grade aligners that guide teeth into natural alignment with millimeter precision and zero metal brackets.',
    fullDescription: 'Modern orthodontic alignment is as much about airway health and long-term joint function as it is about a balanced smile. Using 3D optical scanning and AI-assisted biomechanical planning, Dr. Freja Vestergaard designs a progressive series of crystalline aligners. Each set gently and imperceptibly shifts teeth into their optimal arch position. You receive a virtual 3D simulation of your smile progression before treatment ever begins.',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80'
    ],
    durationMinutes: 45,
    durationLabel: '6 - 14 months typical duration',
    indicativePriceDKK: 24000,
    priceLabel: 'From 24,000 DKK',
    danmarkRefundEligible: true,
    danmarkRefundEstimateDKK: 3500,
    benefits: [
      'Crystalline medical-grade polymer trays are virtually imperceptible in daily conversation',
      'Removable for meals, coffee breaks, and normal flossing/brushing',
      '3D ClinCheck digital preview lets you visualize final results before ordering',
      'Reduced clinic visits: digital remote monitoring allows check-ins via your smartphone',
      'Includes custom night retainers and post-treatment enamel contouring'
    ],
    procedureSteps: [
      {
        step: 1,
        title: 'Comprehensive Digital Consultation & 3D Scan',
        description: 'Complete digital capture of your dental arches and occlusal relationships. No physical paste impressions required.'
      },
      {
        step: 2,
        title: 'Virtual Smile Architecture Simulation',
        description: 'Your dentist customizes the precise tooth movement vectors and reviews the interactive 3D timeline with you.'
      },
      {
        step: 3,
        title: 'Aligner Delivery & Attachment Placement',
        description: 'Small, tooth-colored aesthetic resin anchors are bonded to assist specific rotational movements, and your initial trays are delivered.'
      },
      {
        step: 4,
        title: 'Progressive Movement & Retention',
        description: 'Change aligners every 7 to 10 days at home. Regular digital check-ins ensure exact biological alignment.'
      }
    ],
    suitability: [
      'Adults with crowding, spacing, or overlapping front incisors',
      'Relapse from childhood braces where teeth have drifted over time',
      'Mild to moderate overbite, underbite, or crossbite configurations',
      'Professionals seeking discreet aesthetic correction without traditional metal hardware'
    ],
    aftercareAdvice: [
      'Wear aligners 20 to 22 hours per day, removing only to eat, drink non-water beverages, and brush',
      'Clean aligners with lukewarm water and specialized antibacterial foam; never use boiling water',
      'Wear your final nocturnal retainers consistently to safeguard your lifetime alignment'
    ],
    faqs: [
      {
        question: 'Will wearing clear aligners affect my speech?',
        answer: 'Most patients notice a subtle lisp for the first 24 to 48 hours as the tongue adapts to the ultra-thin polymer, after which speech returns completely to normal.'
      },
      {
        question: 'How often do I need to visit the clinic in Copenhagen?',
        answer: 'Typically once every 6 to 8 weeks for a brief 20-minute checkpoint. With our digital monitoring app, some routine check-ins can even be evaluated remotely.'
      },
      {
        question: 'Are payment installments available?',
        answer: 'Yes. We offer transparent interest-free installment arrangements split over the 6 to 12 months of active treatment.'
      }
    ],
    comparisonData: {
      optionA: {
        name: 'AURA Clear Aligners',
        idealFor: 'Discreet adult correction, flexible lifestyle, hygiene ease',
        duration: '6 - 12 months',
        longevity: 'Lifetime with night retainers',
        investment: 'From 24,000 DKK'
      },
      optionB: {
        name: 'Lingual / Ceramic Brackets',
        idealFor: 'Complex skeletal movements, severe rotations',
        duration: '14 - 24 months',
        longevity: 'Lifetime with retention',
        investment: 'From 38,000 DKK'
      }
    }
  },
  {
    id: 'dental-implants',
    slug: 'dental-implants',
    title: 'Precision Swiss Dental Implants',
    subtitle: 'Permanent tooth replacement utilizing biocompatible titanium and zirconia ceramics.',
    category: 'implants',
    categoryLabel: 'Implants & Surgery',
    shortDescription: 'Computer-guided implantology for single missing teeth or full-arch rehabilitation, restoring complete masticatory strength and natural aesthetics.',
    fullDescription: 'A missing tooth compromises jawbone density, facial volume, and neighboring tooth stability. At AURA, Dr. Magnus Møller performs computer-guided implant surgery using genuine Swiss Straumann implants. Using 3D cone-beam computed tomography (CBCT) and 3D-printed surgical guides, placement is executed with microscopic accuracy, minimal tissue flap elevation, and rapid biological osseointegration.',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
    ],
    durationMinutes: 90,
    durationLabel: '60 - 90 mins surgery (3-4 mo integration)',
    indicativePriceDKK: 16500,
    priceLabel: 'From 16,500 DKK (complete)',
    danmarkRefundEligible: true,
    danmarkRefundEstimateDKK: 2400,
    benefits: [
      'Permanently anchored into the jawbone: feels, chews, and looks like a natural tooth',
      'Prevents post-extraction bone resorption and maintains youthful facial contouring',
      'Preserves adjacent teeth: no need to grind down neighboring healthy teeth for a bridge',
      'Computer-guided keyhole surgery minimizes post-operative swelling and discomfort',
      'Backed by Straumann international lifetime guarantee on implant components'
    ],
    procedureSteps: [
      {
        step: 1,
        title: '3D CBCT Radiography & Surgical Planning',
        description: 'Low-dose 3D bone mapping evaluates bone density, nerve pathways, and maxillary sinus proximity.'
      },
      {
        step: 2,
        title: 'Guided Micro-Surgical Placement',
        description: 'Under gentle local anesthesia, the Swiss titanium implant fixture is placed through a precision 3D-printed guide.'
      },
      {
        step: 3,
        title: 'Osseointegration Phase (8-12 Weeks)',
        description: 'The bone integrates naturally with the micro-textured titanium surface, forming a permanent biological union.'
      },
      {
        step: 4,
        title: 'Custom Zirconia Crown Placement',
        description: 'An individually milled, layered ceramic crown is custom-tinted to harmonize invisibly with your neighboring teeth.'
      }
    ],
    suitability: [
      'Single missing tooth due to trauma, fracture, or severe decay',
      'Multiple missing posterior teeth affecting chewing efficiency',
      'Patients tired of loose partial dentures looking for permanent stability',
      'Adults with healthy periodontal condition and adequate jawbone volume'
    ],
    aftercareAdvice: [
      'Cool compress applied externally to cheek for the first 12 hours minimizes any minor swelling',
      'Soft-food diet for 7 days post-surgery; avoid aggressive chewing directly over surgical site',
      'Antibacterial chlorhexidine mouthrinse as prescribed; resume gentle brushing around area after 48h'
    ],
    faqs: [
      {
        question: 'Does dental implant surgery hurt?',
        answer: 'Patients are consistently surprised by how comfortable the procedure is. Because bone has very few nerve endings and we use precise computer-guided micro-incisions, post-treatment discomfort is typically comparable to or milder than a routine extraction.'
      },
      {
        question: 'What if I do not have enough bone for an implant?',
        answer: 'We routinely perform gentle bone augmentation and sinus lifts using biomimetic bone graft minerals to rebuild the necessary foundation prior to or simultaneous with implant placement.'
      },
      {
        question: 'How long do dental implants last?',
        answer: 'With good oral hygiene and regular professional cleanings, dental implants have a clinical success rate above 98% and can comfortably last for decades or a lifetime.'
      }
    ],
    comparisonData: {
      optionA: {
        name: 'Single Dental Implant + Ceramic Crown',
        idealFor: 'Single tooth loss, preserving adjacent teeth',
        duration: '2-3 visits over 3 months',
        longevity: '25+ years to lifetime',
        investment: '16,500 DKK complete'
      },
      optionB: {
        name: 'Traditional 3-Unit Dental Bridge',
        idealFor: 'When adjacent teeth already have large failing fillings',
        duration: '2 visits over 2 weeks',
        longevity: '10 - 15 years',
        investment: '14,000 DKK'
      }
    }
  },
  {
    id: 'cosmetic-dentistry',
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry & Porcelain Veneers',
    subtitle: 'Bespoke Scandinavian aesthetic craftsmanship: natural, understated, harmonious smiles.',
    category: 'cosmetic',
    categoryLabel: 'Aesthetic Care',
    shortDescription: 'Ultra-thin handcrafted feldspathic porcelain veneers and composite edge bonding designed to enhance your authentic facial balance.',
    fullDescription: 'In line with Danish design heritage, our cosmetic dentistry rejects artificial, blindingly opaque "Hollywood" smiles. We believe true luxury lies in subtle refinement: natural light translucency, delicate mamelons, micro-texture, and contours that celebrate your individuality. Handcrafted by master ceramists in partnership with Dr. Astrid Lindholm, each veneer is an individually sculpted work of ceramic art.',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80'
    ],
    durationMinutes: 90,
    durationLabel: '2 - 3 appointments',
    indicativePriceDKK: 6800,
    priceLabel: 'From 6,800 DKK / veneer',
    danmarkRefundEligible: false,
    benefits: [
      'Ultra-thin preparations (0.3 - 0.5mm) preserve up to 95% of natural tooth enamel',
      'Handcrafted feldspathic ceramic mimics the exact refractive index of young human enamel',
      'Physical "Trial Smile" mockup lets you test-drive your aesthetic design in real life before committing',
      'Completely impervious to staining from red wine, coffee, or dark food pigments',
      'Individually characterized with subtle warmth and anatomical nuance'
    ],
    procedureSteps: [
      {
        step: 1,
        title: 'Aesthetic Smile Architecture & Digital Facially Driven Design',
        description: 'High-resolution portraiture and 3D scanning evaluate smile lines, lip dynamics, and facial symmetry.'
      },
      {
        step: 2,
        title: 'In-Mouth Trial Smile Mockup',
        description: 'We transfer the 3D digital design directly into your mouth using temporary resin so you can see and feel your new smile in live conversation.'
      },
      {
        step: 3,
        title: 'Micro-Preparation & Master Impressions',
        description: 'Microscopic enamel smoothing followed by digital scans sent directly to our artisan ceramic master laboratory.'
      },
      {
        step: 4,
        title: 'Adhesive Cementation & Articulation',
        description: 'Veneers are bonded under rubber dam isolation with light-curing resin cements for permanent, high-strength integration.'
      }
    ],
    suitability: [
      'Patients with worn, shortened, or chipped front teeth due to attrition',
      'Severe intrinsic enamel staining resistant to chemical whitening',
      'Closing irregular diastemas (front gaps) or reshaping asymmetrical teeth',
      'Individuals seeking a natural, elegant, bespoke aesthetic enhancement'
    ],
    aftercareAdvice: [
      'Maintain standard brushing and flossing routines; porcelain does not decay, but natural tooth margins need care',
      'A custom nocturnal nightguard is crafted for every veneer patient to protect against subconscious night grinding',
      'Attend bi-annual Airflow maintenance cleanings to preserve gingival health around veneer margins'
    ],
    faqs: [
      {
        question: 'Will my teeth need to be filed down into pegs?',
        answer: 'Absolutely not. That outdated practice damages teeth permanently. Modern minimal-prep porcelain veneers require only 0.3mm to 0.5mm of superficial enamel refinement—roughly the thickness of a contact lens—keeping the living tooth healthy.'
      },
      {
        question: 'How do veneers differ from composite bonding?',
        answer: 'Composite bonding is applied directly in a single visit using resin paste; it is versatile and cost-effective, lasting 5-7 years. Handcrafted porcelain veneers are fabricated by master ceramists in a lab, possessing superior optical depth, stain-resistance, and lasting 15-20+ years.'
      },
      {
        question: 'Can I choose how white my veneers will look?',
        answer: 'Yes, completely. During our aesthetic consultation, we guide you through shade tabs and test your Trial Smile in daylight and studio light to ensure the brightness looks authentically stunning, never artificial.'
      }
    ],
    comparisonData: {
      optionA: {
        name: 'Handcrafted Feldspathic Porcelain Veneers',
        idealFor: 'Maximum optical realism, stain resistance, long-term durability',
        duration: '2 - 3 visits over 2 weeks',
        longevity: '15 - 20+ years',
        investment: '6,800 DKK per tooth'
      },
      optionB: {
        name: 'Direct Composite Edge Bonding',
        idealFor: 'Minor chips, immediate single-visit transformation, lower initial cost',
        duration: 'Single 2-hour appointment',
        longevity: '5 - 8 years',
        investment: '2,200 DKK per tooth'
      }
    }
  }
];
