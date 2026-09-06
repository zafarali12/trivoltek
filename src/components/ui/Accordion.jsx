import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="glass-card"
            style={{
              overflow: "hidden",
              border: isOpen
                ? "1px solid rgba(167, 139, 250, 0.3)"
                : "1px solid var(--border-subtle)",
              background: isOpen ? "rgba(22, 26, 38, 0.9)" : "var(--bg-card)",
              transition: "border-color 0.3s ease, background 0.3s ease",
            }}
          >
            <button
              onClick={() => toggle(idx)}
              style={{
                width: "100%",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                background: "transparent",
                border: "none",
                color: "#f8fafc",
                fontSize: "1.0625rem",
                fontWeight: 600,
                textAlign: "left",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              <span>{item.q}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  color: isOpen ? "var(--accent-purple)" : "var(--text-muted)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    style={{
                      padding: "0 24px 22px 24px",
                      color: "var(--text-secondary)",
                      fontSize: "0.9375rem",
                      lineHeight: "1.65",
                    }}
                  >
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
