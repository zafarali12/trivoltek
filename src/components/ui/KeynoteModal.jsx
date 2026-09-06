import React from "react";

export default function KeynoteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backgroundColor: "rgba(6, 22, 42, 0.82)",
        backdropFilter: "blur(14px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          maxWidth: "680px",
          width: "100%",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.4)",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "16px",
            marginBottom: "16px",
            borderBottom: "1px solid rgba(6, 22, 42, 0.08)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "18px",
              fontWeight: 800,
              color: "var(--color-primary)",
            }}
          >
            TRIVOLTEK Engineering &amp; Product Demo
          </h3>
          <button
            type="button"
            onClick={onClose}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "var(--color-surface-container)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              cursor: "pointer",
              color: "var(--color-on-surface)",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              close
            </span>
          </button>
        </div>

        {/* Video simulation preview */}
        <div
          style={{
            aspectRatio: "16 / 9",
            width: "100%",
            backgroundColor: "var(--color-primary)",
            borderRadius: "12px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "24px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              backgroundColor: "var(--color-secondary)",
              color: "var(--color-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 24px rgba(32, 178, 170, 0.4)",
              marginBottom: "16px",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "36px", fontVariationSettings: "'FILL' 1" }}>
              play_arrow
            </span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: "20px",
              fontWeight: 800,
              color: "var(--color-surface)",
              marginBottom: "6px",
            }}
          >
            AI SaaS, Web, Mobile &amp; Automation Architecture
          </div>
          <p style={{ fontSize: "14px", color: "var(--color-on-primary-container)" }}>
            Duration: 8 minutes · Full-Stack Demo &amp; Technical Capabilities
          </p>
        </div>

        <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
          <button
            type="button"
            onClick={onClose}
            className="btn-stitch-primary"
            style={{ padding: "8px 20px" }}
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
