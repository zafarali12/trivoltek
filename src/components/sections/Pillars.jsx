import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACCENT = "#15BCDF";
const ACCENT_HOVER = "#3fd0ef";
const ACCENT_BORDER = "#0fa3c2";
const Q = "'Quantico', 'Arial Narrow', sans-serif";

// ─── Service detail data ──────────────────────────────────────────────────
const SERVICES_DETAIL = [
  {
    id: "01",
    icon: "neurology",
    tag: "Service 01",
    title: "AI SaaS Product Engineering",
    desc: "End-to-end development of scalable AI SaaS platforms, multi-tenant cloud architectures, proprietary LLM integrations, and automated recurring billing systems.",
    metric: "SCALABILITY: 10M+ USERS",
    overview:
      "We don't just build AI features — we architect full-scale AI SaaS products from the ground up. Using sprint-based delivery, your product ships fast, learns fast, and scales even faster.",
    tech: ["Next.js 15", "FastAPI", "OpenAI", "LangChain", "PostgreSQL", "Redis", "Stripe", "Vercel"],
    sprints: [
      { sprint: "Sprint 1–2", label: "Discovery & Architecture", details: ["Deep-dive requirement sessions & user journey mapping", "Tech stack selection & multi-tenant DB schema design", "LLM vendor evaluation (OpenAI / Claude / open-source)", "Wireframes, user flows, and system architecture diagram"] },
      { sprint: "Sprint 3–4", label: "Core Backend & AI Pipeline", details: ["FastAPI/Node backend with JWT auth & RBAC", "RAG pipeline setup: vector store, embeddings, retrieval", "Multi-tenant data isolation & row-level security", "AI API abstraction layer with rate limiting & cost tracking"] },
      { sprint: "Sprint 5–6", label: "Frontend & Dashboard", details: ["Next.js 15 app with App Router, server components & SSR", "Real-time usage analytics dashboard", "Custom AI chat interface / AI-powered feature UI", "Role-based dashboards for admin, team & end users"] },
      { sprint: "Sprint 7–8", label: "Billing, Auth & Launch", details: ["Stripe subscription plans, trial periods & metered billing", "SSO / OAuth (Google, GitHub) & MFA integration", "CI/CD pipeline, Vercel/AWS deployment & monitoring", "Security audit, load testing & production launch"] },
    ],
    outcomes: [{ label: "Time to MVP", value: "6–8 Sprints" }, { label: "Scalability", value: "10M+ Users" }, { label: "AI Accuracy", value: "99.4% Precision" }, { label: "Latency", value: "<280ms" }],
  },
  {
    id: "02",
    icon: "web",
    tag: "Service 02",
    title: "Custom Website & Web Apps",
    desc: "High-performance, bespoke modern web applications built with cutting-edge frontends, responsive fluid layouts, and conversion-focused UX design.",
    metric: "PERFORMANCE: 99+ SCORE",
    overview: "Your website is your most powerful salesperson. We build premium digital experiences that convert visitors into clients — with pixel-perfect design, blazing performance, and SEO-first architecture.",
    tech: ["React / Next.js", "Framer Motion", "Three.js", "GSAP", "Sanity CMS", "Tailwind", "Vercel"],
    sprints: [
      { sprint: "Sprint 1", label: "Brand Strategy & Design", details: ["Brand audit, competitor analysis & positioning strategy", "Figma wireframes, moodboard & high-fidelity UI mockups", "Design token system (typography, colors, spacing, icons)", "Client approval & feedback loop before any code is written"] },
      { sprint: "Sprint 2–3", label: "Frontend Development", details: ["Next.js / React build with Framer Motion micro-animations", "Fully responsive layout (mobile-first, fluid breakpoints)", "Three.js / WebGL 3D hero sections & interactive elements", "Accessibility (WCAG 2.1 AA) & semantic HTML implementation"] },
      { sprint: "Sprint 4", label: "CMS, SEO & Performance", details: ["Headless CMS (Sanity/Contentful) integration for easy updates", "Technical SEO: schema markup, OpenGraph, sitemap & robots.txt", "Core Web Vitals optimization — targeting 99+ Lighthouse score", "Image optimization, lazy loading & CDN configuration"] },
      { sprint: "Sprint 5", label: "Testing, Analytics & Launch", details: ["Cross-browser & device testing (Chrome, Safari, Firefox, Mobile)", "Google Analytics 4 + heatmaps + conversion tracking setup", "Final client walkthrough, content population & QA sign-off", "Vercel deployment with custom domain, SSL & edge network"] },
    ],
    outcomes: [{ label: "Lighthouse Score", value: "99+" }, { label: "Load Time", value: "<1.2s" }, { label: "Conversion Boost", value: "3.2×" }, { label: "Delivery", value: "4–5 Sprints" }],
  },
  {
    id: "03",
    icon: "stay_current_portrait",
    tag: "Service 03",
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android mobile applications engineered with native fluid responsiveness, offline-first sync, and intuitive user experiences.",
    metric: "PLATFORMS: IOS & ANDROID",
    overview: "One codebase. Two stores. Maximum performance. We build React Native apps that feel indistinguishable from native — with smooth 60fps animations, offline sync, and seamless push notifications.",
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Firebase", "Reanimated 3", "Zustand"],
    sprints: [
      { sprint: "Sprint 1", label: "UX Research & Design", details: ["User persona mapping & core flow analysis", "Figma app design — all screens, states & microinteractions", "Navigation architecture (stack, tab & drawer patterns)", "Prototype review & client approval before development"] },
      { sprint: "Sprint 2–3", label: "Core App Development", details: ["React Native + Expo setup with TypeScript", "Navigation (React Navigation v7) & state management", "Reanimated 3 for 60fps native-feel animations & gestures", "Backend API integration & real-time data sync"] },
      { sprint: "Sprint 4", label: "Native Features & Offline Mode", details: ["Push notifications (Expo Notifications / FCM / APNs)", "Offline-first architecture with MMKV storage & sync queue", "Camera, location, biometric auth & device API integration", "App Store & Google Play asset preparation & metadata"] },
      { sprint: "Sprint 5", label: "QA, Beta & Store Submission", details: ["TestFlight & Google Play Beta distribution for user testing", "Performance profiling, memory leak fixing & crash analytics", "App Store review guidelines compliance check", "Full submission to App Store & Google Play Store"] },
    ],
    outcomes: [{ label: "Platforms", value: "iOS & Android" }, { label: "Frame Rate", value: "60fps Native" }, { label: "Code Share", value: "~95%" }, { label: "Delivery", value: "5–6 Sprints" }],
  },
  {
    id: "04",
    icon: "precision_manufacturing",
    tag: "Service 04",
    title: "AI Automation & Workflows",
    desc: "Autonomous agent workflows, robotic process automation (RPA), and intelligent API integrations eliminating manual enterprise operational overhead.",
    metric: "EFFICIENCY: 85% AUTOMATION",
    overview: "Stop paying humans to do machine-grade work. We map your most expensive manual processes and replace them with autonomous AI agents, smart RPA bots, and no-code-to-code hybrid workflows.",
    tech: ["LangGraph", "n8n", "Zapier", "Make.com", "Python", "FastAPI", "OpenAI", "Webhooks"],
    sprints: [
      { sprint: "Sprint 1", label: "Process Audit & Mapping", details: ["Full audit of existing manual workflows & bottlenecks", "ROI analysis: time saved vs. automation investment", "Tool selection (n8n, Make, LangGraph, or custom agents)", "Architecture design & client-approved automation blueprint"] },
      { sprint: "Sprint 2–3", label: "Automation Build & Agent Setup", details: ["Multi-agent LangGraph workflows with tool use & memory", "n8n / Make.com workflow builds with error handling & retries", "API & webhook integrations (CRM, Slack, email, Sheets, etc.)", "Scheduled triggers, event-based flows & human-in-the-loop gates"] },
      { sprint: "Sprint 4", label: "Testing & Deployment", details: ["End-to-end workflow testing with edge case simulation", "Error monitoring & alerting with Slack/email notifications", "Self-healing retry logic & fallback mechanisms", "Live deployment with sandbox/staging toggle"] },
    ],
    outcomes: [{ label: "Time Saved", value: "85% Tasks" }, { label: "Error Rate", value: "-94%" }, { label: "ROI", value: "4–10× Typical" }, { label: "Delivery", value: "3–4 Sprints" }],
  },
  {
    id: "05",
    icon: "build_circle",
    tag: "Service 05",
    title: "Bug Fixing & Code Optimization",
    desc: "Deep architectural code refactoring, critical bug resolution, security auditing, and speed optimization to make your apps rock-solid and stable.",
    metric: "UPTIME: 99.99% SLA",
    overview: "Legacy bugs kill products silently. We perform forensic-level code analysis, crush performance bottlenecks, fix critical security vulnerabilities, and refactor messy codebases into maintainable architecture.",
    tech: ["Any Stack", "Sentry", "Datadog", "Lighthouse", "OWASP", "SonarQube", "Playwright"],
    sprints: [
      { sprint: "Sprint 1", label: "Audit & Diagnosis", details: ["Full codebase review — architecture, patterns & anti-patterns", "Performance profiling (CPU, memory, network, bundle size)", "Security vulnerability scan (OWASP Top 10 & CVEs)", "Prioritized issue report with severity classifications"] },
      { sprint: "Sprint 2–3", label: "Fixing & Refactoring", details: ["Critical bug fixes with root cause analysis documentation", "Database query optimization & N+1 query elimination", "Component/module refactoring with test coverage", "Security patches: XSS, CSRF, injection & auth vulnerabilities"] },
      { sprint: "Sprint 4", label: "Performance & Monitoring", details: ["Bundle splitting, lazy loading & caching strategy implementation", "Sentry / Datadog error tracking & alerting setup", "Load testing with k6 or Artillery to verify fix stability", "Post-fix documentation & developer handover"] },
    ],
    outcomes: [{ label: "Uptime SLA", value: "99.99%" }, { label: "Perf Boost", value: "Up to 8×" }, { label: "Security", value: "OWASP Compliant" }, { label: "Delivery", value: "3–4 Sprints" }],
  },
  {
    id: "06",
    icon: "trending_up",
    tag: "Service 06",
    title: "SEO Building & Growth",
    desc: "Full-stack technical SEO, schema architecture, Core Web Vitals optimization, and high-conversion indexing strategies that dominate search engines.",
    metric: "ORGANIC REACH: +340%",
    overview: "SEO isn't just keywords. We engineer search dominance through technical architecture, semantic content strategy, and Core Web Vitals optimization that Google's algorithm can't ignore.",
    tech: ["Google Search Console", "Ahrefs", "SEMrush", "Schema.org", "GA4", "Screaming Frog", "Next.js SSR"],
    sprints: [
      { sprint: "Sprint 1", label: "Technical SEO Audit", details: ["Full site crawl: broken links, redirect chains & canonical issues", "Core Web Vitals analysis (LCP, CLS, FID/INP) across all pages", "Keyword gap analysis vs. top 5 competitors", "Indexed page review & crawl budget optimization plan"] },
      { sprint: "Sprint 2–3", label: "On-Page & Technical Fixes", details: ["Schema markup implementation (Article, Product, FAQ, LocalBusiness)", "Title tags, meta descriptions & heading hierarchy optimization", "Internal linking strategy rebuild & anchor text optimization", "SSR / SSG architecture for max Google indexing speed"] },
      { sprint: "Sprint 4", label: "Content Strategy & Growth", details: ["Topical authority cluster creation for target keyword groups", "Content brief templates for ongoing SEO-optimized publishing", "Backlink outreach strategy & digital PR placement plan", "GA4 + Search Console dashboard for ongoing tracking"] },
    ],
    outcomes: [{ label: "Organic Growth", value: "+340%" }, { label: "Core Web Vitals", value: "All Green" }, { label: "Index Rate", value: "95%+ Pages" }, { label: "Delivery", value: "4 Sprints" }],
  },
];

// ─── Sprint Timeline Step ──────────────────────────────────────────────────
function SprintStep({ sprint, isLast }) {
  return (
    <div style={{ display: "flex", gap: 16, position: "relative" }}>
      {!isLast && (
        <div style={{ position: "absolute", left: 19, top: 40, width: 2, bottom: -12, background: `linear-gradient(to bottom, ${ACCENT}80, ${ACCENT}10)` }} />
      )}
      <div style={{ width: 38, height: 38, borderRadius: "50%", background: "rgba(21,188,223,0.1)", border: `2px solid rgba(21,188,223,0.4)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative", zIndex: 1 }}>
        <span style={{ fontFamily: Q, fontSize: 9, fontWeight: 700, color: ACCENT, letterSpacing: "0.04em" }}>{sprint.sprint.replace("Sprint ", "S")}</span>
      </div>
      <div style={{ paddingBottom: 24, flex: 1 }}>
        <div style={{ fontFamily: Q, fontSize: 13, fontWeight: 700, color: "#2b3033", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.04em" }}>{sprint.label}</div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 7 }}>
          {sprint.details.map((d, i) => (
            <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: ACCENT, flexShrink: 0, marginTop: 8 }} />
              <span style={{ fontSize: 13, color: "#6b6f72", lineHeight: 1.6 }}>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── CTAButton ─────────────────────────────────────────────────────────────
function CTAButton({ children, onClick, href, style }) {
  const [hovered, setHovered] = useState(false);
  const props = { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), style: { display: "inline-flex", alignItems: "center", gap: 14, background: hovered ? ACCENT_HOVER : ACCENT, border: `1px solid ${ACCENT_BORDER}`, color: "#1a1c1e", fontFamily: Q, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", padding: "14px 28px", fontSize: "clamp(12px,1.8vw,14px)", clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))", boxShadow: hovered ? "0 0 0 1px rgba(21,188,223,0.5), 0 12px 36px -12px rgba(15,163,194,0.75)" : "0 0 0 1px rgba(21,188,223,0.35), 0 8px 24px -12px rgba(15,163,194,0.55)", cursor: "pointer", transition: "background 0.2s ease, box-shadow 0.2s ease", lineHeight: 1, textDecoration: "none", ...style } };
  const inner = <>{children}<span style={{ display: "inline-block", width: 20, height: 1, backgroundColor: "#1a1c1e", flexShrink: 0 }} /></>;
  if (href) return <a href={href} {...props}>{inner}</a>;
  return <button onClick={onClick} {...props}>{inner}</button>;
}

// ─── Service Modal ─────────────────────────────────────────────────────────
function ServiceModal({ service, onClose }) {
  return (
    <AnimatePresence>
      {service && (
        <>
          <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(43,48,51,0.72)", backdropFilter: "blur(6px)", zIndex: 999 }} />
          <div style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, pointerEvents: "none" }}>
            <motion.div key="modal" initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.97 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} style={{ pointerEvents: "all", width: "100%", maxWidth: 720, maxHeight: "88vh", overflowY: "auto", overflowX: "hidden", background: "#F7F6F8", borderRadius: 0, boxShadow: "0 40px 80px -20px rgba(43,48,51,0.35), 0 0 0 1px rgba(21,188,223,0.25)", clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}>

              {/* Modal Header */}
              <div style={{ background: "#2b3033", padding: "32px 36px 28px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, background: `rgba(21,188,223,0.15)`, borderRadius: "50%", filter: "blur(50px)", pointerEvents: "none" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ width: 48, height: 48, background: "rgba(21,188,223,0.15)", border: `1px solid rgba(21,188,223,0.4)`, display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 24 }}>{service.icon}</span>
                      </div>
                      <div>
                        <div style={{ fontSize: 11, fontFamily: Q, fontWeight: 700, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4 }}>{service.tag}</div>
                        <h2 style={{ fontFamily: Q, fontSize: "clamp(1.1rem,2.4vw,1.45rem)", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.01em", margin: 0 }}>{service.title}</h2>
                      </div>
                    </div>
                    <button onClick={onClose} aria-label="Close modal" style={{ width: 36, height: 36, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 18, transition: "all 0.2s ease" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.18)"; e.currentTarget.style.color = "#fff"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>close</span>
                    </button>
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.65, margin: 0, fontFamily: Q }}>{service.overview}</p>
                </div>
              </div>

              {/* Modal Body */}
              <div style={{ padding: "32px 36px", background: "#F7F6F8" }}>
                {/* Outcomes */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 36 }} className="targo-modal-outcomes">
                  {service.outcomes.map((o, i) => (
                    <div key={i} style={{ background: "#fff", border: `1px solid rgba(21,188,223,0.2)`, padding: "14px 12px", textAlign: "center" }}>
                      <div style={{ fontFamily: Q, fontSize: "clamp(0.85rem,1.8vw,1rem)", fontWeight: 700, color: ACCENT, letterSpacing: "0.02em", marginBottom: 4 }}>{o.value}</div>
                      <div style={{ fontSize: 10, fontFamily: Q, fontWeight: 700, color: "#6b6f72", textTransform: "uppercase", letterSpacing: "0.08em" }}>{o.label}</div>
                    </div>
                  ))}
                </div>

                {/* Sprint timeline */}
                <h3 style={{ fontFamily: Q, fontSize: 11, fontWeight: 700, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 24 }}>How We Build It — Sprint by Sprint</h3>
                <div>{service.sprints.map((s, i) => <SprintStep key={i} sprint={s} isLast={i === service.sprints.length - 1} />)}</div>

                {/* Tech Stack */}
                <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid rgba(43,48,51,0.1)" }}>
                  <div style={{ fontSize: 10, fontFamily: Q, fontWeight: 700, color: "#6b6f72", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Tech Stack</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {service.tech.map((t) => (
                      <span key={t} style={{ padding: "5px 12px", background: "#fff", border: `1px solid rgba(21,188,223,0.25)`, fontSize: 12, fontFamily: Q, fontWeight: 700, color: "#2b3033", letterSpacing: "0.04em", textTransform: "uppercase" }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <CTAButton href="#contact" onClick={onClose}>START THIS PROJECT</CTAButton>
                </div>
              </div>

              <style>{`.targo-modal-outcomes { @media (max-width: 520px) { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Main Pillars / Services ───────────────────────────────────────────────
export default function Pillars() {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <section
        id="innovations"
        style={{
          width: "100%",
          background: "linear-gradient(180deg, #F7F6F8 0%, #F2F1F0 100%)",
          padding: `clamp(60px,10vw,120px) clamp(20px,9vw,118px)`,
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ marginBottom: 56 }}
        >
          <div style={{ fontFamily: Q, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: ACCENT, marginBottom: 12 }}>
            Our Core Services
          </div>
          <h2 className="pillars-heading" style={{ fontFamily: Q, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.01em", lineHeight: 0.98, color: "#2b3033", margin: 0 }}>
            ENGINEERING &amp;
            <br />
            <span className="pillars-indent" style={{ color: ACCENT }}>DIGITAL SOLUTIONS</span>
          </h2>
          <p style={{ fontFamily: Q, fontSize: "clamp(14px,1.6vw,16px)", color: "#6b6f72", maxWidth: 520, lineHeight: 1.7, marginTop: 24 }}>
            From custom AI SaaS products and high-performance websites to mobile apps, intelligent automations, bug fixing, and technical SEO growth.{" "}
            <strong style={{ color: ACCENT, fontWeight: 700 }}>Click any card to see our sprint-by-sprint process.</strong>
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="pillars-grid">
          {SERVICES_DETAIL.map((service, idx) => {
            const isHovered = hoveredId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedService(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedService(service)}
                aria-label={`View details for ${service.title}`}
                style={{
                  position: "relative",
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  overflow: "hidden",
                  backgroundColor: isHovered ? "#2b3033" : "#fff",
                  boxShadow: isHovered
                    ? `0 24px 48px -12px rgba(43,48,51,0.32), 0 0 0 1px rgba(21,188,223,0.45)`
                    : "0 4px 20px rgba(43,48,51,0.04), 0 0 0 1px rgba(43,48,51,0.07)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  outline: "none",
                  clipPath: isHovered
                    ? "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))"
                    : "none",
                }}
              >
                {/* Cyan glow on hover */}
                <div style={{ position: "absolute", top: 0, right: 0, width: 130, height: 130, backgroundColor: `rgba(21,188,223,0.22)`, borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none", opacity: isHovered ? 1 : 0, transition: "opacity 0.35s ease" }} />

                {/* Explore badge */}
                <div style={{ position: "absolute", top: 16, right: 16, padding: "4px 9px", background: isHovered ? "rgba(21,188,223,0.2)" : "rgba(43,48,51,0.05)", border: isHovered ? `1px solid rgba(21,188,223,0.5)` : "1px solid rgba(43,48,51,0.08)", display: "flex", alignItems: "center", gap: 4, transition: "all 0.35s ease", opacity: isHovered ? 1 : 0.5 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 11, color: isHovered ? ACCENT : "#6b6f72" }}>open_in_new</span>
                  <span style={{ fontSize: 9, fontFamily: Q, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: isHovered ? ACCENT : "#6b6f72" }}>Explore</span>
                </div>

                {/* Card content */}
                <div style={{ position: "relative", zIndex: 1 }}>
                  {/* Icon */}
                  <div style={{ width: 48, height: 48, background: isHovered ? "rgba(21,188,223,0.18)" : "rgba(43,48,51,0.06)", color: isHovered ? ACCENT : "#2b3033", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, transition: "all 0.35s ease" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 24 }}>{service.icon}</span>
                  </div>
                  {/* Tag */}
                  <span style={{ padding: "3px 9px", background: isHovered ? "rgba(21,188,223,0.18)" : "rgba(43,48,51,0.06)", color: isHovered ? ACCENT : "#2b3033", fontFamily: Q, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "inline-block", transition: "all 0.35s ease" }}>{service.tag}</span>
                  {/* Title */}
                  <h3 style={{ fontFamily: Q, fontSize: 18, fontWeight: 700, color: isHovered ? "#fff" : "#2b3033", marginTop: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.01em", transition: "color 0.35s ease" }}>{service.title}</h3>
                  {/* Desc */}
                  <p style={{ fontSize: 13.5, color: isHovered ? "rgba(255,255,255,0.75)" : "#6b6f72", lineHeight: 1.6, transition: "color 0.35s ease" }}>{service.desc}</p>
                </div>

                {/* Card footer */}
                <div style={{ position: "relative", zIndex: 1, marginTop: 24, paddingTop: 16, borderTop: isHovered ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(43,48,51,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "border-color 0.35s ease" }}>
                  <span style={{ fontFamily: Q, fontSize: 12, fontWeight: 700, color: isHovered ? ACCENT : "#6b6f72", letterSpacing: "0.06em", textTransform: "uppercase", transition: "color 0.35s ease" }}>{service.metric}</span>
                  <span style={{ color: isHovered ? ACCENT : "#6b6f72", display: "flex", alignItems: "center", transform: isHovered ? "translateX(4px)" : "translateX(0)", transition: "all 0.35s ease" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chevron_right</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <style>{`
        .pillars-heading { font-size: clamp(28px, 7vw, 56px); }
        .pillars-indent { display: inline-block; padding-left: clamp(0px, 14vw, 120px); }
        @media (max-width: 479px) { .pillars-indent { padding-left: 0 !important; } }
        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }
        @media (min-width: 500px) {
          .pillars-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (min-width: 900px) {
          .pillars-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
        }
      `}</style>
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </>
  );
}
