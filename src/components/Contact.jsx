import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from 'framer-motion';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/myzwzkjv", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        toast.success("Message sent successfully! I'll get back to you soon.");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="contact-wrapper"
        >
          <div className="text-center" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="section-label">What's Next</div>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              I'm always excited to collaborate, learn, and bring new ideas to life. Whether you have a project, a question, or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="contact-card glass-card">
            <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              <button type="submit" className="contact-submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
            
            <div className="contact-alt">
              Prefer direct email? <a href="mailto:abed.hassani.idrissi@gmail.com">abed.hassani.idrissi@gmail.com</a>
            </div>
          </div>
        </motion.div>
      </div>
      
      <ToastContainer 
        position="bottom-right" 
        autoClose={5000}
        theme="dark"
        toastStyle={{
          backgroundColor: 'var(--bg-card)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border)'
        }}
      />
    </section>
  );
};

export default Contact;
