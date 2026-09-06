import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Sparkles,
  Bot,
  Layers,
  Code2,
  Globe,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";
import CardSpotlight from "../ui/CardSpotlight";
import Badge from "../ui/Badge";
import { SERVICES } from "../../data/services";

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  const getServiceIcon = (id) => {
    switch (id) {
      case "ai":
        return <Bot size={22} color="#20B2AA" />;
      case "saas":
        return <Layers size={22} color="#48D1CC" />;
      case "fullstack":
        return <Code2 size={22} color="#F4F1E6" />;
      case "web":
        return <Globe size={22} color="#8A97A2" />;
      default:
        return <Sparkles size={22} color="#20B2AA" />;
    }
  };

  return (
    <section id="services" style={{ padding: "100px 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "680px", marginBottom: "56px" }}>
          <div className="eyebrow">
            <Sparkles size={15} />
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="section-title">
            Engineering services built for <br />
            <span className="text-gradient">high-growth tech enterprises.</span>
          </h2>
          <p className="section-subtitle">
            From autonomous AI pipelines to complete multi-tenant SaaS platforms — we turn
            cutting-edge technology into reliable production systems.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
          className="services-grid"
        >
          {SERVICES.map((svc, idx) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ display: "flex" }}
            >
              <CardSpotlight
                spotlightColor={svc.accentGlow}
                borderColor={svc.accent}
                style={{
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  {/* Card Top Row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "24px",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "14px",
                        background: "rgba(28, 43, 63, 0.6)",
                        border: "1px solid rgba(244, 241, 230, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {getServiceIcon(svc.id)}
                    </div>
                    <Badge variant="teal" style={{ fontSize: "0.75rem" }}>
                      {svc.badge}
                    </Badge>
                  </div>

                  {/* Title & Short Desc */}
                  <h3
                    style={{
                      fontSize: "1.375rem",
                      fontWeight: 800,
                      color: "var(--soft-sand)",
                      letterSpacing: "-0.02em",
                      marginBottom: "10px",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--soft-sand-subtle)",
                      lineHeight: "1.6",
                      marginBottom: "24px",
                    }}
                  >
                    {svc.description}
                  </p>

                  {/* Key Capabilities Checklist */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginBottom: "28px",
                    }}
                  >
                    {svc.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "9px",
                          fontSize: "0.875rem",
                          color: "var(--soft-sand)",
                        }}
                      >
                        <CheckCircle size={15} color={svc.accent} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Stack Chips & Metric */}
                <div>
                  <div
                    style={{
                      paddingTop: "20px",
                      borderTop: "1px solid rgba(244, 241, 230, 0.08)",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                      }}
                    >
                      {svc.tags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: "0.8125rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--slate-gray-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{svc.metrics}</span>
                    <a
                      href="#contact"
                      style={{
                        color: "#20B2AA",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        fontWeight: 700,
                      }}
                    >
                      <span>Inquire</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
