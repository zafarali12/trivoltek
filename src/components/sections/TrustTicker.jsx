import React from "react";

const ACCENT = "#15BCDF";
const BG = "#F7F6F8";
const BG2 = "#EEEDF0";

export default function TrustTicker() {
  const partners = [
    { name: "AXION.IO" },
    { name: "NEXUS_GRID" },
    { name: "VALENCE" },
    { name: "CORESEC" },
    { name: "DATALOGIX" },
    { name: "STRATA-9" },
    { name: "SYNAPSE_AI" },
    { name: "QUANTUM_FLOW" },
  ];

  const tickerItems = [...partners, ...partners];

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: BG,
        padding: "28px 0",
        borderTop: `1px solid rgba(21,188,223,0.15)`,
        borderBottom: `1px solid rgba(21,188,223,0.15)`,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* label */}
      <div
        style={{
          fontFamily: "'Quantico', 'Arial Narrow', sans-serif",
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: "#6b6f72",
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        Trusted by Modern Scaling Enterprises &amp; Fast-Growing Tech Startups
      </div>

      {/* Left / right fade masks */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 120,
          height: "100%",
          background: `linear-gradient(to right, ${BG}, transparent)`,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 120,
          height: "100%",
          background: `linear-gradient(to left, ${BG}, transparent)`,
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Scrolling track */}
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "targoTickerScroll 30s linear infinite",
          gap: 56,
          paddingLeft: 24,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {tickerItems.map((p, idx) => (
          <div
            key={`${p.name}-${idx}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "'Quantico', 'Arial Narrow', sans-serif",
              fontSize: 16,
              fontWeight: 700,
              color: "#2b3033",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              opacity: 0.72,
              whiteSpace: "nowrap",
              transition: "opacity 0.2s ease, transform 0.2s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.72";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {/* Diamond bullet */}
            <span
              style={{
                width: 6,
                height: 6,
                background: ACCENT,
                transform: "rotate(45deg)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            {p.name}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes targoTickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
