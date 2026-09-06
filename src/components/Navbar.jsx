
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const NAV = [
  {l:"Services",h:"#services"},
  {l:"Process",h:"#process"},
  {l:"Work",h:"#projects"},
  {l:"Contact",h:"#contact"},
];

export default function Navbar() {
  const [sc, setSc] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    const fn=()=>setSc(window.scrollY>50);
    window.addEventListener("scroll",fn);
    return()=>window.removeEventListener("scroll",fn);
  },[]);
  return(
    <motion.header className={"nav "+(sc?"nav--bg":"")}
      initial={{y:-70,opacity:0}} animate={{y:0,opacity:1}}
      transition={{duration:.6,ease:[.16,1,.3,1]}}>
      <div className="nav__inner">
        {/* Logo */}
        <a href="#" className="nav__logo" id="nav-logo">
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
            <rect x="0" y="40" width="50" height="50" rx="14" fill="#4ade80"/>
            <rect x="25" y="20" width="50" height="50" rx="14" fill="#a78bfa" fillOpacity=".9"/>
            <rect x="50" y="0"  width="50" height="50" rx="14" fill="#818cf8"/>
          </svg>
          <span className="nav__brand">trivoltek</span>
        </a>

        {/* Desktop links */}
        <nav className="nav__links">
          {NAV.map(n=>(
            <a key={n.l} href={n.h} className="nav__link">{n.l}</a>
          ))}
        </nav>

        <a href="#contact" className="nav__cta" id="nav-cta">Get in touch</a>

        <button className={"nav__burger "+(open?"open":"")} id="nav-burger" onClick={()=>setOpen(!open)}>
          <span/><span/><span/>
        </button>
      </div>

      <AnimatePresence>
        {open&&(
          <motion.div className="nav__mob"
            initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}
            transition={{duration:.2}}>
            {NAV.map(n=>(
              <a key={n.l} href={n.h} className="nav__mob-link" onClick={()=>setOpen(false)}>{n.l}</a>
            ))}
            <a href="#contact" className="nav__cta nav__cta--mob" onClick={()=>setOpen(false)}>Get in touch</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}