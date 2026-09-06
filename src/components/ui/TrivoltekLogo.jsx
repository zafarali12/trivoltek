import React from "react";

export default function TrivoltekLogo({
  size = 36,
  showText = true,
  className = "",
  textColor = "#000000",
  variant = "full", // 'full', 'icon', 'light', 'dark'
}) {
  const actualTextColor = variant === "light" ? "#FFFFFF" : (textColor || "#000000");

  return (
    <div
      className={`trivoltek-brand ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        textDecoration: "none",
      }}
    >
      {/* Official Geometric Ribbon Origami Logo Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          {/* Obsidian Blue Gradients for Ribbon 'T' */}
          <linearGradient id="obsidianTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2A3F5A" />
            <stop offset="100%" stopColor="#1C2B3F" />
          </linearGradient>
          <linearGradient id="obsidianStem" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1C2B3F" />
            <stop offset="100%" stopColor="#131E2C" />
          </linearGradient>
          <linearGradient id="obsidianFold" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#354E6E" />
            <stop offset="100%" stopColor="#1C2B3F" />
          </linearGradient>

          {/* Arctic Teal Gradients for Arrow 'V' */}
          <linearGradient id="tealArrow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#168F88" />
            <stop offset="50%" stopColor="#20B2AA" />
            <stop offset="100%" stopColor="#3FE0D7" />
          </linearGradient>
          <linearGradient id="tealFold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#12736D" />
            <stop offset="100%" stopColor="#20B2AA" />
          </linearGradient>
          <filter id="tealGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#20B2AA" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* 1. Left 'T' Ribbon Top Bar */}
        <path
          d="M24 22 H74 L60 40 H10 L24 22Z"
          fill="url(#obsidianTop)"
        />

        {/* 2. Top-Right Fold of 'T' */}
        <path
          d="M74 22 L86 38 L68 46 L60 40 L74 22Z"
          fill="url(#obsidianFold)"
        />

        {/* 3. Stem of 'T' Ribbon (Descending and angled) */}
        <path
          d="M60 40 L38 72 H20 L44 38 L60 40Z"
          fill="url(#obsidianStem)"
        />

        {/* 4. Bottom Horizontal Base of 'T' */}
        <path
          d="M20 72 H52 L42 88 H10 L20 72Z"
          fill="url(#obsidianTop)"
        />

        {/* 5. Central Fold connector to 'V' */}
        <path
          d="M42 88 L64 54 L76 68 L54 100 L42 88Z"
          fill="url(#tealFold)"
        />

        {/* 6. Rising Arctic Teal Arrow forming 'V' */}
        <path
          d="M54 100 L96 42 L80 42 L106 14 L114 48 L98 48 L64 96 Z"
          fill="url(#tealArrow)"
          filter="url(#tealGlow)"
        />
        
        {/* Crisp Geometric Arrowhead for 'V' */}
        <polygon
          points="106,12 118,44 102,40 88,60 76,46 94,36"
          fill="#20B2AA"
        />
      </svg>

      {/* Official Typography Wordmark */}
      {showText && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span
            style={{
              fontSize: `${Math.max(16, size * 0.46)}px`,
              fontWeight: 900,
              letterSpacing: "0.06em",
              color: actualTextColor,
              fontFamily: "var(--font-headline, sans-serif)",
              textTransform: "uppercase",
            }}
          >
            TRIVOLTEK
          </span>
          <span
            style={{
              fontSize: `${Math.max(8, size * 0.18)}px`,
              fontWeight: 700,
              letterSpacing: "0.22em",
              color: "#20B2AA",
              fontFamily: "var(--font-headline, sans-serif)",
              textTransform: "uppercase",
              marginTop: "4px",
            }}
          >
            TECHNOLOGY &amp; INNOVATION
          </span>
        </div>
      )}
    </div>
  );
}
