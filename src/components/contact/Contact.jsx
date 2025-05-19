import React, { useState } from "react";
import "aos/dist/aos.css";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [info, setInfo] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_d8w69zj",
      "template_g3m5cio",
      form.current,
      "im4rEHVc6kNf0I0ik"
    );

    e.target.reset();
    setInfo((prevInfo) => !prevInfo);
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article data-aos="zoom-in" className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>lijason@sheridancollege.ca</h5>
          </article>
          <article
            data-aos="zoom-in"
            data-aos-delay="500"
            className="contact__option"
          >
            <FaMobileAlt className="contact__option-icon" />
            <h4>Phone number</h4>
            <h5>(+1) 954-868-6796</h5>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {info && <p>Your message has been submitted!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
