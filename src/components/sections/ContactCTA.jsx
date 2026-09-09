import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Constants ─────────────────────────────────────────────────────────
const SERVICES_LIST = [
  "AI SaaS Product Engineering",
  "Custom Website & Web App",
  "Mobile App Development",
  "AI Automation & Workflows",
  "Bug Fixing & Optimization",
  "SEO Building & Growth",
  "Other / Custom Scope",
];

const BUDGET_TIERS = [
  { label: "$1k – $3k", value: "1k-3k" },
  { label: "$3k – $5k", value: "3k-5k" },
  { label: "$5k – $10k", value: "5k-10k" },
  { label: "$10k – $25k", value: "10k-25k" },
  { label: "$25k+", value: "25k+" },
];

// ─── Validators ────────────────────────────────────────────────────────
const validate = (data) => {
  const errs = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errs.name = "Please enter your full name (min. 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errs.email = "Please enter a valid email address.";
  if (data.phone && !/^[\d\s\+\-\(\)]{7,20}$/.test(data.phone.replace(/\s/g, "")))
    errs.phone = "Please enter a valid phone number.";
  if (!data.service)
    errs.service = "Please select a service.";
  if (!data.message.trim() || data.message.trim().length < 20)
    errs.message = "Please describe your project in at least 20 characters.";
  return errs;
};

// ─── Input Field Component ─────────────────────────────────────────────
function FormField({ label, error, required, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label
        style={{
          fontSize: "11px",
          fontWeight: 700,
          fontFamily: "var(--font-headline)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: error ? "#ef4444" : "var(--color-on-primary-container)",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "#20B2AA", marginLeft: "3px" }}>*</span>
        )}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            style={{ fontSize: "12px", color: "#f87171", fontWeight: 500 }}
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputStyle = (hasError) => ({
  width: "100%",
  padding: "11px 14px",
  borderRadius: "10px",
  background: "rgba(6, 22, 42, 0.45)",
  border: `1px solid ${hasError ? "rgba(239,68,68,0.6)" : "rgba(244, 241, 230, 0.1)"}`,
  color: "var(--color-surface)",
  fontFamily: "var(--font-body)",
  fontSize: "14.5px",
  outline: "none",
  transition: "all 0.22s ease",
  boxShadow: hasError ? "0 0 0 3px rgba(239,68,68,0.12)" : "none",
});

// ─── Main ContactCTA Component ─────────────────────────────────────────
export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "$5k – $10k",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    // Live re-validate touched fields
    if (touched[name]) {
      const newErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate({ ...formData });
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
  };

  const handleBudgetSelect = (val) => {
    setFormData((prev) => ({ ...prev, budget: val }));
  };

  const handleServiceSelect = (svc) => {
    const updated = { ...formData, service: svc };
    setFormData(updated);
    if (touched.service) {
      const newErrors = validate(updated);
      setErrors((prev) => ({ ...prev, service: newErrors.service }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = Object.keys(formData).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const payload = {
        access_key: import.meta.env.VITE_WEB3FORMS_KEY,
        subject: `🚀 New Project Inquiry — ${formData.service || "General"} | ${formData.name}`,
        from_name: "TRIVOLTEK Website",
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        company: formData.company || "Not provided",
        service: formData.service || "Not specified",
        budget: formData.budget || "Not specified",
        message: formData.message,
        botcheck: "",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || data.success === false) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      if (err.name === "TypeError" || err.message.toLowerCase().includes("fetch")) {
        setSubmitError("Network error. Please check your connection and try again.");
      } else {
        setSubmitError(err.message || "Failed to send. Please email trivoltrk@gmail.com directly.");
      }
    } finally {
      setSubmitting(false);
    }
  };


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
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background dot grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.08,
          backgroundImage: "radial-gradient(#20B2AA 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
          pointerEvents: "none",
        }}
      />

      {/* Breathing ambient glows */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "-120px",
          right: "-120px",
          width: "480px",
          height: "480px",
          backgroundColor: "rgba(32, 178, 170, 0.22)",
          borderRadius: "50%",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          backgroundColor: "rgba(32, 178, 170, 0.16)",
          borderRadius: "50%",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <div className="container-stitch" style={{ position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: "8px",
              background: "var(--color-primary-container)",
              color: "#79F6ED",
              fontFamily: "var(--font-headline)",
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
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
              maxWidth: "820px",
              margin: "0 auto 16px",
              lineHeight: 1.18,
              letterSpacing: "-0.03em",
            }}
          >
            Let's build your next digital product — together.
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 1.6vw, 1.1rem)",
              color: "var(--color-on-primary-container)",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Tell us what you're building. We'll respond within 24 hours with a tailored sprint plan, tech stack recommendation, and pricing breakdown.
          </p>
        </motion.div>

        {/* 2-column layout */}
        <div className="cta-grid">
          {/* Left: contact info & trust signals */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Direct contact card */}
            <div
              style={{
                background: "var(--color-primary-container)",
                border: "1px solid rgba(32,178,170,0.25)",
                borderRadius: "16px",
                padding: "28px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  fontFamily: "var(--font-headline)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#79F6ED",
                  marginBottom: "18px",
                }}
              >
                Direct Contact
              </div>
              <a
                href="mailto:trivoltrk@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "14px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ color: "#20B2AA", fontSize: "20px" }}
                >
                  mail
                </span>
                <span
                  style={{
                    fontSize: "14.5px",
                    fontWeight: 600,
                    color: "var(--color-surface)",
                  }}
                >
                  trivoltrk@gmail.com
                </span>
              </a>
              <button
                onClick={handleCopyEmail}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  background: "rgba(32,178,170,0.14)",
                  border: "1px solid rgba(32,178,170,0.3)",
                  color: "#79F6ED",
                  fontSize: "12px",
                  fontWeight: 700,
                  fontFamily: "var(--font-headline)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
                  {copied ? "check" : "content_copy"}
                </span>
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>

            {/* Trust signals */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                { icon: "schedule", text: "Response within 24 hours, guaranteed" },
                { icon: "verified_user", text: "NDA available on request — your idea is safe" },
                { icon: "payments", text: "Free project scoping & cost estimate" },
                { icon: "sprint", text: "Sprint-based delivery — see progress every 2 weeks" },
                { icon: "support_agent", text: "Dedicated account manager throughout the build" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    background: "rgba(28, 43, 63, 0.6)",
                    border: "1px solid rgba(244,241,230,0.07)",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "#20B2AA", fontSize: "18px", flexShrink: 0 }}
                  >
                    {item.icon}
                  </span>
                  <span
                    style={{
                      fontSize: "13.5px",
                      color: "var(--color-on-primary-container)",
                      lineHeight: 1.45,
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div
              style={{
                marginTop: "28px",
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {["AI SaaS Ready", "Full-Stack & Mobile", "SEO Optimized"].map((badge) => (
                <span
                  key={badge}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "5px 12px",
                    borderRadius: "100px",
                    background: "rgba(32,178,170,0.1)",
                    border: "1px solid rgba(32,178,170,0.25)",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#79F6ED",
                    fontFamily: "var(--font-headline)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: "12px" }}>
                    verified
                  </span>
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                background: "var(--color-primary-container)",
                border: "1px solid rgba(32,178,170,0.2)",
                borderRadius: "20px",
                padding: "36px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "160px",
                  height: "160px",
                  background: "radial-gradient(circle, rgba(32,178,170,0.15) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <AnimatePresence mode="wait">
                {submitted ? (
                  // ── Success State ──
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      textAlign: "center",
                      padding: "48px 24px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "50%",
                        background: "rgba(32,178,170,0.15)",
                        border: "2px solid rgba(32,178,170,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "24px",
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "#20B2AA", fontSize: "36px" }}
                      >
                        check_circle
                      </span>
                    </motion.div>
                    <h3
                      style={{
                        fontFamily: "var(--font-headline)",
                        fontSize: "1.6rem",
                        fontWeight: 800,
                        color: "var(--color-surface)",
                        marginBottom: "12px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      Inquiry Received! 🚀
                    </h3>
                    <p
                      style={{
                        color: "var(--color-on-primary-container)",
                        fontSize: "15px",
                        lineHeight: 1.65,
                        maxWidth: "360px",
                        marginBottom: "28px",
                      }}
                    >
                      Thank you,{" "}
                      <strong style={{ color: "var(--color-surface)" }}>{formData.name}</strong>. Our lead engineer will
                      review your project and reply to{" "}
                      <strong style={{ color: "#20B2AA" }}>{formData.email}</strong> within 24 hours with a sprint plan & cost estimate.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "", email: "", phone: "", company: "",
                          service: "", budget: "$5k – $10k", message: "",
                        });
                        setErrors({});
                        setTouched({});
                      }}
                      className="btn-stitch-secondary"
                      style={{ fontSize: "13px" }}
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  // ── Form State ──
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: "flex", flexDirection: "column", gap: "20px" }}
                  >
                    <div style={{ marginBottom: "4px" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-headline)",
                          fontSize: "1.15rem",
                          fontWeight: 800,
                          color: "var(--color-surface)",
                          letterSpacing: "-0.02em",
                          marginBottom: "4px",
                        }}
                      >
                        Start Your Project
                      </h3>
                      <p style={{ fontSize: "13px", color: "var(--color-on-primary-container)" }}>
                        Fill out the form below — we'll build a custom sprint plan just for you.
                      </p>
                    </div>

                    {/* Row 1: Name + Email */}
                    <div className="form-row-grid">
                      <FormField label="Full Name" required error={touched.name && errors.name}>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="John Doe"
                          style={inputStyle(touched.name && errors.name)}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#20B2AA";
                            e.target.style.boxShadow = "0 0 0 3px rgba(32,178,170,0.18)";
                          }}
                          onBlurCapture={(e) => {
                            if (!errors.name) {
                              e.target.style.borderColor = "rgba(244,241,230,0.1)";
                              e.target.style.boxShadow = "none";
                            }
                          }}
                        />
                      </FormField>
                      <FormField label="Work Email" required error={touched.email && errors.email}>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="john@company.com"
                          style={inputStyle(touched.email && errors.email)}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#20B2AA";
                            e.target.style.boxShadow = "0 0 0 3px rgba(32,178,170,0.18)";
                          }}
                        />
                      </FormField>
                    </div>

                    {/* Row 2: Phone + Company */}
                    <div className="form-row-grid">
                      <FormField label="Phone (optional)" error={touched.phone && errors.phone}>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="+92 300 0000000"
                          style={inputStyle(touched.phone && errors.phone)}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#20B2AA";
                            e.target.style.boxShadow = "0 0 0 3px rgba(32,178,170,0.18)";
                          }}
                        />
                      </FormField>
                      <FormField label="Company / Product">
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Corp"
                          style={inputStyle(false)}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#20B2AA";
                            e.target.style.boxShadow = "0 0 0 3px rgba(32,178,170,0.18)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "rgba(244,241,230,0.1)";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                      </FormField>
                    </div>

                    {/* Service selector */}
                    <FormField label="Service Required" required error={touched.service && errors.service}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "2px" }}>
                        {SERVICES_LIST.map((svc) => {
                          const isSelected = formData.service === svc;
                          return (
                            <button
                              type="button"
                              key={svc}
                              onClick={() => handleServiceSelect(svc)}
                              style={{
                                padding: "6px 13px",
                                borderRadius: "100px",
                                fontSize: "12.5px",
                                fontWeight: 600,
                                fontFamily: "var(--font-body)",
                                cursor: "pointer",
                                border: isSelected
                                  ? "1px solid #20B2AA"
                                  : "1px solid rgba(244, 241, 230, 0.1)",
                                background: isSelected
                                  ? "rgba(32, 178, 170, 0.18)"
                                  : "rgba(6, 22, 42, 0.4)",
                                color: isSelected ? "#20B2AA" : "var(--color-on-primary-container)",
                                transition: "all 0.2s ease",
                              }}
                            >
                              {svc}
                            </button>
                          );
                        })}
                      </div>
                    </FormField>

                    {/* Budget picker */}
                    <FormField label="Estimated Budget (USD)">
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginTop: "2px" }}>
                        {BUDGET_TIERS.map((tier) => {
                          const isSelected = formData.budget === tier.label;
                          return (
                            <button
                              type="button"
                              key={tier.value}
                              onClick={() => handleBudgetSelect(tier.label)}
                              style={{
                                padding: "7px 14px",
                                borderRadius: "8px",
                                fontSize: "12.5px",
                                fontWeight: 700,
                                fontFamily: "var(--font-headline)",
                                cursor: "pointer",
                                border: isSelected
                                  ? "1px solid #20B2AA"
                                  : "1px solid rgba(244,241,230,0.1)",
                                background: isSelected
                                  ? "rgba(32,178,170,0.2)"
                                  : "rgba(6,22,42,0.4)",
                                color: isSelected ? "#20B2AA" : "var(--color-on-primary-container)",
                                transition: "all 0.2s ease",
                              }}
                            >
                              {tier.label}
                            </button>
                          );
                        })}
                      </div>
                    </FormField>

                    {/* Message */}
                    <FormField
                      label="Project Details & Timeline"
                      required
                      error={touched.message && errors.message}
                    >
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={4}
                        placeholder="Describe what you want to build, key features you need, and your ideal launch timeline..."
                        style={{
                          ...inputStyle(touched.message && errors.message),
                          resize: "vertical",
                          minHeight: "110px",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#20B2AA";
                          e.target.style.boxShadow = "0 0 0 3px rgba(32,178,170,0.18)";
                        }}
                      />
                    </FormField>

                    {/* Server-side error */}
                    <AnimatePresence>
                      {submitError && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          style={{
                            padding: "12px 16px",
                            borderRadius: "10px",
                            background: "rgba(239,68,68,0.1)",
                            border: "1px solid rgba(239,68,68,0.3)",
                            color: "#f87171",
                            fontSize: "13px",
                            lineHeight: 1.5,
                          }}
                        >
                          ⚠️ {submitError}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={!submitting ? { scale: 1.02, y: -2 } : {}}
                      whileTap={!submitting ? { scale: 0.98 } : {}}
                      className="btn-stitch-primary"
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        padding: "14px",
                        fontSize: "14px",
                        opacity: submitting ? 0.75 : 1,
                        cursor: submitting ? "not-allowed" : "pointer",
                        position: "relative",
                      }}
                    >
                      {submitting ? (
                        <>
                          <span
                            style={{
                              width: "16px",
                              height: "16px",
                              borderRadius: "50%",
                              border: "2px solid rgba(6,22,42,0.3)",
                              borderTopColor: "#06162a",
                              display: "inline-block",
                              animation: "spin 0.7s linear infinite",
                            }}
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                            send
                          </span>
                        </>
                      )}
                    </motion.button>

                    <p
                      style={{
                        fontSize: "11.5px",
                        color: "rgba(244,241,230,0.35)",
                        textAlign: "center",
                        lineHeight: 1.5,
                      }}
                    >
                      By submitting, you agree to be contacted about your project. No spam, ever.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .cta-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: start;
        }
        @media (min-width: 900px) {
          .cta-grid {
            grid-template-columns: 1fr 1.35fr;
            gap: 48px;
          }
        }
        .form-row-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 560px) {
          .form-row-grid {
            grid-template-columns: 1fr;
          }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
