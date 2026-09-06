import React, { useState } from "react";
import TrivoltekLogo from "../ui/TrivoltekLogo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "var(--color-surface-container-high)",
        paddingTop: "64px",
        paddingBottom: "40px",
        boxShadow: "0 1px 8px rgba(0,0,0,0.02)",
        borderTop: "1px solid var(--color-surface-container-highest)",
      }}
    >
      <div className="container-stitch">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            marginBottom: "64px",
          }}
          className="footer-grid"
        >
          {/* Brand Col */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <TrivoltekLogo size={36} showText={true} />
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "var(--color-on-surface-variant)",
                maxWidth: "360px",
                lineHeight: 1.6,
                marginBottom: "20px",
              }}
            >
              Building next-generation AI SaaS products, custom websites, high-performance mobile apps,
              intelligent AI automations, and technical SEO growth systems.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["AI SaaS", "Full-Stack Web", "Mobile iOS/Android", "SEO Growth"].map((badge) => (
                <span
                  key={badge}
                  style={{
                    padding: "4px 10px",
                    borderRadius: "4px",
                    backgroundColor: "var(--color-surface-container)",
                    color: "var(--color-on-surface-variant)",
                    fontFamily: "var(--font-headline)",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-primary)",
                marginBottom: "16px",
              }}
            >
              Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "AI SaaS Products",
                "Custom Websites",
                "Mobile App Development",
                "AI Automation & Workflows",
                "Bug Fixing & Code Tuning",
                "SEO Building & Growth",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#innovations"
                    style={{
                      fontSize: "13px",
                      color: "var(--color-on-surface-variant)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-secondary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-on-surface-variant)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-primary)",
                marginBottom: "16px",
              }}
            >
              Capabilities
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Multi-Tenant SaaS Cloud",
                "Next.js & React Frontends",
                "Cross-Platform Flutter / RN",
                "LLM & Agent Pipelines",
                "Code Quality Audits",
                "Core Web Vitals SEO",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#telemetry"
                    style={{
                      fontSize: "13px",
                      color: "var(--color-on-surface-variant)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-secondary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-on-surface-variant)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Dispatches Form */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-primary)",
                marginBottom: "8px",
              }}
            >
              Technology Newsletter
            </h3>
            <p style={{ fontSize: "13px", color: "var(--color-on-surface-variant)", marginBottom: "16px" }}>
              Receive direct tech briefings, architecture breakdowns, and product release updates.
            </p>
            {subscribed ? (
              <div style={{ color: "var(--color-secondary)", fontWeight: 600, fontSize: "13px" }}>
                ✓ Subscribed to technical briefings.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="name@company.com"
                  style={{
                    flex: "1 1 180px",
                    backgroundColor: "var(--color-surface-container-lowest)",
                    padding: "10px 14px",
                    borderRadius: "6px",
                    border: "1px solid var(--color-surface-variant)",
                    fontSize: "13px",
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "var(--color-primary-container)",
                    color: "#ffffff",
                    padding: "10px 18px",
                    borderRadius: "6px",
                    border: "none",
                    fontFamily: "var(--font-headline)",
                    fontSize: "13px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--color-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--color-primary-container)")}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid rgba(6, 22, 42, 0.08)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            fontSize: "13px",
            color: "var(--color-on-surface-variant)",
          }}
        >
          <p>© 2025 TRIVOLTEK. Powering the Future Through Innovation. All rights reserved.</p>
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="mailto:trivoltrk@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>trivoltrk@gmail.com</a>
            <a href="#innovations" style={{ color: "inherit", textDecoration: "none" }}>Services</a>
            <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr 1.2fr 1.2fr 2fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
