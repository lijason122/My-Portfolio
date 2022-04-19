import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer__logo">
        Jason Li
      </a>
      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Porfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/lijason122"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/lijason122"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/lijason122"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; {new Date().getFullYear()} Jason Li. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
