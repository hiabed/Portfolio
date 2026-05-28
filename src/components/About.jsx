import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Background</div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle" style={{ marginBottom: '48px' }}>
            My journey into software development and what I bring to the table.
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Over three years of focused learning and hands-on project-building have given me the confidence to contribute
              value in any digital-focused environment, regardless of tech stack or tools. My journey began with online
              platforms where I explored various languages and responsive web design.
            </p>
            <br />
            <p>
              I later joined 1337, a high-quality peer-learning program, where I completed challenging projects—solo and
              team-based—across various domains, including Full-Stack Web Development, OOP, Algorithms,
              Multithreading, Unix Systems, Virtualization, Gaming, and DevOps.
            </p>
            <br />
            <p>
              This experience taught me how to independently learn, adapt, and deliver in real-world scenarios with people
              from diverse backgrounds.
            </p>
            
            <div className="about-cta">
              <a href="./Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                View Full Resume
              </a>
            </div>
          </motion.div>
        </div>

        <div className="knowledge-grid">
          <motion.div
            className="knowledge-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="knowledge-card-icon">💻</div>
            <h3>Front-End Development</h3>
            <p>
              I build dynamic, responsive, and user-friendly web interfaces with JavaScript, HTML5, CSS3, and React. From hand-coded SPAs to modern React apps, I focus on both functionality and design, delivering seamless layouts.
            </p>
          </motion.div>

          <motion.div
            className="knowledge-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="knowledge-card-icon">🗄️</div>
            <h3>Back-End Development</h3>
            <p>
              I design and implement server-side architectures and APIs using Node.js, Express, Nest.js, and Django. Experienced in working with PostgreSQL databases and managing data using ORMs like TypeORM and Prisma.
            </p>
          </motion.div>

          <motion.div
            className="knowledge-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="knowledge-card-icon">🐳</div>
            <h3>DevOps & Infrastructure</h3>
            <p>
              Practical experience in infrastructure and containerization using Docker & Docker Compose. Skilled in provisioning VMs with Vagrant and configuring local Kubernetes (K3s) clusters with custom deployment, service, and ingress manifests.
            </p>
          </motion.div>

          <motion.div
            className="knowledge-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="knowledge-card-icon">🧱</div>
            <h3>Object-Oriented Programming</h3>
            <p>
              Strong grasp of OOP principles in C++: classes, memory management, inheritance, polymorphism, templates, and standard library tools for robust software design.
            </p>
          </motion.div>

          <motion.div
            className="knowledge-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="knowledge-card-icon">⚙️</div>
            <h3>Systems & Imperative</h3>
            <p>
              Deep understanding of system-level behavior with C. Experience with memory allocation, pointers, complex data structures (trees, linked lists), and Unix system programming.
            </p>
          </motion.div>

          <motion.div
            className="knowledge-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="knowledge-card-icon">🔐</div>
            <h3>Reverse Engineering & Security</h3>
            <p>
              Explored binary exploitation and reverse engineering through the "Rainfall" project. Gained practical experience analyzing executables, understanding assembly code, and identifying security vulnerabilities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
