import React from "react";
import { motion } from "framer-motion";

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
        backgroundColor: "var(--color-surface-container)",
        padding: "96px 0",
        overflow: "hidden",
      }}
    >
      <div className="container-stitch">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="facilities-grid"
        >
          {/* Left Column: Messaging & Standards Checklist with Stagger */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
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
              Engineering Standards &amp; Lab
            </span>
            <h2
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "var(--color-primary)",
                letterSpacing: "-0.03em",
                marginBottom: "16px",
              }}
            >
              Architected for Extreme Software Precision
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--color-on-surface-variant)",
                lineHeight: 1.68,
                marginBottom: "28px",
              }}
            >
              Our engineering sprints combine multi-layered automated CI/CD pipelines, comprehensive
              code audits, AI model fine-tuning, and deep SEO benchmarking. Every project undergoes
              rigorous automated regression tests to guarantee zero critical bugs and flawless performance.
            </p>

            {/* Checklist with sequential staggered animation */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              {checklists.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "var(--color-primary)", fontWeight: 600 }}
                >
                  <span className="material-symbols-outlined" style={{ color: "var(--color-secondary)", fontSize: "20px" }}>
                    check_circle
                  </span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href="#contact"
                className="btn-stitch-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span>Discuss Your Project Roadmap</span>
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                  arrow_forward
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Newly Uploaded Collaboration Image with Spring Zoom */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 20px 48px -12px rgba(6, 22, 42, 0.14), 0 0 0 1px rgba(6, 22, 42, 0.06)",
                backgroundColor: "#ffffff",
              }}
            >
              <img
                src="/engineering-precision.png"
                alt="Architected for Extreme Software Precision - Engineering Team Collaboration"
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "cover",
                  objectPosition: "center 25%",
                  display: "block",
                  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .facilities-grid {
            grid-template-columns: 1fr 1.15fr !important;
            gap: 56px !important;
          }
        }
      `}</style>
    </section>
  );
}
