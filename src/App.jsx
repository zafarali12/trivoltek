import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import TrustTicker from "./components/sections/TrustTicker";
import Pillars from "./components/sections/Pillars";
import TelemetryConsole from "./components/sections/TelemetryConsole";
import CaseStudy from "./components/sections/CaseStudy";
import Facilities from "./components/sections/Facilities";
import ContactCTA from "./components/sections/ContactCTA";
import Footer from "./components/sections/Footer";
import KeynoteModal from "./components/ui/KeynoteModal";

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-surface)", display: "flex", flexDirection: "column" }}>
      {/* Top Scroll Depth Progress Indicator */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          backgroundColor: "#20B2AA",
          transformOrigin: "0%",
          zIndex: 100,
          boxShadow: "0 0 10px rgba(32, 178, 170, 0.6)",
        }}
      />

      <Navbar onOpenDemo={() => setDemoModalOpen(true)} />
      <main style={{ flex: 1, width: "100%" }}>
        <Hero onOpenDemo={() => setDemoModalOpen(true)} />
        <TrustTicker />
        <Pillars />
        <TelemetryConsole />
        <CaseStudy />
        <Facilities />
        <ContactCTA />
      </main>
      <Footer />
      <KeynoteModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}