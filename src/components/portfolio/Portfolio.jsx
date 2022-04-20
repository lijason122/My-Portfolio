import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/bug-tracker.PNG";
import IMG2 from "../../assets/api-web-app.PNG";
import IMG3 from "../../assets/oslyn.PNG";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Bug Tracker",
    github: "https://github.com/lijason122/React-Bug-Tracker",
    demo: "https://lijason-bug-tracker.netlify.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Real-Time Weather Web App",
    github: "https://github.com/lijason122/REST-API-Web-Application",
    demo: "https://github.com/lijason122",
  },
  {
    id: 3,
    image: IMG3,
    title: "Oslyn Web App",
    github:
      "https://github.com/DominicFung/oslyn-webapp/blob/master/src/components/Features.js",
    demo: "https://oslyn.io",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
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
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
