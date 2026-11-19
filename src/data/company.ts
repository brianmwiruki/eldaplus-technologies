export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  deliverables: string[];
  technologies: string[];
  metrics: string;
}

export interface PrincipleItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlight: string;
  accent: string;
}

export const COMPANY_INFO = {
  name: "ELDAPLUS TECHNOLOGIES LIMITED",
  wordmark: "ELDAPLUS",
  tagline: "Technology That Moves Businesses Forward.",
  establishedYear: 2026,
  incorporationDate: "9 November 2026",
  registrationNumber: "PVT-6Y1R5335",
  entityType: "Private Limited Company",
  status: "Active",
  jurisdiction: "Republic of Kenya",
  country: "Kenya",
  city: "Nairobi",
  natureOfBusiness: "Provide Software Solutions and Consultancy",
  
  // Public editable placeholders (clearly identified per guidelines)
  contact: {
    email: "contact@eldaplus.co.ke",
    inquiriesEmail: "info@eldaplus.co.ke",
    phone: "+254 (0) 700 000 000",
    address: "Nairobi, Kenya (Physical address available upon business engagement)",
    operatingHours: "Monday – Friday: 8:00 AM – 5:00 PM (EAT)",
  },
  
  aboutSummary:
    "ELDAPLUS TECHNOLOGIES LIMITED is a Kenyan technology company focused on providing software solutions and consultancy. We believe technology should solve real problems, simplify operations, and create meaningful opportunities for businesses.",

  mission:
    "To empower organizations across Africa and beyond with purpose-built software, resilient digital architecture, and strategic technology advisory that catalyze sustainable growth.",
  
  vision:
    "To be East Africa's most trusted partner for business-critical software engineering and digital transformation.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "software-development",
    title: "Software Development",
    shortDesc:
      "Custom software applications and digital platforms designed around business requirements.",
    fullDesc:
      "From bespoke internal platforms to mission-critical business systems, we engineer software that handles complex workflows with precision, security, and exceptional performance.",
    icon: "Code2",
    deliverables: [
      "Enterprise Web & Desktop Platforms",
      "Scalable REST & GraphQL APIs",
      "Secure Cloud-Native Backends",
      "Robust Database Architecture",
    ],
    technologies: ["TypeScript", "Python", "Go", "Next.js", "PostgreSQL", "Docker"],
    metrics: "High Availability & Clean Code",
  },
  {
    id: "web-development",
    title: "Web Development",
    shortDesc:
      "Modern, responsive websites and web applications that help businesses establish and grow their digital presence.",
    fullDesc:
      "We design and build ultra-fast, accessible, and responsive digital interfaces with seamless user journeys that turn visitors into long-term commercial relationships.",
    icon: "Globe",
    deliverables: [
      "Modern Single-Page & SSR Applications",
      "Responsive Enterprise Portals",
      "Headless CMS Integration",
      "Lighthouse 95+ Performance Tuning",
    ],
    technologies: ["React / Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Edge Caching"],
    metrics: "Sub-second Page Speeds",
  },
  {
    id: "business-automation",
    title: "Business Automation",
    shortDesc:
      "Digital workflows, intelligent automation, and systems integration to improve operational efficiency.",
    fullDesc:
      "Eliminate repetitive manual bottlenecks and data silos. We integrate disjointed software ecosystems, automate reporting, and orchestrate resilient operational workflows.",
    icon: "Cpu",
    deliverables: [
      "End-to-End Workflow Orchestration",
      "API & Third-Party System Integrations",
      "Automated Data Extraction & ETL",
      "Operational Dashboards & Alerts",
    ],
    technologies: ["Webhooks & Event Streams", "Python Automations", "Microservices", "Cloud Queues"],
    metrics: "Up to 70% Manual Time Saved",
  },
  {
    id: "technology-consultancy",
    title: "Technology Consultancy",
    shortDesc:
      "Technology advisory, digital transformation, and practical IT solutions that support business objectives.",
    fullDesc:
      "Bridging the divide between executive strategy and technical execution. We evaluate architecture, audit software health, guide vendor selection, and outline actionable technology roadmaps.",
    icon: "Compass",
    deliverables: [
      "Digital Transformation Roadmaps",
      "Technical Feasibility & Architecture Audits",
      "System Modernization Strategies",
      "Vendor & Tech Stack Assessment",
    ],
    technologies: ["Cloud Governance", "Enterprise Architecture", "Security Auditing", "DevOps Roadmaps"],
    metrics: "Pragmatic, Cost-Effective Guidance",
  },
];

export const PRINCIPLES: PrincipleItem[] = [
  {
    id: "innovation",
    title: "Innovation",
    tagline: "Embracing modern technologies to solve real-world problems.",
    description:
      "We continually adopt modern engineering paradigms and modern toolchains, applying them thoughtfully to create real competitive advantages for your business.",
    highlight: "Modern Tech Stacks",
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    id: "reliability",
    title: "Reliability",
    tagline: "Building dependable digital solutions.",
    description:
      "Uptime, data integrity, and deterministic execution are non-negotiable. Our solutions are engineered with defense-in-depth, strict typing, and comprehensive testing.",
    highlight: "Enterprise Resiliency",
    accent: "from-indigo-500/20 to-blue-500/10",
  },
  {
    id: "practical-thinking",
    title: "Practical Thinking",
    tagline: "Focusing on solutions that deliver business value.",
    description:
      "We avoid unnecessary complexity. Every architectural decision is calibrated against your commercial reality, budget, and long-term maintainability.",
    highlight: "Business Value First",
    accent: "from-sky-500/20 to-indigo-500/10",
  },
  {
    id: "partnership",
    title: "Partnership",
    tagline: "Understanding business needs and building solutions around them.",
    description:
      "We do not simply write code; we immerse ourselves in your operating domain, becoming an invested technological ally dedicated to your long-term success.",
    highlight: "Collaborative Synergy",
    accent: "from-cyan-500/20 to-blue-500/10",
  },
];

export const CREDENTIALS = [
  { label: "Entity Type", value: "Private Limited Company" },
  { label: "Registration No.", value: "PVT-6Y1R5335" },
  { label: "Registration Status", value: "Active", badge: "Active" },
  { label: "Established", value: "2026" },
  { label: "Jurisdiction", value: "Kenya" },
  { label: "Nature of Business", value: "Software Solutions & Consultancy" },
];
