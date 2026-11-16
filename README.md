# AURA Dental Studio — Copenhagen

A premium multi-page Scandinavian healthcare web application for **AURA Dental Studio**, an architectural private dental clinic in Frederiksstaden, Copenhagen, Denmark.

**Live Demo:** [https://berrring.github.io/dental/](https://berrring.github.io/dental/)  
**GitHub Repository:** [https://github.com/berrring/dental](https://github.com/berrring/dental)

---

## ✦ Design Philosophy

Designed around the principles of **Slow Dentistry** and Scandinavian minimalism:
- **Calm Color Palette**: Warm alabaster (`#FAF9F6`), soft sage (`#819584`), muted stone (`#E8E5DD`), and deep charcoal (`#1C201E`).
- **Refined Typography**: Balanced sans-serif typography (`Plus Jakarta Sans`) paired with delicate editorial serif italic accents.
- **Sensory Architecture**: Low-anxiety clinical experience featuring Douglas fir timber acoustics, heated 37°C water delivery, and noise-canceling audio.
- **Danish Cultural Authenticity**: Realistic DKK tariffs, Frederiksstaden address (*Bredgade 34*), Copenhagen Metro transit guides (*Kongens Nytorv & Marmorkirken*), and *Sygeforsikringen "danmark"* reimbursement integration notes.

---

## ✦ Multilingual Support (EN / RU)

- **Instant Language Switching**: Seamless toggle between English and Russian (`EN | RU`) with zero page reload.
- **State Persistence**: Selected language persists in `localStorage` across user sessions.
- **Full Localization**: Covers all navigation, clinical treatments, doctor profiles, pricing schedules, dynamic comparison tools, and the interactive 5-step booking wizard.

---

## ✦ Pages & Key Features

1. **Home (`/`)**: Asymmetrical hero, philosophy pillars, treatment spotlights, specialist highlights, interactive comparison tool, studio atmosphere, and FAQ accordion.
2. **Treatments (`/treatments`)**: Filterable directory (*Preventive, Restorative, Cosmetic, Orthodontics, Implants*) with instant search and procedure cards.
3. **Treatment Details (`/treatments/:slug`)**: Deep-dive clinical pages with 4-stage procedural walkthroughs, benefits grids, candidate suitability, aftercare guides, and dedicated FAQs.
4. **Our Team (`/team`)**: Profiles for Dr. Astrid Lindholm, Dr. Magnus Møller, Dr. Freja Vestergaard, and Emilie Dahl with Danish credentials, academic backgrounds, and clinic schedules.
5. **Pricing & Fees (`/pricing`)**: Itemized procedure schedule in DKK, **Interactive Treatment Fee Estimator** with *Sygeforsikringen "danmark"* subsidy calculator, and *Sundhedskonto* 0% installment plans.
6. **About Studio (`/about`)**: Clinic philosophy on dental anxiety, acoustic design, 5-stage patient journey, and 100% Danish wind-powered environmental commitment.
7. **Book Appointment (`/book`)**: **Interactive 5-Step Booking Wizard**:
   - Step 1: Treatment Discipline
   - Step 2: Preferred Specialist (or First Available)
   - Step 3: Copenhagen Date & Time Slot
   - Step 4: Patient Info, Dental Anxiety Protocol & "danmark" Insurance Toggle
   - Step 5: Summary Review & Staged Demo Confirmation Modal with copyable booking reference (`AUR-CPH-XXXX`).
8. **Contact (`/contact`)**: Location details, opening hours, Copenhagen Metro transit & parking guide, emergency dental contact (*Tandlægevagten*), and contact form with validation.

---

## ✦ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages (Automated GitHub Actions CI/CD)

---

## ✦ Local Development

```bash
# Clone the repository
git clone https://github.com/berrring/dental.git
cd dental

# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build
```

---

## ✦ Deployment

This project deploys automatically to GitHub Pages on every push to `main` via the GitHub Actions workflow in `.github/workflows/deploy.yml`.

Alternatively, deploy manually using:
```bash
npm run deploy
```

---

*Note: AURA Dental Studio is an illustrative frontend portfolio project for demonstration purposes. All procedures, staff profiles, and DKK pricing are realistic fictional examples.*
