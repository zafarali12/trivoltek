import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function CountUp({ to = 0, suffix = "", duration = 1800 }) {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;

    let startTimestamp = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Quartic ease-out curve
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setValue(Math.round(easeOut * to));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, to, duration]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {value}
      {suffix}
    </span>
  );
}
