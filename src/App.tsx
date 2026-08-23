import { useEffect, useRef, useState } from "react";
import "./App.css";

/* ------------------------------------------------------------------ */
/*  EDIT THIS DATA — replace placeholders with your real info         */
/* ------------------------------------------------------------------ */

const socials = {
  github: "https://github.com/narayanan-developer-prog",
  linkedin: "#", // TODO: paste your LinkedIn URL
  instagram: "https://www.instagram.com/thalapathy_vetri_kondan_07/?hl=en-in", // TODO: paste your Instagram URL

};

const resumeLink = "#"; // TODO: put your resume.pdf inside /public and set this to "/resume.pdf"

const roles = [
  "Aspiring Software Developer",
  "Frontend Developer",
  "Problem Solver",
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Git & GitHub",
];

const education = {
  degree: " B.Tech Information Technology", // TODO: your exact course name
  institution: "Prince Shri Venkateshwara Padmavathy Engineering college", // TODO
  duration: "2026 — 2030", // TODO
};

const projects = [
  {
    tag: "01",
    title: "HTML & CSS Website",
    desc: "A static site built to practice semantic markup and responsive layout fundamentals.",
    stack: ["HTML5", "CSS3"],
    code: "#", // TODO: GitHub repo link
  },
  {
    tag: "02",
    title: "QR Code Generator",
    desc: "A small utility app that turns any text or link into a downloadable QR code.",
    stack: ["JavaScript", "API"],
    code: "#", // TODO
  },
  {
    tag: "03",
    title: "Developer Portfolio",
    desc: "This site — built with React and Vite to showcase projects and skills.",
    stack: ["React", "TypeScript", "Vite"],
    code: "https://github.com/narayanan-developer-prog/developer-portfolio",
  },
];

const certifications = [
  "Add your certification here", // TODO
  "Add another certification here", // TODO
];

const achievements = [
  "Add a hackathon / contest / achievement here", // TODO
];

const testimonials = [
  {
    quote: "Add a quote from a teacher, senior, or mentor here.",
    author: "Name, Role",
  },
];

/* ------------------------------------------------------------------ */

const translations = {
  en: {
    about: "About Me",
    aboutText:
      "I'm an Information Technology student passionate about programming, web development, and building real-world projects. Currently learning by shipping — one project at a time.",
    skills: "Skills",
    education: "Education",
    projects: "Projects",
    certifications: "Certifications",
    achievements: "Achievements",
    testimonials: "Testimonials",
    contact: "Contact",
    viewCode: "View Code",
    downloadCV: "Download CV",
    available: "Open to internships",
  },
  ta: {
    about: "என்னைப் பற்றி",
    aboutText:
      "நான் ஒரு IT மாணவன், programming மற்றும் web development-ல ஆர்வம் உள்ளவன். ஒரு project ஆக கத்துகிறேன்.",
    skills: "திறமைகள்",
    education: "கல்வி",
    projects: "திட்டங்கள்",
    certifications: "சான்றிதழ்கள்",
    achievements: "சாதனைகள்",
    testimonials: "கருத்துக்கள்",
    contact: "தொடர்பு",
    viewCode: "குறியீடு பார்க்க",
    downloadCV: "CV பதிவிறக்கு",
    available: "இன்டர்ன்ஷிப்புக்கு தயார்",
  },
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}

function App() {
  const [typed, setTyped] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [lang, setLang] = useState<"en" | "ta">("en");
  const t = translations[lang];

  useEffect(() => {
    const current = roles[roleIndex];
    let i = 0;
    const typeInterval = setInterval(() => {
      setTyped(current.slice(0, i + 1));
      i++;
      if (i === current.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setRoleIndex((r) => (r + 1) % roles.length);
        }, 1500);
      }
    }, 45);
    return () => clearInterval(typeInterval);
  }, [roleIndex]);

  return (
    <div className={`page theme-${theme}`}>
      <div className="terminal">
        <div className="terminal-bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="path">narayanan@portfolio:~</span>
          <div className="bar-controls">
            <button
              className="control-btn"
              onClick={() => setLang(lang === "en" ? "ta" : "en")}
            >
              {lang === "en" ? "தமிழ்" : "EN"}
            </button>
            <button
              className="control-btn"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? "☀️" : "☾"}
            </button>
          </div>
        </div>

        <div className="terminal-body">
          <div className="links-bar">
            <a href={socials.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            
           
          </div>

          <section className="hero">
            <p className="prompt">
              <span className="prompt-user">narayanan@portfolio</span>
              <span className="prompt-sep">:~$</span> whoami
            </p>
            <h1>Narayanan</h1>
            <p className="typed-line">
              {typed}
              <span className="cursor">_</span>
            </p>
            <div className="hero-actions">
              <span className="badge">{t.available}</span>
              <a className="resume-btn" href={resumeLink} download>
                {t.downloadCV}
              </a>
            </div>
          </section>

          <Reveal>
            <section className="block">
              <p className="prompt">
                <span className="prompt-user">narayanan@portfolio</span>
                <span className="prompt-sep">:~$</span> cat about.md
              </p>
              <p className="about-text">{t.aboutText}</p>
            </section>
          </Reveal>

          <Reveal>
            <section className="block">
              <p className="prompt">
                <span className="prompt-user">narayanan@portfolio</span>
                <span className="prompt-sep">:~$</span> cat skills.txt
              </p>
              <div className="stack">
                {skills.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="block">
              <p className="prompt">
                <span className="prompt-user">narayanan@portfolio</span>
                <span className="prompt-sep">:~$</span> cat education.txt
              </p>
              <div className="edu-card">
                <h3>{education.degree}</h3>
                <p>{education.institution}</p>
                <span className="muted">{education.duration}</span>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="block">
              <p className="prompt">
                <span className="prompt-user">narayanan@portfolio</span>
                <span className="prompt-sep">:~$</span> ls projects/
              </p>
              <div className="projects-grid">
                {projects.map((p) => (
                  <div className="project-card" key={p.tag}>
                    <span className="project-tag">{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="stack">
                      {p.stack.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                    <a
                      className="code-link"
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.viewCode} →
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="block">
              <p className="prompt">
                <span className="prompt-user">narayanan@portfolio</span>
                <span className="prompt-sep">:~$</span> cat certifications.txt
              </p>
              <ul className="list">
                {certifications.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section className="block">
              <p className="prompt">
                <span className="prompt-user">narayanan@portfolio</span>
                <span className="prompt-sep">:~$</span> cat achievements.txt
              </p>
              <ul className="list">
                {achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section className="block">
              <p className="prompt">
                <span className="prompt-user">narayanan@portfolio</span>
                <span className="prompt-sep">:~$</span> cat testimonials.txt
              </p>
              <div className="testimonials-grid">
                {testimonials.map((tm, i) => (
                  <blockquote key={i} className="testimonial-card">
                    <p>"{tm.quote}"</p>
                    — {tm.author}
                  </blockquote>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="block">
              <p className="prompt">
                <span className="prompt-user">narayanan@portfolio</span>
                <span className="prompt-sep">:~$</span> cat contact.txt
              </p>
              <div className="contact-card">
                <a href="mailto:narayanankarunakaran7@gmail.com">
                  narayanankarunakaran7@gmail.com
                </a>
                <a href="tel:+916379462466">+91 63794 62466</a>
              </div>
            </section>
          </Reveal>

          <p className="prompt final">
            <span className="prompt-user">narayanan@portfolio</span>
            <span className="prompt-sep">:~$</span>
            <span className="cursor">_</span>
          </p>

          <footer className="footer">Made with React &amp; Vite</footer>
        </div>
      </div>
    </div>
  );
}

export default App;