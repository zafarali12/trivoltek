import React, { useRef, useEffect, useState } from "react";

const ACCENT = "#15BCDF";
const ACCENT_HOVER = "#3fd0ef";
const ACCENT_BORDER = "#0fa3c2";

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

function CTAButton({ children, style }) {
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
        padding: "16px 28px",
        fontSize: "clamp(12px, 2.2vw, 15px)",
        clipPath:
          "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
        boxShadow: hovered
          ? "0 0 0 1px rgba(21,188,223,0.5), 0 14px 40px -12px rgba(15,163,194,0.8)"
          : "0 0 0 1px rgba(21,188,223,0.35), 0 10px 30px -12px rgba(15,163,194,0.6)",
        cursor: "pointer",
        transition: "background 0.2s ease, box-shadow 0.2s ease",
        lineHeight: 1,
        ...style,
      }}
    >
      {children}
      <span
        style={{
          display: "inline-block",
          width: 20,
          height: 1,
          backgroundColor: "#1a1c1e",
          flexShrink: 0,
        }}
      />
    </button>
  );
}

export default function About() {
  const videoRef = useRef(null);
  useAutoplayVideo(videoRef);

  return (
    <section
      id="about"
      style={{
        background: "linear-gradient(180deg, #F2F1F0 0%, #F7F6F8 18%, #F7F6F8 100%)",
        overflow: "hidden",
      }}
    >
      <div className="about-inner">
        {/* ── Left Column ─────────────────────────────────── */}
        <div className="about-left">
          {/* Heading */}
          <h2 className="about-heading">
            <span style={{ display: "block" }}>ABOUT</span>
            <span
              style={{
                display: "block",
                color: ACCENT,
              }}
              className="about-indent"
            >
              BUSINESS
            </span>
          </h2>

          {/* Paragraph */}
          <p className="about-body">
            Trivoltek builds the testing infrastructure modern teams rely on. From
            automated pipelines to full-scale QA audits, we make sure your
            software ships fast and breaks nothing. Hundreds of releases, zero
            surprises.
          </p>

          {/* CTA */}
          <div className="about-cta">
            <CTAButton>LEARN MORE</CTAButton>
          </div>
        </div>

        {/* ── Right Column ─────────────────────────────────── */}
        <div className="about-right">
          {/* Video */}
          <video
            ref={videoRef}
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260823_063501_2e2c8971-de1e-473a-8611-a0c9ae7ee186.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            style={{
              width: "100%",
              maxWidth: 644,
              height: "auto",
              display: "block",
              position: "relative",
              zIndex: 0,
              willChange: "transform",
            }}
          />

          {/* Cyan hue overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "100%",
              maxWidth: 644,
              height: "100%",
              backgroundColor: ACCENT,
              mixBlendMode: "hue",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        </div>
      </div>

      <style>{`
        /* ── About responsive layout ── */
        .about-inner {
          display: flex;
          flex-direction: column;
          gap: 36px;
          padding: clamp(52px,10vw,140px) 0 clamp(24px,5vw,70px) clamp(20px,9vw,118px);
        }

        .about-left {
          flex: 1 1 320px;
        }

        .about-right {
          flex: 1 1 280px;
          display: flex;
          justify-content: flex-end;
          position: relative;
          overflow: hidden;
        }

        .about-heading {
          font-family: 'Quantico', 'Arial Narrow', sans-serif;
          font-weight: 700;
          font-size: clamp(36px, 10vw, 72px);
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 0.98;
          color: #2b3033;
          margin: 0;
        }

        .about-indent {
          padding-left: clamp(0px, 18vw, 160px);
        }

        .about-body {
          max-width: 520px;
          margin: 28px 0 0 clamp(0px, 18vw, 160px);
          font-family: 'Quantico', 'Arial Narrow', sans-serif;
          font-size: clamp(14px, 1.7vw, 17px);
          line-height: 1.7;
          color: #6b6f72;
        }

        .about-cta {
          margin: 32px 0 0 clamp(0px, 18vw, 160px);
        }

        @media (min-width: 740px) {
          .about-inner {
            flex-direction: row;
            align-items: center;
          }
          .about-indent {
            padding-left: clamp(60px, 18vw, 160px) !important;
          }
          .about-body {
            margin-left: clamp(60px, 18vw, 160px) !important;
          }
          .about-cta {
            margin-left: clamp(60px, 18vw, 160px) !important;
          }
        }

        /* On very small screens (≤480px), collapse staircase */
        @media (max-width: 479px) {
          .about-indent {
            padding-left: 0 !important;
          }
          .about-body {
            margin-left: 0 !important;
          }
          .about-cta {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
