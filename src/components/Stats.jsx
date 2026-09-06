import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Stats.css";

function CountUp({ to, suffix = "" }) {
  const [n, setN] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (!inView) return;
    let v = 0;
    const step = to / 80;
    const t = setInterval(() => {
      v += step;
      if (v >= to) { setN(to); clearInterval(t); }
      else setN(Math.floor(v));
    }, 20);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const data = [
  { v: 50, s: "+", l: "Projects Delivered" },
  { v: 30, s: "+", l: "Happy Clients" },
  { v: 4,  s: "+", l: "Years Experience" },
  { v: 99, s: "%", l: "Client Satisfaction" },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <div className="stats" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {data.map((d, i) => (
            <motion.div key={d.l} className="stat-item"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
            >
              <div className="stat-num">
                {inView ? <CountUp to={d.v} suffix={d.s} /> : "0" + d.s}
              </div>
              <div className="stat-lbl">{d.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
