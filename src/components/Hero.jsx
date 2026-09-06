
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Hero.css";

function CountUp({ to, suffix = "" }) {
  const [n, setN] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const duration = 2000;
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setN(Math.round(eased * to));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{n}{suffix}</span>;
}

const STATS = [
  { to: 50, suffix: "+",     label: "Projects"    },
  { to: 30, suffix: "+",     label: "Clients"     },
  { to: 4,  suffix: "+ yrs", label: "Experience"  },
  { to: 99, suffix: "%",     label: "Satisfaction" },
];

const fade = (d = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.8, delay: d, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__glow hero__glow--purple" />
      <div className="hero__glow hero__glow--green"  />

      <div className="container hero__layout">
        {/* Left — text */}
        <div className="hero__left">
          <motion.div {...fade(0)} className="hero__badge">
            <span className="hero__dot" />
            Open to new projects
          </motion.div>

          <motion.h1 {...fade(0.1)} className="hero__h1">
            We engineer<br />software<br />
            <span className="hero__accent">that scales.</span>
          </motion.h1>

          <motion.p {...fade(0.22)} className="hero__sub">
            Trivoltek is a software studio specialising in AI feature integration,
            SaaS platforms, full-stack applications, and high-performance custom websites.
          </motion.p>

          <motion.div {...fade(0.34)} className="hero__actions">
            <a href="#contact" className="btn-primary" id="hero-cta">
              Start a project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#projects" className="btn-ghost" id="hero-work">See our work</a>
          </motion.div>

          <motion.div {...fade(0.46)} className="hero__stats">
            {STATS.map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-n">
                  <CountUp to={s.to} suffix={s.suffix} />
                </span>
                <span className="hero__stat-l">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — floating image stack */}
        <motion.div
          className="hero__right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main image */}
          <div className="hero__img-main">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85&auto=format&fit=crop"
              alt="Analytics Dashboard"
              loading="eager"
            />
            <div className="hero__img-shine" />
          </div>

          {/* Floating card 1 — metric */}
          <motion.div
            className="hero__float hero__float--tl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="hero__float-icon" style={{ background: "rgba(167,139,250,.15)", color: "#a78bfa" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
            </div>
            <div>
              <div className="hero__float-num">+127%</div>
              <div className="hero__float-lbl">Revenue Growth</div>
            </div>
          </motion.div>

          {/* Floating card 2 — users */}
          <motion.div
            className="hero__float hero__float--br"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="hero__float-icon" style={{ background: "rgba(74,222,128,.12)", color: "#4ade80" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <div>
              <div className="hero__float-num">10K+</div>
              <div className="hero__float-lbl">Active Users</div>
            </div>
          </motion.div>

          {/* Floating card 3 — AI */}
          <motion.div
            className="hero__float hero__float--ml"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="hero__float-icon" style={{ background: "rgba(96,165,250,.12)", color: "#60a5fa" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
            </div>
            <div>
              <div className="hero__float-num">AI Ready</div>
              <div className="hero__float-lbl">GPT-4 Powered</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
