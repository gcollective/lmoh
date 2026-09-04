import React, { useState } from 'react';
import { FileText, Search, ShieldAlert, HeartHandshake, ArrowRight, CheckCircle, Scale, Shield, FileCheck, ArrowUpRight } from 'lucide-react';
import { LEGAL_SERVICES } from '../data/content';
import { ServiceDetail } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onSelectServiceForIntake: (serviceCategory: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForIntake }) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-6 h-6 text-amber-400" />;
      case 'Search':
        return <Search className="w-6 h-6 text-amber-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-amber-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-amber-400" />;
      default:
        return <FileCheck className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-900 border-b border-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.35em] text-amber-500 uppercase">
            <Shield className="w-3.5 h-3.5 text-amber-500" />
            <span>Practical &amp; Peer Support</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white">
            Professional Services
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto" />
          <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed">
            A comprehensive suite of legal education and peer support services designed to guide pro-se litigants through each stage of courtroom challenge.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEGAL_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-slate-950/80 border border-slate-800 hover:border-amber-500 rounded p-8 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-black/60"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-slate-900 border border-slate-700 text-amber-400">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-mono-legal mb-1">
                    Service 0{index + 1}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed font-light">
                  {service.shortDesc}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-900">
                  {service.scope.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-850 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-[11px] font-bold uppercase tracking-widest text-amber-400 hover:text-amber-300 flex items-center space-x-1 cursor-pointer"
                >
                  <span>Scope &amp; Limitations</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href="#intake"
                  onClick={() => onSelectServiceForIntake(service.id)}
                  className="px-4 py-2 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-[11px] font-bold uppercase tracking-widest rounded-none border border-slate-700 hover:border-amber-400 transition-all flex items-center space-x-1"
                >
                  <span>Request</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Areas of Legal Expertise Section */}
        <div className="bg-slate-950 border border-slate-800 rounded p-8 sm:p-12 space-y-10 shadow-2xl">
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] uppercase tracking-[0.35em] text-amber-500 font-bold">
              Foundational Disciplines
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
              Areas of Legal Expertise
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              Through years of direct courtroom litigation and extensive law library research, our members have mastered three key legal disciplines:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Criminal Law */}
            <div className="p-6 bg-slate-900/80 border-l-4 border-amber-500 rounded-r space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono-legal font-black text-amber-400 text-lg">01</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-slate-950 px-2 py-0.5 rounded">
                  Defenses &amp; Rights
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white">
                Criminal Law
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Navigating state and federal indictments, Fourth/Fifth/Sixth Amendment procedural safeguards, discovery requests, suppression motions, and plea audit strategies.
              </p>
            </div>

            {/* Civil Law */}
            <div className="p-6 bg-slate-900/80 border-l-4 border-amber-500 rounded-r space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono-legal font-black text-amber-400 text-lg">02</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-slate-950 px-2 py-0.5 rounded">
                  Remedies &amp; Standing
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white">
                Civil Law
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Understanding legal liabilities, statutory causes of action, constitutional rights violations (§ 1983 claims), injunction requests, and civil damage remedies.
              </p>
            </div>

            {/* Contract Law */}
            <div className="p-6 bg-slate-900/80 border-l-4 border-amber-500 rounded-r space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono-legal font-black text-amber-400 text-lg">03</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-slate-950 px-2 py-0.5 rounded">
                  Agreements &amp; Clauses
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white">
                Contract Law
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Reviewing, preparing, and analyzing covenants, breach claims, release clauses, mediation terms, settlement stipulations, and commercial agreements.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Deep-dive Service Scope Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectIntake={(serviceId) => {
          onSelectServiceForIntake(serviceId);
          const intakeEl = document.getElementById('intake');
          intakeEl?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
    </section>
  );
};
