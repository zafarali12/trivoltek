import React, { useState } from "react";

const ACCENT = "#15BCDF";
const ACCENT_HOVER = "#3fd0ef";

function LogoCircle() {
  return (
    <div
      style={{
        width: 38,
        height: 38,
        borderRadius: "50%",
        backgroundColor: "#111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
        <ellipse
          cx="10"
          cy="4"
          rx="10"
          ry="4"
          fill="white"
          transform="rotate(-25 10 4)"
        />
      </svg>
    </div>
  );
}

function MailIcon() {
  return (
    <svg
      width="17"
      height="13"
      viewBox="0 0 17 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <rect x="1" y="1" width="15" height="11" rx="1" stroke="white" strokeWidth="1.4" />
      <path d="M1.5 1.5L8.5 7.5L15.5 1.5" stroke="white" strokeWidth="1.4" />
    </svg>
  );
}

export default function Navbar({ onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);
  const [hamburgerHovered, setHamburgerHovered] = useState(false);

  const navLinks = [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT US", href: "#contact" },
  ];

  return (
    <header style={{ position: "relative", zIndex: 10 }}>
      {/* Main navbar row */}
      <nav
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "clamp(20px, 5vw, 56px)",
          padding: `clamp(20px,3vw,38px) clamp(20px,4vw,48px) 0`,
          position: "relative",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <LogoCircle />
          <span
            style={{
              fontFamily: "'Quantico', 'Arial Narrow', sans-serif",
              fontSize: "clamp(22px, 5vw, 30px)",
              fontWeight: 400,
              color: "#111",
              letterSpacing: "-0.5px",
              lineHeight: 1,
            }}
          >
            trivoltek
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div
          className="targo-desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 34,
          }}
        >
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          className="targo-desktop-nav"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: contactHovered ? "rgba(255,255,255,0.14)" : "transparent",
            border: "none",
            outline: "none",
            color: "#fff",
            fontFamily: "'Quantico', 'Arial Narrow', sans-serif",
            fontSize: "clamp(12px, 2vw, 14px)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            padding: "14px 26px",
            clipPath:
              "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
            textDecoration: "none",
            cursor: "pointer",
            transition: "background 0.2s ease",
          }}
          onMouseEnter={() => setContactHovered(true)}
          onMouseLeave={() => setContactHovered(false)}
        >
          <MailIcon />
          Contact us
        </a>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="targo-mobile-toggle"
          aria-label="Toggle Menu"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 5,
            width: 36,
            height: 36,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 4,
            flexShrink: 0,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 2,
                backgroundColor: mobileMenuOpen ? "#15BCDF" : "#2b3033",
                borderRadius: 1,
                transition: "all 0.25s ease",
                transformOrigin: "center",
                transform:
                  mobileMenuOpen && i === 0
                    ? "translateY(7px) rotate(45deg)"
                    : mobileMenuOpen && i === 2
                    ? "translateY(-7px) rotate(-45deg)"
                    : mobileMenuOpen && i === 1
                    ? "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            padding: "18px clamp(20px, 4vw, 48px) 24px",
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "'Quantico', 'Arial Narrow', sans-serif",
                fontSize: "clamp(15px, 4vw, 18px)",
                fontWeight: 700,
                color: "#1a1c1e",
                textDecoration: "none",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .targo-desktop-nav {
          display: none !important;
        }
        .targo-mobile-toggle {
          display: flex !important;
        }
        @media (min-width: 701px) {
          .targo-desktop-nav {
            display: flex !important;
          }
          .targo-mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

function NavLink({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      style={{
        fontFamily: "'Quantico', 'Arial Narrow', sans-serif",
        fontWeight: 700,
        fontSize: "clamp(12px, 2.4vw, 15px)",
        letterSpacing: "0.06em",
        color: hovered ? "#000" : "#3a3a3a",
        textDecoration: "none",
        whiteSpace: "nowrap",
        transition: "color 0.2s ease",
        textTransform: "uppercase",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}
