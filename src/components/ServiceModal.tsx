import React from 'react';
import { X, Check, AlertCircle, Target, ArrowRight } from 'lucide-react';
import { ServiceDetail } from '../types';

interface ServiceModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onSelectIntake: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onSelectIntake }) => {
  if (!service) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 sm:items-center">
          <div
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-lg shadow-2xl transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-200 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="space-y-6 p-6 sm:p-8">
              {/* Header */}
              <div className="pr-8 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-slate-950 border border-slate-700 text-amber-400">
                    {service.badge}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                  {service.title}
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-800" />

              {/* Scope of Services */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-amber-500" />
                  <h3 className="text-base font-bold uppercase tracking-tight text-white">
                    Scope of Services
                  </h3>
                </div>
                <ul className="space-y-2 ml-7">
                  {service.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-slate-300">
                      <span className="text-amber-500 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-800" />

              {/* Limitations */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  <h3 className="text-base font-bold uppercase tracking-tight text-white">
                    Important Limitations
                  </h3>
                </div>
                <ul className="space-y-2 ml-7">
                  {service.limitations.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-slate-300">
                      <span className="text-amber-500 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-800" />

              {/* Ideal For */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-amber-500" />
                  <h3 className="text-base font-bold uppercase tracking-tight text-white">
                    Ideal For
                  </h3>
                </div>
                <ul className="space-y-2 ml-7">
                  {service.idealFor.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-slate-300">
                      <span className="text-amber-500 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-800" />

              {/* Actions */}
              <div className="flex flex-col-reverse sm:flex-row gap-3 justify-end">
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 bg-slate-950 hover:bg-slate-800 text-slate-200 text-[11px] font-bold uppercase tracking-widest rounded border border-slate-700 hover:border-slate-600 transition-all"
                >
                  Close
                </button>
                <button
                  onClick={() => onSelectIntake(service.id)}
                  className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-bold uppercase tracking-widest rounded border border-amber-500 hover:border-amber-400 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Request Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
