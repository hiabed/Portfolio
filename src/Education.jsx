import "./Education.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLaptopCode, faAward } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const education = [
    {
      icon: faLaptopCode,
      school: "1337 Coding School (42 Network)",
      degree: "Software Engineering Program",
      period: "2022 – Present",
      description:
        "Completed 24+ intensive projects in an innovative peer-learning environment. Covered full-stack web development, algorithms, OOP with C++, systems programming in C, Unix administration, Docker, and real-time applications.",
      image: "/Certifications/1337-transcript-placeholder.png",
      imageAlt: "1337 School Transcript",
    },
    {
      icon: faGraduationCap,
      school: "University",
      degree: "Bachelor's Degree in Management",
      period: "Completed",
      description:
        "Built a strong foundation in analytical thinking, project management, and communication — skills that complement my technical abilities and help me deliver client-focused solutions.",
      image: "/Certifications/bachelor-placeholder.png",
      imageAlt: "Bachelor's Degree Diploma",
    },
  ];

  const certifications = [
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      link: "https://www.freecodecamp.org/hiabed",
    },
    {
      name: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      link: "https://www.freecodecamp.org/hiabed",
    },
    {
      name: "Ruby",
      issuer: "Codecademy",
      link: "#",
    },
  ];

  return (
    <section id="Education" className="section education-section">
      <div className="section-inner">
        <div className="section-header center" data-aos="fade-up">
          <span className="section-label">Education & Certifications</span>
          <h2 className="section-title">My Learning Journey</h2>
          <p className="section-subtitle">
            A combination of formal education, intensive coding programs, and self-directed learning.
          </p>
        </div>

        <div className="education-timeline">
          {education.map((item, index) => (
            <div
              className="education-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="education-card-content">
                <div className="education-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div className="education-details">
                  <span className="education-period">{item.period}</span>
                  <h3>{item.school}</h3>
                  <h4>{item.degree}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className="education-image">
                {/* Replace placeholder images with your actual transcript/diploma */}
                <div className="image-placeholder">
                  <FontAwesomeIcon icon={item.icon} />
                  <span>{item.imageAlt}</span>
                  <small>Replace with your image</small>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-section" data-aos="fade-up">
          <h3 className="cert-heading">
            <FontAwesomeIcon icon={faAward} style={{ marginRight: 10 }} />
            Certifications
          </h3>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-card"
                key={index}
              >
                <span className="cert-name">{cert.name}</span>
                <span className="cert-issuer">{cert.issuer}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;