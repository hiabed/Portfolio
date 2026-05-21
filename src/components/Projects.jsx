import { motion } from 'framer-motion';

const projectsData = [
  {
    image: './pingpong.png',
    title: 'Pong Game Platform',
    description: `Using the SPA implementation, I built the entire front end of our Pong game platform from the ground up in Vanilla JS with a responsive UI using HTML, CSS, and Bootstrap that promised a smooth user experience. I also helped my four teammates in the other aspects of the process, and the linking phase was also a rich yet tedious experience.`,
    tags: ['Vanilla JS', 'SPA', 'Bootstrap', 'HTML/CSS'],
    url: "https://github.com/hiabed/Pong-Game-Platform",
  },
  {
    image: './server.webp',
    title: 'Custom Web Server',
    description: `Developed a custom web server inspired by Nginx, gaining comprehensive knowledge of HTTP protocols, server architecture, and socket programming. My primary responsibility was implementing the POST method, including support for binary data, chunked transfer encoding, multipart boundaries, and parsing client requests.`,
    tags: ['C++', 'Sockets', 'HTTP', 'Server'],
    url: "https://github.com/hiabed/Webserv",
  },
  {
    image: './inception.webp',
    title: 'Inception',
    description: `Designed a dynamic WordPress Web App using Docker. Created custom Dockerfiles to define rules for building each container from scratch, adhering to the project's restriction on using pre-built images from Docker Hub. Configured Nginx and MariaDB for seamless deployment.`,
    tags: ['Docker', 'Nginx', 'MariaDB', 'WordPress'],
    url: "https://github.com/hiabed/inception",
  },
  {
    image: './iterm2.avif',
    title: 'Minishell',
    description: 'Developed a small UNIX Shell that resembles Bash, implementing command parsing, execution, pipelines, redirections, and environment variable management from scratch in C.',
    tags: ['C', 'Unix', 'Shell', 'Systems'],
    url: "https://github.com/hiabed/minishell",
  },
  {
    image: './ecommerce.png',
    title: 'E-commerce Website',
    description: `Developed the UI of an e-commerce website using React.js, focusing on component reusability, state management, and modern responsive layout principles.`,
    tags: ['React', 'JavaScript', 'UI/UX'],
    url: "https://github.com/hiabed/E-Commerce-platform",
  },
  {
    image: './cub3d.webp',
    title: "3D Game with C",
    description: "Implemented a functional 3D game using Raycasting techniques with C, built entirely from scratch using only a minimal graphic library (minilibx).",
    tags: ['C', 'Raycasting', 'Game Dev', 'Math'],
    url: "https://github.com/hiabed/cub3d_linux",
  },
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Selected Work</div>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle" style={{ marginBottom: '48px' }}>
            A showcase of my recent technical projects and problem-solving experience.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-card-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-card-links">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '16px', height: '16px', marginRight: '4px'}}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="projects-more">
          <a href="https://github.com/hiabed?tab=repositories" target="_blank" rel="noopener noreferrer">
            View more projects on GitHub
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '4px'}}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
