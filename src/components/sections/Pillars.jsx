import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Pillars() {
  const [hoveredId, setHoveredId] = useState(null);

  const services = [
    {
      id: "01",
      icon: "neurology",
      tag: "Service 01",
      title: "AI SaaS Product Engineering",
      desc: "End-to-end development of scalable AI SaaS platforms, multi-tenant cloud architectures, proprietary LLM integrations, and automated recurring billing systems.",
      metric: "SCALABILITY: 10M+ USERS",
    },
    {
      id: "02",
      icon: "web",
      tag: "Service 02",
      title: "Custom Website & Web Apps",
      desc: "High-performance, bespoke modern web applications built with cutting-edge frontends, responsive fluid layouts, and conversion-focused UX design.",
      metric: "PERFORMANCE: 99+ SCORE",
    },
    {
      id: "03",
      icon: "stay_current_portrait",
      tag: "Service 03",
      title: "Mobile App Development",
      desc: "Cross-platform iOS and Android mobile applications engineered with native fluid responsiveness, offline-first sync, and intuitive user experiences.",
      metric: "PLATFORMS: IOS & ANDROID",
    },
    {
      id: "04",
      icon: "precision_manufacturing",
      tag: "Service 04",
      title: "AI Automation & Workflows",
      desc: "Autonomous agent workflows, robotic process automation (RPA), and intelligent API integrations eliminating manual enterprise operational overhead.",
      metric: "EFFICIENCY: 85% AUTOMATION",
    },
    {
      id: "05",
      icon: "build_circle",
      tag: "Service 05",
      title: "Bug Fixing & Code Optimization",
      desc: "Deep architectural code refactoring, critical bug resolution, security auditing, and speed optimization to make your apps rock-solid and stable.",
      metric: "UPTIME: 99.99% SLA",
    },
    {
      id: "06",
      icon: "trending_up",
      tag: "Service 06",
      title: "SEO Building & Growth",
      desc: "Full-stack technical SEO, schema architecture, Core Web Vitals optimization, and high-conversion indexing strategies that dominate search engines.",
      metric: "ORGANIC REACH: +340%",
    },
  ];

  return (
    <section
      id="innovations"
      style={{
        width: "100%",
        backgroundColor: "var(--color-surface)",
        padding: "96px 0",
      }}
    >
      <div className="container-stitch">
        {/* Section Header with Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div>
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
                Our Core Services
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "var(--color-primary)",
                  letterSpacing: "-0.03em",
                }}
              >
                Engineering &amp; Digital Solutions
              </h2>
            </div>
            <p
              style={{
                fontSize: "15px",
                color: "var(--color-on-surface-variant)",
                maxWidth: "480px",
                lineHeight: 1.6,
              }}
            >
              From custom AI SaaS products and high-performance websites to mobile apps,
              intelligent automations, bug fixing, and technical SEO growth.
            </p>
          </div>
        </motion.div>

        {/* 6 Services Grid with Staggered Viewport Entrance */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {services.map((service, idx) => {
            const isHovered = hoveredId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  position: "relative",
                  borderRadius: "16px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  overflow: "hidden",
                  backgroundColor: isHovered ? "var(--color-primary)" : "#ffffff",
                  boxShadow: isHovered
                    ? "0 24px 48px -12px rgba(6, 22, 42, 0.32), 0 0 0 1px rgba(32, 178, 170, 0.35)"
                    : "0 4px 20px rgba(6, 22, 42, 0.04), 0 0 0 1px rgba(6, 22, 42, 0.06)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Ambient Teal Glow on Hover */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "130px",
                    height: "130px",
                    backgroundColor: "rgba(32, 178, 170, 0.25)",
                    borderRadius: "50%",
                    filter: "blur(40px)",
                    pointerEvents: "none",
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.35s ease",
                  }}
                />

                {/* Card Header & Content */}
                <div style={{ position: "relative", zIndex: 1 }}>
                  {/* Icon */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "10px",
                      backgroundColor: isHovered
                        ? "rgba(32, 178, 170, 0.18)"
                        : "var(--color-surface-container)",
                      color: isHovered ? "#79F6ED" : "var(--color-secondary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      transition: "all 0.35s ease",
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>
                      {service.icon}
                    </span>
                  </div>

                  {/* Service Tag */}
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: "4px",
                      backgroundColor: isHovered
                        ? "rgba(32, 178, 170, 0.2)"
                        : "var(--color-surface-container-high)",
                      color: isHovered ? "#79F6ED" : "var(--color-primary)",
                      fontFamily: "var(--font-headline)",
                      fontSize: "11px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      display: "inline-block",
                      transition: "all 0.35s ease",
                    }}
                  >
                    {service.tag}
                  </span>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-headline)",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: isHovered ? "#ffffff" : "var(--color-primary)",
                      marginTop: "12px",
                      marginBottom: "8px",
                      transition: "color 0.35s ease",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "14px",
                      color: isHovered
                        ? "rgba(244, 241, 230, 0.82)"
                        : "var(--color-on-surface-variant)",
                      lineHeight: 1.6,
                      transition: "color 0.35s ease",
                    }}
                  >
                    {service.desc}
                  </p>
                </div>

                {/* Card Footer: Metric & Action Arrow */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                    marginTop: "24px",
                    paddingTop: "16px",
                    borderTop: isHovered
                      ? "1px solid rgba(244, 241, 230, 0.14)"
                      : "1px solid var(--color-surface-container-high)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "border-color 0.35s ease",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-code)",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: isHovered ? "#79F6ED" : "var(--color-secondary)",
                      transition: "color 0.35s ease",
                    }}
                  >
                    {service.metric}
                  </span>

                  <a
                    href="#contact"
                    style={{
                      color: isHovered ? "#79F6ED" : "var(--color-outline)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      transform: isHovered ? "translateX(4px)" : "translateX(0)",
                      transition: "all 0.35s ease",
                    }}
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                      chevron_right
                    </span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
