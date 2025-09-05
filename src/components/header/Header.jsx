import React from "react";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import "./cube.scss";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import {
  faPython,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const greetArray = ["H", "e", "l", "l", "o", ", ", " ", "I'", "m"];
  const nameArray = ["J", "a", "s", "o", "n", " ", "L", "i"];
  const jobArray = [
    "R",
    "e",
    "a",
    "c",
    "t",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  return (
    <header>
      <div className="container header__container">
        <h3>
          <AnimatedLetters
            letterClass={"text-animate"}
            strArray={greetArray}
            idx={1}
          />
        </h3>
        <h1>
          <AnimatedLetters
            letterClass={"text-animate"}
            strArray={nameArray}
            idx={9}
          />
        </h1>
        <h2 className="text-light">
          <AnimatedLetters
            letterClass={"text-animate"}
            strArray={jobArray}
            idx={9}
          />
        </h2>
        <CTA />
        <HeaderSocials />
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} color="black" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
