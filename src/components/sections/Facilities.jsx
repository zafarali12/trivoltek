import React, { useState } from "react";
import { motion } from "framer-motion";

const ACCENT = "#15BCDF";
const ACCENT_HOVER = "#3fd0ef";
const ACCENT_BORDER = "#0fa3c2";
const Q = "'Quantico', 'Arial Narrow', sans-serif";

function CTAButton({ children, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 14,
        background: hovered ? ACCENT_HOVER : ACCENT,
        border: `1px solid ${ACCENT_BORDER}`,
        color: "#1a1c1e",
        fontFamily: Q,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        padding: "18px 34px",
        fontSize: "clamp(13px,2.2vw,16px)",
        clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
        boxShadow: hovered
          ? "0 0 0 1px rgba(21,188,223,0.5), 0 14px 40px -12px rgba(15,163,194,0.8)"
          : "0 0 0 1px rgba(21,188,223,0.35), 0 10px 30px -12px rgba(15,163,194,0.6)",
        cursor: "pointer",
        transition: "background 0.2s ease, box-shadow 0.2s ease",
        lineHeight: 1,
        textDecoration: "none",
      }}
    >
      {children}
      <span style={{ display: "inline-block", width: 22, height: 1, backgroundColor: "#1a1c1e", flexShrink: 0 }} />
    </a>
  );
}

export default function Facilities() {
  const checklists = [
    "Automated regression testing & zero-critical bug guarantee",
    "Production CI/CD pipelines with sub-second rollback triggers",
    "Full-funnel SEO schema compliance & Core Web Vitals 99+",
  ];

  return (
    <section
      id="facilities"
      style={{
        width: "100%",
        background: "linear-gradient(180deg, #F2F1F0 0%, #F7F6F8 100%)",
        padding: `clamp(60px,10vw,120px) clamp(20px,9vw,118px)`,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 56,
          alignItems: "center",
        }}
        className="targo-facilities-grid"
      >
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ fontFamily: Q, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: ACCENT, marginBottom: 12 }}>
            Engineering Standards &amp; Lab
          </div>
          <h2 className="fac-heading" style={{ fontFamily: Q, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.01em", lineHeight: 0.98, color: "#2b3033", margin: "0 0 24px 0" }}>
            ARCHITECTED FOR
            <br />
            <span className="fac-indent" style={{ color: ACCENT }}>PRECISION</span>
          </h2>
          <p style={{ fontFamily: Q, fontSize: "clamp(14px,1.6vw,16px)", color: "#6b6f72", lineHeight: 1.7, marginBottom: 28, maxWidth: 480 }}>
            Our engineering sprints combine multi-layered automated CI/CD pipelines, comprehensive code audits, AI model fine-tuning, and deep SEO benchmarking. Every project undergoes rigorous automated regression tests to guarantee zero critical bugs and flawless performance.
          </p>

          {/* Checklist */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
            {checklists.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: "#2b3033", fontFamily: Q, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em" }}
              >
                <span style={{ width: 20, height: 20, background: ACCENT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 13, color: "#1a1c1e" }}>check</span>
                </span>
                <span style={{ lineHeight: 1.5 }}>{item}</span>
              </motion.div>
            ))}
          </div>

          <CTAButton href="#contact">DISCUSS YOUR PROJECT ROADMAP</CTAButton>
        </motion.div>

        {/* Right Column — Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative" }}
        >
          {/* Cyan accent frame */}
          <div style={{ position: "absolute", top: -8, left: -8, width: 48, height: 48, border: `2px solid ${ACCENT}`, zIndex: 0, pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -8, right: -8, width: 48, height: 48, border: `2px solid ${ACCENT}`, zIndex: 0, pointerEvents: "none" }} />

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 20px 48px -12px rgba(43,48,51,0.14), 0 0 0 1px rgba(21,188,223,0.15)",
              backgroundColor: "#fff",
              zIndex: 1,
            }}
          >
            <img
              src="/engineering-precision.png"
              alt="Architected for Extreme Software Precision"
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "auto", minHeight: 220, maxHeight: 420, objectFit: "cover", objectPosition: "center 25%", display: "block", transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .fac-heading { font-size: clamp(28px, 7vw, 56px); }
        .fac-indent { display: inline-block; padding-left: clamp(0px, 10vw, 80px); }
        @media (max-width: 479px) { .fac-indent { padding-left: 0 !important; } }
        @media (min-width: 1024px) {
          .targo-facilities-grid {
            grid-template-columns: 1fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
}
