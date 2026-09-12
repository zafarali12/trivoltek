import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACCENT = "#15BCDF";
const ACCENT_HOVER = "#3fd0ef";
const ACCENT_BORDER = "#0fa3c2";
const Q = "'Quantico', 'Arial Narrow', sans-serif";

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

const validate = (data) => {
  const errs = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errs.name = "Please enter your full name (min. 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errs.email = "Please enter a valid email address.";
  if (data.phone && !/^[\d\s\+\-\(\)]{7,20}$/.test(data.phone.replace(/\s/g, "")))
    errs.phone = "Please enter a valid phone number.";
  if (!data.service) errs.service = "Please select a service.";
  if (!data.message.trim() || data.message.trim().length < 20)
    errs.message = "Please describe your project in at least 20 characters.";
  return errs;
};

function FormField({ label, error, required, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 10, fontWeight: 700, fontFamily: Q, textTransform: "uppercase", letterSpacing: "0.12em", color: error ? "#f87171" : "rgba(255,255,255,0.55)" }}>
        {label}{required && <span style={{ color: ACCENT, marginLeft: 3 }}>*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.18 }} style={{ fontSize: 12, color: "#f87171", fontWeight: 500, fontFamily: Q }}>
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
  background: "rgba(0,0,0,0.35)",
  border: `1px solid ${hasError ? "rgba(239,68,68,0.6)" : "rgba(21,188,223,0.15)"}`,
  color: "#fff",
  fontFamily: Q,
  fontSize: 13.5,
  outline: "none",
  transition: "all 0.22s ease",
  boxShadow: hasError ? "0 0 0 3px rgba(239,68,68,0.12)" : "none",
});

export default function ContactCTA() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", service: "", budget: "$5k – $10k", message: "" });
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

  const handleServiceSelect = (svc) => {
    const updated = { ...formData, service: svc };
    setFormData(updated);
    if (touched.service) {
      const newErrors = validate(updated);
      setErrors((prev) => ({ ...prev, service: newErrors.service }));
    }
  };

  const handleBudgetSelect = (val) => setFormData((prev) => ({ ...prev, budget: val }));

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
        name: formData.name, email: formData.email,
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
      if (!res.ok || data.success === false) throw new Error(data.message || "Something went wrong.");
      setSubmitted(true);
    } catch (err) {
      if (err.name === "TypeError" || err.message.toLowerCase().includes("fetch"))
        setSubmitError("Network error. Please check your connection and try again.");
      else setSubmitError(err.message || "Failed to send. Please email trivoltrk@gmail.com directly.");
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
        backgroundColor: "#2b3033",
        color: "#fff",
        padding: `clamp(60px,10vw,120px) clamp(20px,9vw,118px)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glows */}
      <motion.div animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.2, 0.12] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", bottom: -120, right: -120, width: 480, height: 480, backgroundColor: `rgba(21,188,223,0.18)`, borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none" }} />
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} style={{ position: "absolute", top: -100, left: -100, width: 400, height: 400, backgroundColor: `rgba(21,188,223,0.12)`, borderRadius: "50%", filter: "blur(90px)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Section heading */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: Q, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: ACCENT, marginBottom: 12 }}>Product Delivery &amp; Consultation</div>
          <h2 className="cta-heading" style={{ fontFamily: Q, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.01em", lineHeight: 0.98, color: "#fff", margin: "0 0 20px 0" }}>
            LET'S BUILD YOUR
            <br />
            <span className="cta-indent" style={{ color: ACCENT }}>NEXT PRODUCT</span>
          </h2>
          <p style={{ fontFamily: Q, fontSize: "clamp(13px,1.6vw,16px)", color: "rgba(255,255,255,0.6)", maxWidth: 520, lineHeight: 1.7 }}>
            Tell us what you're building. We'll respond within 24 hours with a tailored sprint plan, tech stack recommendation, and pricing breakdown.
          </p>
        </motion.div>

        {/* 2-column layout */}
        <div className="targo-cta-grid">
          {/* Left: contact info & trust signals */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}>
            {/* Direct contact card */}
            <div style={{ background: "rgba(0,0,0,0.3)", border: `1px solid rgba(21,188,223,0.2)`, padding: 28, marginBottom: 20 }}>
              <div style={{ fontSize: 10, fontWeight: 700, fontFamily: Q, textTransform: "uppercase", letterSpacing: "0.14em", color: ACCENT, marginBottom: 18 }}>Direct Contact</div>
              <a href="mailto:trivoltrk@gmail.com" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14, textDecoration: "none", color: "inherit" }}>
                <span className="material-symbols-outlined" style={{ color: ACCENT, fontSize: 20 }}>mail</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: Q }}>trivoltrk@gmail.com</span>
              </a>
              <button onClick={handleCopyEmail} style={{ display: "flex", alignItems: "center", gap: 7, padding: "8px 16px", background: "rgba(21,188,223,0.12)", border: `1px solid rgba(21,188,223,0.3)`, color: ACCENT, fontSize: 11, fontWeight: 700, fontFamily: Q, textTransform: "uppercase", letterSpacing: "0.06em", cursor: "pointer", transition: "all 0.2s ease" }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>{copied ? "check" : "content_copy"}</span>
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>

            {/* Trust signals */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: "schedule", text: "Response within 24 hours, guaranteed" },
                { icon: "verified_user", text: "NDA available on request — your idea is safe" },
                { icon: "payments", text: "Free project scoping & cost estimate" },
                { icon: "sprint", text: "Sprint-based delivery — see progress every 2 weeks" },
                { icon: "support_agent", text: "Dedicated account manager throughout the build" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <span className="material-symbols-outlined" style={{ color: ACCENT, fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.45, fontFamily: Q }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Capability badges */}
            <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["AI SaaS Ready", "Full-Stack & Mobile", "SEO Optimized"].map((badge) => (
                <span key={badge} style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", background: "rgba(21,188,223,0.1)", border: `1px solid rgba(21,188,223,0.25)`, fontSize: 10, fontWeight: 700, color: ACCENT, fontFamily: Q, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 12 }}>verified</span>
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ background: "rgba(0,0,0,0.4)", border: `1px solid rgba(21,188,223,0.18)`, padding: 36, position: "relative", overflow: "hidden", clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}>
              {/* Corner glow */}
              <div style={{ position: "absolute", top: 0, right: 0, width: 160, height: 160, background: `radial-gradient(circle, rgba(21,188,223,0.12) 0%, transparent 70%)`, pointerEvents: "none" }} />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} style={{ textAlign: "center", padding: "48px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <motion.div initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }} style={{ width: 72, height: 72, background: `rgba(21,188,223,0.15)`, border: `2px solid rgba(21,188,223,0.5)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                      <span className="material-symbols-outlined" style={{ color: ACCENT, fontSize: 36 }}>check_circle</span>
                    </motion.div>
                    <h3 style={{ fontFamily: Q, fontSize: "clamp(1.1rem,2.5vw,1.5rem)", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 12 }}>Inquiry Received!</h3>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.65, maxWidth: 360, marginBottom: 28, fontFamily: Q }}>
                      Thank you, <strong style={{ color: "#fff" }}>{formData.name}</strong>. Our lead engineer will review your project and reply to <strong style={{ color: ACCENT }}>{formData.email}</strong> within 24 hours with a sprint plan &amp; cost estimate.
                    </p>
                    <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", company: "", service: "", budget: "$5k – $10k", message: "" }); setErrors({}); setTouched({}); }} style={{ padding: "12px 28px", background: "rgba(21,188,223,0.15)", border: `1px solid rgba(21,188,223,0.35)`, color: ACCENT, fontFamily: Q, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer", fontSize: 12 }}>
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div style={{ marginBottom: 4 }}>
                      <h3 style={{ fontFamily: Q, fontSize: "clamp(14px,2.5vw,18px)", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 4 }}>Start Your Project</h3>
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontFamily: Q }}>Fill out the form below — we'll build a custom sprint plan just for you.</p>
                    </div>

                    {/* Row 1 */}
                    <div className="targo-form-row">
                      <FormField label="Full Name" required error={touched.name && errors.name}>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} placeholder="John Doe" style={inputStyle(touched.name && errors.name)} onFocus={(e) => { e.target.style.borderColor = ACCENT; e.target.style.boxShadow = `0 0 0 3px rgba(21,188,223,0.15)`; }} onBlurCapture={(e) => { if (!errors.name) { e.target.style.borderColor = "rgba(21,188,223,0.15)"; e.target.style.boxShadow = "none"; } }} />
                      </FormField>
                      <FormField label="Work Email" required error={touched.email && errors.email}>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} placeholder="john@company.com" style={inputStyle(touched.email && errors.email)} onFocus={(e) => { e.target.style.borderColor = ACCENT; e.target.style.boxShadow = `0 0 0 3px rgba(21,188,223,0.15)`; }} />
                      </FormField>
                    </div>

                    {/* Row 2 */}
                    <div className="targo-form-row">
                      <FormField label="Phone (optional)" error={touched.phone && errors.phone}>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} placeholder="+92 300 0000000" style={inputStyle(touched.phone && errors.phone)} onFocus={(e) => { e.target.style.borderColor = ACCENT; e.target.style.boxShadow = `0 0 0 3px rgba(21,188,223,0.15)`; }} />
                      </FormField>
                      <FormField label="Company / Product">
                        <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Corp" style={inputStyle(false)} onFocus={(e) => { e.target.style.borderColor = ACCENT; e.target.style.boxShadow = `0 0 0 3px rgba(21,188,223,0.15)`; }} onBlur={(e) => { e.target.style.borderColor = "rgba(21,188,223,0.15)"; e.target.style.boxShadow = "none"; }} />
                      </FormField>
                    </div>

                    {/* Service selector */}
                    <FormField label="Service Required" required error={touched.service && errors.service}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 2 }}>
                        {SERVICES_LIST.map((svc) => {
                          const isSelected = formData.service === svc;
                          return (
                            <button type="button" key={svc} onClick={() => handleServiceSelect(svc)} style={{ padding: "6px 13px", fontSize: 11, fontWeight: 700, fontFamily: Q, textTransform: "uppercase", letterSpacing: "0.04em", cursor: "pointer", border: isSelected ? `1px solid ${ACCENT}` : "1px solid rgba(255,255,255,0.1)", background: isSelected ? `rgba(21,188,223,0.18)` : "rgba(0,0,0,0.4)", color: isSelected ? ACCENT : "rgba(255,255,255,0.55)", transition: "all 0.2s ease" }}>
                              {svc}
                            </button>
                          );
                        })}
                      </div>
                    </FormField>

                    {/* Budget picker */}
                    <FormField label="Estimated Budget (USD)">
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 2 }}>
                        {BUDGET_TIERS.map((tier) => {
                          const isSelected = formData.budget === tier.label;
                          return (
                            <button type="button" key={tier.value} onClick={() => handleBudgetSelect(tier.label)} style={{ padding: "7px 14px", fontSize: 12, fontWeight: 700, fontFamily: Q, textTransform: "uppercase", letterSpacing: "0.04em", cursor: "pointer", border: isSelected ? `1px solid ${ACCENT}` : "1px solid rgba(255,255,255,0.1)", background: isSelected ? `rgba(21,188,223,0.18)` : "rgba(0,0,0,0.4)", color: isSelected ? ACCENT : "rgba(255,255,255,0.55)", transition: "all 0.2s ease" }}>
                              {tier.label}
                            </button>
                          );
                        })}
                      </div>
                    </FormField>

                    {/* Message */}
                    <FormField label="Project Details & Timeline" required error={touched.message && errors.message}>
                      <textarea name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} rows={4} placeholder="Describe what you want to build, key features you need, and your ideal launch timeline..." style={{ ...inputStyle(touched.message && errors.message), resize: "vertical", minHeight: 110 }} onFocus={(e) => { e.target.style.borderColor = ACCENT; e.target.style.boxShadow = `0 0 0 3px rgba(21,188,223,0.15)`; }} />
                    </FormField>

                    {/* Server error */}
                    <AnimatePresence>
                      {submitError && (
                        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ padding: "12px 16px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171", fontSize: 13, lineHeight: 1.5, fontFamily: Q }}>
                          ⚠️ {submitError}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit */}
                    <motion.button type="submit" disabled={submitting} whileHover={!submitting ? { scale: 1.01 } : {}} whileTap={!submitting ? { scale: 0.99 } : {}} style={{ width: "100%", justifyContent: "center", padding: "16px", background: submitting ? "rgba(21,188,223,0.6)" : ACCENT, border: `1px solid ${ACCENT_BORDER}`, color: "#1a1c1e", fontFamily: Q, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", fontSize: 14, clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))", cursor: submitting ? "not-allowed" : "pointer", display: "flex", alignItems: "center", gap: 10, opacity: submitting ? 0.8 : 1, transition: "background 0.2s ease" }}>
                      {submitting ? (
                        <><span style={{ width: 16, height: 16, borderRadius: "50%", border: "2px solid rgba(26,28,30,0.3)", borderTopColor: "#1a1c1e", display: "inline-block", animation: "spin 0.7s linear infinite" }} /><span>Sending...</span></>
                      ) : (
                        <><span>Send Project Inquiry</span><span className="material-symbols-outlined" style={{ fontSize: 18 }}>send</span></>
                      )}
                    </motion.button>

                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", textAlign: "center", lineHeight: 1.5, fontFamily: Q }}>
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
        .targo-cta-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: start;
        }
        @media (min-width: 900px) {
          .targo-cta-grid {
            grid-template-columns: 1fr 1.35fr;
            gap: 48px;
          }
        }
        .cta-heading { font-size: clamp(28px, 7vw, 56px); }
        .cta-indent { display: inline-block; padding-left: clamp(0px, 10vw, 80px); }
        @media (max-width: 479px) { .cta-indent { padding-left: 0 !important; } }
        .targo-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        @media (max-width: 560px) {
          .targo-form-row {
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
