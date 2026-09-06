import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import TrivoltekLogo from "../ui/TrivoltekLogo";

export default function Navbar({ onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "rgba(252, 249, 238, 0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
        borderBottom: "1px solid rgba(6, 22, 42, 0.06)",
      }}
    >
      <div
        className="container-stitch"
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Brand Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <TrivoltekLogo size={42} showText={true} />
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "28px",
          }}
          className="stitch-desktop-nav"
        >
          {[
            { label: "Services", href: "#innovations" },
            { label: "Tech Stack", href: "#telemetry" },
            { label: "Standards", href: "#facilities" },
            { label: "Case Study", href: "#casestudy" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--color-on-surface-variant)",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-secondary)")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-on-surface-variant)")
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="#contact"
            className="btn-stitch-primary stitch-desktop-cta"
            style={{ display: "none" }}
          >
            <span>Start Project</span>
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
              arrow_forward
            </span>
          </a>

          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              backgroundColor: "var(--color-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
              person
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "38px",
              height: "38px",
              borderRadius: "8px",
              background: "transparent",
              border: "1px solid rgba(6, 22, 42, 0.12)",
              color: "var(--color-primary)",
              cursor: "pointer",
            }}
            className="stitch-mobile-toggle"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "#ffffff",
            borderBottom: "1px solid rgba(6, 22, 42, 0.08)",
            padding: "20px 24px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { label: "Services", href: "#innovations" },
              { label: "Tech Stack", href: "#telemetry" },
              { label: "Standards", href: "#facilities" },
              { label: "Case Study", href: "#casestudy" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--color-primary)",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-stitch-primary"
              style={{ width: "100%", marginTop: "8px", textAlign: "center" }}
            >
              <span>Start Project</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .stitch-desktop-nav { display: flex !important; }
          .stitch-desktop-cta { display: inline-flex !important; }
          .stitch-mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
