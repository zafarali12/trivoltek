import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Send,
  Mail,
  MessageSquare,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import CardSpotlight from "../ui/CardSpotlight";
import Button from "../ui/Button";

const BUDGET_TIERS = ["$3k – $5k", "$5k – $10k", "$10k – $25k", "$25k+"];

const SERVICE_SCOPES = [
  "AI & RAG Systems",
  "SaaS Platform MVP",
  "Full-Stack Web App",
  "Design & High-End Site",
  "Other / Custom Scope",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "$5k – $10k",
    scope: "AI & RAG Systems",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: "100px 0", position: "relative" }}>
      <div className="container">
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "56px",
            alignItems: "flex-start",
          }}
          className="contact-layout"
        >
          {/* Left Column: Direct Info & Value Propositions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="eyebrow">
              <MessageSquare size={15} />
              <span>Initiate Collaboration</span>
            </div>
            <h2 className="section-title">
              Ready to engineer <br />
              <span className="text-gradient">something extraordinary?</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: "36px" }}>
              Tell us about your technical goals, requirements, or architecture hurdles. We
              reply within 24 hours with actionable engineering insights.
            </p>

            {/* Direct Contact Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
              <a
                href="mailto:trivoltrk@gmail.com"
                className="glass-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "18px 22px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(32, 178, 170, 0.12)",
                    border: "1px solid rgba(32, 178, 170, 0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Mail size={20} color="#20B2AA" />
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--slate-gray-light)" }}>Direct Engineering Inquiries</div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--soft-sand)" }}>
                    trivoltrk@gmail.com
                  </div>
                </div>
              </a>
            </div>

            {/* Guarantees */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.875rem", color: "var(--soft-sand-subtle)" }}>
                <Clock size={16} color="#20B2AA" />
                <span>Guaranteed response within 24 hours</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.875rem", color: "var(--soft-sand-subtle)" }}>
                <ShieldCheck size={16} color="#20B2AA" />
                <span>Strict Non-Disclosure Agreement (NDA) on request</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Consultation Builder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <CardSpotlight
              style={{
                padding: "36px",
                border: "1px solid rgba(32, 178, 170, 0.25)",
              }}
            >
              {submitted ? (
                <div
                  style={{
                    padding: "40px 20px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: "rgba(32, 178, 170, 0.15)",
                      border: "1px solid rgba(32, 178, 170, 0.45)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <CheckCircle2 size={34} color="#20B2AA" />
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--soft-sand)", marginBottom: "10px" }}>
                    Inquiry Received!
                  </h3>
                  <p style={{ color: "var(--soft-sand-subtle)", maxWidth: "420px", lineHeight: "1.6", marginBottom: "24px" }}>
                    Thank you, <span style={{ color: "var(--soft-sand)", fontWeight: 700 }}>{formData.name}</span>. Our lead software architect will review your project requirements and respond to <span style={{ color: "#20B2AA" }}>{formData.email}</span> within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="secondary"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Company / Product Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className="form-input"
                    />
                  </div>

                  {/* Interactive Scope Selector */}
                  <div>
                    <label className="form-label">Primary Technical Focus</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "6px" }}>
                      {SERVICE_SCOPES.map((scope) => {
                        const isSelected = formData.scope === scope;
                        return (
                          <button
                            type="button"
                            key={scope}
                            onClick={() => setFormData({ ...formData, scope })}
                            style={{
                              padding: "7px 14px",
                              borderRadius: "var(--radius-full)",
                              fontSize: "0.8125rem",
                              fontWeight: 600,
                              fontFamily: "inherit",
                              cursor: "pointer",
                              border: isSelected
                                ? "1px solid #20B2AA"
                                : "1px solid rgba(244, 241, 230, 0.08)",
                              background: isSelected
                                ? "rgba(32, 178, 170, 0.16)"
                                : "rgba(28, 43, 63, 0.35)",
                              color: isSelected ? "#20B2AA" : "var(--soft-sand-subtle)",
                              transition: "all 0.2s ease",
                            }}
                          >
                            {scope}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Interactive Budget Picker */}
                  <div>
                    <label className="form-label">Estimated Budget (USD)</label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginTop: "6px" }} className="budget-grid">
                      {BUDGET_TIERS.map((tier) => {
                        const isSelected = formData.budget === tier;
                        return (
                          <button
                            type="button"
                            key={tier}
                            onClick={() => setFormData({ ...formData, budget: tier })}
                            style={{
                              padding: "9px 8px",
                              borderRadius: "10px",
                              fontSize: "0.8125rem",
                              fontWeight: 700,
                              fontFamily: "inherit",
                              textAlign: "center",
                              cursor: "pointer",
                              border: isSelected
                                ? "1px solid #20B2AA"
                                : "1px solid rgba(244, 241, 230, 0.08)",
                              background: isSelected
                                ? "rgba(32, 178, 170, 0.18)"
                                : "rgba(28, 43, 63, 0.3)",
                              color: isSelected ? "#20B2AA" : "var(--soft-sand-subtle)",
                              transition: "all 0.2s ease",
                            }}
                          >
                            {tier}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Project Objectives & Timeline *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Briefly describe what you want to engineer, any key features, and your ideal timeline..."
                      className="form-input"
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      padding: "14px",
                    }}
                  >
                    <span>Send Engineering Inquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </CardSpotlight>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .contact-layout {
            grid-template-columns: 1fr 1.25fr !important;
          }
        }
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
          .budget-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        .form-label {
          display: block;
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--soft-sand);
          margin-bottom: 8px;
        }
        .form-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 10px;
          background: rgba(10, 16, 23, 0.7);
          border: 1px solid rgba(244, 241, 230, 0.08);
          color: var(--soft-sand);
          font-family: inherit;
          font-size: 0.9375rem;
          transition: all 0.2s ease;
          outline: none;
        }
        .form-input:focus {
          border-color: #20B2AA;
          box-shadow: 0 0 16px rgba(32, 178, 170, 0.25);
          background: rgba(14, 23, 34, 0.85);
        }
        .form-input::placeholder {
          color: var(--slate-gray-light);
        }
      `}</style>
    </section>
  );
}
