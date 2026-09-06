
import "./Marquee.css";
const items=["React","Next.js","Node.js","Python","FastAPI","OpenAI","LangChain","PostgreSQL","Supabase","AWS","Vercel","Docker","TypeScript","Tailwind","Framer Motion","Stripe","GraphQL","Prisma","Redis","Figma"];
const Row=({rev=false})=>(
  <div className={"marquee__track "+(rev?"marquee__track--rev":"")}>
    {[...items,...items].map((it,i)=>(
      <span key={i} className="marquee__item">{it}</span>
    ))}
  </div>
);
export default function Marquee(){
  return(
    <div className="marquee">
      <Row/>
      <Row rev/>
    </div>
  );
}
