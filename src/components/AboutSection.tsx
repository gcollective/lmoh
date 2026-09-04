import React, { useState } from 'react';
import { 
  ShieldAlert, 
  BrainCircuit, 
  Scale, 
  HeartHandshake, 
  Award, 
  BookOpen, 
  GraduationCap, 
  RefreshCw, 
  Users, 
  Mic, 
  Building, 
  CheckCircle2, 
  ExternalLink, 
  FileText, 
  Medal, 
  Sparkles, 
  ArrowRight,
  X,
  Compass,
  AlertCircle,
  Maximize2,
  ZoomIn
} from 'lucide-react';
import { FOUNDER_BIO_DATA } from '../data/content';

interface AboutSectionProps {
  onOpenDisclaimerModal: () => void;
  onSelectServiceForIntake?: (serviceId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  onOpenDisclaimerModal,
  onSelectServiceForIntake 
}) => {
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'framework' | 'experience' | 'programs'>('overview');

  const getFrameworkIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-amber-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-amber-400" />;
      case 'Scale':
        return <Scale className="w-6 h-6 text-amber-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-amber-400" />;
      default:
        return <Scale className="w-6 h-6 text-amber-400" />;
    }
  };

  const getOfferingIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-amber-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-amber-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-amber-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-amber-400" />;
      case 'Mic':
        return <Mic className="w-5 h-5 text-amber-400" />;
      case 'Building':
        return <Building className="w-5 h-5 text-amber-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-950 border-b border-slate-900 relative">
      {/* Subtle Background Lighting Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.35em] text-amber-500 uppercase">
            <Compass className="w-3.5 h-3.5 text-amber-500" />
            <span>Leadership &amp; Institutional Literacy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white">
            About Us
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto" />
          <p className="text-amber-400 font-semibold text-sm sm:text-base tracking-wide uppercase font-serif-editorial italic">
            Empowering the Public with Legal Education Assistance and Peer Mentorship.
          </p>
          <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto pt-1">
            Grounded in lived institutional experience, veteran leadership, and educational frameworks dedicated to early system-contact prevention, accountability, and second chances.
          </p>
        </div>

        {/* Executive Profile Card */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            
            {/* Portrait & Badges Column */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-5">
              <div 
                className="relative group cursor-pointer"
                onClick={() => setIsPhotoModalOpen(true)}
                title="Click to view full portrait"
              >
                <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden border-2 border-amber-500/70 shadow-2xl shadow-amber-500/20 bg-slate-950 flex items-center justify-center relative ring-4 ring-amber-500/10">
                  <img
                    src="/pomelli_photoshoot_image_2k_0903.png"
                    alt={`${FOUNDER_BIO_DATA.name} - Founder & Lead Literacy Educator`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/abdullah_malik_portrait.jpg';
                    }}
                  />
                  {/* Subtle overlay gradient & expand hint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 bg-slate-950/90 px-3 py-1 rounded-full border border-amber-500/40 flex items-center space-x-1.5 shadow-lg">
                      <Maximize2 className="w-3 h-3 text-amber-400" />
                      <span>View Portrait</span>
                    </span>
                  </div>
                </div>

                {/* Veteran Seal Badge */}
                <div 
                  className="absolute -bottom-3 -right-2 bg-slate-950 border border-amber-500/80 rounded-full p-2 text-amber-400 shadow-xl" 
                  title="U.S. Army Veteran"
                >
                  <Medal className="w-5 h-5" />
                </div>

                {/* Zoom indicator badge */}
                <div 
                  className="absolute top-2 right-2 bg-slate-950/80 backdrop-blur-sm border border-slate-700/80 rounded-full p-1.5 text-slate-300 opacity-80 group-hover:opacity-100 group-hover:text-amber-400 transition" 
                  title="Enlarge Photo"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                  {FOUNDER_BIO_DATA.name}
                </h3>
                <p className="text-amber-500 font-mono-legal text-xs tracking-wider uppercase font-semibold mt-1">
                  Founder &amp; Lead Literacy Educator
                </p>
              </div>

              {/* Badges List */}
              <div className="flex flex-wrap gap-1.5 justify-center max-w-xs">
                <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] uppercase font-bold text-amber-300">
                  <Medal className="w-3 h-3 text-amber-400" />
                  <span>U.S. Army Veteran</span>
                </span>
                <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-[10px] uppercase font-bold text-slate-200">
                  <Award className="w-3 h-3 text-amber-400" />
                  <span>UNC Certified Specialist</span>
                </span>
                <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-[10px] uppercase font-bold text-slate-200">
                  <BookOpen className="w-3 h-3 text-amber-400" />
                  <span>Author &amp; Pro Se Litigant</span>
                </span>
              </div>

              <button
                id="view-full-bio-btn"
                onClick={() => setIsBioModalOpen(true)}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-500/50 text-white text-xs font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center space-x-2 cursor-pointer shadow"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Read Full Biography Narrative</span>
              </button>
            </div>

            {/* Core Narrative & Philosophy Column */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Mission Purpose Box */}
              <div className="bg-slate-950/90 border-l-4 border-l-amber-500 border border-slate-800/80 rounded-r-lg p-5 sm:p-6 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-bold flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Core Guiding Purpose</span>
                </span>
                <blockquote className="text-base sm:text-xl font-serif-editorial italic text-slate-100 font-bold leading-snug">
                  &ldquo;{FOUNDER_BIO_DATA.missionStatement}&rdquo;
                </blockquote>
                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed pt-1">
                  Helping youth, adults, and pro-se litigants understand the relationship between choices, institutional rules, accountability, and opportunity—so they can protect their freedom and preserve their potential.
                </p>
              </div>

              {/* Biography Summary Paragraphs */}
              <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  <strong>N. A-A Abdullah-Malik</strong> is a legal literacy advocate, institutional navigation educator, author, entrepreneur, and United States Army Veteran whose life work is dedicated to prevention, accountability, reentry, and second chances. He helps individuals navigate the formal systems that shape their lives—particularly schools, courts, correctional institutions, and administrative agencies where a lack of procedural knowledge can lead to life-altering consequences.
                </p>
                <p>
                  As a self-taught pro-se litigant with decades of lived institutional experience, Abdullah-Malik has pursued legal matters before the <strong>United States Supreme Court</strong>, <strong>nine of the eleven Federal Circuit Courts of Appeals</strong>, and numerous state tribunals. These experiences forged an uncompromising discipline for procedural compliance, recordkeeping, filing mechanics, and deadline management.
                </p>
              </div>

              {/* Author Showcase: Rumble Young Man & Book Links */}
              <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-amber-500/30 rounded-lg p-5 sm:p-6 space-y-3 shadow-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span className="text-[11px] uppercase tracking-wider font-bold text-amber-400">
                      Author of <em>Rumble Young Man</em>
                    </span>
                  </div>
                  <span className="text-[10px] font-mono-legal text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    Memoir &amp; Institutional Guide
                  </span>
                </div>
                
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  A memoir exploring 39 years navigating carceral systems, personal transformation, accountability, and recovery through the Mecklenburg County Sheriff’s Office program.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={FOUNDER_BIO_DATA.bookLinks.bookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider rounded transition-all flex items-center space-x-1.5 shadow-md shadow-amber-500/20"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Explore Abdullah-Malik&apos;s Book</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={FOUNDER_BIO_DATA.bookLinks.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-950/80 hover:bg-emerald-900/90 border border-emerald-600/50 hover:border-emerald-500 text-emerald-300 text-xs font-bold uppercase tracking-wider rounded transition-all flex items-center space-x-1.5 shadow"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Listen on Spotify</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  </a>

                  <a
                    href="#blog"
                    className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider rounded transition-all flex items-center space-x-1.5"
                  >
                    <span>Read The Journal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Section Interactive Tabs */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-800 pb-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              1. Institutional Navigation
            </button>
            <button
              onClick={() => setActiveTab('framework')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                activeTab === 'framework'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              2. Prevention Framework &amp; Yale Moment
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                activeTab === 'experience'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              3. Lived Courtroom Experience
            </button>
            <button
              onClick={() => setActiveTab('programs')}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                activeTab === 'programs'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              4. Speaking &amp; Workshops
            </button>
          </div>

          {/* TAB 1: OVERVIEW & INSTITUTIONAL LITERACY */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-6 space-y-3">
                <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white uppercase tracking-tight">
                  What Legal Literacy Means
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Legal literacy does not mean pretending to be a lawyer. It means knowing enough to recognize the seriousness of a situation, preserve critical documentation, ask informed questions, follow procedural rules, and seek qualified counsel when necessary.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-6 space-y-3">
                <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white uppercase tracking-tight">
                  Where Troubles Begin
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Many legal problems begin long before an arrest or court appearance—with an impulsive response, a misunderstanding of school or workplace policy, poor recordkeeping, emotional escalation, or failing to recognize how a momentary act impacts your record.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-6 space-y-3">
                <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white uppercase tracking-tight">
                  Accountability &amp; Hope
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  Past mistakes do not have to become a permanent identity. By rejecting the romanticization of crime and carceral culture while embracing recovery, emotional discipline, and service, individuals can create an honorable path forward.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: PREVENTION FRAMEWORK & YALE MOMENT */}
          {activeTab === 'framework' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              {FOUNDER_BIO_DATA.preventionFramework.map((item, idx) => (
                <div 
                  key={item.title}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 sm:p-7 space-y-4 hover:border-amber-500/40 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                      {getFrameworkIcon(item.icon)}
                    </div>
                    <span className="text-[10px] font-mono-legal text-amber-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800 uppercase">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white uppercase tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-amber-400/90 font-medium mt-0.5">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                    {item.keyPoints.map((pt) => (
                      <div key={pt} className="flex items-start space-x-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: LIVED COURTROOM EXPERIENCE */}
          {activeTab === 'experience' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {FOUNDER_BIO_DATA.institutionalExperience.map((exp) => (
                  <div key={exp.level} className="bg-slate-900/60 border border-slate-800 rounded-lg p-5 space-y-2.5">
                    <span className="inline-block px-2 py-0.5 text-[9px] uppercase font-mono-legal font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded">
                      {exp.badge}
                    </span>
                    <h5 className="text-sm font-bold text-white uppercase tracking-tight">
                      {exp.level}
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {exp.summary}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900/40 border border-slate-800 rounded-lg p-6 text-center max-w-3xl mx-auto space-y-2">
                <h4 className="text-sm uppercase font-bold text-slate-200">
                  Decades of Formal System Experience
                </h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Navigating high-stakes legal venues requires deep procedural discipline, statutory research, timely clerical submissions, and exact compliance with local rules of practice.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: SPEAKING & WORKSHOPS */}
          {activeTab === 'programs' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {FOUNDER_BIO_DATA.speakingOfferings.map((offering) => (
                  <div 
                    key={offering.title}
                    className="bg-slate-900/50 border border-slate-800 hover:border-amber-500/40 rounded-lg p-5 space-y-3 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                        {getOfferingIcon(offering.icon)}
                      </div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-tight">
                        {offering.title}
                      </h4>
                      <p className="text-[10px] uppercase tracking-wider font-mono-legal text-amber-400">
                        {offering.audience}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed font-light">
                        {offering.description}
                      </p>
                    </div>

                    <a
                      href="#intake"
                      onClick={() => onSelectServiceForIntake && onSelectServiceForIntake('peer-support')}
                      className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider flex items-center justify-between"
                    >
                      <span>Inquire for Engagement</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Prominent Non-Attorney Educational Disclaimer Banner */}
        <div className="bg-slate-950 border border-amber-500/30 rounded-lg p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              <strong className="text-slate-200">Legal Literacy Disclaimer:</strong> {FOUNDER_BIO_DATA.disclaimer}
            </p>
          </div>
          <button
            onClick={onOpenDisclaimerModal}
            className="shrink-0 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer whitespace-nowrap"
          >
            Review Disclaimers
          </button>
        </div>

      </div>

      {/* FULL BIOGRAPHY MODAL DIALOG */}
      {isBioModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-amber-500/40 rounded-xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-fade-in">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-800 bg-slate-950/90">
              <div className="flex items-center space-x-3.5">
                <div 
                  className="w-12 h-12 rounded-xl border border-amber-500/70 overflow-hidden shrink-0 cursor-pointer shadow ring-2 ring-amber-500/20"
                  onClick={() => setIsPhotoModalOpen(true)}
                  title="Click to enlarge portrait"
                >
                  <img
                    src="/pomelli_photoshoot_image_2k_0903.png"
                    alt={FOUNDER_BIO_DATA.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/abdullah_malik_portrait.jpg';
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
                    {FOUNDER_BIO_DATA.name}
                  </h3>
                  <p className="text-xs font-mono-legal text-amber-400">
                    Institutional Literacy &amp; Prevention Narrative
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsBioModalOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close bio modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body - Full Narrative */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              
              {/* Featured Author & Founder Spotlight Card in Modal */}
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-slate-950/90 border border-amber-500/30 mb-2">
                <div 
                  className="w-24 h-28 rounded-lg overflow-hidden border border-amber-500/60 shrink-0 cursor-pointer group relative shadow-md"
                  onClick={() => setIsPhotoModalOpen(true)}
                  title="Click to view full photo"
                >
                  <img
                    src="/pomelli_photoshoot_image_2k_0903.png"
                    alt={FOUNDER_BIO_DATA.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/abdullah_malik_portrait.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start space-x-2">
                    <h4 className="text-base font-black text-white uppercase tracking-tight">
                      {FOUNDER_BIO_DATA.name}
                    </h4>
                    <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">
                      Veteran
                    </span>
                  </div>
                  <p className="text-xs text-amber-400 font-medium">
                    Legal Literacy Advocate • Institutional Navigation Educator • Author of &ldquo;Rumble Young Man&rdquo;
                  </p>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    U.S. Army Veteran • UNC Chapel Hill Certified Peer Support Specialist • 39 Years Judicial Navigation Across 9 Federal Circuit Courts &amp; SCOTUS
                  </p>
                </div>
              </div>

              {FOUNDER_BIO_DATA.fullNarrative.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* In-Modal Book Links */}
              <div className="mt-6 p-4 rounded-lg bg-slate-950/90 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Explore &ldquo;Rumble Young Man&rdquo; by N. A-A Abdullah-Malik
                  </h4>
                  <p className="text-[11px] text-slate-400 font-light">
                    Available in print/digital and as an audio release on Spotify.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={FOUNDER_BIO_DATA.bookLinks.bookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-bold uppercase tracking-wider rounded transition-all flex items-center space-x-1"
                  >
                    <span>Read Book</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={FOUNDER_BIO_DATA.bookLinks.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-emerald-950 border border-emerald-600/50 text-emerald-300 text-[11px] font-bold uppercase tracking-wider rounded transition-all flex items-center space-x-1"
                  >
                    <span>Spotify</span>
                    <ExternalLink className="w-3 h-3 text-emerald-400" />
                  </a>
                </div>
              </div>

              {/* In-Modal Disclaimer */}
              <div className="mt-4 p-4 rounded bg-slate-950 border border-amber-500/20 text-xs text-slate-400">
                <p className="font-semibold text-amber-400 mb-1">
                  Disclaimer Notice:
                </p>
                <p>
                  {FOUNDER_BIO_DATA.disclaimer}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950 flex justify-between items-center">
              <span className="text-[11px] font-mono-legal text-slate-500">
                Men of Legal Honor • Charlotte
              </span>
              <button
                onClick={() => setIsBioModalOpen(false)}
                className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded cursor-pointer"
              >
                Close Biography
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX / FULL PHOTO VIEWER MODAL */}
      {isPhotoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <div 
            className="bg-slate-900 border border-amber-500/50 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-fade-in relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
              <div className="flex items-center space-x-2">
                <Medal className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  {FOUNDER_BIO_DATA.name}
                </span>
              </div>
              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
                aria-label="Close photo view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 sm:p-6 flex flex-col items-center">
              <div className="w-full max-w-sm aspect-square rounded-xl overflow-hidden border-2 border-amber-500/50 shadow-2xl bg-slate-950">
                <img
                  src="/pomelli_photoshoot_image_2k_0903.png"
                  alt={FOUNDER_BIO_DATA.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/abdullah_malik_portrait.jpg';
                  }}
                />
              </div>

              <div className="mt-4 text-center space-y-1 w-full">
                <h4 className="text-lg font-black text-white uppercase tracking-tight">
                  {FOUNDER_BIO_DATA.name}
                </h4>
                <p className="text-xs text-amber-400 font-mono-legal tracking-wider uppercase font-semibold">
                  Founder &amp; Lead Institutional Literacy Educator
                </p>
                <p className="text-[11px] text-slate-400 font-light max-w-sm mx-auto pt-1">
                  U.S. Army Veteran, Author of &ldquo;Rumble Young Man&rdquo;, and UNC Chapel Hill Certified Peer Support Specialist.
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-slate-950 border-t border-slate-800 flex justify-between items-center">
              <a
                href={FOUNDER_BIO_DATA.bookLinks.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-amber-400 hover:underline flex items-center space-x-1"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Explore Memoir &amp; Work</span>
              </a>
              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider rounded transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
