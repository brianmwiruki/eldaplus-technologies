"use client";

import React, { useState } from "react";
import { Terminal, Cpu, CheckCircle2, Shield, Layers, GitBranch } from "lucide-react";

export default function ArchitectureShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const stages = [
    {
      step: "01",
      title: "Discovery & System Architecture",
      icon: Layers,
      summary: "Deconstructing business workflows into formal technical specifications.",
      details: [
        "Domain-driven requirement mapping",
        "Data schema & API contract design",
        "Infrastructure cost & scalability modeling",
        "Security & compliance boundary definition",
      ],
      codeSnippet: `// ELDAPLUS Architecture Blueprint
export interface SystemArchitecture {
  tier: "CloudNative" | "Microservices";
  database: "PostgreSQL_Distributed";
  compliance: "Strict_Access_Control";
  availabilityTarget: 0.9999;
}`,
    },
    {
      step: "02",
      title: "Clean-Code Engineering",
      icon: GitBranch,
      summary: "High-velocity development using modern, strictly typed toolchains.",
      details: [
        "End-to-end TypeScript & typed schemas",
        "Stateless API microservices & caching",
        "Modular UI component architectures",
        "Automated CI/CD testing pipelines",
      ],
      codeSnippet: `// Deterministic Business Logic
export async function executeWorkflow(payload: SecurePayload) {
  const verified = await verifyEnterpriseAuth(payload);
  const result = await processBusinessRules(verified);
  return { status: "PROCESSED", timestamp: Date.now() };
}`,
    },
    {
      step: "03",
      title: "Security & Quality Assurance",
      icon: Shield,
      summary: "Exhaustive automated testing, vulnerability scanning, and load simulation.",
      details: [
        "Automated unit & integration suites",
        "OWASP security vulnerability auditing",
        "High-concurrency load & latency stress testing",
        "Resilient failover & disaster recovery plans",
      ],
      codeSnippet: `// Continuous Verification Suite
describe("Enterprise Resiliency", () => {
  it("enforces sub-200ms p95 latency under high load", async () => {
    const metrics = await runStressSuite({ concurrentUsers: 5000 });
    expect(metrics.p95LatencyMs).toBeLessThan(200);
  });
});`,
    },
    {
      step: "04",
      title: "Deployment & Managed Stewardship",
      icon: Cpu,
      summary: "Zero-downtime automated deployment with 24/7 observability.",
      details: [
        "Containerized Docker & Kubernetes workloads",
        "Real-time APM telemetry & error tracking",
        "Continuous automated database backups",
        "Dedicated East Africa (EAT) technical support",
      ],
      codeSnippet: `// Continuous Observability & Health
healthCheck.registerMonitor({
  heartbeatInterval: "10s",
  slaThreshold: "99.9%",
  alertChannel: "ops-emergency@eldaplus.co.ke",
});`,
    },
  ];

  const currentStage = stages[activeTab];
  const CurrentIcon = currentStage.icon;

  return (
    <section className="py-24 sm:py-32 bg-[#111111] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#2997FF] text-xs font-semibold tracking-wider uppercase">
            <Terminal className="w-3.5 h-3.5" />
            <span>Engineering Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12]">
            Engineered for Stability. <br />
            <span className="text-[#86868B]">From Inception to Production.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed">
            We hold our engineering process to rigorous global standards, ensuring your software is
            maintainable, performant, and built to endure.
          </p>
        </div>

        {/* Stage Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isCurrent = activeTab === idx;
            return (
              <button
                key={stage.step}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl text-left transition-all border ${
                  isCurrent
                    ? "bg-[#1d1d1f] border-[#2997FF] shadow-lg shadow-[#2997FF]/10 text-white"
                    : "bg-[#161617] border-white/5 text-white/50 hover:text-white/80 hover:border-white/15"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#2997FF]">{stage.step}</span>
                  <Icon className={`w-4 h-4 ${isCurrent ? "text-[#2997FF]" : "text-white/40"}`} />
                </div>
                <p className="text-xs sm:text-sm font-semibold truncate text-white">
                  {stage.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Stage Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-[#161617] border border-white/10">
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#2997FF]/10 text-[#2997FF] flex items-center justify-center">
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#2997FF]">Stage {currentStage.step}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{currentStage.title}</h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {currentStage.summary}
            </p>

            <div className="space-y-3 pt-2">
              {currentStage.details.map((detail) => (
                <div key={detail} className="flex items-center space-x-3 text-xs sm:text-sm text-white/70">
                  <CheckCircle2 className="w-4 h-4 text-[#2997FF] shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Code/Architecture Window */}
          <div className="lg:col-span-6 rounded-2xl bg-black border border-white/10 overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 bg-white/[0.04] border-b border-white/10">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-[11px] font-mono text-white/40">eldaplus-spec.ts</span>
            </div>
            <pre className="p-5 text-xs font-mono text-white/80 overflow-x-auto leading-relaxed">
              <code>{currentStage.codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
