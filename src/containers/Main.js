import React, {useEffect, useRef} from "react";
import {
  greeting,
  workExperiences,
  bigProjects,
  achievementSection,
  techStack,
  contactInfo
} from "../portfolio";
import "./Main.scss";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      {threshold: 0.12}
    );
    const targets = el.querySelectorAll(".reveal");
    targets.forEach(t => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}

function useBarReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fills = el.querySelectorAll(".bar-fill");
    fills.forEach(f => {
      f.dataset.width = f.style.width;
      f.style.width = "0%";
    });
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const fill = e.target.querySelector(".bar-fill");
            if (fill) fill.style.width = fill.dataset.width;
            io.unobserve(e.target);
          }
        });
      },
      {threshold: 0.3}
    );
    const rows = el.querySelectorAll(".bar-row");
    rows.forEach(r => io.observe(r));
    return () => io.disconnect();
  }, []);
  return ref;
}

function getFaviconUrl(url) {
  try {
    const hostname = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`;
  } catch {
    return null;
  }
}

function ProjectLogo({project}) {
  const url = project.footerLink?.[0]?.url;
  const [src, setSrc] = React.useState(project.image || (url ? getFaviconUrl(url) : null));

  if (!src) return null;

  return (
    <img
      className="proj-logo"
      src={src}
      alt={`${project.projectName} logo`}
      onError={() => {
        if (url && src !== getFaviconUrl(url)) {
          setSrc(getFaviconUrl(url));
        }
      }}
    />
  );
}

const Main = () => {
  const mainRef = useReveal();
  const barRef = useBarReveal();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const projects = bigProjects.projects || [];
  const experiences = workExperiences.experience || [];
  const achievements = achievementSection.achievementsCards || [];
  const proficiency = techStack.experience || [];

  return (
    <div ref={mainRef} className="portfolio-redesign">
      {/* NAV */}
      <header className="site-header">
        <div className="logo-mark">AR</div>
        <nav className={`navlinks ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
        <a href="#contact" className="nav-cta">Hire Me &rarr;</a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
        <div className="wrap">
          <h1 className="hero-headline">
            <span className="line">I BUILD</span>
            <span className="line"><span className="hi">FULL&#8209;STACK</span></span>
            <span className="line"><span className="outline">PRODUCTS.</span></span>
          </h1>
          <div className="hero-sub">
            <p>Ali Raza &mdash; 5+ years shipping WordPress, WooCommerce, Laravel and React/Node builds for real businesses that need things to just work.</p>
            <div className="hero-actions">
              <a href="#work" className="btn btn-lime">See the work &darr;</a>
              <a href={greeting.resumeLink} className="btn btn-paper" target="_blank" rel="noopener noreferrer">See my resume &darr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-band">
        <div className="marquee-track">
          <span>LARAVEL</span><span className="dot">&bull;</span>
          <span>WORDPRESS</span><span className="dot">&bull;</span>
          <span>WOOCOMMERCE</span><span className="dot">&bull;</span>
          <span>REACT</span><span className="dot">&bull;</span>
          <span>SHOPIFY</span><span className="dot">&bull;</span>
          <span>PHP</span><span className="dot">&bull;</span>
          <span>NODE.JS</span><span className="dot">&bull;</span>
          <span>SEO</span><span className="dot">&bull;</span>
          <span>LARAVEL</span><span className="dot">&bull;</span>
          <span>WORDPRESS</span><span className="dot">&bull;</span>
          <span>WOOCOMMERCE</span><span className="dot">&bull;</span>
          <span>REACT</span><span className="dot">&bull;</span>
          <span>SHOPIFY</span><span className="dot">&bull;</span>
          <span>PHP</span><span className="dot">&bull;</span>
          <span>NODE.JS</span><span className="dot">&bull;</span>
          <span>SEO</span><span className="dot">&bull;</span>
        </div>
      </div>

      {/* WHAT I DO */}
      <section id="about">
        <div className="section-num">01</div>
        <div className="wrap">
          <div className="section-label reveal"><div className="num-badge">01</div><span className="tag">What I Do</span></div>
          <h2 className="section-title reveal">One developer, the whole stack.</h2>
          <p className="section-desc reveal">From a design file to a live checkout &mdash; I cover the frontend, the backend, and the messy integration work in between.</p>
          <div className="about-layout">
            <div className="service-field">
              <div className="sticker s1 reveal"><span className="mark">&#9639;</span><h3>Interactive Frontends</h3><p>React &amp; JS interfaces people actually enjoy clicking through.</p></div>
              <div className="sticker s2 reveal"><span className="mark">&#9643;</span><h3>WordPress &amp; Woo</h3><p>Custom themes and store builds that survive real traffic.</p></div>
              <div className="sticker s3 reveal"><span className="mark">&#8961;</span><h3>APIs &amp; Integrations</h3><p>Laravel/PHP services wired cleanly to payments &amp; shipping.</p></div>
              <div className="sticker s4 reveal"><span className="mark">&#10039;</span><h3>Speed &amp; SEO</h3><p>Core Web Vitals, hosting, and technical SEO that moves rankings.</p></div>
            </div>
            <div className="profile-photo reveal">
              <img src={greeting.profileImage} alt={greeting.username} />
            </div>
          </div>
        </div>
      </section>

      {/* PROFICIENCY */}
      <section>
        <div className="wrap" ref={barRef}>
          <div className="section-label reveal"><div className="num-badge">02</div><span className="tag">Proficiency</span></div>
          <h2 className="section-title reveal">Where the strength lives.</h2>
          <div className="bar-stack">
            {proficiency.map((item, i) => (
              <div className="bar-row reveal" key={i}>
                <div className="bar-label"><span>{item.Stack}</span><span>{item.progressPercentage}</span></div>
                <div className="bar-track"><div className={`bar-fill fill-${(i % 3) + 1}`} style={{width: item.progressPercentage}}></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="section-num">03</div>
        <div className="wrap">
          <div className="section-label reveal"><div className="num-badge">03</div><span className="tag">Experience</span></div>
          <h2 className="section-title reveal">Companies I've built with.</h2>
          <div className="exp-list">
            {experiences.map((exp, i) => (
              <div className="exp-card reveal" key={i}>
                <div className="exp-num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div className="exp-role-row">
                    <span className="exp-role">{exp.role}</span>
                    <span className="exp-date">{exp.date}</span>
                  </div>
                  <div className="exp-company">{exp.company}</div>
                  <p className="exp-desc">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work">
        <div className="wrap">
          <div className="section-label reveal"><div className="num-badge">04</div><span className="tag">Selected Work</span></div>
          <h2 className="section-title reveal">Recent projects.</h2>
          <div className="project-collage">
            {projects.map((proj, i) => (
              <div className="proj-card reveal" key={i}>
                <div className="proj-swatch">
                  <ProjectLogo project={proj} />
                </div>
                <span className="tag">{proj.projectName}</span>
                <h3 style={{marginTop: "14px"}}>{proj.projectName}</h3>
                <p>{proj.projectDesc}</p>
                {proj.footerLink && proj.footerLink[0] && proj.footerLink[0].url && (
                  <a href={proj.footerLink[0].url} className="link" target="_blank" rel="noopener noreferrer">&#8599; view project</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section>
        <div className="wrap">
          <div className="section-label reveal"><div className="num-badge">05</div><span className="tag">Recognition</span></div>
          <h2 className="section-title reveal">Achievements &amp; Certifications.</h2>
          <div className="badge-strip">
            {achievements.map((ach, i) => (
              <div className="badge reveal" key={i}>
                <div className="icon-circle">{ach.title.split(" ").map(w => w[0]).join("").slice(0, 3)}</div>
                <h4>{ach.title}</h4>
                <p>{ach.subtitle}</p>
              </div>
            ))}
            <div className="badge reveal">
              <div className="icon-circle">RH</div>
              <h4>REDHAT Certified (RHCSA)</h4>
              <p>Red Hat Certified System Administrator credential.</p>
            </div>
            <div className="badge reveal">
              <div className="icon-circle">DS</div>
              <h4>SEO &amp; Freelancing</h4>
              <p>DigiSkills certified in SEO and freelancing best practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="wrap">
          <div className="contact-hero reveal">
            <span className="tag" style={{background: "var(--lime)", color: "var(--ink)"}}>Open to work</span>
            <h2 style={{marginTop: "24px"}}>Let's build <span className="hl">something great.</span></h2>
            <p>Got a project that needs a developer who ships? I usually reply within a day.</p>
            <div className="hero-actions contact-actions">
              <a href={`mailto:${contactInfo.email_address}`} className="btn btn-lime" style={{color: "var(--ink)"}}>Start a conversation &rarr;</a>
              <a href={greeting.resumeLink} className="btn btn-paper" target="_blank" rel="noopener noreferrer" style={{color: "var(--ink)"}}>See my resume &darr;</a>
              <a
                href={`https://wa.me/${contactInfo.number.replace(/[^\d]/g, "")}`}
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <svg className="whatsapp-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
            <div className="contact-info">
              <a href={`tel:${contactInfo.number.replace(/-/g, "")}`}>{contactInfo.number}</a>
              <a href={`tel:${contactInfo.secondaryNumber.replace(/-/g, "")}`}>{contactInfo.secondaryNumber}</a>
              <a href={`mailto:${contactInfo.email_address}`}>{contactInfo.email_address}</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>{"// DESIGNED & BUILT BY ALI RAZA — 2026"}</p>
      </footer>
    </div>
  );
};

export default Main;
