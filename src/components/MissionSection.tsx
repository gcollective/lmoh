import React, { useState } from 'react';
import { Users, BookOpen, Scale, ShieldCheck, HeartHandshake, CheckCircle2, Award } from 'lucide-react';
import { MISSION_PILLARS } from '../data/content';

export const MissionSection: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-6 h-6 text-amber-400" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-amber-400" />;
      case 'Scale':
        return <Scale className="w-6 h-6 text-amber-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="mission" className="py-20 md:py-28 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.35em] text-amber-500 uppercase">
            <Scale className="w-3.5 h-3.5 text-amber-500" />
            <span>Guiding Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white">
            Our Mission &amp; Framework
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto" />
          <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Advocating for, mentoring, and empowering self-represented (<em className="text-slate-200 font-medium">pro-se</em>) litigants navigating the judicial system through lived victory and UNC-certified peer mentorship.
          </p>
        </div>

        {/* Origin & Credential Banner */}
        <div className="bg-slate-900/60 border border-slate-800 border-l-4 border-l-amber-500 rounded-r-xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold">
                  UNC Chapel Hill Certified Peer Specialists
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                Lived Experience • Professional Discipline
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                <strong>The Constituents Men of Legal Honor</strong> is a dedicated collective operating within the <strong>No Man Left Behind Organization</strong>. Our members developed deep, practical legal acumen while incarcerated, transforming personal legal battles into a community service of advocacy, literacy, and empowerment.
              </p>
            </div>

            <div className="md:col-span-4 bg-slate-950/80 border border-slate-800 rounded p-6 text-center space-y-1.5">
              <div className="text-4xl sm:text-5xl font-black text-amber-400 leading-none">100%</div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-200">
                Pro-Se Empowerment Focus
              </div>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider font-mono-legal">
                Dignity • Strategy • Filings
              </p>
            </div>
          </div>
        </div>

        {/* Three Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MISSION_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className={`bg-slate-900/50 border rounded p-8 relative overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                activePillar === idx
                  ? 'border-amber-500 border-l-4 shadow-xl shadow-amber-500/10'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
              onMouseEnter={() => setActivePillar(idx)}
            >
              {/* Corner Watermark Number */}
              <div className="absolute top-4 right-6 font-black text-5xl text-slate-800/40 select-none">
                0{pillar.number}
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  {getPillarIcon(pillar.icon)}
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold">
                    Pillar 0{pillar.number}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white mt-1">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs italic text-slate-400 border-l-2 border-amber-500 pl-3 font-serif-editorial">
                  "{pillar.tagline}"
                </p>

                <p className="text-slate-300 text-xs leading-relaxed font-light">
                  {pillar.description}
                </p>

                <div className="border-t border-slate-800 pt-4 space-y-2.5">
                  {pillar.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-amber-500 font-bold uppercase tracking-widest">
                <span>Core Framework</span>
                <span className="font-mono-legal">EST. 2026</span>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment to Integrity Callout */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 sm:p-8 text-center max-w-4xl mx-auto space-y-3">
          <h4 className="font-serif-legal text-lg font-bold text-slate-200">
            Our Commitment to Institutional Integrity
          </h4>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto">
            While we draw upon deep personal experience as highly skilled pro-se litigants, we operate with strict institutional integrity. We do not act as licensed attorneys, nor do we provide formal legal representation. Instead, we champion the dignity of the pro-se litigant, providing the mentorship and tools necessary for individuals to stand up, represent themselves with honor, and make informed choices on their path toward justice.
          </p>
        </div>

      </div>
    </section>
  );
};
