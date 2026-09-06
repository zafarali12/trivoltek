import React from "react";

const MARQUEE_ROW_1 = [
  "Autonomous AI Agents",
  "RAG Pipelines",
  "Vector Search",
  "Multi-Tenant SaaS",
  "Real-Time Telemetry",
  "Stripe Billing Systems",
  "PostgreSQL & Supabase",
  "Next.js 15 & React 19",
  "FastAPI & Python",
  "TypeScript Strictly Typed",
];

const MARQUEE_ROW_2 = [
  "LangChain & LangGraph",
  "OpenAI GPT-4o & Claude",
  "AWS Cloud Native",
  "Docker & Kubernetes",
  "Zero-Downtime CI/CD",
  "Redis Edge Caching",
  "GraphQL & RESTful APIs",
  "Framer Motion Micro-Interactions",
  "Sub-100ms Edge Latency",
  "Technology & Innovation",
];

export default function Marquee() {
  return (
    <section
      style={{
        padding: "48px 0",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(244, 241, 230, 0.08)",
        borderBottom: "1px solid rgba(244, 241, 230, 0.08)",
        background: "rgba(10, 16, 24, 0.7)",
      }}
    >
      {/* Side gradient fade masks */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "120px",
          background: "linear-gradient(to right, var(--obsidian-deep), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "120px",
          background: "linear-gradient(to left, var(--obsidian-deep), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* Track 1 (Leftwards) */}
        <div className="marquee-track">
          <div className="marquee-content">
            {[...MARQUEE_ROW_1, ...MARQUEE_ROW_1, ...MARQUEE_ROW_1].map((item, idx) => (
              <div key={idx} className="marquee-chip">
                <span className="chip-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2 (Rightwards) */}
        <div className="marquee-track">
          <div className="marquee-content reverse">
            {[...MARQUEE_ROW_2, ...MARQUEE_ROW_2, ...MARQUEE_ROW_2].map((item, idx) => (
              <div key={idx} className="marquee-chip reverse-chip">
                <span className="chip-dot chip-dot--alt" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          overflow: hidden;
          user-select: none;
        }
        .marquee-content {
          display: flex;
          align-items: center;
          gap: 16px;
          animation: marquee-scroll 38s linear infinite;
          will-change: transform;
        }
        .marquee-content.reverse {
          animation: marquee-scroll-reverse 42s linear infinite;
        }
        .marquee-track:hover .marquee-content {
          animation-play-state: paused;
        }

        .marquee-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: var(--radius-full);
          background: rgba(28, 43, 63, 0.45);
          border: 1px solid rgba(244, 241, 230, 0.08);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--soft-sand-muted);
          white-space: nowrap;
          transition: all 0.2s ease;
        }
        .marquee-chip:hover {
          background: rgba(32, 178, 170, 0.12);
          border-color: rgba(32, 178, 170, 0.4);
          color: var(--soft-sand);
        }
        .reverse-chip:hover {
          border-color: rgba(72, 209, 204, 0.4);
        }

        .chip-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #20B2AA;
          box-shadow: 0 0 6px #20B2AA;
        }
        .chip-dot--alt {
          background: #48D1CC;
          box-shadow: 0 0 6px #48D1CC;
        }

        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        @keyframes marquee-scroll-reverse {
          from { transform: translateX(-33.333%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
