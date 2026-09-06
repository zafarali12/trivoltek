import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("trivoltrk@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      style={{
        width: "100%",
        backgroundColor: "var(--color-primary)",
        color: "var(--color-surface)",
        padding: "112px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background radial teal grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          backgroundImage: "radial-gradient(#20B2AA 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
          pointerEvents: "none",
        }}
      />

      {/* Pulsing Breathing Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          bottom: "-96px",
          right: "-96px",
          width: "440px",
          height: "440px",
          backgroundColor: "rgba(32, 178, 170, 0.24)",
          borderRadius: "50%",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          width: "360px",
          height: "360px",
          backgroundColor: "rgba(32, 178, 170, 0.18)",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="container-stitch"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            padding: "6px 16px",
            borderRadius: "8px",
            backgroundColor: "var(--color-primary-container)",
            color: "#79F6ED",
            fontFamily: "var(--font-headline)",
            fontSize: "12px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "20px",
          }}
        >
          Product Delivery &amp; Consultation
        </span>

        <h2
          style={{
            fontFamily: "var(--font-headline)",
            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
            fontWeight: 800,
            color: "var(--color-surface)",
            maxWidth: "800px",
            lineHeight: 1.18,
            letterSpacing: "-0.03em",
            marginBottom: "20px",
          }}
        >
          Ready to build your AI SaaS, Custom Website, or Mobile App with TRIVOLTEK?
        </h2>

        <p
          style={{
            fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
            color: "var(--color-on-primary-container)",
            maxWidth: "640px",
            lineHeight: 1.65,
            marginBottom: "40px",
          }}
        >
          Speak directly with our senior full-stack engineers and AI specialists to scope
          your product, engineer custom automations, optimize codebase performance, or implement SEO.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            width: "100%",
          }}
        >
          <motion.a
            href="mailto:trivoltrk@gmail.com"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="btn-stitch-primary"
            style={{ padding: "12px 28px" }}
          >
            <span>Start Your Project</span>
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              arrow_forward
            </span>
          </motion.a>

          <motion.button
            type="button"
            onClick={handleCopyEmail}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            style={{
              padding: "12px 24px",
              borderRadius: "8px",
              backgroundColor: "var(--color-primary-container)",
              color: "var(--color-surface)",
              fontFamily: "var(--font-headline)",
              fontSize: "14px",
              fontWeight: 700,
              textDecoration: "none",
              cursor: "pointer",
              border: "1px solid rgba(244, 241, 230, 0.15)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "background-color 0.2s ease",
            }}
          >
            <span className="material-symbols-outlined" style={{ color: "#79F6ED", fontSize: "18px" }}>
              mail
            </span>
            <span>{copied ? "Copied trivoltrk@gmail.com!" : "trivoltrk@gmail.com"}</span>
          </motion.button>
        </div>

        {/* Certifications Footer Bar */}
        <div
          style={{
            marginTop: "64px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "32px",
            color: "var(--color-on-primary-container)",
            fontFamily: "var(--font-headline)",
            fontSize: "12px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="material-symbols-outlined" style={{ color: "var(--color-secondary)", fontSize: "16px" }}>
              verified
            </span>
            AI SaaS &amp; Cloud Ready
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="material-symbols-outlined" style={{ color: "var(--color-secondary)", fontSize: "16px" }}>
              devices
            </span>
            Full-Stack Web &amp; Mobile Apps
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span className="material-symbols-outlined" style={{ color: "var(--color-secondary)", fontSize: "16px" }}>
              speed
            </span>
            SEO &amp; Code Optimization Guaranteed
          </span>
        </div>
      </motion.div>
    </section>
  );
}
