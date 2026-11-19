# ELDAPLUS TECHNOLOGIES LIMITED — Official Corporate Website

> **"Technology That Moves Businesses Forward."**

An Apple-inspired, minimalist, high-performance corporate landing page for **ELDAPLUS TECHNOLOGIES LIMITED**, a registered private limited technology company incorporated in Kenya.

---

## 🏛️ Company Information & Verified Credentials

| Attribute | Verified Record |
| :--- | :--- |
| **Company Name** | **ELDAPLUS TECHNOLOGIES LIMITED** |
| **Registration Number** | `PVT-6Y1R5335` |
| **Entity Type** | Private Limited Company |
| **Registration Status** | **Active** |
| **Incorporation Date** | 9 November 2026 |
| **Jurisdiction** | Republic of Kenya |
| **Nature of Business** | Provide Software Solutions and Consultancy |

*All verified information is sourced from official statutory filings and strictly avoids unverified or confidential disclosures.*

---

## 🎨 Design System & Visual Direction

Heavily inspired by [apple.com](https://www.apple.com), embodying an enterprise-grade minimalist aesthetic:

- **Color Palette**:
  - **Primary**: Deep Charcoal / Near-Black (`#111111`, `#0A0A0A`, `#161617`)
  - **Secondary**: Pure White (`#FFFFFF`)
  - **Accent**: Subtle Electric Blue (`#2997FF`)
  - **Supporting**: Light Grey (`#F5F5F7`, `#86868B`, `#1D1D1F`)
- **Visual Rhythm**: Seamless alternation between sleek dark keynote surfaces and crisp Apple light sections.
- **Typography**: Apple system font stack (`-apple-system`, `SF Pro Display`, `SF Pro Text`, `Helvetica Neue`) for instantaneous zero-latency rendering without third-party font calls.
- **Visual Composition**: Interactive canvas with 3D layered glass digital engine and dynamic node interconnectivity representing business systems in motion.
- **Micro-Interactions**: Subtle frosted-glass navbar on scroll, card sheen highlights, accessible hover states, and smooth reduced-motion compliance.

---

## 🧩 Architectural Structure & Sections

1. **Navigation (`src/components/Navbar.tsx`)**:
   - Typographic wordmark `ELDAPLUS` with electric blue accent.
   - Smooth scroll anchor links (Home, About, Solutions, Why ELDAPLUS, Credentials).
   - "Let's Talk" CTA triggering the modal dialog.
   - Responsive mobile navigation drawer with touch targets.

2. **Hero Section (`src/components/Hero.tsx` & `src/components/HeroVisual.tsx`)**:
   - Confident headline: *"Technology That Moves Businesses Forward."*
   - Supporting narrative and dual CTAs ("Explore Our Solutions" & "Get In Touch").
   - Interactive HTML5 canvas visualizer featuring ambient lighting and 3D layered architecture nodes.
   - Verified statutory status badge.

3. **Statutory Credentials Bar (`src/components/CredentialsBar.tsx`)**:
   - Direct verification strip highlighting Registration No. `PVT-6Y1R5335`, entity status, and jurisdiction.

4. **About Us (`src/components/AboutSection.tsx`)**:
   - Crisp Apple light surface (`#F5F5F7`).
   - Headline: *"Building Smarter Digital Experiences."*
   - Core enterprise pillars: Real Business Value, Resilient Architecture, and Forward-Thinking Execution.
   - Formal company credentials card.

5. **Solutions & Capabilities (`src/components/SolutionsSection.tsx`)**:
   - 4 specialized capability domains:
     - **Software Development**: Custom platforms, microservices, cloud-native backends.
     - **Web Development**: Ultra-fast, responsive enterprise web applications.
     - **Business Automation**: Workflow orchestration, systems integration, ETL pipelines.
     - **Technology Consultancy**: Strategic IT roadmaps, security and architecture audits.
   - Interactive "View Details" modal and direct inquiry triggers.

6. **Why ELDAPLUS (`src/components/WhyEldaPlusSection.tsx`)**:
   - Apple-style Bento grid layout.
   - Highlights the 4 founding principles: **Innovation**, **Reliability**, **Practical Thinking**, and **Partnership**.

7. **Engineering Rigor (`src/components/ArchitectureShowcase.tsx`)**:
   - Interactive 4-stage engineering walkthrough: Discovery, Clean-Code Engineering, Security Audits, and Managed Deployment.
   - Live code/spec snippet preview.

8. **Closing CTA (`src/components/ClosingCTA.tsx`)**:
   - Dark keynote aesthetic: *"Let's Build What's Next."*
   - Primary "Start a Conversation" action.

9. **Contact Section & Modal (`src/components/ContactSection.tsx`, `src/components/ContactModal.tsx`)**:
   - Fully interactive consultation request form with client-side validation and instant confirmation.
   - Clearly identified editable placeholders for corporate email, telephone, and registered office.

10. **Footer (`src/components/Footer.tsx`)**:
    - Full statutory disclosure notice.
    - Quick sitemap links.
    - Copyright © 2026 ELDAPLUS TECHNOLOGIES LIMITED. All Rights Reserved. Location: Kenya.

11. **SEO & Structured Data (`src/components/StructuredData.tsx`)**:
    - Schema.org `Corporation` JSON-LD metadata for search engine indexing.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict typing)
- **Styling**: Tailwind CSS v4 (Design tokens & modern utility engine)
- **Icons**: Lucide React
- **Animations**: CSS Hardware-Accelerated Transforms & HTML5 Canvas

---

## 🚀 Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

### Static / Local Preview

```bash
npm run start
```

### Code Quality & Linting

```bash
npm run lint
```

---

## 📝 Editing Company Details & Services

All corporate details, contact channels, and service offerings are centralized in:

📂 [`src/data/company.ts`](./src/data/company.ts)

You can easily modify service descriptions, add or update contact phone numbers, emails, and address coordinates in this single file.
