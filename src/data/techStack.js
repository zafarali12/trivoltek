export const TECH_CATEGORIES = [
  {
    name: "AI & LLM Orchestration",
    description: "State-of-the-art models, vector retrieval, and autonomous agents.",
    tools: [
      { name: "OpenAI GPT-4o", role: "Reasoning & Generation", badge: "Primary" },
      { name: "Anthropic Claude", role: "Complex Document Analysis", badge: "Vision" },
      { name: "LangChain & LangGraph", role: "Multi-Agent Orchestration", badge: "Framework" },
      { name: "Pinecone / Weaviate", role: "Vector Embeddings Storage", badge: "Vector DB" },
      { name: "LlamaIndex", role: "Hierarchical RAG Ingestion", badge: "Index" },
      { name: "FastAPI / Python", role: "High-Throughput Inference APIs", badge: "Backend" },
    ]
  },
  {
    name: "Frontend & Interfaces",
    description: "Pixel-perfect, fluid, and hyper-responsive user interfaces.",
    tools: [
      { name: "React 19 & Next.js 15", role: "App Framework & Server Actions", badge: "Core" },
      { name: "TypeScript", role: "Strict Static Type Safety", badge: "Standard" },
      { name: "Tailwind CSS", role: "Atomic Design System & Tokens", badge: "Styling" },
      { name: "Framer Motion", role: "Spring-Physics Micro-Interactions", badge: "Animation" },
      { name: "Three.js / WebGL", role: "3D Visuals & Shaders", badge: "Graphics" },
      { name: "Lucide React", role: "Geometric Micro-Iconography", badge: "Icons" },
    ]
  },
  {
    name: "Backend, Data & Cloud",
    description: "Resilient infrastructure built for millions of requests with sub-100ms latency.",
    tools: [
      { name: "Node.js & Bun", role: "Event-Driven Microservices", badge: "Runtime" },
      { name: "PostgreSQL & Supabase", role: "Relational & Vector Data Layer", badge: "Database" },
      { name: "Redis & Upstash", role: "Edge Caching & Rate Limiting", badge: "Cache" },
      { name: "Prisma & Drizzle", role: "Type-Safe ORM & Migrations", badge: "ORM" },
      { name: "AWS & Vercel", role: "Serverless & Edge Global CDN", badge: "Cloud" },
      { name: "Docker & Kubernetes", role: "Isolated Container Orchestration", badge: "DevOps" },
    ]
  }
];
