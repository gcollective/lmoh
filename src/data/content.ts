import { FaqItem, MissionPillar, ServiceDetail, SubstackPost } from '../types';

export const SUBSTACK_URL = "https://menoflegalhonorcharlotte.substack.com";

export const MISSION_PILLARS: MissionPillar[] = [
  {
    number: "01",
    title: "Peer Support & Mentorship",
    tagline: "No one walks the judicial journey in isolation.",
    description: "We believe that no one should navigate the legal system alone or without a supportive community. Utilizing our formal credentials as certified specialists from the UNC Chapel Hill Peer Support program, we provide confidential, compassionate mentoring.",
    highlights: [
      "UNC Chapel Hill Certified Peer Support specialists providing trauma-informed emotional grounding",
      "One-on-one guided sessions to alleviate acute litigation panic and procedural isolation",
      "Collaborative brotherhood rooted in accountability, honor, and mutual encouragement"
    ],
    icon: "Users"
  },
  {
    number: "02",
    title: "Self-Advocacy & Education",
    tagline: "True justice relies on legal literacy and personal agency.",
    description: "We focus on enhancing the legal literacy of pro-se litigants by providing structured, accessible educational materials to demystify complex court procedures and local rules.",
    highlights: [
      "High-quality educational frameworks breaking down civil, criminal, and contractual rights",
      "Demystifying local courtroom protocols, filing mechanics, and motion timelines",
      "Promoting rigorous self-review so you retain proud ownership of your defense"
    ],
    icon: "BookOpen"
  },
  {
    number: "03",
    title: "Practical Guidance",
    tagline: "Translating lived experience into sharp, clean preparation.",
    description: "We translate our extensive hands-on experience as self-taught pro-se litigants into practical, non-professional assistance to help individuals prepare their cases effectively.",
    highlights: [
      "Objective preliminary case reviews to clarify positions and evaluate strategic options",
      "High-caliber document organization, pleading structuring, and motion formatting",
      "Structured critical-thinking frameworks for civil remedies, criminal defense, and post-conviction relief"
    ],
    icon: "Scale"
  }
];

export const LEGAL_SERVICES: ServiceDetail[] = [
  {
    id: "doc-prep",
    title: "Document Preparation Assistance",
    badge: "Pleadings & Motions",
    shortDesc: "Drafting, organizing, and formatting precise, high-quality legal documents tailored to your specific case requirements.",
    fullDesc: "Navigating court filing requirements can be daunting. We assist self-represented litigants in organizing facts, structuring proper legal captions, formatting motions, and assembling exhibits in compliance with local court formatting rules.",
    scope: [
      "Caption structuring, table of authorities, and certificate of service formatting",
      "Organizing factual timelines and chronological exhibit binders",
      "Structuring motions, responses, and affidavits for self-represented submission",
      "Formatting compliance with local and state court clerical guidelines"
    ],
    limitations: [
      "We do not file documents on your behalf with the clerk of court",
      "We cannot sign pleadings as legal counsel or attorney of record",
      "You retain sole responsibility for reviewing and verifying all factual assertions"
    ],
    idealFor: [
      "Self-represented litigants filing initial complaints, responses, or motions",
      "Individuals needing help organizing extensive evidence into clear exhibits",
      "Pro-se parties seeking clean, professional clerical presentation"
    ],
    icon: "FileText"
  },
  {
    id: "case-review",
    title: "Preliminary Case Reviews",
    badge: "Objective Evaluation",
    shortDesc: "Conducting objective, initial evaluations of your legal standing and court records to help clarify your viable options.",
    fullDesc: "Before committing resources or submitting filings, a thorough review of your charging documents, civil complaints, or contract agreements helps clarify the factual baseline and procedural options available to you.",
    scope: [
      "Reviewing indictments, charging instruments, or civil complaint allegations",
      "Identifying missed deadlines, procedural deficiencies, or due process concerns",
      "Evaluating key evidentiary points and potential counter-arguments",
      "Helping formulate structured questions to discuss with public defenders or counsel"
    ],
    limitations: [
      "Does not constitute formal legal counsel or guaranteed probability assessments",
      "Cannot negotiate with district attorneys, prosecutors, or opposing counsel",
      "All strategic choices remain entirely within your discretion"
    ],
    idealFor: [
      "Individuals recently charged or served with civil paperwork",
      "Litigants preparing for upcoming status hearings or discovery deadlines",
      "Parties seeking a grounded, second-set-of-eyes procedural review"
    ],
    icon: "Search"
  },
  {
    id: "post-conviction",
    title: "Specialized Post-Conviction Support",
    badge: "Appeals & Relief",
    shortDesc: "Providing focused legal guidance, research frameworks, and procedural support for individuals seeking relief following conviction.",
    fullDesc: "Post-conviction relief requires extraordinary procedural precision. Having navigated these paths firsthand, our collective provides comprehensive research support, record indexing, and guidance on motions for appropriate relief (MAR) and habeas considerations.",
    scope: [
      "Reviewing trial transcripts, sentencing sheets, and appellate records",
      "Researching relevant statutory updates, retroactive changes, and jurisdictional case law",
      "Structuring claims regarding ineffective assistance of counsel or newly discovered evidence",
      "Drafting non-professional frameworks for post-conviction motion drafts"
    ],
    limitations: [
      "We do not represent petitioners in state or federal appellate courts",
      "We cannot guarantee resentencing, evidentiary hearings, or vacated convictions",
      "Filing deadlines (e.g., AEDPA time bars) must be monitored solely by the litigant"
    ],
    idealFor: [
      "Incarcerated individuals or family members exploring post-conviction options",
      "Individuals preparing Motions for Appropriate Relief (MAR) in North Carolina",
      "Re-entry candidates seeking restoration of rights and record clarity"
    ],
    icon: "ShieldAlert"
  },
  {
    id: "peer-support",
    title: "Certified Peer Support",
    badge: "UNC Chapel Hill Certified",
    shortDesc: "Compassionate, grounded guidance certified by UNC Chapel Hill to support your mental and emotional well-being throughout litigation.",
    fullDesc: "The legal system takes an immense psychological toll. Our mentors hold certified peer support specialist credentials earned directly through UNC Chapel Hill, providing trauma-informed listening, stress-reduction techniques, and empowerment circles.",
    scope: [
      "Confidential one-on-one mentorship with advocates who understand the carceral experience",
      "Trauma-informed stress management strategies for courtroom appearances",
      "Goal-setting and rebuilding personal autonomy through self-advocacy",
      "Connecting with community re-entry resources and supportive brotherhood networks"
    ],
    limitations: [
      "Peer support is distinct from licensed psychiatric clinical therapy",
      "Communications are confidential within peer trust but not attorney-client privileged"
    ],
    idealFor: [
      "Litigants experiencing severe burnout, anxiety, or isolation due to ongoing legal battles",
      "Justice-involved men seeking authentic brotherhood and moral encouragement",
      "Families navigating the emotional strain of a loved one's trial or incarceration"
    ],
    icon: "HeartHandshake"
  }
];

export const LEGAL_DISCLAIMERS = [
  {
    title: "1. No Legal Advice Provided",
    text: "The materials, resources, services, and information provided on this website—including but not limited to preliminary case reviews, document preparation assistance, educational materials, and peer support discussions—are for informational, educational, and peer mentoring purposes only. The Constituents Men of Legal Honor is not a law firm, and our members are not licensed attorneys. No information or service provided by this organization, its members, or its affiliates constitutes legal advice, legal representation, or a substitute for professional legal counsel."
  },
  {
    title: "2. No Attorney-Client Relationship",
    text: "Your use of this website, communication with our members, or receipt of peer-to-peer services does not create an attorney-client relationship. Because our members are not licensed attorneys, any communication with us is not protected by the attorney-client privilege or the rules of professional conduct governing licensed lawyers. While we maintain a strict policy of confidentiality and respect regarding your personal information and documents, this peer-to-peer support is distinct from a formal relationship with a licensed bar-certified attorney."
  },
  {
    title: "3. Peer Support and Mentorship Services",
    text: "Our services are rooted in our experience as skilled pro-se litigants and certified peer support specialists. Our credentials, including certifications from the UNC Chapel Hill Peer Support program, qualify us to provide peer mentoring, emotional support, and self-advocacy guidance. These credentials are peer-support certifications and are not licenses to practice law. We do not represent individuals in court, draft legally binding instruments as legal counsel, or negotiate with prosecutors or opposing counsel on your behalf."
  },
  {
    title: "4. Self-Represented (Pro-Se) Litigant Responsibility",
    text: "All individuals utilizing our document preparation or case review services are representing themselves in their respective judicial proceedings as pro-se litigants. You retain full, sole responsibility for your legal decisions, legal strategy, and the timely filing of any documents. You are responsible for reviewing all prepared documents for accuracy, completeness, and compliance with local court rules prior to filing them. We strongly advise you to have any documents prepared with our assistance reviewed by a licensed attorney or a public defender if one is available to you."
  },
  {
    title: "5. No Guarantee of Outcomes",
    text: "While we draw upon extensive personal experience in criminal, civil, and contract law to provide high-quality assistance, we cannot and do not guarantee any specific outcome, result, or ruling in your legal matters. Every legal case is unique, and judicial decisions depend on various factors, laws, and judicial discretion beyond our control."
  },
  {
    title: "6. External Resources and Accuracy",
    text: "While we strive to keep our educational resources and references accurate and up to date, laws and court procedures change frequently. We do not warrant or guarantee that the information on this website is entirely current, complete, or error-free."
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is The Constituents Men of Legal Honor?",
    answer: "We are a dedicated collective operating within the No Man Left Behind Organization. Our members developed deep, practical legal expertise while incarcerated, transforming our personal legal battles into a professional service of advocacy and empowerment for self-represented (pro-se) litigants.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Are you licensed attorneys or a law firm?",
    answer: "No. The Constituents Men of Legal Honor is not a law firm, and our members are not licensed attorneys. We cannot provide legal representation, draft legally binding instruments as legal counsel, or negotiate with prosecutors or opposing counsel on your behalf. Our materials and services are strictly for informational, educational, and peer mentoring purposes.",
    category: "General"
  },
  {
    id: "faq-3",
    question: "What credentials do your members hold?",
    answer: "Our services are grounded in extensive personal experience as skilled pro-se litigants. In addition, our members hold formal peer-support credentials, including certifications from the UNC Chapel Hill Peer Support program, which qualify us to provide peer mentoring, emotional support, and self-advocacy guidance.",
    category: "Credentials & Ethics"
  },
  {
    id: "faq-4",
    question: "What services do you offer?",
    answer: "Through our three pillars of service, we offer: 1) Peer Support & Mentorship (confidential, compassionate emotional support), 2) Self-Advocacy & Education (high-quality informational materials to demystify court procedures), and 3) Practical Guidance (preliminary case reviews and document preparation assistance).",
    category: "Services"
  },
  {
    id: "faq-5",
    question: "Is my communication with you confidential or protected by attorney-client privilege?",
    answer: "Because our members are not licensed attorneys, communicating with us does not create an attorney-client relationship, and discussions are NOT protected by attorney-client privilege. However, we maintain a strict internal policy of confidentiality, integrity, and absolute respect regarding your personal information.",
    category: "Responsibility & Privilege"
  },
  {
    id: "faq-6",
    question: "Who is responsible for my legal strategy and court filings?",
    answer: "You are. All individuals utilizing our document preparation or case review services are representing themselves as self-represented (pro-se) litigants. You retain full, sole responsibility for all of your legal decisions, legal strategy, and the timely filing of any documents in court.",
    category: "Responsibility & Privilege"
  },
  {
    id: "faq-7",
    question: "Should I still seek a licensed attorney or public defender?",
    answer: "Yes, we strongly advise it. While we help you prepare and organize your thoughts, you are responsible for reviewing all prepared documents for accuracy and compliance with local rules before filing. We strongly advise having any documents reviewed by a licensed attorney or public defender if one is available to you.",
    category: "Responsibility & Privilege"
  },
  {
    id: "faq-8",
    question: "Can you guarantee a successful outcome for my case?",
    answer: "No, we cannot and do not guarantee any specific outcome, result, or ruling in your legal matters. Every legal case is unique, and judicial decisions depend on various factors, evidence, statutory laws, and judicial discretion completely beyond our control.",
    category: "Responsibility & Privilege"
  },
  {
    id: "faq-9",
    question: "How do I submit my case for intake review?",
    answer: "You can complete our digital intake web form directly on this website. Our team reviews submissions in accordance with our intake protocol and reaches out within 2 to 3 business days.",
    category: "Form & Deadlines"
  }
];

export const SUBSTACK_POSTS: SubstackPost[] = [
  {
    id: "post-latest-rights",
    title: "Understanding Your Foundational Rights: Navigating the North Carolina Pro-Se Landscape",
    subtitle: "A comprehensive guide on constitutional protections, procedural mechanics, and effective self-advocacy in NC courts.",
    excerpt: "Navigating North Carolina's judicial system pro-se requires knowing your foundational rights—from Fourth and Fifth Amendment protections to Rule 12 dismissal motions, transcript preserves, and self-advocacy discipline.",
    publishedAt: "August 26, 2026",
    readTime: "7 min read",
    url: "https://menoflegalhonorcharlotte.substack.com/p/understanding-your-foundational-rights?r=90264g&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
    slug: "understanding-your-foundational-rights",
    tags: ["Foundational Rights", "North Carolina", "Pro-Se Advocacy"],
    author: "The Constituents Men of Legal Honor",
    pinned: true
  },
  {
    id: "post-1",
    title: "The Anatomy of a Pro-Se Victory: Overcoming Procedural Hurdles in NC Courts",
    subtitle: "How self-represented litigants can master court deadlines, filing standards, and clerical objections.",
    excerpt: "Walking into a courtroom without a bar card can feel intimidating, but procedural discipline is the great equalizer. Here is how we break down complex local rules into actionable, structured filings.",
    publishedAt: "August 20, 2026",
    readTime: "6 min read",
    url: "https://menoflegalhonorcharlotte.substack.com",
    slug: "anatomy-of-a-pro-se-victory",
    tags: ["Pro-Se Rights", "North Carolina", "Court Procedure"],
    author: "The Constituents Men of Legal Honor"
  },
  {
    id: "post-2",
    title: "UNC Chapel Hill Peer Support: Transforming Incarceration into Healing & Advocacy",
    subtitle: "Why emotional grounding is just as critical as legal research when fighting for your life.",
    excerpt: "Litigation fatigue is real. Discover how our credentials from UNC Chapel Hill equip our collective to guide men through the psychological strain of trial, sentencing, and post-conviction battles.",
    publishedAt: "August 12, 2026",
    readTime: "8 min read",
    url: "https://menoflegalhonorcharlotte.substack.com",
    slug: "unc-peer-support-advocacy",
    tags: ["Peer Support", "UNC Chapel Hill", "Mental Health"],
    author: "The Constituents Men of Legal Honor"
  },
  {
    id: "post-3",
    title: "Criminal Law vs. Civil Remedies: Clarifying Your Strategic Path",
    subtitle: "Understanding the fundamental differences between challenging charges and holding violators accountable.",
    excerpt: "Many self-represented litigants conflate constitutional torts with direct criminal defenses. In this guide, we clarify jurisdictional boundaries, standing, and filing thresholds.",
    publishedAt: "July 28, 2026",
    readTime: "5 min read",
    url: "https://menoflegalhonorcharlotte.substack.com",
    slug: "criminal-vs-civil-remedies",
    tags: ["Criminal Law", "Civil Law", "Due Process"],
    author: "The Constituents Men of Legal Honor"
  },
  {
    id: "post-4",
    title: "Post-Conviction Research 101: Navigating Motions for Appropriate Relief (MAR)",
    subtitle: "Key lessons learned from years in the law library: preserving records and drafting effective claims.",
    excerpt: "When the trial ends, a new phase of meticulous record review begins. Here is how we approach transcript analysis, jurisdictional audits, and constitutional preservation.",
    publishedAt: "July 15, 2026",
    readTime: "10 min read",
    url: "https://menoflegalhonorcharlotte.substack.com",
    slug: "post-conviction-research-101",
    tags: ["Post-Conviction", "MAR", "Legal Research"],
    author: "The Constituents Men of Legal Honor"
  }
];

export const ARCHITECTURE_SPECIFICATION = {
  title: "Secure & Scalable Intake Management Architecture",
  overview: "To handle sensitive legal intake data, jurisdiction records, and self-represented litigant information securely and efficiently, we recommend a Zero-Trust Full-Stack Architecture with Field-Level Encryption, Strict Role-Based Access Control (RBAC), and Automated Notification Webhooks.",
  layers: [
    {
      name: "1. Client-Side Presentation & Validation Layer",
      tech: "React 19 + TypeScript + Tailwind CSS",
      points: [
        "Interactive multi-part intake form with instant client-side validation against injection & data omission",
        "Mandatory 5-point legal disclaimer acknowledgment with timestamped digital affirmation",
        "Instant Litigant Receipt & Print/PDF generation for user's personal legal records",
        "Client-side zero PII caching beyond active submission lifecycle"
      ]
    },
    {
      name: "2. Secure API Gateway & Submission Ingestion",
      tech: "Node.js Express / Cloud Run API Server",
      points: [
        "POST /api/intake endpoint protected by rate limiting (e.g., express-rate-limit) & CORS origin lockdown",
        "Payload sanitization & schema validation via Zod / TypeScript validators",
        "Automated anti-spam verification (reCAPTCHA v3 or Cloudflare Turnstile)",
        "Audit logging of submission timestamp, jurisdiction tag, and transmission health without logging sensitive PII into plain server logs"
      ]
    },
    {
      name: "3. Encrypted Cloud Database Storage (Firestore / Cloud SQL)",
      tech: "Google Cloud Firestore with Security Rules & Field-Level Encryption",
      points: [
        "Encrypted-at-rest (AES-256) and encrypted-in-transit (TLS 1.3) database storage",
        "Strict Firestore Security Rules allowing only authenticated staff / mentors to read and update case records",
        "Case status indexing (New -> In Review -> Contacted -> In Progress -> Archived)",
        "Data retention and purge automation compliant with state record confidentiality protocols"
      ]
    },
    {
      name: "4. Notification & Webhook Pipeline",
      tech: "SendGrid / Resend / Google Cloud PubSub / Email Dispatcher",
      points: [
        "Immediate auto-responder to the applicant confirming receipt with office hours & expectation timelines",
        "Secure, encrypted notification dispatched to duty mentors (e.g. gcollective59@gmail.com) with sanitized summary link",
        "Integration hooks for CRM / case management spreadsheets or ticketing systems"
      ]
    },
    {
      name: "5. Internal Case Review & Triage Portal",
      tech: "Role-Based Administrative Dashboard",
      points: [
        "Private dashboard for certified peer mentors to view and triage incoming inquiries",
        "Status assignment, case categorization, internal review notes, and deadline tracking",
        "Encrypted export (CSV/JSON) for offline legal analysis sessions"
      ]
    }
  ]
};
