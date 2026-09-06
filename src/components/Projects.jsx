
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Projects.css";

const PROJS = [
  {
    id: "analytics",
    tag: "SaaS Product",
    color: "#a78bfa",
    metric: "10K+ Users",
    title: "AI Analytics Dashboard",
    desc: "Multi-tenant SaaS with real-time data visualisation, AI-generated insights, and Stripe subscription billing. Built from 0 to 10K users in 8 months.",
    stack: ["Next.js", "Python", "OpenAI", "Stripe", "PostgreSQL"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop",
    size: "large",
  },
  {
    id: "chatbot",
    tag: "AI Integration",
    color: "#60a5fa",
    metric: "94% Accuracy",
    title: "Enterprise AI Assistant",
    desc: "RAG-based chatbot trained on internal docs. Handles 1000+ queries/day with 94% accuracy across 5 languages.",
    stack: ["LangChain", "Pinecone", "FastAPI", "GPT-4o"],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80&auto=format&fit=crop",
    size: "small",
  },
  {
    id: "ecom",
    tag: "Full Stack",
    color: "#4ade80",
    metric: "$2M+ Revenue",
    title: "E-Commerce Platform",
    desc: "Custom commerce solution with AI-powered recommendations, real-time inventory, and automated logistics.",
    stack: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80&auto=format&fit=crop",
    size: "small",
  },
  {
    id: "site",
    tag: "Custom Website",
    color: "#fb923c",
    metric: "3× Conversions",
    title: "Startup Marketing Site",
    desc: "Conversion-focused site with custom 3D WebGL animations, CMS, and A/B tested landing pages that tripled inbound leads.",
    stack: ["Next.js", "Three.js", "Framer Motion", "Sanity"],
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80&auto=format&fit=crop",
    size: "large",
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });

  return (
    <section className="proj" id="projects">
      <div className="container">
        <div className="proj__head">
          <div>
            <p className="eyebrow">Our work</p>
            <h2 className="h2">Products we've<br /><em>shipped</em></h2>
          </div>
          <a href="#contact" className="btn-ghost" id="proj-cta">
            Start your project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="proj__grid" ref={ref}>
          {PROJS.map((p, i) => (
            <motion.div
              key={p.id}
              id={"proj-" + p.id}
              className={"proj__card proj__card--" + p.size}
              style={{ "--pc": p.color }}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image */}
              <div className="proj__img-wrap">
                <img src={p.img} alt={p.title} className="proj__img" loading="lazy" />
                <div className="proj__img-overlay" />
              </div>

              {/* Content */}
              <div className="proj__body">
                <div className="proj__meta">
                  <span className="proj__tag" style={{ color: p.color, borderColor: p.color + "44", background: p.color + "11" }}>
                    {p.tag}
                  </span>
                  <span className="proj__metric">{p.metric}</span>
                </div>
                <h3 className="proj__title">{p.title}</h3>
                <p className="proj__desc">{p.desc}</p>
                <div className="proj__stack">
                  {p.stack.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
