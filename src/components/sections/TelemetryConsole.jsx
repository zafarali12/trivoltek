import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "../ui/CountUp";

export default function TelemetryConsole() {
  const [activeTab, setActiveTab] = useState("saas");

  const statCards = [
    { label: "Track Record", value: 150, suffix: "+", sub: "SaaS & Apps Delivered" },
    { label: "AI & API Scale", value: 50, suffix: "M+", sub: "Monthly API / AI Queries" },
    { label: "Code Stability", isStatic: true, staticValue: "99.99%", sub: "Fault-Tolerant Code SLA" },
    { label: "Global Clients", value: 45, suffix: "+", sub: "Companies & Startups Scaled" },
  ];

  return (
    <section
      id="telemetry"
      style={{
        width: "100%",
        backgroundColor: "var(--color-surface-container-low)",
        padding: "96px 0",
      }}
    >
      <div className="container-stitch">
        {/* Live Metrics Ribbon with Staggered Entrance */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "48px",
          }}
        >
          {statCards.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="stitch-card"
            >
              <span
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-on-surface-variant)",
                }}
              >
                {stat.label}
              </span>
              <div
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "var(--color-primary)",
                  margin: "4px 0",
                }}
              >
                {stat.isStatic ? stat.staticValue : <CountUp to={stat.value} suffix={stat.suffix} />}
              </div>
              <span style={{ fontSize: "13px", color: "var(--color-secondary)", fontWeight: 600 }}>
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Tabbed Architecture Console with Smooth Transitions */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-surface)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 24px 48px -12px rgba(6, 22, 42, 0.45)",
          }}
        >
          {/* Console Top Nav Bar */}
          <div
            style={{
              padding: "16px 24px",
              backgroundColor: "var(--color-tertiary-container)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              borderBottom: "1px solid rgba(244, 241, 230, 0.08)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#ef4444" }} />
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#79f6ed" }}
              />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#d4e3fe" }} />
              <span
                style={{
                  fontFamily: "var(--font-code)",
                  fontSize: "12px",
                  color: "var(--color-on-tertiary-container)",
                  marginLeft: "8px",
                  fontWeight: 600,
                }}
              >
                TRIVOLTEK // SOFTWARE ARCHITECTURE &amp; STACK BENCHMARK
              </span>
            </div>

            {/* Selector Tabs with Animated Sliding Pill */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px", position: "relative" }}>
              {[
                { id: "saas", label: "AI SaaS Engine" },
                { id: "webapps", label: "Web & Apps Matrix" },
                { id: "automation", label: "Automation & SEO" },
              ].map((tab) => {
                const isCurrent = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      position: "relative",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      fontFamily: "var(--font-headline)",
                      fontSize: "12px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      cursor: "pointer",
                      border: "none",
                      backgroundColor: "transparent",
                      color: isCurrent ? "#06162a" : "var(--color-on-tertiary-container)",
                      transition: "color 0.2s ease",
                      zIndex: 1,
                    }}
                  >
                    {isCurrent && (
                      <motion.div
                        layoutId="activeConsoleTab"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundColor: "var(--color-secondary)",
                          borderRadius: "6px",
                          zIndex: -1,
                        }}
                      />
                    )}
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Animated Tab Panels */}
          <AnimatePresence mode="wait">
            {/* Tab 1: AI SaaS Engine */}
            {activeTab === "saas" && (
              <motion.div
                key="saas"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                style={{
                  padding: "36px 32px",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "36px",
                  alignItems: "center",
                }}
                className="console-grid"
              >
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "4px 10px",
                      borderRadius: "4px",
                      backgroundColor: "var(--color-primary-container)",
                      color: "#79F6ED",
                      fontFamily: "var(--font-headline)",
                      fontSize: "11px",
                      fontWeight: 700,
                      marginBottom: "12px",
                    }}
                  >
                    SaaS Framework V4.2
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-headline)",
                      fontSize: "26px",
                      fontWeight: 800,
                      color: "var(--color-surface)",
                      marginBottom: "12px",
                    }}
                  >
                    Multi-Tenant AI SaaS Architecture
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--color-on-primary-container)",
                      lineHeight: 1.65,
                      marginBottom: "20px",
                    }}
                  >
                    Architected with partitioned database schemas, automated billing webhooks,
                    intelligent LLM prompt routers, and sub-100ms vector search caching designed to scale seamlessly from 1,000 to 1M+ active users.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "var(--color-surface)" }}>
                      <span className="material-symbols-outlined" style={{ color: "#79F6ED", fontSize: "18px" }}>
                        check_circle
                      </span>
                      <span>Multi-tenant tenant isolation with end-to-end data encryption</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "var(--color-surface)" }}>
                      <span className="material-symbols-outlined" style={{ color: "#79F6ED", fontSize: "18px" }}>
                        check_circle
                      </span>
                      <span>Automated Stripe &amp; LemonSqueezy subscription lifecycle webhooks</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "var(--color-surface)" }}>
                      <span className="material-symbols-outlined" style={{ color: "#79F6ED", fontSize: "18px" }}>
                        check_circle
                      </span>
                      <span>High-throughput streaming LLM inference with vector RAG fallback</span>
                    </div>
                  </div>
                </div>

                {/* Real-Time Telemetry Curve with Pulsing Node */}
                <div
                  style={{
                    backgroundColor: "rgba(28, 43, 63, 0.85)",
                    padding: "24px",
                    borderRadius: "14px",
                    border: "1px solid rgba(32, 178, 170, 0.25)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <span style={{ fontFamily: "var(--font-headline)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#79F6ED" }}>
                      API Concurrency vs Latency
                    </span>
                    <span style={{ fontFamily: "var(--font-code)", fontSize: "11px", color: "var(--color-on-primary-container)" }}>
                      REAL-TIME TELEMETRY
                    </span>
                  </div>

                  <svg viewBox="0 0 400 120" style={{ width: "100%", height: "130px" }}>
                    <path d="M0,100 Q60,95 100,70 T200,45 T300,30 T400,15" fill="none" stroke="#20B2AA" strokeWidth="3" />
                    <path d="M0,100 Q60,95 100,70 T200,45 T300,30 T400,15 L400,120 L0,120 Z" fill="rgba(32,178,170,0.12)" />
                    <motion.circle
                      cx="300"
                      cy="30"
                      r="5"
                      fill="#79F6ED"
                      animate={{ r: [4, 7, 4], opacity: [1, 0.6, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    />
                    <text x="250" y="22" fill="#79F6ED" style={{ fontFamily: "var(--font-code)", fontSize: "11px" }}>
                      42ms (Optimal Response)
                    </text>
                  </svg>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginTop: "12px" }}>
                    <div style={{ backgroundColor: "var(--color-primary)", padding: "12px", borderRadius: "8px" }}>
                      <div style={{ fontFamily: "var(--font-headline)", fontSize: "11px", color: "var(--color-on-primary-container)" }}>P99 LATENCY</div>
                      <div style={{ fontFamily: "var(--font-headline)", fontSize: "18px", fontWeight: 700, color: "var(--color-surface)" }}>42 ms</div>
                    </div>
                    <div style={{ backgroundColor: "var(--color-primary)", padding: "12px", borderRadius: "8px" }}>
                      <div style={{ fontFamily: "var(--font-headline)", fontSize: "11px", color: "var(--color-on-primary-container)" }}>SUCCESS RATE</div>
                      <div style={{ fontFamily: "var(--font-headline)", fontSize: "18px", fontWeight: 700, color: "#79F6ED" }}>99.98%</div>
                    </div>
                    <div style={{ backgroundColor: "var(--color-primary)", padding: "12px", borderRadius: "8px" }}>
                      <div style={{ fontFamily: "var(--font-headline)", fontSize: "11px", color: "var(--color-on-primary-container)" }}>CACHE HIT</div>
                      <div style={{ fontFamily: "var(--font-headline)", fontSize: "18px", fontWeight: 700, color: "var(--color-surface)" }}>94.6%</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Web & Apps Matrix */}
            {activeTab === "webapps" && (
              <motion.div
                key="webapps"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                style={{
                  padding: "36px 32px",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "36px",
                  alignItems: "center",
                }}
                className="console-grid"
              >
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "4px 10px",
                      borderRadius: "4px",
                      backgroundColor: "var(--color-primary-container)",
                      color: "#79F6ED",
                      fontFamily: "var(--font-headline)",
                      fontSize: "11px",
                      fontWeight: 700,
                      marginBottom: "12px",
                    }}
                  >
                    Full-Stack Architecture
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-headline)",
                      fontSize: "26px",
                      fontWeight: 800,
                      color: "var(--color-surface)",
                      marginBottom: "12px",
                    }}
                  >
                    High-Performance Web &amp; Mobile Matrix
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--color-on-primary-container)",
                      lineHeight: 1.65,
                      marginBottom: "20px",
                    }}
                  >
                    Engineered with React, Next.js, TypeScript, React Native, and Flutter. We build
                    ultra-responsive, lightning-fast interfaces that load in milliseconds and deliver silky smooth 60fps animations on every device.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "var(--color-surface)" }}>
                      <span className="material-symbols-outlined" style={{ color: "#79F6ED", fontSize: "18px" }}>
                        check_circle
                      </span>
                      <span>100/100 Google Lighthouse Core Web Vitals readiness</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "var(--color-surface)" }}>
                      <span className="material-symbols-outlined" style={{ color: "#79F6ED", fontSize: "18px" }}>
                        check_circle
                      </span>
                      <span>Cross-platform iOS and Android native code compilation</span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(28, 43, 63, 0.85)",
                    padding: "24px",
                    borderRadius: "14px",
                    border: "1px solid rgba(32, 178, 170, 0.25)",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-headline)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", color: "#79F6ED", marginBottom: "16px" }}>
                    Stack Health &amp; Deployment Node Status
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
                    {["Next.js: 100%", "React: 100%", "iOS: 99.9%", "Android: 99.9%", "Node: 99.8%"].map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          height: "56px",
                          backgroundColor: "var(--color-primary)",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#79F6ED",
                          fontFamily: "var(--font-code)",
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                      >
                        {item}
                      </div>
                    ))}
                    <div
                      style={{
                        height: "56px",
                        backgroundColor: "var(--color-secondary)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-primary)",
                        fontFamily: "var(--font-headline)",
                        fontSize: "12px",
                        fontWeight: 800,
                      }}
                    >
                      AI CORE
                    </div>
                    {["Postgres: 100%", "Redis: 99.9%"].map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          height: "56px",
                          backgroundColor: "var(--color-primary)",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#79F6ED",
                          fontFamily: "var(--font-code)",
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 3: Automation & SEO */}
            {activeTab === "automation" && (
              <motion.div
                key="automation"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                style={{
                  padding: "36px 32px",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "36px",
                  alignItems: "center",
                }}
                className="console-grid"
              >
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "4px 10px",
                      borderRadius: "4px",
                      backgroundColor: "var(--color-primary-container)",
                      color: "#79F6ED",
                      fontFamily: "var(--font-headline)",
                      fontSize: "11px",
                      fontWeight: 700,
                      marginBottom: "12px",
                    }}
                  >
                    Automation &amp; SEO Engine
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-headline)",
                      fontSize: "26px",
                      fontWeight: 800,
                      color: "var(--color-surface)",
                      marginBottom: "12px",
                    }}
                  >
                    Autonomous Workflows &amp; Organic Growth
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--color-on-primary-container)",
                      lineHeight: 1.65,
                      marginBottom: "20px",
                    }}
                  >
                    We build AI agent workflows that automate repetitive business processes, CRM data syncs,
                    customer communications, and full-funnel technical SEO architectures that guarantee top ranking and organic conversion.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "var(--color-surface)" }}>
                      <span className="material-symbols-outlined" style={{ color: "#79F6ED", fontSize: "18px" }}>
                        check_circle
                      </span>
                      <span>Autonomous webhook triggers, CRM synchronization &amp; RPA pipelines</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "var(--color-surface)" }}>
                      <span className="material-symbols-outlined" style={{ color: "#79F6ED", fontSize: "18px" }}>
                        check_circle
                      </span>
                      <span>Structured Schema.org microdata, semantic indexing &amp; Core Web Vitals optimization</span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "rgba(28, 43, 63, 0.85)",
                    padding: "36px 24px",
                    borderRadius: "14px",
                    border: "1px solid rgba(32, 178, 170, 0.25)",
                    textAlign: "center",
                  }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="material-symbols-outlined"
                    style={{ color: "#79F6ED", fontSize: "48px", marginBottom: "12px", display: "inline-block" }}
                  >
                    verified_user
                  </motion.span>
                  <div
                    style={{
                      fontFamily: "var(--font-headline)",
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "var(--color-surface)",
                      marginBottom: "8px",
                    }}
                  >
                    CODE STABILITY: 100% BUG-FREE
                  </div>
                  <p style={{ fontSize: "13px", color: "var(--color-on-primary-container)" }}>
                    Continuous automated CI/CD unit testing and bug surveillance across all client platforms.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .console-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
