import React from 'react';
import { Shield, Scale, Award, ArrowRight, BookOpen, ExternalLink, CheckCircle2, ChevronRight } from 'lucide-react';
import { SUBSTACK_URL } from '../data/content';

interface HeroProps {
  onOpenArchitecture: () => void;
  onOpenDisclaimerModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenArchitecture, onOpenDisclaimerModal }) => {
  return (
    <section id="hero" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-slate-950 border-b border-slate-900">
      {/* Subtle radial ambient background light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-10">
          
          {/* Top Eyebrow Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-slate-900 border border-slate-800 text-amber-500 text-[10px] font-bold tracking-[0.35em] uppercase">
              <Shield className="w-3.5 h-3.5 text-amber-500" />
              <span>No Man Left Behind • Charlotte NC</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-[10px] uppercase font-mono-legal text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Substack Live Sync Active</span>
            </div>
          </div>

          {/* Masthead: Large Emblem Directly Beside "The Legal Standard" */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12">
              
              {/* Prominent Large Logo Emblem */}
              <div className="relative group shrink-0">
                {/* Golden Glow Backdrop */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-amber-600/40 via-yellow-500/30 to-amber-700/40 blur-xl opacity-80 group-hover:opacity-100 transition duration-700 pointer-events-none" />
                
                {/* Shield / Seal Frame */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full p-2 bg-gradient-to-b from-amber-400 via-amber-600 to-slate-950 border-4 border-amber-400/90 shadow-2xl shadow-black/80 flex items-center justify-center overflow-hidden bg-slate-950">
                  <img
                    src="/legal_honor_emblem.png"
                    alt="Constituents Men of Legal Honor Official Crest"
                    className="w-full h-full object-contain rounded-full filter contrast-110 brightness-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=450';
                    }}
                  />
                  <div className="absolute inset-0 rounded-full border border-amber-200/40 pointer-events-none" />
                </div>
              </div>

              {/* Massive Headline Beside the Logo */}
              <div className="text-center lg:text-left space-y-3">
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.4em] text-amber-500 font-mono-legal">
                  Constituents Men of Legal Honor
                </div>
                
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter uppercase text-white">
                  The<br />
                  Legal<br />
                  <span className="text-transparent" style={{ WebkitTextStroke: '2.5px #f59e0b' }}>Standard</span>
                </h1>

                <p className="text-slate-300 text-sm sm:text-base uppercase tracking-widest font-semibold text-amber-400/90 font-serif-editorial italic pt-2">
                  Empowering Pro-Se Litigants with UNC Chapel Hill Peer Mentorship
                </p>
              </div>

            </div>
          </div>

          {/* Value Proposition & Substack Highlight Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Col: Mission Narrative & Trust Badges */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                  We are a dedicated collective of skilled, self-taught <strong className="text-white font-semibold">pro-se advocates</strong> and <strong className="text-amber-400 font-semibold">UNC Chapel Hill certified peer support</strong> specialists. We turn lived carceral legal victories into practical education, document preparation, and pro-se empowerment.
                </p>
                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  Navigating the courts without counsel requires meticulous procedural discipline. We help self-represented parties organize court records, understand statutory defenses, and draft clean pro-se filings.
                </p>
              </div>

              {/* Core Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded flex items-start space-x-3">
                  <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-black text-white uppercase tracking-wider">UNC Certified</div>
                    <div className="text-[10px] text-slate-400">Peer Support Specialists</div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded flex items-start space-x-3">
                  <Scale className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-black text-white uppercase tracking-wider">3 Legal Pillars</div>
                    <div className="text-[10px] text-slate-400">Criminal, Civil & Contract</div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-black text-white uppercase tracking-wider">Pro-Se Focused</div>
                    <div className="text-[10px] text-slate-400">Document Prep & Reviews</div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href="#intake"
                  id="hero-request-review-btn"
                  className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-widest rounded shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-colors flex items-center justify-center space-x-2 border border-amber-400"
                >
                  <span>Request Case Review</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-read-substack-btn"
                  className="w-full sm:w-auto px-6 py-4 bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-white border border-slate-700 hover:border-amber-500 font-bold text-xs uppercase tracking-widest rounded transition-colors flex items-center justify-center space-x-2"
                >
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>The Journal</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Col: Editorial Substack Spotlight */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900/70 border border-slate-800 border-l-4 border-l-amber-500 rounded-r-xl p-6 sm:p-7 shadow-xl space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-amber-500 font-bold">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                    <span>Latest From Substack</span>
                  </div>
                  <span className="text-[10px] uppercase font-mono-legal text-slate-400 bg-slate-950 px-2 py-0.5 border border-slate-800 rounded">
                    August 2026
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Understanding Your Foundational Rights: Navigating the North Carolina Pro-Se Landscape
                </h3>

                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  A comprehensive breakdown of state and federal constitutional safeguards, procedural mechanics, Rule 12 dismissal standards, and proactive self-advocacy strategies for North Carolina litigants.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-amber-400 font-mono-legal">7 min read</span>
                  <span className="text-slate-500 font-mono-legal">menoflegalhonorcharlotte.substack.com</span>
                </div>

                <a
                  href="https://menoflegalhonorcharlotte.substack.com/p/understanding-your-foundational-rights?r=90264g&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 text-[11px] font-black uppercase tracking-widest bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 border border-amber-500/40 hover:border-amber-400 py-2.5 transition rounded cursor-pointer"
                >
                  <span>Read Article on Substack</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* System Status Line & Disclaimer Note */}
          <div className="pt-4 border-t border-slate-850 space-y-3">
            <div className="flex flex-wrap items-center justify-between text-[10px] text-slate-500 uppercase tracking-widest font-mono-legal gap-3">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Intake Transmission: 256-Bit SSL Encrypted Direct Dispatch</span>
              </span>
              <span>Substack RSS Feed: Auto-Sync Enabled</span>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              * The Constituents Men of Legal Honor is not a law firm and does not provide formal legal representation or legal advice. All litigants represent themselves pro-se.{' '}
              <button
                onClick={onOpenDisclaimerModal}
                className="text-amber-400 hover:underline inline-block font-bold cursor-pointer"
              >
                Read our full disclaimer.
              </button>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
