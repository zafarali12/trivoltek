import React from "react";
import { motion } from "framer-motion";

export default function Hero({ onOpenDemo }) {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "var(--color-surface)",
        paddingTop: "128px",
        paddingBottom: "80px",
      }}
    >
      {/* Subtle Ambient Background Gradients */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.35,
          backgroundImage: "radial-gradient(#20B2AA 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "-120px",
          right: "40px",
          width: "440px",
          height: "440px",
          backgroundColor: "rgba(32, 178, 170, 0.16)",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          position: "absolute",
          top: "45%",
          left: "-80px",
          width: "380px",
          height: "380px",
          backgroundColor: "rgba(28, 43, 63, 0.1)",
          borderRadius: "50%",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div className="container-stitch" style={{ position: "relative", zIndex: 1 }}>
        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "8px",
              backgroundColor: "rgba(32, 178, 170, 0.12)",
              color: "#006a65",
              fontFamily: "var(--font-headline)",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#20B2AA",
                display: "inline-block",
              }}
            />
            AI SaaS · Web &amp; Mobile Apps
          </span>

          <span style={{ color: "var(--color-outline)", fontSize: "14px" }}>/</span>

          <span
            style={{
              color: "var(--color-on-surface-variant)",
              fontFamily: "var(--font-headline)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            AI Automation · Bug Fixing · SEO Building
          </span>
        </motion.div>

        {/* Hero Grid: Typography + Matched Photography Showcase */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "stretch",
          }}
          className="stitch-hero-grid"
        >
          {/* Left Column: Heading, Messaging & Specs */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "clamp(2.3rem, 4.2vw, 3.4rem)",
                  fontWeight: 800,
                  color: "var(--color-primary)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  marginBottom: "20px",
                }}
              >
                Powering Digital Growth Through High-Impact{" "}
                <span
                  style={{
                    color: "var(--color-secondary)",
                    textDecoration: "underline",
                    textDecorationColor: "#76f3ea",
                    textDecorationThickness: "5px",
                    textUnderlineOffset: "8px",
                  }}
                >
                  AI &amp; Software
                </span>{" "}
                Solutions.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                style={{
                  fontSize: "clamp(1rem, 1.4vw, 1.12rem)",
                  color: "var(--color-on-surface-variant)",
                  lineHeight: 1.65,
                  maxWidth: "540px",
                  marginBottom: "32px",
                }}
              >
                TRIVOLTEK builds elite AI SaaS products, custom websites, high-performance mobile
                applications, intelligent AI automations, and rock-solid SEO architectures engineered
                to scale your business.
              </motion.p>

              {/* Action Buttons with Spring Micro-interactions */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "36px",
                }}
              >
                <motion.a
                  href="#innovations"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-stitch-primary"
                >
                  <span>Explore Services</span>
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                    arrow_forward
                  </span>
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-stitch-secondary"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      color: "var(--color-secondary)",
                      fontSize: "20px",
                    }}
                  >
                    mail
                  </span>
                  <span>Get in Touch</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Micro Specs pinned to bottom of left column */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "28px",
                paddingTop: "24px",
                borderTop: "1px solid var(--color-surface-container-high)",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "var(--color-primary)",
                  }}
                >
                  99+
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--color-on-surface-variant)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Core Web Vitals
                </div>
              </div>

              <div style={{ width: "1px", height: "32px", backgroundColor: "var(--color-surface-variant)" }} />

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "var(--color-primary)",
                  }}
                >
                  &lt;100ms
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--color-on-surface-variant)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  SaaS Response
                </div>
              </div>

              <div style={{ width: "1px", height: "32px", backgroundColor: "var(--color-surface-variant)" }} />

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "var(--color-secondary)",
                  }}
                >
                  100%
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--color-on-surface-variant)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Bug-Free SLA
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Matched 1:1 Equal Width & Height with Entry Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "relative",
              height: "100%",
              minHeight: "440px",
              display: "flex",
            }}
          >
            {/* Subtle glow behind the image frame */}
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.16, 0.24, 0.16],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                top: "10%",
                right: "-3%",
                width: "90%",
                height: "80%",
                backgroundColor: "rgba(32, 178, 170, 0.2)",
                borderRadius: "28px",
                filter: "blur(60px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            {/* Premium Image Card matching Left Column Height & Width */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 24px 50px -12px rgba(6, 22, 42, 0.16), 0 0 0 1px rgba(6, 22, 42, 0.06)",
                backgroundColor: "#ffffff",
                display: "flex",
              }}
            >
              <img
                src="/hero-team.jpg"
                alt="Trivoltek Software Engineers & AI Architects"
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "100%",
                  display: "block",
                  objectFit: "cover",
                  objectPosition: "center 20%",
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
          .stitch-hero-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 48px !important;
            align-items: stretch !important;
          }
        }
      `}</style>
    </section>
  );
}
