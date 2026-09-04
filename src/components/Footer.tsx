import React from 'react';
import { ExternalLink, ShieldCheck, Scale, HeartHandshake, Database } from 'lucide-react';
import { SUBSTACK_URL } from '../data/content';

interface FooterProps {
  onOpenDisclaimerModal: () => void;
  onOpenArchitecture: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDisclaimerModal,
  onOpenArchitecture
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500 shadow-md shrink-0">
                <img
                  src="/legal_honor_emblem.png"
                  alt="Constituents Men of Legal Honor Emblem"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=120';
                  }}
                />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.35em] text-amber-500 font-bold block mb-0.5">
                  Est. 2026 • Charlotte NC
                </span>
                <span className="block font-serif-editorial italic text-xl font-bold text-white tracking-tight leading-none">
                  Men of Legal Honor <span className="text-amber-500 font-sans-legal font-black not-italic text-sm">Charlotte</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-light">
              Operating within the <strong>No Man Left Behind Organization</strong>. Transforming personal carceral legal victories into professional peer support, legal education, and pro-se advocacy tools.
            </p>

            <div className="text-[10px] font-bold text-amber-500/80 uppercase tracking-[0.3em] font-mono-legal">
              Empowerment • Advocacy • Pro-Se
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif-legal text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition">About Us &amp; Founder Bio</a>
              </li>
              <li>
                <a href="#mission" className="hover:text-amber-400 transition">Our Mission &amp; 3 Pillars</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition">Services &amp; Legal Areas</a>
              </li>
              <li>
                <a href="#intake" className="hover:text-amber-400 transition">Case Intake Form</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Resources & Substack */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif-legal text-xs font-bold text-white uppercase tracking-wider">
              Publications & Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 flex items-center space-x-1 font-semibold"
                >
                  <span>Men of Legal Honor Charlotte Substack</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenDisclaimerModal}
                  className="hover:text-amber-400 transition flex items-center space-x-1 cursor-pointer text-left"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                  <span>Legal Terms of Service & Disclaimer</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenArchitecture}
                  className="hover:text-amber-400 transition flex items-center space-x-1 cursor-pointer text-left"
                >
                  <Database className="w-3.5 h-3.5 text-amber-500/70" />
                  <span>Secure Submission Architecture Spec</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="bg-slate-900/50 border border-slate-900 rounded-xl p-6 space-y-3 max-w-4xl mx-auto text-[11px] text-slate-500 leading-relaxed text-justify">
          <h5 className="font-serif-legal text-slate-400 font-bold uppercase tracking-widest text-center text-xs">
            Institutional Disclaimer & Limitations
          </h5>
          <p>
            <strong>1. No Legal Advice Provided:</strong> The Constituents Men of Legal Honor provides peer mentorship, educational materials, and clerical document formatting assistance. Our services do not constitute licensed legal advice, legal representation, or a substitute for a licensed attorney's counsel.
          </p>
          <p>
            <strong>2. No Attorney-Client Privilege:</strong> Communication with our peer mentors does not initiate an attorney-client relationship. While we hold strict internal confidentiality, communications are not protected by formal attorney-client privilege.
          </p>
          <p>
            <strong>3. Sole Pro-Se Responsibility:</strong> All individuals utilizing our services are representing themselves in their courts as self-represented (pro-se) litigants. The litigant holds 100% responsibility for verifying document accuracy and filing deadlines. We strongly advise having all materials reviewed by a licensed attorney or public defender when available.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600 border-t border-slate-900 pt-8">
          <div>
            &copy; {new Date().getFullYear()} The Constituents Men of Legal Honor. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>No Man Left Behind Collective</span>
            <span>•</span>
            <button onClick={onOpenDisclaimerModal} className="hover:text-slate-400 underline cursor-pointer">
              Terms & Disclaimers
            </button>
            <span>•</span>
            <button onClick={onOpenArchitecture} className="hover:text-slate-400 underline cursor-pointer">
              Architecture Guide
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
