import React, { useState } from "react";

const ACCENT = "#15BCDF";
const ACCENT_HOVER = "#3fd0ef";
const Q = "'Quantico', 'Arial Narrow', sans-serif";

function LogoCircle() {
  return (
    <div style={{ width: 32, height: 32, borderRadius: "50%", backgroundColor: "#2b3033", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <svg width="16" height="7" viewBox="0 0 16 7" fill="none">
        <ellipse cx="8" cy="3.5" rx="8" ry="3.5" fill="white" transform="rotate(-25 8 3.5)" />
      </svg>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#F7F6F8",
        paddingTop: 64,
        paddingBottom: 40,
        borderTop: `1px solid rgba(21,188,223,0.2)`,
      }}
    >
      <div
        style={{
          padding: `0 clamp(20px,9vw,118px)`,
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 48,
          marginBottom: 56,
        }}
        className="targo-footer-grid"
      >
        {/* Brand Col */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <LogoCircle />
            <span style={{ fontFamily: Q, fontSize: "clamp(18px,3vw,22px)", fontWeight: 400, color: "#2b3033", letterSpacing: "-0.5px" }}>trivoltek</span>
          </div>
          <p style={{ fontFamily: Q, fontSize: 13, color: "#6b6f72", maxWidth: 340, lineHeight: 1.7, marginBottom: 20 }}>
            Building next-generation AI SaaS products, custom websites, high-performance mobile apps, intelligent AI automations, and technical SEO growth systems.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["AI SaaS", "Full-Stack Web", "Mobile iOS/Android", "SEO Growth"].map((badge) => (
              <span key={badge} style={{ padding: "4px 10px", background: "rgba(21,188,223,0.1)", border: `1px solid rgba(21,188,223,0.25)`, fontFamily: Q, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#2b3033" }}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h3 style={{ fontFamily: Q, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#2b3033", marginBottom: 16 }}>Services</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {["AI SaaS Products", "Custom Websites", "Mobile App Development", "AI Automation & Workflows", "Bug Fixing & Code Tuning", "SEO Building & Growth"].map((item) => (
              <li key={item}>
                <a href="#innovations" style={{ fontFamily: Q, fontSize: 13, color: "#6b6f72", textDecoration: "none", transition: "color 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)} onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6f72")}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Capabilities Links */}
        <div>
          <h3 style={{ fontFamily: Q, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#2b3033", marginBottom: 16 }}>Capabilities</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {["Multi-Tenant SaaS Cloud", "Next.js & React Frontends", "Cross-Platform Flutter / RN", "LLM & Agent Pipelines", "Code Quality Audits", "Core Web Vitals SEO"].map((item) => (
              <li key={item}>
                <a href="#telemetry" style={{ fontFamily: Q, fontSize: 13, color: "#6b6f72", textDecoration: "none", transition: "color 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)} onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6f72")}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 style={{ fontFamily: Q, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#2b3033", marginBottom: 8 }}>Technology Newsletter</h3>
          <p style={{ fontFamily: Q, fontSize: 13, color: "#6b6f72", marginBottom: 16, lineHeight: 1.6 }}>Receive direct tech briefings, architecture breakdowns, and product release updates.</p>
          {subscribed ? (
            <div style={{ fontFamily: Q, color: ACCENT, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em" }}>✓ Subscribed to technical briefings.</div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="name@company.com"
                style={{ flex: "1 1 180px", backgroundColor: "#fff", padding: "10px 14px", border: `1px solid rgba(21,188,223,0.25)`, fontSize: 13, outline: "none", fontFamily: Q, color: "#2b3033" }}
                onFocus={(e) => { e.target.style.borderColor = ACCENT; e.target.style.boxShadow = `0 0 0 2px rgba(21,188,223,0.15)`; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(21,188,223,0.25)"; e.target.style.boxShadow = "none"; }}
              />
              <button type="submit" style={{ backgroundColor: ACCENT, color: "#1a1c1e", padding: "10px 18px", border: `1px solid ${ACCENT}`, fontFamily: Q, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer", transition: "background 0.2s ease", clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_HOVER)} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}>
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ padding: `0 clamp(20px,9vw,118px)`, paddingTop: 24, borderTop: "1px solid rgba(43,48,51,0.1)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <p style={{ fontFamily: Q, fontSize: 12, color: "#6b6f72", letterSpacing: "0.04em" }}>© 2025 TRIVOLTEK. Powering the Future Through Innovation. All rights reserved.</p>
        <div style={{ display: "flex", gap: 20 }}>
          {[
            { label: "trivoltrk@gmail.com", href: "mailto:trivoltrk@gmail.com" },
            { label: "Services", href: "#innovations" },
            { label: "Contact", href: "#contact" },
          ].map((l) => (
            <a key={l.label} href={l.href} style={{ fontFamily: Q, fontSize: 12, color: "#6b6f72", textDecoration: "none", transition: "color 0.2s ease" }} onMouseEnter={(e) => (e.currentTarget.style.color = ACCENT)} onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6f72")}>
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .targo-footer-grid {
            grid-template-columns: 2fr 1.2fr 1.2fr 2fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
