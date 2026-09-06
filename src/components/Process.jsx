
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Process.css";

const STEPS=[
  {
    n:"01",t:"Discovery & Strategy",
    d:"We align on goals, map user journeys, and define the full product roadmap — tech stack, architecture, timeline, and success metrics.",
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
  },
  {
    n:"02",t:"Design & Prototype",
    d:"High-fidelity UI/UX designs, interactive prototypes, and a robust design system — every pixel intentional before a single line of code is written.",
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
  },
  {
    n:"03",t:"Build & Iterate",
    d:"Agile two-week sprints with live previews. Clean, documented code with full test coverage and CI/CD pipelines from day one.",
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  },
  {
    n:"04",t:"Launch & Scale",
    d:"Production deployment, performance optimisation, uptime monitoring, and long-term support — we stay with you after go-live.",
    icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
  },
];

export default function Process(){
  const {ref,inView}=useInView({triggerOnce:true,threshold:.08});
  return(
    <section className="proc" id="process">
      <div className="container">
        <p className="eyebrow">How we work</p>
        <h2 className="h2">A process built for<br/><em>clarity & speed</em></h2>

        <div className="proc__grid" ref={ref}>
          {STEPS.map((s,i)=>(
            <motion.div key={s.n} id={"proc-"+s.n} className="proc__card"
              initial={{opacity:0,y:36}}
              animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:.65,delay:i*.12,ease:[.16,1,.3,1]}}
            >
              <div className="proc__top">
                <div className="proc__icon">{s.icon}</div>
                <span className="proc__num">{s.n}</span>
              </div>
              <h3 className="proc__title">{s.t}</h3>
              <p className="proc__desc">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
