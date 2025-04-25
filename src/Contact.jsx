import "./Contact.css";
import { useState } from "react";
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contact = () => {
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/myzwzkjv", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      form.reset();
      setStatus("Message sent!");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000);
    } else {
      setStatus("Failed to send. Please try again.");
    }
  };

  return (
    <div id="Contact" style={{ position: "relative" }}>
      <h1 className='about' style={{ width: 367 }}>Contact</h1>
      <p>
        Nulla in velit a metus rhoncus tempus. 
        Nulla congue nulla vel sem varius finibus. 
        Sed ornare sit amet lorem sed viverra. 
        In vel urna quis libero viverra facilisis ut ac est.
      </p>
      <div className="separator"></div>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="sr-only">Name</label>
        <input type="text" name="name" id="name" placeholder="ENTER YOUR NAME*" required />
        <label htmlFor="email" className="sr-only">Email</label>
        <input type="email" name="email" id="email" placeholder="ENTER YOUR EMAIL*" required />
        <label htmlFor="phone" className="sr-only">Phone number</label>
        <input type="tel" name="phone" id="phone" placeholder="PHONE NUMBER" />
        <label htmlFor="message" className="sr-only">message</label>
        <input name="message" id="message" placeholder="YOUR MESSAGE*" required />
        <input id="submit" type="submit" value="Submit" />
      </form>
      {/* Popup */}
      {status && (
        <div className={`popup ${showPopup ? "" : "hide"}`}>
          <h3>{status}</h3>
          <FontAwesomeIcon style={{ width: "fit-content", fontSize: 35 }} icon={faCircleCheck} />
        </div>
      )}
    </div>
  );
};

export default Contact;
