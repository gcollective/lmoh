import React from 'react';
import { X, ShieldAlert, Scale, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { LEGAL_DISCLAIMERS } from '../data/content';

interface LegalDisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalDisclaimerModal: React.FC<LegalDisclaimerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="disclaimer-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="disclaimer-modal-card"
        className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-4xl w-full max-h-[90vh] shadow-2xl relative flex flex-col overflow-hidden text-left my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/90">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 font-serif-legal">
                Official Institutional Terms
              </span>
              <h2 className="font-serif-legal text-xl sm:text-2xl font-bold text-white">
                Legal Disclaimer & Terms of Service
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full transition cursor-pointer"
            aria-label="Close disclaimer modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-8 space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed">
          <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded-xl space-y-1 text-amber-200">
            <div className="font-bold uppercase tracking-wider text-amber-400 font-serif-legal text-xs">
              Peer-to-Peer Support & Pro-Se Advocacy Initiative
            </div>
            <p className="text-xs text-slate-300">
              The Constituents Men of Legal Honor is a peer support initiative operating within the No Man Left Behind Organization. Please review these operational limitations carefully.
            </p>
          </div>

          <div className="space-y-6">
            {LEGAL_DISCLAIMERS.map((disc, idx) => (
              <div key={idx} className="space-y-2 bg-slate-950/60 p-5 rounded-xl border border-slate-800/80">
                <h3 className="font-serif-legal text-sm sm:text-base font-bold text-white flex items-center space-x-2">
                  <Scale className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{disc.title}</span>
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  {disc.text}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs">
            <h4 className="font-serif-legal font-bold text-slate-200 uppercase">
              Acknowledgment of Terms
            </h4>
            <p className="text-slate-400 leading-relaxed">
              By accessing this website or utilizing our peer-to-peer services, you acknowledge that you have read, understood, and agreed to the terms of this Legal Disclaimer. You understand that you are proceeding as a self-represented litigant and that our role is strictly limited to non-professional peer support, case evaluation, and document preparation assistance.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition cursor-pointer"
          >
            I Understand & Agree
          </button>
        </div>

      </div>
    </div>
  );
};
