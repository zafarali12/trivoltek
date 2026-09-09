import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Service detail data with sprint-wise process ──────────────────────
const SERVICES_DETAIL = [
  {
    id: "01",
    icon: "neurology",
    tag: "Service 01",
    title: "AI SaaS Product Engineering",
    desc: "End-to-end development of scalable AI SaaS platforms, multi-tenant cloud architectures, proprietary LLM integrations, and automated recurring billing systems.",
    metric: "SCALABILITY: 10M+ USERS",
    accentColor: "#20B2AA",
    glowColor: "rgba(32, 178, 170, 0.18)",
    overview:
      "We don't just build AI features — we architect full-scale AI SaaS products from the ground up. Using sprint-based delivery, your product ships fast, learns fast, and scales even faster.",
    tech: ["Next.js 15", "FastAPI", "OpenAI", "LangChain", "PostgreSQL", "Redis", "Stripe", "Vercel"],
    sprints: [
      {
        sprint: "Sprint 1–2",
        label: "Discovery & Architecture",
        details: [
          "Deep-dive requirement sessions & user journey mapping",
          "Tech stack selection & multi-tenant DB schema design",
          "LLM vendor evaluation (OpenAI / Claude / open-source)",
          "Wireframes, user flows, and system architecture diagram",
        ],
      },
      {
        sprint: "Sprint 3–4",
        label: "Core Backend & AI Pipeline",
        details: [
          "FastAPI/Node backend with JWT auth & RBAC",
          "RAG pipeline setup: vector store, embeddings, retrieval",
          "Multi-tenant data isolation & row-level security",
          "AI API abstraction layer with rate limiting & cost tracking",
        ],
      },
      {
        sprint: "Sprint 5–6",
        label: "Frontend & Dashboard",
        details: [
          "Next.js 15 app with App Router, server components & SSR",
          "Real-time usage analytics dashboard",
          "Custom AI chat interface / AI-powered feature UI",
          "Role-based dashboards for admin, team & end users",
        ],
      },
      {
        sprint: "Sprint 7–8",
        label: "Billing, Auth & Launch",
        details: [
          "Stripe subscription plans, trial periods & metered billing",
          "SSO / OAuth (Google, GitHub) & MFA integration",
          "CI/CD pipeline, Vercel/AWS deployment & monitoring",
          "Security audit, load testing & production launch",
        ],
      },
    ],
    outcomes: [
      { label: "Time to MVP", value: "6–8 Sprints" },
      { label: "Scalability", value: "10M+ Users" },
      { label: "AI Accuracy", value: "99.4% Precision" },
      { label: "Latency", value: "<280ms" },
    ],
  },
  {
    id: "02",
    icon: "web",
    tag: "Service 02",
    title: "Custom Website & Web Apps",
    desc: "High-performance, bespoke modern web applications built with cutting-edge frontends, responsive fluid layouts, and conversion-focused UX design.",
    metric: "PERFORMANCE: 99+ SCORE",
    accentColor: "#48D1CC",
    glowColor: "rgba(72, 209, 204, 0.15)",
    overview:
      "Your website is your most powerful salesperson. We build premium digital experiences that convert visitors into clients — with pixel-perfect design, blazing performance, and SEO-first architecture.",
    tech: ["React / Next.js", "Framer Motion", "Three.js", "GSAP", "Sanity CMS", "Tailwind", "Vercel"],
    sprints: [
      {
        sprint: "Sprint 1",
        label: "Brand Strategy & Design",
        details: [
          "Brand audit, competitor analysis & positioning strategy",
          "Figma wireframes, moodboard & high-fidelity UI mockups",
          "Design token system (typography, colors, spacing, icons)",
          "Client approval & feedback loop before any code is written",
        ],
      },
      {
        sprint: "Sprint 2–3",
        label: "Frontend Development",
        details: [
          "Next.js / React build with Framer Motion micro-animations",
          "Fully responsive layout (mobile-first, fluid breakpoints)",
          "Three.js / WebGL 3D hero sections & interactive elements",
          "Accessibility (WCAG 2.1 AA) & semantic HTML implementation",
        ],
      },
      {
        sprint: "Sprint 4",
        label: "CMS, SEO & Performance",
        details: [
          "Headless CMS (Sanity/Contentful) integration for easy updates",
          "Technical SEO: schema markup, OpenGraph, sitemap & robots.txt",
          "Core Web Vitals optimization — targeting 99+ Lighthouse score",
          "Image optimization, lazy loading & CDN configuration",
        ],
      },
      {
        sprint: "Sprint 5",
        label: "Testing, Analytics & Launch",
        details: [
          "Cross-browser & device testing (Chrome, Safari, Firefox, Mobile)",
          "Google Analytics 4 + heatmaps + conversion tracking setup",
          "Final client walkthrough, content population & QA sign-off",
          "Vercel deployment with custom domain, SSL & edge network",
        ],
      },
    ],
    outcomes: [
      { label: "Lighthouse Score", value: "99+" },
      { label: "Load Time", value: "<1.2s" },
      { label: "Conversion Boost", value: "3.2×" },
      { label: "Delivery", value: "4–5 Sprints" },
    ],
  },
  {
    id: "03",
    icon: "stay_current_portrait",
    tag: "Service 03",
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android mobile applications engineered with native fluid responsiveness, offline-first sync, and intuitive user experiences.",
    metric: "PLATFORMS: IOS & ANDROID",
    accentColor: "#79F6ED",
    glowColor: "rgba(121, 246, 237, 0.12)",
    overview:
      "One codebase. Two stores. Maximum performance. We build React Native apps that feel indistinguishable from native — with smooth 60fps animations, offline sync, and seamless push notifications.",
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Firebase", "Reanimated 3", "Zustand"],
    sprints: [
      {
        sprint: "Sprint 1",
        label: "UX Research & Design",
        details: [
          "User persona mapping & core flow analysis",
          "Figma app design — all screens, states & microinteractions",
          "Navigation architecture (stack, tab & drawer patterns)",
          "Prototype review & client approval before development",
        ],
      },
      {
        sprint: "Sprint 2–3",
        label: "Core App Development",
        details: [
          "React Native + Expo setup with TypeScript",
          "Navigation (React Navigation v7) & state management",
          "Reanimated 3 for 60fps native-feel animations & gestures",
          "Backend API integration & real-time data sync",
        ],
      },
      {
        sprint: "Sprint 4",
        label: "Native Features & Offline Mode",
        details: [
          "Push notifications (Expo Notifications / FCM / APNs)",
          "Offline-first architecture with MMKV storage & sync queue",
          "Camera, location, biometric auth & device API integration",
          "App Store & Google Play asset preparation & metadata",
        ],
      },
      {
        sprint: "Sprint 5",
        label: "QA, Beta & Store Submission",
        details: [
          "TestFlight & Google Play Beta distribution for user testing",
          "Performance profiling, memory leak fixing & crash analytics",
          "App Store review guidelines compliance check",
          "Full submission to App Store & Google Play Store",
        ],
      },
    ],
    outcomes: [
      { label: "Platforms", value: "iOS & Android" },
      { label: "Frame Rate", value: "60fps Native" },
      { label: "Code Share", value: "~95%" },
      { label: "Delivery", value: "5–6 Sprints" },
    ],
  },
  {
    id: "04",
    icon: "precision_manufacturing",
    tag: "Service 04",
    title: "AI Automation & Workflows",
    desc: "Autonomous agent workflows, robotic process automation (RPA), and intelligent API integrations eliminating manual enterprise operational overhead.",
    metric: "EFFICIENCY: 85% AUTOMATION",
    accentColor: "#20B2AA",
    glowColor: "rgba(32, 178, 170, 0.15)",
    overview:
      "Stop paying humans to do machine-grade work. We map your most expensive manual processes and replace them with autonomous AI agents, smart RPA bots, and no-code-to-code hybrid workflows.",
    tech: ["LangGraph", "n8n", "Zapier", "Make.com", "Python", "FastAPI", "OpenAI", "Webhooks"],
    sprints: [
      {
        sprint: "Sprint 1",
        label: "Process Audit & Mapping",
        details: [
          "Full audit of existing manual workflows & bottlenecks",
          "ROI analysis: time saved vs. automation investment",
          "Tool selection (n8n, Make, LangGraph, or custom agents)",
          "Architecture design & client-approved automation blueprint",
        ],
      },
      {
        sprint: "Sprint 2–3",
        label: "Automation Build & Agent Setup",
        details: [
          "Multi-agent LangGraph workflows with tool use & memory",
          "n8n / Make.com workflow builds with error handling & retries",
          "API & webhook integrations (CRM, Slack, email, Sheets, etc.)",
          "Scheduled triggers, event-based flows & human-in-the-loop gates",
        ],
      },
      {
        sprint: "Sprint 4",
        label: "Testing & Deployment",
        details: [
          "End-to-end workflow testing with edge case simulation",
          "Error monitoring & alerting with Slack/email notifications",
          "Self-healing retry logic & fallback mechanisms",
          "Live deployment with sandbox/staging toggle",
        ],
      },
    ],
    outcomes: [
      { label: "Time Saved", value: "85% Tasks" },
      { label: "Error Rate", value: "-94%" },
      { label: "ROI", value: "4–10× Typical" },
      { label: "Delivery", value: "3–4 Sprints" },
    ],
  },
  {
    id: "05",
    icon: "build_circle",
    tag: "Service 05",
    title: "Bug Fixing & Code Optimization",
    desc: "Deep architectural code refactoring, critical bug resolution, security auditing, and speed optimization to make your apps rock-solid and stable.",
    metric: "UPTIME: 99.99% SLA",
    accentColor: "#8A97A2",
    glowColor: "rgba(138, 151, 162, 0.15)",
    overview:
      "Legacy bugs kill products silently. We perform forensic-level code analysis, crush performance bottlenecks, fix critical security vulnerabilities, and refactor messy codebases into maintainable architecture.",
    tech: ["Any Stack", "Sentry", "Datadog", "Lighthouse", "OWASP", "SonarQube", "Playwright"],
    sprints: [
      {
        sprint: "Sprint 1",
        label: "Audit & Diagnosis",
        details: [
          "Full codebase review — architecture, patterns & anti-patterns",
          "Performance profiling (CPU, memory, network, bundle size)",
          "Security vulnerability scan (OWASP Top 10 & CVEs)",
          "Prioritized issue report with severity classifications",
        ],
      },
      {
        sprint: "Sprint 2–3",
        label: "Fixing & Refactoring",
        details: [
          "Critical bug fixes with root cause analysis documentation",
          "Database query optimization & N+1 query elimination",
          "Component/module refactoring with test coverage",
          "Security patches: XSS, CSRF, injection & auth vulnerabilities",
        ],
      },
      {
        sprint: "Sprint 4",
        label: "Performance & Monitoring",
        details: [
          "Bundle splitting, lazy loading & caching strategy implementation",
          "Sentry / Datadog error tracking & alerting setup",
          "Load testing with k6 or Artillery to verify fix stability",
          "Post-fix documentation & developer handover",
        ],
      },
    ],
    outcomes: [
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Perf Boost", value: "Up to 8×" },
      { label: "Security", value: "OWASP Compliant" },
      { label: "Delivery", value: "3–4 Sprints" },
    ],
  },
  {
    id: "06",
    icon: "trending_up",
    tag: "Service 06",
    title: "SEO Building & Growth",
    desc: "Full-stack technical SEO, schema architecture, Core Web Vitals optimization, and high-conversion indexing strategies that dominate search engines.",
    metric: "ORGANIC REACH: +340%",
    accentColor: "#20B2AA",
    glowColor: "rgba(32, 178, 170, 0.14)",
    overview:
      "SEO isn't just keywords. We engineer search dominance through technical architecture, semantic content strategy, and Core Web Vitals optimization that Google's algorithm can't ignore.",
    tech: ["Google Search Console", "Ahrefs", "SEMrush", "Schema.org", "GA4", "Screaming Frog", "Next.js SSR"],
    sprints: [
      {
        sprint: "Sprint 1",
        label: "Technical SEO Audit",
        details: [
          "Full site crawl: broken links, redirect chains & canonical issues",
          "Core Web Vitals analysis (LCP, CLS, FID/INP) across all pages",
          "Keyword gap analysis vs. top 5 competitors",
          "Indexed page review & crawl budget optimization plan",
        ],
      },
      {
        sprint: "Sprint 2–3",
        label: "On-Page & Technical Fixes",
        details: [
          "Schema markup implementation (Article, Product, FAQ, LocalBusiness)",
          "Title tags, meta descriptions & heading hierarchy optimization",
          "Internal linking strategy rebuild & anchor text optimization",
          "SSR / SSG architecture for max Google indexing speed",
        ],
      },
      {
        sprint: "Sprint 4",
        label: "Content Strategy & Growth",
        details: [
          "Topical authority cluster creation for target keyword groups",
          "Content brief templates for ongoing SEO-optimized publishing",
          "Backlink outreach strategy & digital PR placement plan",
          "GA4 + Search Console dashboard for ongoing tracking",
        ],
      },
    ],
    outcomes: [
      { label: "Organic Growth", value: "+340%" },
      { label: "Core Web Vitals", value: "All Green" },
      { label: "Index Rate", value: "95%+ Pages" },
      { label: "Delivery", value: "4 Sprints" },
    ],
  },
];

// ─── Sprint Step Component ─────────────────────────────────────────────
function SprintStep({ sprint, isLast }) {
  return (
    <div style={{ display: "flex", gap: "16px", position: "relative" }}>
      {/* Timeline line */}
      {!isLast && (
        <div
          style={{
            position: "absolute",
            left: "19px",
            top: "40px",
            width: "2px",
            bottom: "-12px",
            background: "linear-gradient(to bottom, rgba(32,178,170,0.5), rgba(32,178,170,0.05))",
          }}
        />
      )}
      {/* Dot */}
      <div
        style={{
          width: "38px",
          height: "38px",
          borderRadius: "50%",
          background: "rgba(32,178,170,0.12)",
          border: "2px solid rgba(32,178,170,0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-headline)",
            fontSize: "10px",
            fontWeight: 800,
            color: "#20B2AA",
            letterSpacing: "0.04em",
          }}
        >
          {sprint.sprint.replace("Sprint ", "S")}
        </span>
      </div>
      {/* Content */}
      <div style={{ paddingBottom: "24px", flex: 1 }}>
        <div
          style={{
            fontFamily: "var(--font-headline)",
            fontSize: "14px",
            fontWeight: 700,
            color: "var(--color-primary)",
            marginBottom: "10px",
          }}
        >
          {sprint.label}
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "7px" }}>
          {sprint.details.map((d, i) => (
            <li key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "var(--color-secondary)",
                  flexShrink: 0,
                  marginTop: "7px",
                }}
              />
              <span
                style={{
                  fontSize: "13.5px",
                  color: "var(--color-on-surface-variant)",
                  lineHeight: 1.55,
                }}
              >
                {d}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Service Detail Modal ──────────────────────────────────────────────
function ServiceModal({ service, onClose }) {
  return (
    <AnimatePresence>
      {service && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(6, 22, 42, 0.75)",
              backdropFilter: "blur(6px)",
              zIndex: 999,
            }}
          />
          {/* Modal Wrapper — fixed overlay that handles centering */}
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px",
              pointerEvents: "none",
            }}
          >
          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              pointerEvents: "all",
              width: "100%",
              maxWidth: "720px",
              maxHeight: "88vh",
              overflowY: "auto",
              overflowX: "hidden",
              background: "#ffffff",
              borderRadius: "20px",
              boxShadow: "0 40px 80px -20px rgba(6, 22, 42, 0.35), 0 0 0 1px rgba(32, 178, 170, 0.25)",
            }}
          >

            {/* Modal Header */}
            <div
              style={{
                background: "var(--color-primary)",
                borderRadius: "20px 20px 0 0",
                padding: "32px 36px 28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Ambient glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-60px",
                  right: "-60px",
                  width: "200px",
                  height: "200px",
                  background: service.glowColor,
                  borderRadius: "50%",
                  filter: "blur(50px)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: "rgba(32,178,170,0.15)",
                        border: "1px solid rgba(32,178,170,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: service.accentColor,
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>
                        {service.icon}
                      </span>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          color: service.accentColor,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          marginBottom: "4px",
                        }}
                      >
                        {service.tag}
                      </div>
                      <h2
                        style={{
                          fontFamily: "var(--font-headline)",
                          fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
                          fontWeight: 800,
                          color: "#ffffff",
                          letterSpacing: "-0.02em",
                          margin: 0,
                        }}
                      >
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    aria-label="Close modal"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(244,241,230,0.08)",
                      border: "1px solid rgba(244,241,230,0.12)",
                      color: "rgba(244,241,230,0.7)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "18px",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(244,241,230,0.16)";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(244,241,230,0.08)";
                      e.currentTarget.style.color = "rgba(244,241,230,0.7)";
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                      close
                    </span>
                  </button>
                </div>
                <p
                  style={{
                    fontSize: "14.5px",
                    color: "rgba(244,241,230,0.72)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {service.overview}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div style={{ padding: "32px 36px", background: "#ffffff" }}>
              {/* Outcome Stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "12px",
                  marginBottom: "36px",
                }}
                className="modal-outcomes-grid"
              >
                {service.outcomes.map((o, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--color-surface-container-low)",
                      border: "1px solid rgba(6,22,42,0.07)",
                      borderRadius: "12px",
                      padding: "14px 12px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-headline)",
                        fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)",
                        fontWeight: 800,
                        color: "var(--color-secondary)",
                        letterSpacing: "-0.02em",
                        marginBottom: "4px",
                      }}
                    >
                      {o.value}
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        color: "var(--color-outline)",
                        textTransform: "uppercase",
                        letterSpacing: "0.07em",
                      }}
                    >
                      {o.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sprint Timeline */}
              <h3
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--color-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "24px",
                }}
              >
                How We Build It — Sprint by Sprint
              </h3>
              <div>
                {service.sprints.map((s, i) => (
                  <SprintStep key={i} sprint={s} isLast={i === service.sprints.length - 1} />
                ))}
              </div>

              {/* Tech Stack */}
              <div
                style={{
                  marginTop: "28px",
                  paddingTop: "24px",
                  borderTop: "1px solid var(--color-surface-container-high)",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--color-outline)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "12px",
                  }}
                >
                  Tech Stack
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "5px 12px",
                        borderRadius: "100px",
                        background: "var(--color-surface-container)",
                        border: "1px solid rgba(6,22,42,0.08)",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--color-primary)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <motion.a
                  href="#contact"
                  onClick={onClose}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-stitch-primary"
                  style={{ padding: "12px 24px" }}
                >
                  <span>Start This Project</span>
                  <span className="material-symbols-outlined" style={{ fontSize: "17px" }}>
                    arrow_forward
                  </span>
                </motion.a>
                <motion.a
                  href="mailto:trivoltrk@gmail.com"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-stitch-secondary"
                  style={{ padding: "12px 24px" }}
                >
                  <span>Email Directly</span>
                  <span className="material-symbols-outlined" style={{ fontSize: "17px" }}>
                    mail
                  </span>
                </motion.a>
              </div>
            </div>

            <style>{`
              @media (max-width: 520px) {
                .modal-outcomes-grid {
                  grid-template-columns: repeat(2, 1fr) !important;
                }
              }
            `}</style>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Main Pillars Component ─────────────────────────────────────────────
export default function Pillars() {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <section
        id="innovations"
        style={{
          width: "100%",
          backgroundColor: "var(--color-surface)",
          padding: "96px 0",
        }}
      >
        <div className="container-stitch">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "48px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "24px",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "var(--color-secondary)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Our Core Services
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                    fontWeight: 800,
                    color: "var(--color-primary)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Engineering &amp; Digital Solutions
                </h2>
              </div>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--color-on-surface-variant)",
                  maxWidth: "480px",
                  lineHeight: 1.6,
                }}
              >
                From custom AI SaaS products and high-performance websites to mobile apps,
                intelligent automations, bug fixing, and technical SEO growth.{" "}
                <strong style={{ color: "var(--color-secondary)", fontWeight: 700 }}>
                  Click any card to see our sprint-by-sprint process.
                </strong>
              </p>
            </div>
          </motion.div>

          {/* 6 Services Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {SERVICES_DETAIL.map((service, idx) => {
              const isHovered = hoveredId === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedService(service)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedService(service)}
                  aria-label={`View details for ${service.title}`}
                  style={{
                    position: "relative",
                    borderRadius: "16px",
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    overflow: "hidden",
                    backgroundColor: isHovered ? "var(--color-primary)" : "#ffffff",
                    boxShadow: isHovered
                      ? "0 24px 48px -12px rgba(6, 22, 42, 0.32), 0 0 0 1px rgba(32, 178, 170, 0.35)"
                      : "0 4px 20px rgba(6, 22, 42, 0.04), 0 0 0 1px rgba(6, 22, 42, 0.06)",
                    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                    outline: "none",
                  }}
                >
                  {/* Ambient glow */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "130px",
                      height: "130px",
                      backgroundColor: "rgba(32, 178, 170, 0.25)",
                      borderRadius: "50%",
                      filter: "blur(40px)",
                      pointerEvents: "none",
                      opacity: isHovered ? 1 : 0,
                      transition: "opacity 0.35s ease",
                    }}
                  />

                  {/* "Click to explore" hint badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      padding: "4px 9px",
                      borderRadius: "100px",
                      background: isHovered ? "rgba(32,178,170,0.22)" : "var(--color-surface-container)",
                      border: isHovered ? "1px solid rgba(32,178,170,0.45)" : "1px solid rgba(6,22,42,0.07)",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      transition: "all 0.35s ease",
                      opacity: isHovered ? 1 : 0.6,
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: "12px",
                        color: isHovered ? "#79F6ED" : "var(--color-secondary)",
                      }}
                    >
                      open_in_new
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        fontFamily: "var(--font-headline)",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: isHovered ? "#79F6ED" : "var(--color-secondary)",
                      }}
                    >
                      Explore
                    </span>
                  </div>

                  {/* Card Header & Content */}
                  <div style={{ position: "relative", zIndex: 1 }}>
                    {/* Icon */}
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "10px",
                        backgroundColor: isHovered
                          ? "rgba(32, 178, 170, 0.18)"
                          : "var(--color-surface-container)",
                        color: isHovered ? "#79F6ED" : "var(--color-secondary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px",
                        transition: "all 0.35s ease",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>
                        {service.icon}
                      </span>
                    </div>

                    {/* Service Tag */}
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "4px",
                        backgroundColor: isHovered
                          ? "rgba(32, 178, 170, 0.2)"
                          : "var(--color-surface-container-high)",
                        color: isHovered ? "#79F6ED" : "var(--color-primary)",
                        fontFamily: "var(--font-headline)",
                        fontSize: "11px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        display: "inline-block",
                        transition: "all 0.35s ease",
                      }}
                    >
                      {service.tag}
                    </span>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "var(--font-headline)",
                        fontSize: "20px",
                        fontWeight: 700,
                        color: isHovered ? "#ffffff" : "var(--color-primary)",
                        marginTop: "12px",
                        marginBottom: "8px",
                        transition: "color 0.35s ease",
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "14px",
                        color: isHovered
                          ? "rgba(244, 241, 230, 0.82)"
                          : "var(--color-on-surface-variant)",
                        lineHeight: 1.6,
                        transition: "color 0.35s ease",
                      }}
                    >
                      {service.desc}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      marginTop: "24px",
                      paddingTop: "16px",
                      borderTop: isHovered
                        ? "1px solid rgba(244, 241, 230, 0.14)"
                        : "1px solid var(--color-surface-container-high)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "border-color 0.35s ease",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-code)",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: isHovered ? "#79F6ED" : "var(--color-secondary)",
                        transition: "color 0.35s ease",
                      }}
                    >
                      {service.metric}
                    </span>

                    <span
                      style={{
                        color: isHovered ? "#79F6ED" : "var(--color-outline)",
                        display: "flex",
                        alignItems: "center",
                        transform: isHovered ? "translateX(4px)" : "translateX(0)",
                        transition: "all 0.35s ease",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                        chevron_right
                      </span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </>
  );
}
