import React from "react";

export default function TrustTicker() {
  const partners = [
    { name: "AXION.IO", icon: "memory" },
    { name: "NEXUS_GRID", icon: "cloud_done" },
    { name: "VALENCE", icon: "hub" },
    { name: "CORESEC", icon: "shield_lock" },
    { name: "DATALOGIX", icon: "database" },
    { name: "STRATA-9", icon: "speed" },
    { name: "SYNAPSE_AI", icon: "neurology" },
    { name: "QUANTUM_FLOW", icon: "timeline" },
  ];

  // Duplicate list to create a seamless infinite loop
  const tickerItems = [...partners, ...partners];

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "var(--color-surface-container-low)",
        padding: "24px 0",
        boxShadow: "inset 0 1px 4px rgba(0,0,0,0.02)",
        borderTop: "1px solid var(--color-surface-container-high)",
        borderBottom: "1px solid var(--color-surface-container-high)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Left and right fade gradient masks */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100px",
          height: "100%",
          background: "linear-gradient(to right, var(--color-surface-container-low), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100px",
          height: "100%",
          background: "linear-gradient(to left, var(--color-surface-container-low), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div className="container-stitch" style={{ marginBottom: "12px" }}>
        <div
          style={{
            fontFamily: "var(--font-headline)",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--color-on-surface-variant)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span className="material-symbols-outlined" style={{ color: "var(--color-secondary)", fontSize: "16px" }}>
            verified_user
          </span>
          <span>Trusted by Modern Scaling Enterprises &amp; Fast-Growing Tech Startups</span>
        </div>
      </div>

      {/* Infinite Smooth Sliding Track */}
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "stitchTickerScroll 30s linear infinite",
          gap: "48px",
          paddingLeft: "24px",
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
              gap: "8px",
              fontFamily: "var(--font-headline)",
              fontSize: "17px",
              fontWeight: 700,
              color: "var(--color-primary)",
              letterSpacing: "-0.02em",
              opacity: 0.75,
              whiteSpace: "nowrap",
              transition: "opacity 0.2s ease, transform 0.2s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.75";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <span className="material-symbols-outlined" style={{ color: "var(--color-secondary)", fontSize: "20px" }}>
              {p.icon}
            </span>
            <span>{p.name}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes stitchTickerScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
