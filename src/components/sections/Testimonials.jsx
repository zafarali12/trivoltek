import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, Star } from "lucide-react";
import CardSpotlight from "../ui/CardSpotlight";
import Badge from "../ui/Badge";
import { TESTIMONIALS } from "../../data/testimonials";

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="testimonials" style={{ padding: "100px 0", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: "660px", marginBottom: "56px" }}>
          <div className="eyebrow">
            <Sparkles size={15} />
            <span>Proven Track Record</span>
          </div>
          <h2 className="section-title">
            Trusted by founders & <br />
            <span className="text-gradient">engineering leaders.</span>
          </h2>
          <p className="section-subtitle">
            Here's what venture-backed startups and growing companies say about shipping with
            Trivoltek.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.author}
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
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div>
                  {/* Top Row: Stars + Metric Badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "20px",
                    }}
                  >
                    <div style={{ display: "flex", gap: "4px" }}>
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          fill="#20B2AA"
                          color="#20B2AA"
                        />
                      ))}
                    </div>
                    <Badge variant="teal" style={{ fontSize: "0.75rem" }}>
                      {item.metric}
                    </Badge>
                  </div>

                  {/* Quote */}
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--soft-sand)",
                      lineHeight: "1.65",
                      marginBottom: "28px",
                      fontStyle: "italic",
                    }}
                  >
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    paddingTop: "20px",
                    borderTop: "1px solid rgba(244, 241, 230, 0.08)",
                  }}
                >
                  <img
                    src={item.avatar}
                    alt={item.author}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #20B2AA",
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: "0.9375rem", color: "var(--soft-sand)" }}>
                      {item.author}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--slate-gray-light)" }}>
                      {item.role}, <span style={{ color: "#20B2AA" }}>{item.company}</span>
                    </div>
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
