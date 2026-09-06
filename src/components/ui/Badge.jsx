import React from "react";

export default function Badge({
  children,
  variant = "teal",
  showDot = false,
  dotColor = "#20B2AA",
  className = "",
  style = {},
}) {
  const variantStyles = {
    teal: {
      background: "rgba(32, 178, 170, 0.12)",
      borderColor: "rgba(32, 178, 170, 0.35)",
      color: "#48D1CC",
    },
    obsidian: {
      background: "rgba(28, 43, 63, 0.7)",
      borderColor: "rgba(244, 241, 230, 0.15)",
      color: "#F4F1E6",
    },
    sand: {
      background: "rgba(244, 241, 230, 0.08)",
      borderColor: "rgba(244, 241, 230, 0.2)",
      color: "#F4F1E6",
    },
    slate: {
      background: "rgba(96, 108, 118, 0.15)",
      borderColor: "rgba(96, 108, 118, 0.3)",
      color: "#8A97A2",
    },
    default: {
      background: "rgba(28, 43, 63, 0.5)",
      borderColor: "rgba(244, 241, 230, 0.1)",
      color: "#F4F1E6",
    },
  };

  const currentVariant = variantStyles[variant] || variantStyles.teal;

  return (
    <span
      className={`inline-badge ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "5px 13px",
        borderRadius: "var(--radius-full)",
        fontSize: "0.8125rem",
        fontWeight: 600,
        letterSpacing: "0.02em",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: `1px solid ${currentVariant.borderColor}`,
        background: currentVariant.background,
        color: currentVariant.color,
        ...style,
      }}
    >
      {showDot && (
        <span
          className="beacon-dot"
          style={{
            backgroundColor: dotColor,
            width: "7px",
            height: "7px",
          }}
        />
      )}
      {children}
    </span>
  );
}
