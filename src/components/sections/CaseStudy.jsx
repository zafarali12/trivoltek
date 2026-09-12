import React from "react";
import { motion } from "framer-motion";

const ACCENT = "#15BCDF";
const Q = "'Quantico', 'Arial Narrow', sans-serif";

export default function CaseStudy() {
  return (
    <section
      id="casestudy"
      style={{
        width: "100%",
        background: "linear-gradient(180deg, #F7F6F8 0%, #F2F1F0 100%)",
        padding: `clamp(60px,10vw,120px) clamp(20px,9vw,118px)`,
      }}
    >
      {/* Section label + staircase heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 48 }}
      >
        <div style={{ fontFamily: Q, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: ACCENT, marginBottom: 12 }}>
          Client Success
        </div>
        <h2 className="cs-heading" style={{ fontFamily: Q, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.01em", lineHeight: 0.98, color: "#2b3033", margin: 0 }}>
          CASE
          <br />
          <span className="cs-indent" style={{ color: ACCENT }}>STUDY</span>
        </h2>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: "#fff",
          border: `1px solid rgba(21,188,223,0.2)`,
          padding: "48px 40px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 48,
          alignItems: "center",
          clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
        }}
        className="targo-casestudy-grid"
      >
        {/* Client Attribution */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjU85nCTZ9yE0yWHNv5jrMMdS_9OzR79j1A-nBfqe34bLsb8n6Ncx5y7bK6xjDakxvV8hTgmURxHGXFgA_m8b2zxnaz7lw7rt1nCb6oiWjgsfGYV6nLxkNtrrv1yi2ZrkEF_7mSrGt0Oee-SWYP9TJN0qft54NDvJUv-rVn2UTDCdQraleq_oq_1ed9BxoWBIRi2rfCGjWM1iAbd9x55g2Vf62a1QfGSZOgtRBb23mc5WRr_6lg6OEcQ"
            alt="Dr. Marcus Vance"
            loading="lazy"
            decoding="async"
            style={{ width: 88, height: 88, borderRadius: "50%", objectFit: "cover", boxShadow: "0 4px 12px rgba(0,0,0,0.12)", border: `2px solid ${ACCENT}`, marginBottom: 16 }}
          />
          <div style={{ fontFamily: Q, fontSize: 20, fontWeight: 700, color: "#2b3033", textTransform: "uppercase", letterSpacing: "0.02em" }}>Dr. Marcus Vance</div>
          <div style={{ fontFamily: Q, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: ACCENT, marginTop: 4 }}>Chief Technology Officer</div>
          <div style={{ fontFamily: Q, fontSize: 13, color: "#6b6f72", marginTop: 4, marginBottom: 20 }}>Global FinTech &amp; SaaS Solutions</div>
          <span style={{ padding: "6px 14px", background: "rgba(21,188,223,0.1)", border: `1px solid rgba(21,188,223,0.3)`, fontFamily: Q, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#2b3033" }}>
            1M+ Active Users Scaled
          </span>
        </div>

        {/* Quote + Metrics */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <motion.span animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="material-symbols-outlined" style={{ fontSize: 36, color: ACCENT, marginBottom: 8, display: "inline-block" }}>
              format_quote
            </motion.span>
            <p style={{ fontFamily: Q, fontSize: "clamp(15px,2vw,19px)", color: "#2b3033", fontStyle: "italic", lineHeight: 1.65, marginBottom: 36 }}>
              "Partnering with TRIVOLTEK to architect our multi-tenant AI SaaS platform, custom web application, and mobile apps completely transformed our digital ecosystem. Their team eliminated longstanding performance bottlenecks, implemented automated AI workflows, and delivered rock-solid code with zero downtime."
            </p>
          </div>

          {/* Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 20, paddingTop: 24, borderTop: "1px solid rgba(43,48,51,0.1)" }}>
            {[
              { val: "54%", label: "Ops Cost Reduction", accent: true },
              { val: "0.00", label: "Critical Production Bugs", accent: false },
              { val: "6.4x", label: "User Growth Multiplier", accent: true },
            ].map((m) => (
              <motion.div key={m.label} whileHover={{ y: -3 }}>
                <div style={{ fontFamily: Q, fontSize: "clamp(24px,3.5vw,32px)", fontWeight: 700, color: m.accent ? ACCENT : "#2b3033", lineHeight: 1.1 }}>{m.val}</div>
                <div style={{ fontFamily: Q, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6b6f72", marginTop: 4 }}>{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        .cs-heading { font-size: clamp(28px, 7vw, 56px); }
        .cs-indent { display: inline-block; padding-left: clamp(0px, 14vw, 120px); }
        @media (max-width: 479px) { .cs-indent { padding-left: 0 !important; } }
        @media (min-width: 1024px) {
          .targo-casestudy-grid {
            grid-template-columns: 1fr 2fr !important;
          }
        }
      `}</style>
    </section>
  );
}
