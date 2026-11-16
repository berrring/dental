import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ShieldCheck, Heart, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1C201E] text-[#FAF9F6] border-t border-[#2D3A30]">
      {/* Upper Pre-footer Banner */}
      <div className="border-b border-[#2D3A30] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#2D3A30] flex items-center justify-center shrink-0 text-[#819584]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium tracking-wide text-[#FAF9F6]">{t('footer.danmarkTitle')}</h4>
              <p className="text-xs text-[#8F8B82] mt-1 leading-relaxed">
                {t('footer.danmarkDesc')}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#2D3A30] flex items-center justify-center shrink-0 text-[#819584]">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium tracking-wide text-[#FAF9F6]">{t('footer.calmTitle')}</h4>
              <p className="text-xs text-[#8F8B82] mt-1 leading-relaxed">
                {t('footer.calmDesc')}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#2D3A30] flex items-center justify-center shrink-0 text-[#819584]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium tracking-wide text-[#FAF9F6]">{t('footer.emergencyTitle')}</h4>
              <p className="text-xs text-[#8F8B82] mt-1 leading-relaxed">
                {t('footer.emergencyDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#819584] text-[#1C201E] flex items-center justify-center rounded-sm font-bold text-sm">
                A
              </div>
              <span className="font-serif tracking-[0.2em] text-lg font-normal text-[#FAF9F6]">
                AURA DENTAL STUDIO
              </span>
            </div>
            <p className="text-xs text-[#8F8B82] leading-relaxed max-w-sm">
              {t('footer.brandDesc')}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2D3A30]/60 border border-[#47584A] rounded-sm text-[11px] text-[#D7D3C8]">
                <span>{t('footer.windPower')}</span>
              </div>
              <LanguageSwitcher variant="dark" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D7D3C8] mb-4">
              {t('footer.explore')}
            </h5>
            <ul className="space-y-2.5 text-xs text-[#8F8B82]">
              <li>
                <Link to="/treatments" className="hover:text-[#FAF9F6] transition-colors">
                  {t('nav.treatments')}
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#FAF9F6] transition-colors">
                  {t('nav.team')}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#FAF9F6] transition-colors">
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FAF9F6] transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/book" className="hover:text-[#FAF9F6] transition-colors">
                  {t('nav.bookBtn')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FAF9F6] transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatments Directory */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D7D3C8] mb-4">
              {t('footer.treatments')}
            </h5>
            <ul className="space-y-2.5 text-xs text-[#8F8B82]">
              <li>
                <Link to="/treatments/dental-cleaning" className="hover:text-[#FAF9F6] transition-colors">
                  Airflow Hygiene
                </Link>
              </li>
              <li>
                <Link to="/treatments/general-dentistry" className="hover:text-[#FAF9F6] transition-colors">
                  Biomimetic Fillings
                </Link>
              </li>
              <li>
                <Link to="/treatments/teeth-whitening" className="hover:text-[#FAF9F6] transition-colors">
                  Supervised Whitening
                </Link>
              </li>
              <li>
                <Link to="/treatments/orthodontics" className="hover:text-[#FAF9F6] transition-colors">
                  Clear Aligners
                </Link>
              </li>
              <li>
                <Link to="/treatments/dental-implants" className="hover:text-[#FAF9F6] transition-colors">
                  Swiss Dental Implants
                </Link>
              </li>
              <li>
                <Link to="/treatments/cosmetic-dentistry" className="hover:text-[#FAF9F6] transition-colors">
                  Porcelain Veneers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#D7D3C8] mb-4">
              {t('footer.studioHours')}
            </h5>
            <div className="space-y-3 text-xs text-[#8F8B82]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#819584] shrink-0 mt-0.5" />
                <span>Bredgade 34, 1. sal<br />1260 København K, Denmark</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#819584]" />
                <span>+45 33 12 40 80</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#819584]" />
                <span>kontakt@auradental.dk</span>
              </p>
              <div className="pt-2 text-[11px] border-t border-[#2D3A30]">
                <p className="text-[#FAF9F6] font-medium">{t('contact.hoursTitle')}</p>
                <p className="text-[#8F8B82] mt-0.5">Mon–Fri: 07:30 – 18:00</p>
                <p className="text-[#8F8B82]">Saturday: 09:00 – 14:00</p>
                <p className="text-[#8F8B82]">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer Box */}
        <div className="mt-12 p-4 rounded-sm bg-[#2D3A30]/40 border border-[#47584A]/60 text-xs text-[#8F8B82] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#819584] shrink-0" />
            <span className="text-[#FAF9F6] font-medium">Demo Project Notice:</span>
            <span>{t('footer.demoNotice')}</span>
          </div>
          <span className="text-[11px] text-[#8F8B82] shrink-0">
            Fictional clinic • Sample Danish DKK pricing
          </span>
        </div>

        {/* Bottom Credits */}
        <div className="mt-8 pt-6 border-t border-[#2D3A30] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#8F8B82]">
          <p>© {new Date().getFullYear()} AURA Dental Studio ApS • CVR: 41 89 23 10 (Demo). {t('footer.rights')}</p>
          <div className="flex items-center gap-6">
            <span>Authorised Danish Dental Practice Code: 6291-CPH</span>
            <span className="hover:text-[#FAF9F6] transition-colors cursor-pointer">Privacy & GDPR</span>
            <span className="hover:text-[#FAF9F6] transition-colors cursor-pointer">Patient Rights (Sundhed.dk)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
