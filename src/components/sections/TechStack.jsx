import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Terminal } from "lucide-react";
import CardSpotlight from "../ui/CardSpotlight";
import { TECH_CATEGORIES } from "../../data/techStack";

export default function TechStack() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="tech-stack" style={{ padding: "100px 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "660px", marginBottom: "56px" }}>
          <div className="eyebrow">
            <Terminal size={15} />
            <span>Modern Technology Radar</span>
          </div>
          <h2 className="section-title">
            Engineered with a modern, <br />
            <span className="text-gradient">resilient technology stack.</span>
          </h2>
          <p className="section-subtitle">
            We build using high-throughput, type-safe, and industry-standard production
            infrastructure engineered for scale and speed.
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "28px",
          }}
        >
          {TECH_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ display: "flex" }}
            >
              <CardSpotlight
                style={{
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <div style={{ marginBottom: "24px" }}>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "var(--soft-sand)",
                      marginBottom: "8px",
                    }}
                  >
                    {cat.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--soft-sand-subtle)",
                      lineHeight: "1.5",
                    }}
                  >
                    {cat.description}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {cat.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        background: "rgba(28, 43, 63, 0.4)",
                        border: "1px solid rgba(244, 241, 230, 0.06)",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(32, 178, 170, 0.1)";
                        e.currentTarget.style.borderColor = "rgba(32, 178, 170, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(28, 43, 63, 0.4)";
                        e.currentTarget.style.borderColor = "rgba(244, 241, 230, 0.06)";
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--soft-sand)" }}>
                          {tool.name}
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "var(--slate-gray-light)" }}>
                          {tool.role}
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          fontFamily: "var(--font-mono)",
                          fontWeight: 600,
                          padding: "3px 8px",
                          borderRadius: "6px",
                          background: "rgba(32, 178, 170, 0.12)",
                          color: "#20B2AA",
                          border: "1px solid rgba(32, 178, 170, 0.3)",
                        }}
                      >
                        {tool.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
