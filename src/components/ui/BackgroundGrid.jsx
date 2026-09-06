import React from "react";

export default function BackgroundGrid() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {/* Grid Pattern */}
      <div
        className="grid-overlay"
        style={{
          position: "absolute",
          inset: 0,
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 80%)",
        }}
      />
    </div>
  );
}
