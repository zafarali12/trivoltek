import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "../ui/CountUp";

const ACCENT = "#15BCDF";
const Q = "'Quantico', 'Arial Narrow', sans-serif";

export default function TelemetryConsole() {
  const [activeTab, setActiveTab] = useState("saas");

  const statCards = [
    { label: "Track Record", value: 150, suffix: "+", sub: "SaaS & Apps Delivered" },
    { label: "AI & API Scale", value: 50, suffix: "M+", sub: "Monthly API / AI Queries" },
    { label: "Code Stability", isStatic: true, staticValue: "99.99%", sub: "Fault-Tolerant Code SLA" },
    { label: "Global Clients", value: 45, suffix: "+", sub: "Companies & Startups Scaled" },
  ];

  const tabs = [
    { id: "saas", label: "AI SaaS Engine" },
    { id: "webapps", label: "Web & Apps" },
    { id: "automation", label: "Automation" },
  ];

  return (
    <section
      id="telemetry"
      style={{
        width: "100%",
        background: "linear-gradient(180deg, #F2F1F0 0%, #F7F6F8 100%)",
        padding: `clamp(60px,10vw,120px) clamp(20px,9vw,118px)`,
      }}
    >
      {/* Section label + heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 48 }}
      >
        <div style={{ fontFamily: Q, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: ACCENT, marginBottom: 12 }}>
          Performance Metrics
        </div>
        <h2 className="telemetry-heading" style={{ fontFamily: Q, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.01em", lineHeight: 0.98, color: "#2b3033", margin: 0 }}>
          TECH STACK &amp;
          <br />
          <span className="telemetry-indent" style={{ color: ACCENT }}>ARCHITECTURE</span>
        </h2>
      </motion.div>

      {/* Stat cards ribbon */}
      <div className="telemetry-stats" style={{ marginBottom: 40 }}>
        {statCards.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            style={{
              background: "#fff",
              border: `1px solid rgba(21,188,223,0.2)`,
              padding: "24px 20px",
              transition: "all 0.3s ease",
            }}
            whileHover={{ y: -4, boxShadow: `0 12px 32px -8px rgba(21,188,223,0.25)` }}
          >
            <div style={{ fontFamily: Q, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#6b6f72", marginBottom: 8 }}>{stat.label}</div>
            <div style={{ fontFamily: Q, fontSize: "clamp(26px,5vw,40px)", fontWeight: 700, color: "#2b3033", lineHeight: 1, marginBottom: 6 }}>
              {stat.isStatic ? stat.staticValue : <CountUp to={stat.value} suffix={stat.suffix} />}
            </div>
            <div style={{ fontFamily: Q, fontSize: 11, fontWeight: 700, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.06em" }}>{stat.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Tabbed console */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ background: "#2b3033", overflow: "hidden", clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))" }}
      >
        {/* Console nav bar */}
        <div style={{ padding: "14px 20px", backgroundColor: "rgba(0,0,0,0.3)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, borderBottom: "1px solid rgba(21,188,223,0.12)" }}>
          {/* Traffic lights */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#ef4444", flexShrink: 0 }} />
            <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: ACCENT, flexShrink: 0 }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
            <span style={{ fontFamily: Q, fontSize: 10, color: "rgba(255,255,255,0.45)", marginLeft: 6, fontWeight: 700, letterSpacing: "0.06em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>STACK BENCHMARK</span>
          </div>
          {/* Tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 2 }}>
            {tabs.map((tab) => {
              const isCurrent = activeTab === tab.id;
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ position: "relative", padding: "8px 12px", fontFamily: Q, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", cursor: "pointer", border: "none", backgroundColor: "transparent", color: isCurrent ? "#1a1c1e" : "rgba(255,255,255,0.55)", transition: "color 0.2s ease", zIndex: 1, whiteSpace: "nowrap" }}>
                  {isCurrent && <motion.div layoutId="activeConsoleTab" transition={{ type: "spring", stiffness: 400, damping: 30 }} style={{ position: "absolute", inset: 0, backgroundColor: ACCENT, zIndex: -1 }} />}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab panels */}
        <AnimatePresence mode="wait">
          {activeTab === "saas" && (
            <motion.div key="saas" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="console-panel">
              <div>
                <span style={{ display: "inline-block", padding: "4px 10px", background: "rgba(21,188,223,0.15)", color: ACCENT, fontFamily: Q, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>SaaS Framework V4.2</span>
                <h3 style={{ fontFamily: Q, fontSize: "clamp(16px,2.5vw,26px)", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.01em", marginBottom: 12 }}>Multi-Tenant AI SaaS Architecture</h3>
                <p style={{ fontSize: "clamp(13px,1.5vw,14px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.65, marginBottom: 20, fontFamily: Q }}>Architected with partitioned database schemas, automated billing webhooks, intelligent LLM prompt routers, and sub-100ms vector search caching designed to scale from 1,000 to 1M+ active users.</p>
                {["Multi-tenant data isolation with end-to-end encryption", "Automated Stripe subscription lifecycle webhooks", "High-throughput streaming LLM inference with RAG fallback"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "clamp(12px,1.4vw,13px)", color: "rgba(255,255,255,0.85)", marginBottom: 8, fontFamily: Q }}>
                    <span style={{ width: 16, height: 16, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 10, color: "#1a1c1e" }}>check</span>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ background: "rgba(0,0,0,0.35)", padding: "20px 18px", border: `1px solid rgba(21,188,223,0.2)` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, flexWrap: "wrap", gap: 6 }}>
                  <span style={{ fontFamily: Q, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: ACCENT }}>API Concurrency vs Latency</span>
                  <span style={{ fontFamily: Q, fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em" }}>REAL-TIME TELEMETRY</span>
                </div>
                <svg viewBox="0 0 400 120" style={{ width: "100%", height: 120 }}>
                  <path d="M0,100 Q60,95 100,70 T200,45 T300,30 T400,15" fill="none" stroke={ACCENT} strokeWidth="3" />
                  <path d="M0,100 Q60,95 100,70 T200,45 T300,30 T400,15 L400,120 L0,120 Z" fill="rgba(21,188,223,0.12)" />
                  <motion.circle cx="300" cy="30" r="5" fill={ACCENT} animate={{ r: [4, 7, 4], opacity: [1, 0.6, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
                  <text x="220" y="22" fill={ACCENT} style={{ fontFamily: Q, fontSize: "11px" }}>42ms (Optimal)</text>
                </svg>
                <div className="console-metrics">
                  {[{ l: "P99 LATENCY", v: "42 ms" }, { l: "SUCCESS RATE", v: "99.98%", cyan: true }, { l: "CACHE HIT", v: "94.6%" }].map((m) => (
                    <div key={m.l} style={{ background: "rgba(0,0,0,0.4)", padding: "10px 8px" }}>
                      <div style={{ fontFamily: Q, fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{m.l}</div>
                      <div style={{ fontFamily: Q, fontSize: "clamp(14px,2.5vw,18px)", fontWeight: 700, color: m.cyan ? ACCENT : "#fff" }}>{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "webapps" && (
            <motion.div key="webapps" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="console-panel">
              <div>
                <span style={{ display: "inline-block", padding: "4px 10px", background: "rgba(21,188,223,0.15)", color: ACCENT, fontFamily: Q, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Full-Stack Architecture</span>
                <h3 style={{ fontFamily: Q, fontSize: "clamp(16px,2.5vw,26px)", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.01em", marginBottom: 12 }}>High-Performance Web &amp; Mobile Matrix</h3>
                <p style={{ fontSize: "clamp(13px,1.5vw,14px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.65, marginBottom: 20, fontFamily: Q }}>Engineered with React, Next.js, TypeScript, React Native, and Flutter. We build ultra-responsive, lightning-fast interfaces that load in milliseconds and deliver silky smooth 60fps animations on every device.</p>
                {["100/100 Google Lighthouse Core Web Vitals readiness", "Cross-platform iOS and Android native code compilation"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "clamp(12px,1.4vw,13px)", color: "rgba(255,255,255,0.85)", marginBottom: 8, fontFamily: Q }}>
                    <span style={{ width: 16, height: 16, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 10, color: "#1a1c1e" }}>check</span>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ background: "rgba(0,0,0,0.35)", padding: "20px 18px", border: `1px solid rgba(21,188,223,0.2)` }}>
                <div style={{ fontFamily: Q, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: ACCENT, marginBottom: 14 }}>Stack Health &amp; Node Status</div>
                <div className="stack-grid">
                  {["Next.js: 100%", "React: 100%", "iOS: 99.9%", "Android: 99.9%", "Node: 99.8%"].map((item) => (
                    <div key={item} style={{ height: 48, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT, fontFamily: Q, fontSize: "clamp(9px,1.5vw,11px)", fontWeight: 700, textTransform: "uppercase", textAlign: "center", padding: "0 4px" }}>{item}</div>
                  ))}
                  <div style={{ height: 48, backgroundColor: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1c1e", fontFamily: Q, fontSize: "clamp(9px,1.5vw,11px)", fontWeight: 700 }}>AI CORE</div>
                  {["Postgres: 100%", "Redis: 99.9%"].map((item) => (
                    <div key={item} style={{ height: 48, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT, fontFamily: Q, fontSize: "clamp(9px,1.5vw,11px)", fontWeight: 700, textTransform: "uppercase", textAlign: "center", padding: "0 4px" }}>{item}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "automation" && (
            <motion.div key="automation" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="console-panel">
              <div>
                <span style={{ display: "inline-block", padding: "4px 10px", background: "rgba(21,188,223,0.15)", color: ACCENT, fontFamily: Q, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Automation &amp; SEO Engine</span>
                <h3 style={{ fontFamily: Q, fontSize: "clamp(16px,2.5vw,26px)", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.01em", marginBottom: 12 }}>Autonomous Workflows &amp; Organic Growth</h3>
                <p style={{ fontSize: "clamp(13px,1.5vw,14px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.65, marginBottom: 20, fontFamily: Q }}>We build AI agent workflows that automate repetitive business processes, CRM syncs, customer communications, and full-funnel technical SEO architectures that guarantee top ranking and organic conversion.</p>
                {["Autonomous webhook triggers, CRM sync & RPA pipelines", "Structured Schema.org microdata & Core Web Vitals optimization"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "clamp(12px,1.4vw,13px)", color: "rgba(255,255,255,0.85)", marginBottom: 8, fontFamily: Q }}>
                    <span style={{ width: 16, height: 16, borderRadius: "50%", background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 10, color: "#1a1c1e" }}>check</span>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ background: "rgba(0,0,0,0.35)", padding: "36px 20px", border: `1px solid rgba(21,188,223,0.2)`, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <motion.span animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} className="material-symbols-outlined" style={{ color: ACCENT, fontSize: "clamp(36px,5vw,48px)", marginBottom: 12, display: "inline-block" }}>verified_user</motion.span>
                <div style={{ fontFamily: Q, fontSize: "clamp(14px,2vw,18px)", fontWeight: 700, color: "#fff", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>CODE STABILITY: 100% BUG-FREE</div>
                <p style={{ fontSize: "clamp(12px,1.4vw,13px)", color: "rgba(255,255,255,0.55)", fontFamily: Q }}>Continuous automated CI/CD unit testing and bug surveillance across all client platforms.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style>{`
        .telemetry-heading {
          font-size: clamp(28px, 7vw, 56px);
        }
        .telemetry-indent {
          display: block;
          padding-left: clamp(0px, 14vw, 120px);
        }
        @media (max-width: 479px) {
          .telemetry-indent { padding-left: 0 !important; }
        }

        .telemetry-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        @media (min-width: 860px) {
          .telemetry-stats {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .console-panel {
          padding: 28px 24px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          align-items: start;
        }
        @media (min-width: 900px) {
          .console-panel {
            grid-template-columns: 1fr 1fr;
            padding: 36px 32px;
          }
        }

        .console-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 12px;
        }

        .stack-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
        }
        @media (max-width: 480px) {
          .stack-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
