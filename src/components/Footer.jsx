
import "./Footer.css";
export default function Footer(){
  return(
    <footer className="foot">
      <div className="container">
        <div className="foot__inner">
          <div className="foot__left">
            <a href="#" className="foot__logo" id="footer-logo">
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
                <rect x="0" y="40" width="50" height="50" rx="14" fill="#4ade80"/>
                <rect x="25" y="20" width="50" height="50" rx="14" fill="#a78bfa" fillOpacity=".9"/>
                <rect x="50" y="0"  width="50" height="50" rx="14" fill="#818cf8"/>
              </svg>
              <span>trivoltek</span>
            </a>
            <p>Software & SaaS Engineering</p>
          </div>
          <div className="foot__links">
            <div className="foot__col">
              <h4>Services</h4>
              <a href="#services">AI Integration</a>
              <a href="#services">SaaS Products</a>
              <a href="#services">Full Stack Apps</a>
              <a href="#services">Custom Websites</a>
            </div>
            <div className="foot__col">
              <h4>Company</h4>
              <a href="#process">Process</a>
              <a href="#projects">Work</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="foot__col">
              <h4>Connect</h4>
              <a href="#" id="foot-li">LinkedIn</a>
              <a href="#" id="foot-tw">Twitter / X</a>
              <a href="#" id="foot-gh">GitHub</a>
            </div>
          </div>
        </div>
        <div className="foot__bar">
          <p>© {new Date().getFullYear()} Trivoltek. All rights reserved.</p>
          <p>Built with precision, shipped with passion.</p>
        </div>
      </div>
    </footer>
  );
}
