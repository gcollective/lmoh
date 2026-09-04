import React from 'react';
import { X, CheckCircle, AlertTriangle, UserCheck, ArrowRight } from 'lucide-react';
import { ServiceDetail } from '../types';

interface ServiceModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onSelectIntake: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onSelectIntake }) => {
  if (!service) return null;

  return (
    <div
      id="service-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="service-modal-card"
        className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-full transition cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30">
            {service.badge}
          </span>
          <h3 className="font-serif-legal text-2xl sm:text-3xl font-bold text-white">
            {service.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            {service.fullDesc}
          </p>
        </div>

        {/* Scope of Support */}
        <div className="mt-6 space-y-3">
          <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400 font-serif-legal flex items-center space-x-1.5">
            <CheckCircle className="w-4 h-4 text-amber-400" />
            <span>What We Provide</span>
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {service.scope.map((item, i) => (
              <li key={i} className="flex items-start space-x-2 bg-slate-950/60 p-2.5 rounded border border-slate-800/60">
                <span className="text-amber-400 font-bold">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Limitations & Boundaries */}
        <div className="mt-6 space-y-3">
          <h4 className="text-xs uppercase tracking-wider font-bold text-slate-300 font-serif-legal flex items-center space-x-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span>Operational Boundaries & Disclaimers</span>
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            {service.limitations.map((item, i) => (
              <li key={i} className="flex items-start space-x-2 bg-slate-950/40 p-2 rounded border border-slate-800/40">
                <span className="text-amber-500/80 font-bold shrink-0">✕</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ideal Candidates */}
        <div className="mt-6 space-y-2">
          <h4 className="text-xs uppercase tracking-wider font-bold text-slate-300 font-serif-legal flex items-center space-x-1.5">
            <UserCheck className="w-4 h-4 text-amber-400" />
            <span>Ideal For</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.idealFor.map((item, i) => (
              <span key={i} className="text-xs px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action CTA */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase font-semibold text-slate-400 hover:text-white transition cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onSelectIntake(service.id);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-amber-500/20 transition cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>Request This Service In Intake</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
