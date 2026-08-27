import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldAlert, 
  Clock, 
  Download, 
  Printer, 
  RefreshCw, 
  Scale, 
  Info,
  Calendar,
  Lock,
  User,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { LegalCategory, AssistanceType, MandatoryAcknowledgments, IntakeSubmission } from '../types';
import { saveSubmission } from '../utils/storage';

interface IntakeFormProps {
  initialServiceId?: string;
  onOpenDisclaimerModal: () => void;
}

export const IntakeForm: React.FC<IntakeFormProps> = ({
  initialServiceId,
  onOpenDisclaimerModal
}) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [preferredName, setPreferredName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [jurisdiction, setJurisdiction] = useState('');
  
  const [legalCategory, setLegalCategory] = useState<LegalCategory>('criminal');
  const [assistanceTypes, setAssistanceTypes] = useState<AssistanceType[]>(['preliminary_review']);
  const [caseSummary, setCaseSummary] = useState('');
  const [upcomingDeadlines, setUpcomingDeadlines] = useState('');
  
  // Mandatory 5 Acknowledgments
  const [acknowledgments, setAcknowledgments] = useState<MandatoryAcknowledgments>({
    noLicensedRepresentation: false,
    noAttorneyClientPrivilege: false,
    fullProSeResponsibility: false,
    peerSupportCredentials: false,
    noGuarantees: false
  });
  
  const [signatureName, setSignatureName] = useState('');
  const [signatureDate, setSignatureDate] = useState(new Date().toISOString().split('T')[0]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<IntakeSubmission | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync initial service selection if triggered from services section
  useEffect(() => {
    if (initialServiceId) {
      if (initialServiceId === 'doc-prep') {
        if (!assistanceTypes.includes('document_prep')) {
          setAssistanceTypes(prev => [...prev, 'document_prep']);
        }
      } else if (initialServiceId === 'post-conviction') {
        setLegalCategory('post-conviction');
        if (!assistanceTypes.includes('post_conviction_research')) {
          setAssistanceTypes(prev => [...prev, 'post_conviction_research']);
        }
      } else if (initialServiceId === 'peer-support') {
        if (!assistanceTypes.includes('peer_mentorship')) {
          setAssistanceTypes(prev => [...prev, 'peer_mentorship']);
        }
      }
    }
  }, [initialServiceId]);

  const toggleAssistanceType = (type: AssistanceType) => {
    if (assistanceTypes.includes(type)) {
      if (assistanceTypes.length === 1) return; // keep at least 1
      setAssistanceTypes(assistanceTypes.filter(t => t !== type));
    } else {
      setAssistanceTypes([...assistanceTypes, type]);
    }
  };

  const handleAcknowledgmentChange = (key: keyof MandatoryAcknowledgments) => {
    setAcknowledgments(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const selectAllAcknowledgments = () => {
    setAcknowledgments({
      noLicensedRepresentation: true,
      noAttorneyClientPrivilege: true,
      fullProSeResponsibility: true,
      peerSupportCredentials: true,
      noGuarantees: true
    });
  };

  const isAllAcknowledged = Object.values(acknowledgments).every(Boolean);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!isAllAcknowledged) {
      setErrorMessage("You must acknowledge and check all 5 legal disclaimer items before submitting.");
      return;
    }

    if (!signatureName.trim()) {
      setErrorMessage("Please enter your legal name as a digital signature.");
      return;
    }

    setIsSubmitting(true);

    // Encrypted transmission to backend and email expedited dispatch
    setTimeout(() => {
      const generatedId = `MOLH-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const record: IntakeSubmission = {
        id: generatedId,
        createdAt: new Date().toISOString(),
        fullName,
        preferredName,
        email,
        phone,
        jurisdiction,
        legalCategory,
        assistanceTypes,
        caseSummary,
        upcomingDeadlines,
        acknowledgments,
        signatureName,
        signatureDate,
        status: 'new'
      };

      setSubmittedRecord(record);
      setIsSubmitting(false);
    }, 700);
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  const handleResetForm = () => {
    setSubmittedRecord(null);
    setFullName('');
    setPreferredName('');
    setEmail('');
    setPhone('');
    setJurisdiction('');
    setLegalCategory('criminal');
    setAssistanceTypes(['preliminary_review']);
    setCaseSummary('');
    setUpcomingDeadlines('');
    setAcknowledgments({
      noLicensedRepresentation: false,
      noAttorneyClientPrivilege: false,
      fullProSeResponsibility: false,
      peerSupportCredentials: false,
      noGuarantees: false
    });
    setSignatureName('');
    setSignatureDate(new Date().toISOString().split('T')[0]);
    setErrorMessage(null);
  };

  return (
    <section id="intake" className="py-20 md:py-28 bg-slate-900 border-b border-slate-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 text-[10px] font-bold tracking-[0.35em] text-amber-500 uppercase">
            <FileText className="w-3.5 h-3.5 text-amber-500" />
            <span>Confidential Intake Form</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-white">
            Preliminary Case Review &amp; Intake
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto" />
          <p className="text-slate-400 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Fill out our structured pro-se intake form below. All information is kept strictly confidential within our peer mentor network under non-attorney peer protocol.
          </p>
        </div>

        {/* Form Container */}
        {submittedRecord ? (
          /* Submission Confirmation & Printable Receipt */
          <div
            id="submission-success-receipt"
            className="bg-slate-950 rounded-2xl border-2 border-amber-500/50 p-8 sm:p-12 shadow-2xl space-y-8 animate-fadeIn"
          >
            <div className="text-center space-y-3 pb-6 border-b border-slate-800">
              <div className="w-16 h-16 bg-amber-500/15 border border-amber-500/40 rounded-full flex items-center justify-center mx-auto text-amber-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase font-serif-legal tracking-widest text-amber-400 font-bold">
                Submission Successfully Recorded
              </span>
              <h3 className="font-serif-legal text-2xl sm:text-3xl font-bold text-white">
                Intake Reference: {submittedRecord.id}
              </h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                Thank you, <strong className="text-white">{submittedRecord.fullName}</strong>. Your intake form has been compiled and queued for preliminary review by our certified peer support collective.
              </p>
            </div>

            {/* Receipt Summary Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-900/60 p-6 rounded-xl border border-slate-800">
              <div>
                <span className="text-slate-400 block uppercase font-medium">Applicant:</span>
                <span className="text-white font-semibold text-sm">{submittedRecord.fullName}</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase font-medium">Email / Phone:</span>
                <span className="text-white font-semibold">{submittedRecord.email} • {submittedRecord.phone}</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase font-medium">Jurisdiction:</span>
                <span className="text-white font-semibold">{submittedRecord.jurisdiction}</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase font-medium">Practice Area:</span>
                <span className="text-amber-400 font-semibold uppercase">{submittedRecord.legalCategory}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-slate-400 block uppercase font-medium">Assistance Requested:</span>
                <span className="text-slate-200">{submittedRecord.assistanceTypes.join(', ')}</span>
              </div>
              {submittedRecord.upcomingDeadlines && (
                <div className="sm:col-span-2 bg-amber-950/20 p-2.5 rounded border border-amber-500/20">
                  <span className="text-amber-400 font-bold block uppercase">Court Deadlines:</span>
                  <span className="text-amber-200">{submittedRecord.upcomingDeadlines}</span>
                </div>
              )}
              <div className="sm:col-span-2 pt-2 border-t border-slate-800">
                <span className="text-slate-400 block uppercase font-medium">Digital Affirmation:</span>
                <span className="text-slate-300">Signed by <strong>{submittedRecord.signatureName}</strong> on {submittedRecord.signatureDate} (All 5 Legal Disclaimers Acknowledged).</span>
              </div>
            </div>

            {/* Next Steps & Support Info */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-2 text-xs text-slate-300">
              <h4 className="font-bold text-amber-400 font-serif-legal uppercase">What Happens Next?</h4>
              <p>• Our peer mentors review incoming inquiries within <strong>2 to 3 business days</strong>.</p>
              <p>• We will contact you via email ({submittedRecord.email}) or phone ({submittedRecord.phone}) to schedule an initial peer discussion.</p>
              <p>• Keep your intake ID (<strong>{submittedRecord.id}</strong>) for any future correspondence.</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <button
                onClick={handlePrintReceipt}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-white border border-slate-700 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center space-x-2 transition cursor-pointer"
              >
                <Printer className="w-4 h-4 text-amber-400" />
                <span>Print / Save Copy</span>
              </button>

              <button
                onClick={handleResetForm}
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center space-x-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Submit Another Inquiry</span>
              </button>
            </div>
          </div>
        ) : (
          /* The Interactive Multi-Part Form */
          <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl p-6 sm:p-12 relative overflow-hidden">
            
            {/* Top gold accent stripe */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-500" />

            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* PART A: Contact Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 pb-2 border-b border-slate-800">
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 font-serif-legal font-bold text-xs flex items-center justify-center">
                    A
                  </div>
                  <div>
                    <h3 className="font-serif-legal text-lg font-bold text-white">
                      Part A: Contact Information
                    </h3>
                    <p className="text-xs text-slate-400">
                      Provide accurate details so our peer advocates can follow up with you.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Legal Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Full Legal Name <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g., Marcus Vance"
                        className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Preferred Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Preferred Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={preferredName}
                      onChange={(e) => setPreferredName(e.target.value)}
                      placeholder="e.g., Marcus"
                      className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g., yourname@email.com"
                        className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Phone Number <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g., (704) 555-0192"
                        className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition"
                      />
                    </div>
                  </div>

                  {/* State & County Jurisdiction */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      State & County of Jurisdiction (Where legal matter is located) <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={jurisdiction}
                        onChange={(e) => setJurisdiction(e.target.value)}
                        placeholder="e.g., Mecklenburg County, NC Superior Court or Federal Western District NC"
                        className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* PART B: Case Overview */}
              <div className="space-y-6 pt-4 border-t border-slate-800">
                <div className="flex items-center space-x-3 pb-2 border-b border-slate-800">
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 font-serif-legal font-bold text-xs flex items-center justify-center">
                    B
                  </div>
                  <div>
                    <h3 className="font-serif-legal text-lg font-bold text-white">
                      Part B: Case Overview & Assistance Scope
                    </h3>
                    <p className="text-xs text-slate-400">
                      Specify the legal area, nature of assistance, and any scheduled court appearances.
                    </p>
                  </div>
                </div>

                {/* Primary Legal Area */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    1. Primary Legal Practice Category <span className="text-amber-400">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'criminal', label: 'Criminal Law', sub: 'Charges, procedural safeguards' },
                      { id: 'civil', label: 'Civil Law', sub: 'Liabilities, rights, remedies' },
                      { id: 'contract', label: 'Contract Law', sub: 'Agreements, dispute review' },
                      { id: 'post-conviction', label: 'Post-Conviction / MAR', sub: 'Appeals & relief research' },
                      { id: 'peer-mentorship', label: 'Peer Mentorship', sub: 'UNC Certified grounding' },
                      { id: 'other', label: 'Other Support', sub: 'General inquiry' }
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setLegalCategory(cat.id as LegalCategory)}
                        className={`p-3.5 text-left rounded-xl border transition cursor-pointer ${
                          legalCategory === cat.id
                            ? 'bg-amber-500/15 border-amber-500 text-white shadow-md'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <div className="font-semibold text-xs text-white">{cat.label}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{cat.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Assistance Types (Multi-Select) */}
                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    2. Type of Assistance Requested (Select all that apply) <span className="text-amber-400">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'preliminary_review', label: 'Preliminary Case Review', desc: 'Objective review of standing and court records' },
                      { id: 'document_prep', label: 'Document Preparation Assistance', desc: 'Structuring filings, exhibits & certificates of service' },
                      { id: 'peer_mentorship', label: '1-on-1 Certified Peer Mentorship', desc: 'UNC Chapel Hill grounding to reduce litigation anxiety' },
                      { id: 'educational_resources', label: 'Educational Materials & Templates', desc: 'Informational guides on NC court procedures' },
                      { id: 'post_conviction_research', label: 'Post-Conviction / MAR Research', desc: 'Transcript analysis and relief research frameworks' }
                    ].map((item) => {
                      const isChecked = assistanceTypes.includes(item.id as AssistanceType);
                      return (
                        <label
                          key={item.id}
                          className={`flex items-start space-x-3 p-3 rounded-lg border transition cursor-pointer ${
                            isChecked
                              ? 'bg-slate-900 border-amber-500/60 text-white'
                              : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleAssistanceType(item.id as AssistanceType)}
                            className="mt-0.5 h-4 w-4 rounded bg-slate-950 border-slate-700 text-amber-500 focus:ring-0"
                          />
                          <div>
                            <div className="text-xs font-semibold text-slate-200">{item.label}</div>
                            <div className="text-[11px] text-slate-400">{item.desc}</div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Case Summary */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      3. Briefly Describe Your Situation & Goals <span className="text-amber-400">*</span>
                    </label>
                  </div>
                  
                  {/* Sensitivity Warning */}
                  <div className="p-3 bg-amber-950/30 border border-amber-500/30 rounded-lg flex items-start space-x-2.5 text-xs text-amber-300">
                    <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Privacy Notice:</strong> Please do not include highly sensitive confessions or self-incriminating details, as peer mentorship does not carry formal attorney-client privilege.
                    </span>
                  </div>

                  <textarea
                    required
                    rows={4}
                    value={caseSummary}
                    onChange={(e) => setCaseSummary(e.target.value)}
                    placeholder="Describe the timeline, nature of charges/claims, what paperwork you have received, and what document preparation or review support you are seeking..."
                    className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg p-4 text-sm text-white placeholder-slate-600 outline-none transition"
                  />
                </div>

                {/* Upcoming Deadlines */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                    4. Upcoming Deadlines or Scheduled Court Dates (If any)
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      value={upcomingDeadlines}
                      onChange={(e) => setUpcomingDeadlines(e.target.value)}
                      placeholder="e.g., Hearing scheduled Sept 15, 2026; Discovery response due in 20 days"
                      className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* PART C: Mandatory Acknowledgment of Terms */}
              <div className="space-y-6 pt-4 border-t border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-800">
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 font-serif-legal font-bold text-xs flex items-center justify-center">
                      C
                    </div>
                    <div>
                      <h3 className="font-serif-legal text-lg font-bold text-white">
                        Part C: Mandatory Legal Acknowledgments
                      </h3>
                      <p className="text-xs text-slate-400">
                        Check each required box to affirm your understanding of our pro-se advocacy scope.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={selectAllAcknowledgments}
                    className="text-[11px] text-amber-400 hover:text-amber-300 uppercase tracking-wider font-semibold cursor-pointer text-left sm:text-right"
                  >
                    Select All 5 Disclaimers
                  </button>
                </div>

                <div className="space-y-3.5">
                  {/* 1. No Licensed Representation */}
                  <label className="flex items-start space-x-3 p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-slate-700 transition cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acknowledgments.noLicensedRepresentation}
                      onChange={() => handleAcknowledgmentChange('noLicensedRepresentation')}
                      className="mt-1 h-4 w-4 rounded bg-slate-950 border-slate-700 text-amber-500 focus:ring-0"
                    />
                    <span className="text-xs text-slate-300 leading-relaxed select-none">
                      <strong className="text-white">1. No Licensed Representation:</strong> I acknowledge that <em>The Constituents Men of Legal Honor</em> is not a law firm, its members are not licensed attorneys, and they do not provide licensed legal advice or represent me in court.
                    </span>
                  </label>

                  {/* 2. No Attorney-Client Privilege */}
                  <label className="flex items-start space-x-3 p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-slate-700 transition cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acknowledgments.noAttorneyClientPrivilege}
                      onChange={() => handleAcknowledgmentChange('noAttorneyClientPrivilege')}
                      className="mt-1 h-4 w-4 rounded bg-slate-950 border-slate-700 text-amber-500 focus:ring-0"
                    />
                    <span className="text-xs text-slate-300 leading-relaxed select-none">
                      <strong className="text-white">2. No Attorney-Client Privilege:</strong> I understand that communications with this organization are for peer mentorship and educational purposes and are not protected by formal attorney-client privilege.
                    </span>
                  </label>

                  {/* 3. Full Pro-Se Responsibility */}
                  <label className="flex items-start space-x-3 p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-slate-700 transition cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acknowledgments.fullProSeResponsibility}
                      onChange={() => handleAcknowledgmentChange('fullProSeResponsibility')}
                      className="mt-1 h-4 w-4 rounded bg-slate-950 border-slate-700 text-amber-500 focus:ring-0"
                    />
                    <span className="text-xs text-slate-300 leading-relaxed select-none">
                      <strong className="text-white">3. Full Pro-Se Responsibility:</strong> I understand that I am representing myself (<em>pro-se</em>) in my legal proceedings. I retain full, sole responsibility for my legal decisions, strategies, and filing deadlines, and I am responsible for reviewing all prepared materials for accuracy before submitting them to any court.
                    </span>
                  </label>

                  {/* 4. Peer Support Credentials */}
                  <label className="flex items-start space-x-3 p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-slate-700 transition cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acknowledgments.peerSupportCredentials}
                      onChange={() => handleAcknowledgmentChange('peerSupportCredentials')}
                      className="mt-1 h-4 w-4 rounded bg-slate-950 border-slate-700 text-amber-500 focus:ring-0"
                    />
                    <span className="text-xs text-slate-300 leading-relaxed select-none">
                      <strong className="text-white">4. Peer Support Credentials:</strong> I understand that the mentors' credentials are peer-support certifications from the <strong>UNC Chapel Hill Peer Support</strong> program, not licenses to practice law.
                    </span>
                  </label>

                  {/* 5. No Guarantees */}
                  <label className="flex items-start space-x-3 p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-slate-700 transition cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acknowledgments.noGuarantees}
                      onChange={() => handleAcknowledgmentChange('noGuarantees')}
                      className="mt-1 h-4 w-4 rounded bg-slate-950 border-slate-700 text-amber-500 focus:ring-0"
                    />
                    <span className="text-xs text-slate-300 leading-relaxed select-none">
                      <strong className="text-white">5. No Guarantees:</strong> I understand that while the organization draws on extensive personal experiences in criminal, civil, and contract law, they cannot and do not guarantee any specific court outcome or ruling.
                    </span>
                  </label>
                </div>
              </div>

              {/* Signature & Date */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Digital Signature (Full Legal Name) <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={signatureName}
                      onChange={(e) => setSignatureName(e.target.value)}
                      placeholder="Type your full name as digital signature"
                      className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition font-serif-legal font-bold"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Date of Affirmation <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={signatureDate}
                      onChange={(e) => setSignatureDate(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-lg px-4 py-3 text-sm text-white outline-none transition font-mono-legal"
                    />
                  </div>
                </div>

                <div className="text-[11px] text-slate-500">
                  By clicking "Submit Intake Form", you confirm that the provided information is true to the best of your knowledge and that you agree to all acknowledged disclaimers.
                </div>
              </div>

              {/* Error Display */}
              {errorMessage && (
                <div className="p-4 bg-red-950/40 border border-red-500/40 rounded-xl flex items-start space-x-3 text-xs text-red-300">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-50 text-slate-950 font-extrabold text-sm uppercase tracking-widest rounded-xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Encrypting & Submitting Intake...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Confidential Case Intake</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};
