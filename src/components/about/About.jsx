import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import TagsCloud from "./TagsCloud";
import "aos/dist/aos.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div data-aos="slide-right" className="about__me">
          <TagsCloud />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article data-aos="zoom-in" className="about__card">
              <FaAward className="about__icon" />
              <h5>Hard-Working</h5>
              <small></small>
            </article>
            <article
              data-aos="zoom-in"
              data-aos-delay="500"
              className="about__card"
            >
              <FiUsers className="about__icon" />
              <h5>Team-Player</h5>
              <small></small>
            </article>

            <article
              data-aos="zoom-in"
              data-aos-delay="1000"
              className="about__card"
            >
              <VscFolderLibrary className="about__icon" />
              <h5>Eager Learner</h5>
              <small></small>
            </article>
          </div>

          <p data-aos="slide-left">
            I've been doing programming since I started post-secondary
            education. I really enjoy learning new technologies, and I want to
            be able to help the team build and operate digital businesses,
            satisfy client's expectation, and grow in a community. I hope to use
            my skills and knowledge to make other people's jobs easier and more
            productive.
          </p>
          <a
            href="#contact"
            data-aos="fade-up"
            data-aos-delay="1000"
            className="btn btn-primary"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
