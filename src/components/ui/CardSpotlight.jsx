import React, { useRef, useState } from "react";

export default function CardSpotlight({
  children,
  className = "",
  spotlightColor = "rgba(32, 178, 170, 0.18)",
  borderColor = "rgba(32, 178, 170, 0.4)",
  style = {},
  ...props
}) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`glass-card relative overflow-hidden ${className}`}
      style={{
        position: "relative",
        borderRadius: "var(--radius-lg)",
        ...style,
      }}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Glow in Arctic Teal */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          opacity,
          transition: "opacity 300ms ease",
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 55%)`,
        }}
      />
      {/* Dynamic Border Highlight */}
      <div
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          opacity,
          transition: "opacity 300ms ease",
          borderRadius: "inherit",
          border: `1px solid ${borderColor}`,
          maskImage: `radial-gradient(350px circle at ${position.x}px ${position.y}px, black 30%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(350px circle at ${position.x}px ${position.y}px, black 30%, transparent 80%)`,
        }}
      />
      {/* Content wrapper with relative z-index */}
      <div style={{ position: "relative", zIndex: 1, height: "100%" }}>
        {children}
      </div>
    </div>
  );
}
