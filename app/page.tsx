import Image from "next/image";
import CertificateModal from "./CertificateModal";

const skills = [
  { title: "Frontend", items: "React · Next.js · TypeScript · JavaScript · Redux Toolkit · TanStack Query · Zustand" },
  { title: "UI & experience", items: "HTML5 · CSS3 · Tailwind CSS · Responsive design · Accessibility · Figma · Design systems" },
  { title: "Performance & SEO", items: "Core Web Vitals · Lazy loading · Code splitting · API caching · Dynamic metadata" },
  { title: "Architecture & security", items: "Micro-frontends · REST APIs · WebSockets · Keycloak · JWT · OAuth · RBAC" },
  { title: "Quality & delivery", items: "Vitest · Testing Library · End-to-end testing · GitHub Actions · CI/CD · Git" },
  { title: "Also familiar with", items: "Java · SQL · MySQL · Kong API Gateway · Cursor · Claude" },
];

const projects = [
  { number: "01", name: "Car Selling Portal", category: "Automotive · Micro-frontends", description: "A Dubai-based car marketplace built with Next.js application zones and secure routing through Kong API Gateway.", tags: ["Next.js", "Micro-frontends", "Kong"] },
  { number: "02", name: "Enterprise CRM", category: "Enterprise · Real-time", description: "A modular CRM with Keycloak authentication, role-based access, and live WhatsApp messaging via WebSockets.", tags: ["React", "Keycloak", "WebSockets"] },
  { number: "03", name: "Quickbank", category: "Fintech · Data dashboards", description: "Responsive, data-rich banking dashboards with large dataset views and thoughtfully managed application state.", tags: ["React", "TanStack Query", "Redux"] },
  { number: "04", name: "Quickmart", category: "E-commerce", description: "Customer-facing commerce features covering product discovery, cart, checkout, and order management.", tags: ["Next.js", "E-commerce", "API integration"] },
  { number: "05", name: "Invoicing Portal", category: "Business tools · Malaysia", description: "A business invoicing experience built for clear workflows and responsive use across devices.", tags: ["React", "TypeScript", "Responsive UI"] },
  { number: "06", name: "Production Management", category: "Operations · Enterprise", description: "A data-driven interface supporting production workflows, with reusable components and shared design patterns.", tags: ["React", "Design systems", "Dashboards"] },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Aniket Shinde home"><span className="brand-mark">AS</span><span>Aniket Shinde<span className="brand-dot">.</span></span></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
        </nav>
          <div className="header-actions"><a className="resume-nav" href="/resume">Resume <Arrow diagonal /></a><a className="header-cta" href="mailto:shindeaniketsanjay@gmail.com">Let’s talk <Arrow diagonal /></a></div>
      </header>

      <main id="home">
        <section className="hero page-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-divider">/</span> PUNE, INDIA</div>
            <h1>Building digital<br />experiences with <span className="accent-text">purpose.</span></h1>
            <p className="hero-lede">I’m Aniket, a frontend developer crafting fast, accessible, and thoughtful web experiences with React, Next.js, and TypeScript.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <Arrow /></a><a className="text-link" href="mailto:shindeaniketsanjay@gmail.com">Get in touch <Arrow diagonal /></a></div>
            <div className="hero-meta"><span>3+ YEARS EXPERIENCE</span><i /> <span>FRONTEND DEVELOPER</span></div>
          </div>
          <div className="hero-art">
            <div className="art-grid" /><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="portrait-frame"><Image src="/assets/aniket-shinde.jpg" alt="Aniket Shinde" fill priority sizes="(max-width: 620px) 70vw, 300px" /></div>
            <span className="art-label label-top">FRONTEND / PUNE</span><span className="art-label label-bottom">19°59′ N · INDIA</span>
            <span className="portrait-note">DESIGN. BUILD. IMPROVE.</span>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro section-band" id="about"><div className="page-wrap intro-grid">
          <div><div className="section-label"><span>01</span> ABOUT ME</div><h2>Good interfaces feel<br />effortless. <span className="serif-accent">Getting there</span><br /><span className="serif-accent">takes intention.</span></h2></div>
          <div className="intro-body"><p>I turn designs and business requirements into production-ready web apps that are easy to use, quick to load, and built to last. I care about the details users notice—and the engineering choices they don’t.</p><p>At Hidden Brains, I work alongside designers and backend engineers to shape products from first component to release. I enjoy building shared systems, solving performance bottlenecks, and making complex workflows feel simple.</p><div className="quick-facts"><div><b>30%</b><span>faster page loads</span></div><div><b>20%</b><span>smaller bundles</span></div><div><b>A</b><span>security score</span></div></div></div>
        </div></section>

        <section className="experience page-wrap section-space" id="experience">
          <div className="section-heading"><div><div className="section-label"><span>02</span> EXPERIENCE</div><h2>Where I’ve <span className="serif-accent">made an impact.</span></h2></div><span className="heading-note">A steady climb, built on curiosity<br />and shipping work that matters.</span></div>
          <div className="timeline">
            <article className="role-card"><div className="timeline-rail"><span className="timeline-point current" /><span className="timeline-line" /></div><div className="role-main"><div className="role-top"><div><div className="role-title-line"><h3>Frontend Developer</h3><span className="current-badge">CURRENT</span></div><p className="company">Hidden Brains Pvt. Ltd. <span>· Pune, India</span></p></div><span className="role-date">OCT 2023 — PRESENT</span></div>
              <p className="role-summary">Building and improving production web applications across enterprise, finance, commerce, and operations.</p>
              <div className="impact-grid"><div className="impact-item"><span className="impact-icon">↗</span><p>Cut page load time by <b>30%</b> and bundle size by <b>20%</b> through performance-focused frontend work.</p></div><div className="impact-item"><span className="impact-icon">⌘</span><p>Shipped secure CRM capabilities with Keycloak auth, RBAC, and real-time WhatsApp messaging.</p></div><div className="impact-item"><span className="impact-icon">◈</span><p>Built responsive dashboards, commerce flows, and reusable components across multiple products.</p></div><div className="impact-item"><span className="impact-icon">✓</span><p>Raised the frontend security score to <b>grade A</b> and supported quality with tests and CI/CD.</p></div></div>
              <div className="role-tags"><span>React</span><span>Next.js</span><span>TypeScript</span><span>Tailwind CSS</span><span>Vitest</span><span>GitHub Actions</span></div>
            </div></article>
            <article className="role-card internship"><div className="timeline-rail"><span className="timeline-point" /></div><div className="role-main"><div className="role-top"><div><h3>Frontend Developer Intern</h3><p className="company">Hidden Brains Pvt. Ltd. <span>· Pune, India</span></p></div><span className="role-date">JAN 2023 — OCT 2023</span></div><p className="role-summary">Started with the fundamentals and earned a full-time role by contributing to client-facing projects.</p><ul className="plain-list"><li>Built responsive, accessible UI from Figma designs using React, JavaScript, HTML, and CSS.</li><li>Integrated REST APIs, resolved live project issues, and learned collaborative Git and review workflows.</li></ul></div></article>
          </div>
        </section>

        <section className="projects section-band" id="projects"><div className="page-wrap section-space">
          <div className="section-heading"><div><div className="section-label"><span>03</span> SELECTED WORK</div><h2>Products I’ve <span className="serif-accent">helped shape.</span></h2></div><p className="heading-note">A selection of the products and<br />platforms I’ve contributed to.</p></div>
          <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><div className={`project-visual visual-${project.number}`}><div className="visual-top"><span>CASE STUDY / {project.number}</span><span className="visual-arrow"><Arrow diagonal /></span></div><div className="visual-design"><div className="mock-window"><span className="mock-dots">● ● ●</span><span className="mock-line wide"/><span className="mock-line"/><span className="mock-boxes"><i/><i/><i/></span></div><span className="visual-orb"/></div><span className="visual-index">{project.number}</span></div><div className="project-info"><div className="project-category">{project.category}</div><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
          <p className="project-footnote">All projects delivered as part of my work at Hidden Brains.</p>
        </div></section>

        <section className="skills page-wrap section-space" id="skills"><div className="section-heading"><div><div className="section-label"><span>04</span> TOOLKIT</div><h2>Tools for thoughtful <span className="serif-accent">craft.</span></h2></div><p className="heading-note">The right tool for the job, always<br />in service of the experience.</p></div><div className="skills-grid">{skills.map((skill, i) => <article className="skill-card" key={skill.title}><span className="skill-number">0{i + 1}</span><h3>{skill.title}</h3><p>{skill.items}</p></article>)}</div></section>

        <section className="education section-band"><div className="page-wrap education-grid"><div><div className="section-label"><span>05</span> EDUCATION</div><h2>Grounded in <span className="serif-accent">engineering.</span></h2></div><article className="education-card"><span className="edu-year">2019 — 2023</span><div><h3>Bachelor of Engineering</h3><p>SNJB’s Late Sau. K.B.J. College of Engineering</p><span className="edu-location">Chandwad, Maharashtra</span></div><div className="cgpa"><b>9.06</b><span>CGPA</span></div></article></div></section>

        <section className="achievement page-wrap"><div className="achievement-mark">✳</div><div className="achievement-content"><div className="section-label"><span>06</span> ACHIEVEMENT</div><h2>Curiosity, <span className="serif-accent">put to the test.</span></h2><p>Global rank <b>4,167</b> in <strong>TCS CodeVita Season 10</strong>, a global programming competition.</p><CertificateModal /></div><div className="achievement-rank"><span>GLOBAL RANK</span><b>4,167</b><span>TCS CODEVITA · SEASON 10</span></div></section>

        <section className="contact-section" id="contact"><div className="page-wrap contact-wrap"><div className="section-label light-label"><span>07</span> CONTACT</div><div className="contact-main"><div><h2>Have a good one<br />in <span>mind?</span></h2><p>I’m open to new opportunities and conversations.<br />Tell me what you’re building.</p></div><a className="contact-email" href="mailto:shindeaniketsanjay@gmail.com">Let’s talk <Arrow diagonal /></a></div><div className="contact-details"><a href="mailto:shindeaniketsanjay@gmail.com">shindeaniketsanjay@gmail.com</a><a href="tel:+917038318171">+91 70383 18171</a><span>Pune, Maharashtra, India</span></div></div></section>
      </main>
      <footer className="site-footer"><a className="brand" href="#home"><span className="brand-mark">AS</span><span>Aniket Shinde<span className="brand-dot">.</span></span></a><span>Designed with care. Built with React & Next.js.</span><span>© 2026 Aniket Shinde</span><div className="social-links"><a href="https://github.com/AniketShinde01" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href="https://www.linkedin.com/in/aniket-shinde-2843771b8/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href="https://leetcode.com/u/AniketShinde19/" target="_blank" rel="noreferrer">LeetCode <Arrow diagonal /></a></div></footer>
    </>
  );
}
