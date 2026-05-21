import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-72px 0px 0px 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#hero" className="navbar-logo" onClick={handleLinkClick}>
          &lt;<span>Abed</span> /&gt;
        </a>

        <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={activeSection === href.slice(1) ? 'active' : ''}
              onClick={handleLinkClick}
            >
              {label}
            </a>
          ))}
          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label="Toggle Theme"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px'
            }}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a
            href="./Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta"
            onClick={handleLinkClick}
          >
            Resume
          </a>
        </div>

        <button
          className={`navbar-toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
