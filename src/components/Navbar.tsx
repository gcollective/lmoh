import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, ShieldCheck, Database, BookOpen, Scale, ArrowRight } from 'lucide-react';
import { SUBSTACK_URL } from '../data/content';

interface NavbarProps {
  onOpenArchitecture: () => void;
  onOpenDisclaimerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenArchitecture,
  onOpenDisclaimerModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-nav-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-amber-500/30 shadow-2xl shadow-black/60'
          : 'bg-slate-950/90 backdrop-blur-sm border-b border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand with Bold Editorial Serif & Micro-Eyebrow */}
          <a
            href="#hero"
            id="nav-brand-link"
            className="flex items-center space-x-3.5 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500 shadow-md shadow-amber-500/20 group-hover:border-amber-400 transition-all shrink-0">
              <img
                src="/legal_honor_emblem.png"
                alt="Constituents Men of Legal Honor Crest"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=120';
                }}
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-[0.35em] text-amber-500 font-bold leading-none mb-1">
                Established 2026
              </span>
              <h1 className="font-serif-editorial italic text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-white leading-none">
                Men of Legal Honor <span className="text-amber-500 font-sans-legal font-black not-italic text-sm sm:text-base tracking-wide">Charlotte</span>
              </h1>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-5 xl:space-x-6 text-[11px] uppercase tracking-widest font-bold">
            <a
              href="#hero"
              id="nav-link-home"
              className="text-slate-400 hover:text-amber-500 transition-colors py-2"
            >
              Home
            </a>
            <a
              href="#about"
              id="nav-link-about"
              className="text-slate-400 hover:text-amber-500 transition-colors py-2 flex items-center space-x-1"
            >
              <span>About Us</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80"></span>
            </a>
            <a
              href="#mission"
              id="nav-link-mission"
              className="text-slate-400 hover:text-amber-500 transition-colors py-2"
            >
              Mission &amp; Pillars
            </a>
            <a
              href="#services"
              id="nav-link-services"
              className="text-slate-400 hover:text-amber-500 transition-colors py-2"
            >
              Services
            </a>
            <a
              href="#blog"
              id="nav-link-blog"
              className="text-slate-400 hover:text-amber-500 transition-colors py-2 flex items-center space-x-1"
            >
              <span>The Journal</span>
              <ExternalLink className="w-3 h-3 text-amber-500" />
            </a>
            <a
              href="#faq"
              id="nav-link-faq"
              className="text-slate-400 hover:text-amber-500 transition-colors py-2"
            >
              FAQ
            </a>
            <button
              id="nav-disclaimer-btn"
              onClick={onOpenDisclaimerModal}
              className="text-slate-500 hover:text-slate-300 transition-colors py-2 flex items-center space-x-1 cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
              <span>Disclaimers</span>
            </button>
            <button
              id="nav-architecture-btn"
              onClick={onOpenArchitecture}
              className="text-slate-500 hover:text-amber-400 transition-colors py-2 flex items-center space-x-1 cursor-pointer"
              title="View Secure Transmission Architecture Blueprint"
            >
              <Database className="w-3.5 h-3.5 text-amber-500/70" />
              <span>Spec</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Primary Case Intake Button */}
            <a
              href="#intake"
              id="nav-case-intake-cta"
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-widest rounded shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all border border-amber-400 flex items-center space-x-1.5"
            >
              <span>Request Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              id="nav-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-slate-950 border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-300 hover:text-amber-400 uppercase tracking-wider"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-300 hover:text-amber-400 uppercase tracking-wider"
          >
            About Us
          </a>
          <a
            href="#mission"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-300 hover:text-amber-400 uppercase tracking-wider"
          >
            Mission &amp; Pillars
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-300 hover:text-amber-400 uppercase tracking-wider"
          >
            Services & Expertise
          </a>
          <a
            href="#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-300 hover:text-amber-400 uppercase tracking-wider flex items-center justify-between"
          >
            <span>Substack Blog</span>
            <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-slate-300 hover:text-amber-400 uppercase tracking-wider"
          >
            FAQ
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDisclaimerModal();
            }}
            className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-400 hover:text-white uppercase tracking-wider flex items-center space-x-2"
          >
            <ShieldCheck className="w-4 h-4 text-slate-500" />
            <span>Legal Disclaimer</span>
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenArchitecture();
            }}
            className="w-full text-left px-3 py-2 text-sm font-semibold text-slate-400 hover:text-amber-400 uppercase tracking-wider flex items-center space-x-2"
          >
            <Database className="w-4 h-4 text-amber-500" />
            <span>Secure Architecture Spec</span>
          </button>
          <div className="pt-2">
            <a
              href="#intake"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-widest rounded shadow-md"
            >
              Submit Case Intake
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
