import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.treatments'), path: '/treatments' },
    { name: t('nav.team'), path: '/team' },
    { name: t('nav.pricing'), path: '/pricing' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <>
      {/* Top Announcement & Context Bar */}
      <div className="bg-[#1C201E] text-[#FAF9F6] text-[11px] py-1.5 px-4 tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[#D7D3C8]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#819584]" />
              {t('top.address')}
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#819584]" />
              {t('top.hours')}
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="bg-[#819584]/20 text-[#819584] px-2 py-0.5 rounded text-[10px] uppercase font-medium tracking-widest">
              {t('top.demoBadge')}
            </span>
            <LanguageSwitcher variant="dark" />
            <a
              href="tel:+4533124080"
              className="hidden sm:flex items-center gap-1 hover:text-[#819584] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#819584]" />
              +45 33 12 40 80
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E8E5DD] shadow-xs py-3.5'
            : 'bg-[#FAF9F6] border-b border-[#E8E5DD]/60 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-3">
              <div className="w-9 h-9 bg-[#1C201E] text-[#FAF9F6] flex items-center justify-center rounded-sm transition-transform duration-300 group-hover:bg-[#47584A]">
                <svg
                  className="w-5 h-5 text-[#FAF9F6]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 19C7 13.5 9.5 9 12 9C14.5 9 17 13.5 17 19" />
                  <path d="M12 5V2" />
                  <circle cx="12" cy="14" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.2em] text-lg font-normal text-[#1C201E] leading-tight">
                  AURA
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#8F8B82] font-medium">
                  Dental Studio • CPH
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `text-xs tracking-[0.1em] uppercase font-medium transition-colors duration-200 relative py-1 ${
                      isActive
                        ? 'text-[#1C201E] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#819584]'
                        : 'text-[#5C645F] hover:text-[#1C201E]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <LanguageSwitcher variant="light" />
              <Link
                to="/book"
                className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-medium px-4 py-2.5 bg-[#1C201E] text-[#FAF9F6] hover:bg-[#47584A] transition-all duration-300 rounded-sm shadow-xs"
              >
                <span>{t('nav.bookBtn')}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D7D3C8]" />
              </Link>
            </div>

            {/* Mobile Actions: Language + Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <LanguageSwitcher variant="light" />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#1C201E] hover:text-[#47584A] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#FAF9F6] border-b border-[#E8E5DD] px-4 pt-4 pb-6 mt-3 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `text-sm tracking-wider uppercase px-3 py-2 rounded-sm transition-colors ${
                      isActive
                        ? 'bg-[#E8EFE9] text-[#2D3A30] font-semibold'
                        : 'text-[#1C201E] hover:bg-[#F3F1EA]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E8E5DD] space-y-3">
              <Link
                to="/book"
                className="w-full flex items-center justify-center gap-2 text-xs tracking-widest uppercase font-medium px-4 py-3 bg-[#1C201E] text-[#FAF9F6] hover:bg-[#47584A] rounded-sm transition-colors"
              >
                <span>{t('nav.bookBtn')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="text-xs text-[#5C645F] space-y-1.5 px-3 pt-2">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#819584]" />
                  {t('top.address')}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#819584]" />
                  +45 33 12 40 80
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#819584]" />
                  {t('top.hours')}
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
