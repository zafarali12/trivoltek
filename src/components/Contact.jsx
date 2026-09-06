
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Contact.css";

export default function Contact(){
  const [f,setF]=useState({name:"",email:"",service:"",msg:""});
  const [sent,setSent]=useState(false);
  const {ref,inView}=useInView({triggerOnce:true,threshold:.08});
  const ch=e=>setF({...f,[e.target.name]:e.target.value});
  const sub=e=>{e.preventDefault();setSent(true)};

  return(
    <section className="ctc" id="contact">
      <div className="container">
        <div className="ctc__wrap" ref={ref}>
          {/* Left */}
          <motion.div className="ctc__left"
            initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}}
            transition={{duration:.7,ease:[.16,1,.3,1]}}>
            <p className="eyebrow">Get in touch</p>
            <h2 className="h2">Ready to build<br/><em>something great?</em></h2>
            <p className="body-text" style={{marginBottom:36}}>
              Tell us about your project. We respond within 24 hours and offer a free 30-minute strategy call for every new project.
            </p>

            {/* Info items */}
            <div className="ctc__info">
              <a href="mailto:hello@trivoltek.com" className="ctc__row" id="contact-email">
                <div className="ctc__icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <span className="ctc__row-label">Email</span>
                  <span className="ctc__row-val">hello@trivoltek.com</span>
                </div>
              </a>
              <a href="https://wa.me/923001234567" className="ctc__row" id="contact-whatsapp">
                <div className="ctc__icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                </div>
                <div>
                  <span className="ctc__row-label">WhatsApp</span>
                  <span className="ctc__row-val">+92 300 1234567</span>
                </div>
              </a>
            </div>

            <div className="ctc__social">
              <a href="#" id="soc-li">LinkedIn</a>
              <a href="#" id="soc-tw">Twitter / X</a>
              <a href="#" id="soc-gh">GitHub</a>
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div className="ctc__right"
            initial={{opacity:0,y:30}} animate={inView?{opacity:1,y:0}:{}}
            transition={{duration:.7,delay:.15,ease:[.16,1,.3,1]}}>
            {sent?(
              <div className="ctc__success" id="contact-success">
                <div className="ctc__check">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3>Message sent!</h3>
                <p>We'll get back to you within 24 hours. Looking forward to working with you.</p>
              </div>
            ):(
              <form className="ctc__form" onSubmit={sub} id="contact-form">
                <div className="ctc__row2">
                  <div className="fld">
                    <label htmlFor="fname">Name</label>
                    <input id="fname" name="name" type="text" placeholder="John Doe" value={f.name} onChange={ch} required/>
                  </div>
                  <div className="fld">
                    <label htmlFor="femail">Email</label>
                    <input id="femail" name="email" type="email" placeholder="john@company.com" value={f.email} onChange={ch} required/>
                  </div>
                </div>
                <div className="fld">
                  <label htmlFor="fservice">Service</label>
                  <select id="fservice" name="service" value={f.service} onChange={ch} required>
                    <option value="">Select a service...</option>
                    <option value="ai">AI Feature Integration</option>
                    <option value="saas">SaaS Product</option>
                    <option value="fullstack">Full Stack Application</option>
                    <option value="web">Custom Website</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div className="fld">
                  <label htmlFor="fmsg">Project details</label>
                  <textarea id="fmsg" name="msg" rows="5" placeholder="Tell us about your project, timeline, and budget..." value={f.msg} onChange={ch} required/>
                </div>
                <button type="submit" className="btn-primary" style={{width:"100%",justifyContent:"center"}} id="contact-submit">
                  Send message
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
