import React from "react";
import "aos/dist/aos.css";
import "./portfolio.css";
import IMG1 from "../../assets/bug-tracker.PNG";
import IMG2 from "../../assets/api-web-app.PNG";
import IMG3 from "../../assets/team-chat.PNG";
import IMG4 from "../../assets/oslyn.PNG";
import IMG5 from "../../assets/e-commerce.PNG";
import IMG6 from "../../assets/github-profile.PNG";

const data = [
    {
    id: 1,
    image: IMG5,
    title: "E-Commerce",
    github: "https://github.com/lijason122/My-ECommerce",
    demo: "https://lijason-ecommerce.netlify.app",
  },
  {
    id: 2,
    image: IMG1,
    title: "Bug Tracker",
    github: "https://github.com/lijason122/Bug-Tracker",
    demo: "https://lijason-bug-tracker.netlify.app",
  },
  {
    id: 3,
    image: IMG2,
    title: "Real-Time Weather Web App",
    github: "https://github.com/lijason122/REST-API-Web-Application",
    demo: "https://lijason.pythonanywhere.com",
  },
  {
    id: 4,
    image: IMG3,
    title: "Team Chat",
    github: "https://github.com/lijason122/Chat-App",
    demo: "https://lijason-team-chat.netlify.app",
  },
  {
    id: 5,
    image: IMG4,
    title: "Oslyn Web App",
    github:
      "https://github.com/DominicFung/oslyn-webapp/blob/master/src/components/Features.js",
    demo: "https://oslyn.io",
  },
  {
    id: 6,
    image: IMG6,
    title: "Check out my github profile!",
    github: "https://github.com/lijason122",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }, delay) => {
          delay *= 300;
          return (
            <article
              key={id}
              data-aos="zoom-in"
              data-aos-delay={delay}
              className="portfolio__item"
            >
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                {demo && (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
