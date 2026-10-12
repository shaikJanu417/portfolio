import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import {
  experienceData,
  personalDetails,
  projectsData,
  skillsData,
} from '../data/portfolioData';
import '../App.css';

const currentYear = new Date().getFullYear();

const navigation = [
  { label: 'Selected Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const techTicker = [
  'C#',
  'ASP.NET Core',
  'SQL Server',
  'React',
  'TypeScript',
  'REST APIs',
  'Entity Framework Core',
  'Generative AI',
];

const aboutFacts = [
  { label: 'Role', value: '.NET Full Stack Developer' },
  { label: 'Experience', value: `${personalDetails.experienceYears} years` },
  { label: 'Core stack', value: 'C# · ASP.NET Core · SQL Server · React' },
  { label: 'Currently exploring', value: 'Generative AI, LLMs, RAG' },
];

const skillGroups = [
  ...skillsData.map((group) => ({
    title: group.category,
    skills: group.skills.map((skill) => skill.name),
  })),
  {
    title: 'AI & Emerging Tech',
    skills: ['Generative AI', 'LLM Fundamentals', 'Prompt Engineering', 'RAG', 'AI API Integration'],
    note: 'Learning and exploring; applying it in practical projects.',
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <a className="logo" href="#top" aria-label={`${personalDetails.name}, home`}>
          SJ<span>.</span>
        </a>
        <nav aria-label="Primary">
          <ul id="site-menu" className={menuOpen ? 'open' : ''}>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="burger"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <div id="progress" style={{ width: `${progress}%` }} />
    </header>
  );
}

function TechBand() {
  return (
    <div className="band" aria-label={`Technologies: ${techTicker.join(', ')}`}>
      <div className="band-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div className="band-group" key={copy}>
            {techTicker.map((technology, index) => (
              <span className={index % 2 ? 'outlined' : ''} key={technology}>
                {technology}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 40);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <div className="wrap hero" id="top">
      <div className="hero-copy">
        <div className="label load">Hello, I&apos;m</div>
        <h1 className="load">{personalDetails.name}.</h1>
        <h2 className="load">
          .NET Full Stack Developer.<i aria-hidden="true" />
        </h2>
        <h3 className="load">AI Enthusiast. Software Engineer.</h3>
        <p className="load">
          I build scalable web applications, powerful APIs, and intelligent digital
          experiences.
        </p>
        <div className="cta load">
          <a className="btn solid" href="#work">
            Selected work <span><ArrowRight aria-hidden="true" /></span>
          </a>
          <a className="btn" href="#contact">
            Get in touch <span><ArrowRight aria-hidden="true" /></span>
          </a>
        </div>
      </div>
      <div className="portrait load">
        <div className="frame">
          <img
            src={personalDetails.avatar}
            alt={`Portrait of ${personalDetails.name}`}
            width="800"
            height="1172"
            fetchPriority="high"
          />
        </div>
      </div>
      <div className="status label">
        <span className="dot" aria-hidden="true" />
        {personalDetails.experienceYears} years building software
      </div>
      <a
        className={`scroll label${hasScrolled ? ' has-scrolled' : ''}`}
        href="#about"
        aria-label="Scroll to About section"
      >
        Scroll<i />
      </a>
    </div>
  );
}

function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="label">01 / About</div>
        <h2 className="big reveal">Developer by craft. Problem solver by nature.</h2>
        <div className="cols">
          <div className="reveal">
            <p>
              I&apos;m a .NET full stack developer with {personalDetails.experienceYears} years
              of experience building web applications with C#, ASP.NET Core, SQL Server and
              React. I design APIs, shape databases, and build the interfaces people actually
              use.
            </p>
            <p>
              My work covers backend development and API design, database design and SQL
              optimization, React and TypeScript frontends, authentication and security, and
              keeping applications fast. I also handle production troubleshooting,
              deployments and maintenance.
            </p>
            <p>I&apos;m now exploring Generative AI and how to bring it into practical applications.</p>
          </div>
          <dl className="reveal">
            {aboutFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="label">02 / Selected work</div>
        <h2 className="big reveal">Practical applications, built end to end.</h2>
        <div className="projects">
          {projectsData.map((project, index) => (
            <article className="project reveal" key={project.id}>
              <div className="project-shot" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
                <small>{project.category}</small>
              </div>
              <div className="project-copy">
                <div className="label">Project {String(index + 1).padStart(2, '0')}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tags" aria-label="Technologies used">
                  {project.tech.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <span className="priv">Private project</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="label">03 / Capabilities</div>
        <h2 className="big reveal">Tools I work with.</h2>
        <div className="skills">
          {skillGroups.map((group) => (
            <div className="skill-group reveal" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
              {group.note && <small>{group.note}</small>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="label">04 / Experience</div>
        <h2 className="big reveal">Where I&apos;ve built.</h2>
        <div className="experience-list">
          {experienceData.map((job) => (
            <article className="job reveal" key={`${job.company}-${job.role}`}>
              <div className="label">{job.period}</div>
              <div>
                <h3>{job.role}</h3>
                <div className="label">{job.company}</div>
                {job.subCompany && <p className="job-subcompany">{job.subCompany}</p>}
                <ul>
                  {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ onOpenResume }) {
  const [formErrors, setFormErrors] = useState({});
  const [formNote, setFormNote] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      subject: String(data.get('subject') || '').trim(),
      message: String(data.get('message') || '').trim(),
    };
    const errors = {};

    for (const field of ['name', 'email', 'subject', 'message']) {
      if (!values[field]) errors[field] = 'This field is required.';
    }
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Enter a valid email address.';
    }
    if (values.message && values.message.length < 10) {
      errors.message = 'Write at least 10 characters.';
    }

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      setFormNote('Please fix the highlighted fields.');
      return;
    }

    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    const mailto = `mailto:${personalDetails.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setFormNote('Opening your email app with the message ready to send.');
  };

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="label">05 / Let&apos;s connect</div>
        <h2 className="big reveal">Have a project in mind?</h2>
        <p className="contact-intro reveal">
          Let&apos;s build something useful, thoughtful, and impactful together.
        </p>
        <div className="contact-grid">
          <div className="contact-links reveal">
            <a href={`mailto:${personalDetails.email}`}>
              <span>Email</span><span>{personalDetails.email} <ArrowUpRight aria-hidden="true" /></span>
            </a>
            <a href={`tel:${personalDetails.phone.replace(/\s+/g, '')}`}>
              <span>Phone</span><span>{personalDetails.phone} <ArrowUpRight aria-hidden="true" /></span>
            </a>
            <button type="button" onClick={onOpenResume}>
              <span>Resume</span><span>View and download <ArrowUpRight aria-hidden="true" /></span>
            </button>
          </div>
          <form noValidate className="reveal" onSubmit={handleSubmit}>
            {[
              { name: 'name', label: 'Name', autoComplete: 'name' },
              { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
              { name: 'subject', label: 'Subject' },
            ].map((field) => (
              <label key={field.name}>
                {field.label}
                <input
                  name={field.name}
                  type={field.type || 'text'}
                  autoComplete={field.autoComplete}
                  required
                  aria-invalid={Boolean(formErrors[field.name])}
                  aria-describedby={formErrors[field.name] ? `${field.name}-error` : undefined}
                />
                <span className="error" id={`${field.name}-error`} aria-live="polite">
                  {formErrors[field.name]}
                </span>
              </label>
            ))}
            <label>
              Message
              <textarea
                name="message"
                rows="4"
                required
                aria-invalid={Boolean(formErrors.message)}
                aria-describedby={formErrors.message ? 'message-error' : undefined}
              />
              <span className="error" id="message-error" aria-live="polite">
                {formErrors.message}
              </span>
            </label>
            <div>
              <button className="btn solid" type="submit">
                Send message <span><ArrowRight aria-hidden="true" /></span>
              </button>
            </div>
            <div className="form-note" role="status" aria-live="polite">{formNote}</div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap label">
        <span>© {currentYear} {personalDetails.name}</span>
        <span>.NET Full Stack Developer</span>
      </div>
    </footer>
  );
}

export default function PortfolioPage({ onOpenResume }) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('on'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('on');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechBand />
        <About />
        <SelectedWork />
        <Skills />
        <Experience />
        <Contact onOpenResume={onOpenResume} />
      </main>
      <Footer />
    </>
  );
}
