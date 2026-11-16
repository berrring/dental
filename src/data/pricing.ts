import type { PriceItem } from '../types';

export const pricingCategories = [
  'Diagnostics & Prevention',
  'Restorative & Conservative',
  'Aesthetic & Whitening',
  'Orthodontics & Alignment',
  'Implants & Oral Surgery',
] as const;

export const priceList: PriceItem[] = [
  // Diagnostics & Prevention
  {
    id: 'p-exam-full',
    category: 'Diagnostics & Prevention',
    name: 'Comprehensive Initial Examination',
    description: 'Full intraoral diagnostic exam, periodontal pocket charting, 2 digital bite-wing X-rays, and individualized treatment plan.',
    priceDKK: 650,
    danmarkReimbursementDKK: 240,
    note: 'Recommended for all new patients',
    popular: true
  },
  {
    id: 'p-airflow-hygiene',
    category: 'Diagnostics & Prevention',
    name: 'EMS Airflow & Guided Biofilm Therapy',
    description: 'Warm-water Swiss erythritol micro-spray, Piezon ultrasonic calculus removal, and enamel remineralization finishing polish.',
    priceDKK: 850,
    danmarkReimbursementDKK: 280,
    popular: true
  },
  {
    id: 'p-periodontal-deep',
    category: 'Diagnostics & Prevention',
    name: 'Periodontal Sub-Gingival Debridement',
    description: 'Targeted deep root debridement per quadrant under gentle topical/local numbing for active gingivitis or periodontitis.',
    priceDKK: 950,
    danmarkReimbursementDKK: 390
  },
  {
    id: 'p-cbct-3d',
    category: 'Diagnostics & Prevention',
    name: 'Green-CBCT 3D Low-Dose Volumetric Scan',
    description: 'High-resolution 3D volumetric bone and airway imaging for surgical planning, airway analysis, and complex diagnostic evaluation.',
    priceDKK: 1450,
    danmarkReimbursementDKK: 400
  },

  // Restorative & Conservative
  {
    id: 'p-composite-1',
    category: 'Restorative & Conservative',
    name: 'Biomimetic Composite Restoration (1 surface)',
    description: 'Nano-hybrid multi-layer composite filling under rubber dam isolation, replicating natural enamel micro-optics.',
    priceDKK: 1200,
    danmarkReimbursementDKK: 420
  },
  {
    id: 'p-composite-multi',
    category: 'Restorative & Conservative',
    name: 'Complex Composite Reconstruction (2-3 surfaces)',
    description: 'Extensive multi-surface anatomical cusp rebuilding with internal biomimetic dentin mimicry.',
    priceDKK: 1850,
    danmarkReimbursementDKK: 560,
    popular: true
  },
  {
    id: 'p-ceramic-onlay',
    category: 'Restorative & Conservative',
    name: 'Precision Ceramic Onlay / Partial Crown',
    description: 'Individually milled lithium disilicate (E.max) ceramic onlay preserving healthy enamel walls.',
    priceDKK: 5400,
    danmarkReimbursementDKK: 1200
  },
  {
    id: 'p-micro-endo',
    category: 'Restorative & Conservative',
    name: 'Microscopic Endodontic Root Preservation',
    description: 'Rotary nickel-titanium root canal disinfection under high-magnification Zeiss operating microscope (per canal).',
    priceDKK: 2400,
    danmarkReimbursementDKK: 850
  },

  // Aesthetic & Whitening
  {
    id: 'p-in-studio-whitening',
    category: 'Aesthetic & Whitening',
    name: 'AURA In-Studio Photonic Whitening',
    description: '90-minute supervised lounge session with cold LED activation, gingival barrier, and post-treatment mineral infusion.',
    priceDKK: 3800,
    popular: true
  },
  {
    id: 'p-home-whitening',
    category: 'Aesthetic & Whitening',
    name: 'Bespoke Custom 3D Home Whitening System',
    description: 'Digitally scanned custom scalloped trays with 4 syringes of desensitizing carbamide peroxide and storage case.',
    priceDKK: 3200
  },
  {
    id: 'p-composite-bonding',
    category: 'Aesthetic & Whitening',
    name: 'Artisan Composite Edge Bonding (per tooth)',
    description: 'Direct artistic sculpting to correct chips, irregular lengths, or minor asymmetries in a single relaxing appointment.',
    priceDKK: 2200
  },
  {
    id: 'p-porcelain-veneer',
    category: 'Aesthetic & Whitening',
    name: 'Handcrafted Feldspathic Porcelain Veneer',
    description: 'Master ceramist laboratory-crafted ultra-thin (0.3mm) veneer including Trial Smile preview and precision bonding.',
    priceDKK: 6800,
    popular: true
  },

  // Orthodontics & Alignment
  {
    id: 'p-ortho-consult',
    category: 'Orthodontics & Alignment',
    name: 'Orthodontic 3D Digital Smile Consultation',
    description: 'Full 3D digital intraoral scan, facial photographic analysis, and customized 3D movement preview simulation.',
    priceDKK: 950,
    danmarkReimbursementDKK: 350,
    note: 'Credited towards full treatment if proceed'
  },
  {
    id: 'p-aligners-single',
    category: 'Orthodontics & Alignment',
    name: 'Clear Aligners — Single Arch Express (Mild)',
    description: 'Targeted correction for minor front crowding or relapse, up to 14 aligner stages with retention.',
    priceDKK: 18500,
    danmarkReimbursementDKK: 2200
  },
  {
    id: 'p-aligners-dual',
    category: 'Orthodontics & Alignment',
    name: 'Clear Aligners — Comprehensive Dual Arch',
    description: 'Complete dual-arch orthodontic correction, unlimited aligner refinements, clinical checkups, and final Vivera retainers.',
    priceDKK: 28500,
    danmarkReimbursementDKK: 3500,
    popular: true
  },

  // Implants & Oral Surgery
  {
    id: 'p-implant-consult',
    category: 'Implants & Oral Surgery',
    name: 'Surgical Implant Consultation & 3D Planning',
    description: 'Complete surgical assessment with Dr. Magnus Møller, CBCT review, and computer-guided surgical simulation.',
    priceDKK: 950,
    danmarkReimbursementDKK: 350
  },
  {
    id: 'p-straumann-fixture',
    category: 'Implants & Oral Surgery',
    name: 'Swiss Straumann Titanium Implant Fixture',
    description: 'Computer-guided keyhole surgical placement of biocompatible Swiss Roxolid titanium implant body.',
    priceDKK: 9500,
    danmarkReimbursementDKK: 1200
  },
  {
    id: 'p-implant-crown',
    category: 'Implants & Oral Surgery',
    name: 'Custom CAD/CAM Ceramic Implant Crown',
    description: 'Individual screw-retained zirconia crown with custom titanium abutment and anatomical gingival contouring.',
    priceDKK: 7000,
    danmarkReimbursementDKK: 1200
  },
  {
    id: 'p-bone-augmentation',
    category: 'Implants & Oral Surgery',
    name: 'Biomimetic Bone Mineral Augmentation',
    description: 'Localized bone volume preservation and bio-resorbable collagen membrane placement (per site).',
    priceDKK: 3800,
    danmarkReimbursementDKK: 600
  }
];

export const consultationInfo = {
  freeCancellationHours: 24,
  financingAvailable: true,
  financingMinDKK: 5000,
  maxInstallmentMonths: 24,
  danmarkGroupsNotice: 'As an authorized Danish dental clinic, we submit electronic billing directly to Sygeforsikringen "danmark" on your behalf for instant credit.'
};
