import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";

const ACCENT = "#15BCDF";
const ACCENT_HOVER = "#3fd0ef";
const ACCENT_BORDER = "#0fa3c2";

// ─── Video autoplay hook ──────────────────────────────────────────────────
function useAutoplayVideo(ref) {
  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let interval = null;

    const tryPlay = () => {
      video.muted = true;
      video.play()
        .then(() => {
          if (interval) { clearInterval(interval); interval = null; }
        })
        .catch(() => {});
    };

    tryPlay();

    if (video.paused) {
      interval = setInterval(() => {
        if (!video.paused) { clearInterval(interval); interval = null; return; }
        tryPlay();
      }, 1200);
    }

    const onInteraction = () => {
      video.muted = true;
      video.play().catch(() => {});
    };

    document.addEventListener("click", onInteraction, { once: true });
    document.addEventListener("touchstart", onInteraction, { once: true });

    return () => {
      if (interval) clearInterval(interval);
      document.removeEventListener("click", onInteraction);
      document.removeEventListener("touchstart", onInteraction);
    };
  }, [ref]);
}

// ─── CTA Button ───────────────────────────────────────────────────────────
function CTAButton({ children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 14,
        background: hovered ? ACCENT_HOVER : ACCENT,
        border: `1px solid ${ACCENT_BORDER}`,
        color: "#1a1c1e",
        fontFamily: "'Quantico', 'Arial Narrow', sans-serif",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        padding: "18px 34px",
        fontSize: "clamp(13px, 2.2vw, 16px)",
        clipPath:
          "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
        boxShadow: hovered
          ? "0 0 0 1px rgba(21,188,223,0.5), 0 14px 40px -12px rgba(15,163,194,0.8)"
          : "0 0 0 1px rgba(21,188,223,0.35), 0 10px 30px -12px rgba(15,163,194,0.6)",
        cursor: "pointer",
        transition: "background 0.2s ease, box-shadow 0.2s ease",
        lineHeight: 1,
      }}
    >
      {children}
      <span
        style={{
          display: "inline-block",
          width: 22,
          height: 1,
          backgroundColor: "#1a1c1e",
          flexShrink: 0,
        }}
      />
    </button>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────
export default function Hero({ onOpenDemo }) {
  const videoRef = useRef(null);
  useAutoplayVideo(videoRef);

  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "100svh",
        backgroundColor: "#F2F1F0",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Background Video ─────────────────────────────── */}
      <video
        ref={videoRef}
        className="hero-video"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260823_050407_500d0339-ab28-41c1-9688-132a74a3b5aa.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          top: 0,
          height: "auto",
          objectFit: "contain",
          pointerEvents: "none",
          zIndex: 0,
          willChange: "transform",
        }}
      />

      {/* ── Desktop scrim (CSS-only) ──────────────────────── */}
      <div className="hero-scrim" />

      {/* ── Content Layer ──────────────────────────────────── */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Navbar */}
        <Navbar onOpenDemo={onOpenDemo} />

        {/* Headline */}
        <h1 className="hero-h1">
          <span style={{ display: "block" }}>SCALING</span>
          <span style={{ display: "block" }}>THE</span>
          <span style={{ display: "block" }}>PLATFORM</span>
          <span className="hero-indent" style={{ display: "block" }}>FOR</span>
          <span className="hero-indent" style={{ display: "block" }}>YOUR</span>
          <span className="hero-indent hero-accent" style={{ display: "block" }}>BUSINESS</span>
        </h1>

        {/* CTA */}
        <div className="hero-cta-wrap">
          <CTAButton>GET STARTED</CTAButton>
        </div>
      </div>

      {/* ── CSS Media Queries ─────────────────────────────── */}
      <style>{`
        /* ── Mobile first (≤700px) ── */
        .hero-video {
          left: -12%;
          width: 119%;
        }

        .hero-scrim {
          display: none;
        }

        .hero-h1 {
          font-family: 'Quantico', 'Arial Narrow', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 0.98;
          color: #2b3033;
          margin: 0;
          margin-top: 300px;
          padding: 0 20px 28px 20px;
          font-size: clamp(32px, 9vw, 56px);
        }

        .hero-indent {
          /* No indent on mobile */
          padding-left: 0;
        }

        .hero-accent {
          color: ${ACCENT};
        }

        .hero-cta-wrap {
          padding: 0 20px 36px 20px;
        }

        /* ── Desktop (>700px) ── */
        @media (min-width: 701px) {
          .hero-video {
            left: auto;
            right: -20%;
            width: 99%;
          }

          .hero-scrim {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 70%;
            height: 100%;
            background: linear-gradient(
              90deg,
              #F2F1F0 0%,
              #F2F1F0 55%,
              rgba(242,241,240,0.85) 78%,
              rgba(242,241,240,0) 100%
            );
            pointer-events: none;
            z-index: 1;
          }

          .hero-h1 {
            margin-top: 0;
            padding: min(clamp(40px,9vw,120px),9vh) 20px min(clamp(24px,4vw,44px),5vh) clamp(20px,9vw,118px);
            font-size: min(clamp(34px,7.6vw,80px), 9.2vh);
          }

          .hero-indent {
            padding-left: min(238px, 28vw);
          }

          .hero-cta-wrap {
            padding-left: calc(clamp(20px,9vw,118px) + min(238px, 28vw));
            padding-bottom: min(clamp(36px,6vw,80px), 7vh);
            padding-right: 20px;
          }
        }
      `}</style>
    </section>
  );
}
