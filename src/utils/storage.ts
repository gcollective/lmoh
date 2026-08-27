import { IntakeSubmission, SubmissionStatus } from '../types';

const STORAGE_KEY = 'cmlh_intake_submissions_v1';

const INITIAL_SEED_SUBMISSIONS: IntakeSubmission[] = [
  {
    id: "INTAKE-2026-0801",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    fullName: "Marcus Vance",
    preferredName: "Marcus",
    email: "m.vance@example.org",
    phone: "(704) 555-0192",
    jurisdiction: "Mecklenburg County Superior Court, NC",
    legalCategory: "post-conviction",
    assistanceTypes: ["preliminary_review", "post_conviction_research"],
    caseSummary: "Seeking review of trial transcripts from 2021 criminal conviction regarding ineffective assistance of counsel claims and newly unsealed records for a Motion for Appropriate Relief (MAR).",
    upcomingDeadlines: "Status conference hearing on Sept 18, 2026; MAR filing target by Oct 1, 2026.",
    acknowledgments: {
      noLicensedRepresentation: true,
      noAttorneyClientPrivilege: true,
      fullProSeResponsibility: true,
      peerSupportCredentials: true,
      noGuarantees: true
    },
    signatureName: "Marcus Vance",
    signatureDate: "2026-08-24",
    status: "in_review",
    adminNotes: "Assigned to Peer Mentor Team. Transcript files received; preliminary MAR checklist in progress.",
    assignedSpecialist: "UNC Certified Specialist T. Davis"
  },
  {
    id: "INTAKE-2026-0802",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    fullName: "Darnell Jenkins",
    preferredName: "Darnell",
    email: "djenkins.clt@example.com",
    phone: "(704) 555-0844",
    jurisdiction: "District 26 Civil Court, Charlotte NC",
    legalCategory: "civil",
    assistanceTypes: ["document_prep", "peer_mentorship"],
    caseSummary: "Need assistance formatting a response to a civil dispute summons and structuring exhibit documents for a self-represented motion to dismiss.",
    upcomingDeadlines: "Response deadline is in 14 business days.",
    acknowledgments: {
      noLicensedRepresentation: true,
      noAttorneyClientPrivilege: true,
      fullProSeResponsibility: true,
      peerSupportCredentials: true,
      noGuarantees: true
    },
    signatureName: "Darnell Jenkins",
    signatureDate: "2026-08-26",
    status: "new",
    adminNotes: "New intake received. Scheduled for initial peer triage call."
  }
];

export function getSubmissions(): IntakeSubmission[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SEED_SUBMISSIONS));
      return INITIAL_SEED_SUBMISSIONS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_SEED_SUBMISSIONS;
  }
}

export function saveSubmission(submission: Omit<IntakeSubmission, 'id' | 'createdAt' | 'status'>): IntakeSubmission {
  const all = getSubmissions();
  const newId = `INTAKE-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const newRecord: IntakeSubmission = {
    ...submission,
    id: newId,
    createdAt: new Date().toISOString(),
    status: 'new'
  };

  const updated = [newRecord, ...all];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Storage error:", e);
  }
  return newRecord;
}

export function updateSubmissionStatus(id: string, status: SubmissionStatus, adminNotes?: string, assignedSpecialist?: string): IntakeSubmission[] {
  const all = getSubmissions();
  const updated = all.map(sub => {
    if (sub.id === id) {
      return {
        ...sub,
        status,
        ...(adminNotes !== undefined ? { adminNotes } : {}),
        ...(assignedSpecialist !== undefined ? { assignedSpecialist } : {})
      };
    }
    return sub;
  });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Storage error:", e);
  }
  return updated;
}

export function deleteSubmission(id: string): IntakeSubmission[] {
  const all = getSubmissions();
  const updated = all.filter(sub => sub.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Storage error:", e);
  }
  return updated;
}

export function exportSubmissionsJSON(): string {
  const data = getSubmissions();
  return JSON.stringify(data, null, 2);
}

export function exportSubmissionsCSV(): string {
  const data = getSubmissions();
  const headers = ["ID", "Date", "Full Name", "Email", "Phone", "Jurisdiction", "Category", "Assistance", "Status", "Deadlines", "Summary"];
  const rows = data.map(sub => [
    `"${sub.id}"`,
    `"${sub.createdAt}"`,
    `"${sub.fullName.replace(/"/g, '""')}"`,
    `"${sub.email}"`,
    `"${sub.phone}"`,
    `"${sub.jurisdiction.replace(/"/g, '""')}"`,
    `"${sub.legalCategory}"`,
    `"${sub.assistanceTypes.join(', ')}"`,
    `"${sub.status}"`,
    `"${(sub.upcomingDeadlines || '').replace(/"/g, '""')}"`,
    `"${sub.caseSummary.replace(/"/g, '""')}"`
  ]);

  return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
}
