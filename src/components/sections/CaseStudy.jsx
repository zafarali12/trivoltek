import React from "react";
import { motion } from "framer-motion";

export default function CaseStudy() {
  return (
    <section
      id="casestudy"
      style={{
        width: "100%",
        backgroundColor: "var(--color-surface)",
        padding: "96px 0",
      }}
    >
      <div className="container-stitch">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="stitch-card casestudy-card-grid"
          style={{
            padding: "48px 40px",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "center",
            boxShadow: "0 20px 40px rgba(6, 22, 42, 0.06)",
          }}
        >
          {/* Client Attribution Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjU85nCTZ9yE0yWHNv5jrMMdS_9OzR79j1A-nBfqe34bLsb8n6Ncx5y7bK6xjDakxvV8hTgmURxHGXFgA_m8b2zxnaz7lw7rt1nCb6oiWjgsfGYV6nLxkNtrrv1yi2ZrkEF_7mSrGt0Oee-SWYP9TJN0qft54NDvJUv-rVn2UTDCdQraleq_oq_1ed9BxoWBIRi2rfCGjWM1iAbd9x55g2Vf62a1QfGSZOgtRBb23mc5WRr_6lg6OEcQ"
              alt="Dr. Marcus Vance"
              style={{
                width: "88px",
                height: "88px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                border: "2px solid #20B2AA",
                marginBottom: "16px",
              }}
            />
            <div
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "20px",
                fontWeight: 700,
                color: "var(--color-primary)",
              }}
            >
              Dr. Marcus Vance
            </div>
            <div
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-secondary)",
                marginTop: "2px",
              }}
            >
              Chief Technology Officer
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "var(--color-on-surface-variant)",
                marginTop: "4px",
                marginBottom: "20px",
              }}
            >
              Global FinTech &amp; SaaS Solutions
            </div>

            <span
              style={{
                padding: "6px 14px",
                borderRadius: "6px",
                backgroundColor: "var(--color-surface-container)",
                color: "var(--color-primary)",
                fontFamily: "var(--font-headline)",
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              1M+ Active Users Scaled
            </span>
          </div>

          {/* Narrative & Stats Split */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="material-symbols-outlined"
                style={{ fontSize: "36px", color: "var(--color-secondary)", marginBottom: "8px", display: "inline-block" }}
              >
                format_quote
              </motion.span>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "19px",
                  color: "var(--color-primary)",
                  fontStyle: "italic",
                  lineHeight: "1.65",
                  marginBottom: "36px",
                }}
              >
                "Partnering with TRIVOLTEK to architect our multi-tenant AI SaaS platform, custom
                web application, and mobile apps completely transformed our digital ecosystem. Their
                team eliminated longstanding performance bottlenecks, implemented automated AI workflows,
                and delivered rock-solid code with zero downtime."
              </p>
            </div>

            {/* Metrics */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "20px",
                paddingTop: "24px",
                borderTop: "1px solid var(--color-surface-container-high)",
              }}
            >
              <motion.div whileHover={{ y: -3 }}>
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "32px",
                    fontWeight: 800,
                    color: "var(--color-secondary)",
                    lineHeight: 1.1,
                  }}
                >
                  54%
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--color-on-surface-variant)",
                    marginTop: "4px",
                  }}
                >
                  Ops Cost Reduction
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -3 }}>
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "32px",
                    fontWeight: 800,
                    color: "var(--color-primary)",
                    lineHeight: 1.1,
                  }}
                >
                  0.00
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--color-on-surface-variant)",
                    marginTop: "4px",
                  }}
                >
                  Critical Production Bugs
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -3 }}>
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "32px",
                    fontWeight: 800,
                    color: "var(--color-secondary)",
                    lineHeight: 1.1,
                  }}
                >
                  6.4x
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--color-on-surface-variant)",
                    marginTop: "4px",
                  }}
                >
                  User Growth Multiplier
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .casestudy-card-grid {
            grid-template-columns: 1fr 2fr !important;
          }
        }
      `}</style>
    </section>
  );
}
