import React, { useState } from 'react';
import { X, ShieldCheck, Database, Lock, Server, Bell, Key, Code, CheckCircle2, Copy, Check } from 'lucide-react';
import { ARCHITECTURE_SPECIFICATION } from '../data/content';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'code' | 'security'>('blueprint');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const backendCodeSnippet = `// server/api/intake.ts - Production Express & Firestore Submission Handler
import express from 'express';
import { z } from 'zod';
import rateLimit from 'express-rate-limit';
import crypto from 'crypto';

const router = express.Router();

// 1. Strict Rate Limiting (Prevent Spam / DDoS)
const intakeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // max 5 submissions per IP
  message: { error: "Too many intake submissions. Please retry shortly." }
});

// 2. Schema Validation with Zod
const IntakeSchema = z.object({
  fullName: z.string().min(2).max(100),
  preferredName: z.string().optional(),
  email: z.string().email(),
  phone: z.string().min(7).max(25),
  jurisdiction: z.string().min(2).max(150),
  legalCategory: z.enum(['criminal', 'civil', 'contract', 'post-conviction', 'peer-mentorship', 'other']),
  assistanceTypes: z.array(z.string()).min(1),
  caseSummary: z.string().min(10).max(5000),
  upcomingDeadlines: z.string().optional(),
  acknowledgments: z.object({
    noLicensedRepresentation: z.literal(true),
    noAttorneyClientPrivilege: z.literal(true),
    fullProSeResponsibility: z.literal(true),
    peerSupportCredentials: z.literal(true),
    noGuarantees: z.literal(true),
  }),
  signatureName: z.string().min(2),
  signatureDate: z.string()
});

// 3. Field-Level Encryption Helper for Case Details
function encryptField(text: string, secretKeyHex: string): string {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(secretKeyHex, 'hex'), iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const authTag = cipher.getAuthTag().toString('hex');
  return \`\${iv.toString('hex')}:\${authTag}:\${encrypted}\`;
}

// 4. Secure Submission Route
router.post('/api/intake', intakeLimiter, async (req, res) => {
  try {
    const validatedData = IntakeSchema.parse(req.body);
    const submissionId = \`INTAKE-\${new Date().getFullYear()}-\${crypto.randomInt(1000, 9999)}\`;

    // Encrypt sensitive case summary at field level before persisting
    const encryptedSummary = encryptField(validatedData.caseSummary, process.env.ENCRYPTION_KEY!);

    const record = {
      ...validatedData,
      id: submissionId,
      caseSummaryEncrypted: encryptedSummary,
      createdAt: new Date().toISOString(),
      status: 'new'
    };

    // Save to Firestore with RBAC-protected collections
    // await db.collection('intake_submissions').doc(submissionId).set(record);

    // Trigger Notification Webhook to Duty Mentors (e.g. Resend / SendGrid)
    // await sendMentorNotificationEmail(record);

    return res.status(201).json({
      success: true,
      intakeId: submissionId,
      message: "Submission received and queued for peer review."
    });
  } catch (error: any) {
    return res.status(400).json({ error: error.message || "Invalid payload" });
  }
});

export default router;`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(backendCodeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div
      id="architecture-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="architecture-modal-card"
        className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-5xl w-full max-h-[90vh] shadow-2xl relative flex flex-col overflow-hidden text-left my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-slate-950/90">
          <div>
            <div className="flex items-center space-x-2 text-xs text-amber-400 font-bold uppercase tracking-wider font-serif-legal">
              <Database className="w-4 h-4" />
              <span>Technical Proposal & Specification</span>
            </div>
            <h2 className="font-serif-legal text-2xl font-bold text-white mt-1">
              Secure Intake Submission Architecture
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Recommended zero-trust architecture for handling self-represented litigant submissions securely & efficiently.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full transition cursor-pointer"
            aria-label="Close architecture modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 bg-slate-950/60 border-b border-slate-800 flex space-x-6 text-xs uppercase tracking-wider font-semibold">
          <button
            onClick={() => setActiveTab('blueprint')}
            className={`py-3.5 border-b-2 transition cursor-pointer ${
              activeTab === 'blueprint'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            System Blueprint & 5 Layers
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`py-3.5 border-b-2 transition cursor-pointer ${
              activeTab === 'code'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Production API Handler Code
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`py-3.5 border-b-2 transition cursor-pointer ${
              activeTab === 'security'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            Zero-Trust Security & PII Rules
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-8 space-y-6">
          
          {/* TAB 1: BLUEPRINT */}
          {activeTab === 'blueprint' && (
            <div className="space-y-8">
              <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded-xl space-y-2 text-xs text-amber-200">
                <span className="font-bold uppercase tracking-wider text-amber-400 block font-serif-legal">
                  Architecture Overview
                </span>
                <p className="leading-relaxed text-slate-300">
                  {ARCHITECTURE_SPECIFICATION.overview}
                </p>
              </div>

              {/* Layer Cards */}
              <div className="space-y-4">
                {ARCHITECTURE_SPECIFICATION.layers.map((layer, index) => (
                  <div
                    key={index}
                    className="p-5 bg-slate-950/70 rounded-xl border border-slate-800 hover:border-slate-700 transition space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-serif-legal font-bold text-white text-base">
                        {layer.name}
                      </h4>
                      <span className="text-[10px] font-mono-legal px-2.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-amber-400">
                        {layer.tech}
                      </span>
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {layer.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: CODE IMPLEMENTATION */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-legal text-slate-400">
                  server/api/intake.ts (TypeScript + Zod + AES-256-GCM)
                </span>
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded border border-slate-700 transition flex items-center space-x-1.5 cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
                  <span>{copiedCode ? 'Copied to Clipboard' : 'Copy Handler Code'}</span>
                </button>
              </div>

              <pre className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs font-mono-legal text-slate-300 overflow-x-auto custom-scrollbar leading-relaxed">
                <code>{backendCodeSnippet}</code>
              </pre>
            </div>
          )}

          {/* TAB 3: SECURITY & COMPLIANCE */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-950/80 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase font-serif-legal">
                    <Lock className="w-4 h-4" />
                    <span>Field-Level Encryption (FLE)</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Personal legal statements, case summaries, and sensitive court references must be encrypted at the application layer before reaching database storage using AES-256-GCM with distinct per-record initialization vectors.
                  </p>
                </div>

                <div className="p-5 bg-slate-950/80 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase font-serif-legal">
                    <Key className="w-4 h-4" />
                    <span>Role-Based Access Control (RBAC)</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Intake records are restricted strictly to authenticated organization members with the <code className="text-amber-300">peer_mentor</code> or <code className="text-amber-300">admin</code> role. Unauthenticated public clients can only execute <code className="text-amber-300">create</code> operations with rate-limiting.
                  </p>
                </div>

                <div className="p-5 bg-slate-950/80 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase font-serif-legal">
                    <Bell className="w-4 h-4" />
                    <span>Sanitized Notifications</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Automated email notifications to duty mentors do not broadcast plain-text case narratives across standard unencrypted SMTP channels. Instead, notifications include only non-PII metadata (Intake ID, Jurisdiction, Category) with a secure link to the authenticated review portal.
                  </p>
                </div>

                <div className="p-5 bg-slate-950/80 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase font-serif-legal">
                    <Server className="w-4 h-4" />
                    <span>Litigant Data Retention Policy</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Case intake records for completed inquiries or withdrawn consultations are scheduled for automatic archival or cryptographic purge after 180 days to safeguard litigant privacy.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition cursor-pointer"
          >
            Close Architecture Guide
          </button>
        </div>

      </div>
    </div>
  );
};
