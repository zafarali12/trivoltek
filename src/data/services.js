export const SERVICES = [
  {
    id: "ai",
    number: "01",
    accent: "#20B2AA", // Arctic Teal
    accentGlow: "rgba(32, 178, 170, 0.22)",
    badge: "Most Requested",
    title: "AI Feature Integration",
    shortDesc: "Embed autonomous AI capabilities directly into existing applications with enterprise guardrails.",
    description: "We engineer production-grade LLM architectures, RAG pipelines, fine-tuned embeddings, and multi-agent systems that solve complex business logic with sub-second response times.",
    features: [
      "Retrieval-Augmented Generation (RAG)",
      "Vector Search & Pinecone/Supabase indexing",
      "Agentic workflows with LangChain & LangGraph",
      "Custom fine-tuned prompts & evaluation pipelines"
    ],
    tags: ["OpenAI", "LangChain", "Vector DB", "FastAPI", "Python", "LlamaIndex"],
    metrics: "99.4% intent precision • 280ms average latency"
  },
  {
    id: "saas",
    number: "02",
    accent: "#48D1CC", // Light Arctic Teal
    accentGlow: "rgba(72, 209, 204, 0.2)",
    badge: "Full Lifecycle",
    title: "SaaS Platforms & MVPs",
    shortDesc: "Complete multi-tenant SaaS architecture designed for scale from day one.",
    description: "From database schema design to subscription billing with Stripe, role-based permissions (RBAC), multi-tenant tenancy models, and high-frequency analytical dashboards.",
    features: [
      "Multi-tenant data isolation & tenancy rules",
      "Stripe checkout, subscriptions & metered billing",
      "Robust RBAC, SSO & OAuth authentication",
      "Real-time usage telemetry & customer billing portals"
    ],
    tags: ["Next.js 15", "PostgreSQL", "Stripe", "Prisma", "Tailwind", "Redis"],
    metrics: "Production-ready within 6–8 sprint cycles"
  },
  {
    id: "fullstack",
    number: "03",
    accent: "#F4F1E6", // Soft Sand
    accentGlow: "rgba(244, 241, 230, 0.16)",
    badge: "High Performance",
    title: "Full-Stack Web Applications",
    shortDesc: "Ultra-fast, fault-tolerant web applications engineered for heavy concurrent traffic.",
    description: "Clean microservices or modular monoliths engineered using modern React/Next.js frontends, event-driven Node.js or Python backends, caching layers, and CI/CD pipelines.",
    features: [
      "Server-side rendering (SSR) & dynamic caching",
      "WebSocket real-time collaboration engines",
      "Scalable containerized deployment on AWS / Vercel",
      "Zero-downtime database migrations"
    ],
    tags: ["React", "Node.js", "GraphQL", "AWS ECS", "Docker", "TypeScript"],
    metrics: "100/100 Google Lighthouse Core Web Vitals"
  },
  {
    id: "web",
    number: "04",
    accent: "#8A97A2", // Slate Gray Light
    accentGlow: "rgba(138, 151, 162, 0.2)",
    badge: "Conversion First",
    title: "Custom High-Conversion Websites",
    shortDesc: "Immersive digital storefronts with dynamic micro-interactions and headless CMS.",
    description: "Bespoke digital experiences with smooth spring animations, 3D WebGL accents, headless CMS integration, and tailored typography that turn visitors into enterprise customers.",
    features: [
      "Custom interactive WebGL & Framer Motion dynamics",
      "Headless CMS integration (Sanity / Contentful)",
      "Strict SEO semantic architecture & schema markup",
      "A/B testing ready and heatmapped analytics"
    ],
    tags: ["Framer Motion", "Three.js", "Sanity CMS", "Tailwind", "Vite"],
    metrics: "3.2× average inbound lead conversion boost"
  }
];
