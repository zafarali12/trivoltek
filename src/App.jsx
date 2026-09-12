import React, { useState, lazy, Suspense } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// ─── Above-the-fold: loaded eagerly ───────────────────────────────────────
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

// ─── Below-the-fold: lazy loaded (code-split, only fetched when needed) ──
const TrustTicker      = lazy(() => import("./components/sections/TrustTicker"));
const Pillars          = lazy(() => import("./components/sections/Pillars"));
const TelemetryConsole = lazy(() => import("./components/sections/TelemetryConsole"));
const CaseStudy        = lazy(() => import("./components/sections/CaseStudy"));
const Facilities       = lazy(() => import("./components/sections/Facilities"));
const ContactCTA       = lazy(() => import("./components/sections/ContactCTA"));
const Footer           = lazy(() => import("./components/sections/Footer"));
const KeynoteModal     = lazy(() => import("./components/ui/KeynoteModal"));

// Lightweight skeleton shown while lazy chunks load
function SectionSkeleton() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: 120,
        backgroundColor: "#F7F6F8",
        animation: "skelPulse 1.4s ease-in-out infinite",
      }}
    />
  );
}

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div style={{ margin: 0, backgroundColor: "#F2F1F0", display: "flex", flexDirection: "column" }}>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          backgroundColor: "#15BCDF",
          transformOrigin: "0%",
          zIndex: 100,
          boxShadow: "0 0 10px rgba(21, 188, 223, 0.6)",
          willChange: "transform",
        }}
      />

      {/* ── Above fold (eager) ──────────────────────────────── */}
      <Hero onOpenDemo={() => setDemoModalOpen(true)} />
      <About />

      {/* ── Below fold (lazy + Suspense) ────────────────────── */}
      <main style={{ flex: 1, width: "100%" }}>
        <Suspense fallback={<SectionSkeleton />}>
          <TrustTicker />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Pillars />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <TelemetryConsole />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <CaseStudy />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Facilities />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ContactCTA />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Modal — only rendered when open */}
      {demoModalOpen && (
        <Suspense fallback={null}>
          <KeynoteModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
        </Suspense>
      )}

      <style>{`
        @keyframes skelPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.55; }
        }
      `}</style>
    </div>
  );
}