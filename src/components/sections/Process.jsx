import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Sparkles,
  Compass,
  Code2,
  ShieldCheck,
  Rocket,
  CheckCircle,
} from "lucide-react";
import CardSpotlight from "../ui/CardSpotlight";
import Badge from "../ui/Badge";
import { PROCESS_STEPS } from "../../data/process";

export default function Process() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  const getStepIcon = (iconName) => {
    switch (iconName) {
      case "Compass":
        return <Compass size={22} color="#20B2AA" />;
      case "Code2":
        return <Code2 size={22} color="#48D1CC" />;
      case "ShieldCheck":
        return <ShieldCheck size={22} color="#F4F1E6" />;
      case "Rocket":
        return <Rocket size={22} color="#20B2AA" />;
      default:
        return <Sparkles size={22} color="#20B2AA" />;
    }
  };

  return (
    <section id="process" style={{ padding: "100px 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "660px", marginBottom: "56px" }}>
          <div className="eyebrow">
            <Sparkles size={15} />
            <span>Delivery Framework</span>
          </div>
          <h2 className="section-title">
            Engineering execution with <br />
            <span className="text-gradient">clarity, precision & speed.</span>
          </h2>
          <p className="section-subtitle">
            A battle-tested 4-phase agile framework that eliminates scope ambiguity, de-risks
            architecture early, and gets production-ready code shipped fast.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
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
                  padding: "32px 26px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  {/* Step Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: "rgba(28, 43, 63, 0.6)",
                        border: "1px solid rgba(244, 241, 230, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {getStepIcon(step.icon)}
                    </div>
                    <Badge variant="teal" style={{ fontSize: "0.75rem" }}>
                      {step.timeline}
                    </Badge>
                  </div>

                  <div
                    style={{
                      fontSize: "0.8125rem",
                      fontFamily: "var(--font-mono)",
                      color: "#20B2AA",
                      fontWeight: 700,
                      marginBottom: "6px",
                    }}
                  >
                    PHASE {step.step}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "var(--soft-sand)",
                      marginBottom: "12px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.phase}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--soft-sand-subtle)",
                      lineHeight: "1.6",
                      marginBottom: "24px",
                    }}
                  >
                    {step.details}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div
                  style={{
                    paddingTop: "20px",
                    borderTop: "1px solid rgba(244, 241, 230, 0.08)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "var(--slate-gray-light)",
                      marginBottom: "12px",
                    }}
                  >
                    Deliverables:
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {step.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "0.8125rem",
                          color: "var(--soft-sand)",
                        }}
                      >
                        <CheckCircle size={14} color="#20B2AA" />
                        <span>{item}</span>
                      </div>
                    ))}
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
