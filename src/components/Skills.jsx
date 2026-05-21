import { motion } from 'framer-motion';

const frontendSkills = [
  { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css/1572B6' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/888888' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' }
];

const backendSkills = [
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339939' },
  { name: 'Express', icon: 'https://cdn.simpleicons.org/express/888888' },
  { name: 'Nest.js', icon: 'https://cdn.simpleicons.org/nestjs/E0234E' },
  { name: 'Django', icon: 'https://cdn.simpleicons.org/django/092E20' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'Prisma', icon: 'https://cdn.simpleicons.org/prisma/2D3748' },
  { name: 'TypeORM', icon: 'https://cdn.simpleicons.org/typeorm/FE0803' },
];

const toolsSkills = [
  { name: 'C', icon: 'https://cdn.simpleicons.org/c/A8B9CC' },
  { name: 'C++', icon: 'https://cdn.simpleicons.org/cplusplus/00599C' },
  { name: 'Shell Scripting', icon: 'https://cdn.simpleicons.org/gnubash/4EAA25' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
  { name: 'Vagrant', icon: 'https://cdn.simpleicons.org/vagrant/1563FF' },
];

const SkillCategory = ({ title, skills, delay }) => (
  <motion.div
    className="skills-category"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay }}
  >
    <h3 className="skills-category-title">{title}</h3>
    <div className="skills-grid">
      {skills.map((skill) => (
        <div className="skill-pill" key={skill.name}>
          <img src={skill.icon} alt={skill.name} loading="lazy" />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Capabilities</div>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-subtitle" style={{ marginBottom: '48px' }}>
            Technologies and tools I use to build robust and scalable applications.
          </p>
        </motion.div>

        <div className="skills-wrapper">
          <SkillCategory title="Frontend Development" skills={frontendSkills} delay={0.2} />
          <SkillCategory title="Backend & Database" skills={backendSkills} delay={0.3} />
          <SkillCategory title="Languages & Tools" skills={toolsSkills} delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
