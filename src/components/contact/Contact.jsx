import React, { useState } from "react";
import "aos/dist/aos.css";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
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
            <a
              href="mailto:lijason@sheridancollege.ca"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article
            data-aos="zoom-in"
            data-aos-delay="250"
            className="contact__option"
          >
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Jason Li</h5>
            <a href="https://m.me/lijason122" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article
            data-aos="zoom-in"
            data-aos-delay="500"
            className="contact__option"
          >
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+16479655122</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+16479655122"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
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
