import React from "react";
import { motion } from "framer-motion";

export default function Tabs({
  tabs = [],
  activeTab,
  onChange,
  className = "",
}) {
  return (
    <div
      className={`tabs-container ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px",
        borderRadius: "var(--radius-full)",
        background: "rgba(20, 31, 46, 0.7)",
        border: "1px solid rgba(244, 241, 230, 0.08)",
        backdropFilter: "blur(12px)",
        position: "relative",
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            style={{
              position: "relative",
              padding: "8px 18px",
              fontSize: "0.875rem",
              fontWeight: 600,
              fontFamily: "inherit",
              color: isActive ? "#060A0E" : "#8A97A2",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              borderRadius: "var(--radius-full)",
              transition: "color 0.25s ease",
              zIndex: 1,
            }}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabPill"
                transition={{ type: "spring", stiffness: 450, damping: 32 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "var(--radius-full)",
                  background: "#20B2AA",
                  zIndex: -1,
                  boxShadow: "0 2px 14px rgba(32, 178, 170, 0.45)",
                }}
              />
            )}
            {tab}
          </button>
        );
      })}
    </div>
  );
}
