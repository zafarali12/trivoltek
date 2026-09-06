import React from "react";
import { HelpCircle } from "lucide-react";
import Accordion from "../ui/Accordion";
import { FAQS } from "../../data/faq";

export default function FAQ() {
  return (
    <section id="faq" style={{ padding: "100px 0", position: "relative" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "flex-start",
          }}
          className="faq-layout"
        >
          {/* Left Column */}
          <div>
            <div className="eyebrow">
              <HelpCircle size={15} />
              <span>Got Questions?</span>
            </div>
            <h2 className="section-title">
              Frequently asked <br />
              <span className="text-gradient">questions.</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: "28px" }}>
              Everything you need to know about our engagement models, code ownership, AI
              safety, and project delivery timelines.
            </p>
            <div
              className="glass-card"
              style={{
                padding: "24px",
                border: "1px solid rgba(32, 178, 170, 0.3)",
              }}
            >
              <div style={{ fontWeight: 700, color: "var(--soft-sand)", marginBottom: "6px" }}>
                Have a unique technical challenge?
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--soft-sand-subtle)", marginBottom: "14px" }}>
                We frequently build bespoke architectures that don't fit standard categories.
              </p>
              <a
                href="#contact"
                style={{
                  color: "#20B2AA",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Talk directly with our engineers &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div>
            <Accordion items={FAQS} />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .faq-layout {
            grid-template-columns: 1fr 1.35fr !important;
          }
        }
      `}</style>
    </section>
  );
}
