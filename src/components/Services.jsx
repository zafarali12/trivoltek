
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Services.css";

const SVCS=[
  {
    id:"ai",label:"01",color:"#a78bfa",
    icon:(
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
        <circle cx="7.5" cy="14.5" r="1.5"/><circle cx="16.5" cy="14.5" r="1.5"/>
      </svg>
    ),
    title:"AI Feature Integration",
    desc:"We embed cutting-edge AI directly into your product — GPT-powered features, intelligent automation, custom ML pipelines, vector search, and RAG systems that learn from your data.",
    tags:["OpenAI","LangChain","RAG","Computer Vision","NLP","Embeddings"],
  },
  {
    id:"saas",label:"02",color:"#60a5fa",
    icon:(
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title:"SaaS Products",
    desc:"End-to-end SaaS development — from architecture and MVP to full-scale multi-tenant platforms. Subscription billing, usage analytics, role-based access, and scalable backend infrastructure.",
    tags:["Multi-tenant","Stripe","Auth","Analytics","Billing","Dashboards"],
  },
  {
    id:"fullstack",label:"03",color:"#4ade80",
    icon:(
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        <line x1="12" y1="2" x2="12" y2="22"/>
      </svg>
    ),
    title:"Full Stack Applications",
    desc:"High-performance web applications with React/Next.js frontends, robust Node.js & Python backends, REST & GraphQL APIs, real-time features, and cloud-native deployment on AWS.",
    tags:["React","Next.js","Node.js","Python","GraphQL","PostgreSQL"],
  },
  {
    id:"web",label:"04",color:"#fb923c",
    icon:(
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title:"Custom Websites",
    desc:"Stunning, conversion-optimised websites with premium micro-animations, pixel-perfect design systems, blazing performance scores, and full headless CMS integration for easy content management.",
    tags:["Framer","Three.js","GSAP","Webflow","Sanity","SEO"],
  },
];

export default function Services(){
  const {ref,inView}=useInView({triggerOnce:true,threshold:.08});
  return(
    <section className="svc" id="services">
      <div className="container">
        {/* Header */}
        <div className="svc__head">
          <p className="eyebrow">What we do</p>
          <h2 className="h2">Services built for<br/><em>modern businesses</em></h2>
          <p className="body-text">
            From AI integrations to production-ready SaaS — we deliver
            full-spectrum software solutions that grow with you.
          </p>
        </div>

        {/* Grid */}
        <div className="svc__grid" ref={ref}>
          {SVCS.map((s,i)=>(
            <motion.div key={s.id} id={"svc-"+s.id} className="svc__card"
              style={{"--c":s.color}}
              initial={{opacity:0,y:40}}
              animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:.7,delay:i*.1,ease:[.16,1,.3,1]}}
            >
              <div className="svc__card-top">
                <div className="svc__icon">{s.icon}</div>
                <span className="svc__num">{s.label}</span>
              </div>
              <h3 className="svc__title">{s.title}</h3>
              <p className="svc__desc">{s.desc}</p>
              <div className="svc__tags">
                {s.tags.map(t=><span key={t} className="tag">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
