import React from "react";
import { TagCloud } from "react-tagcloud";
import "./tagCloud.css";

const TagsCloud = () => {
  const data = [
    { value: "jQuery", count: 25 },
    { value: "SQL", count: 18 },
    { value: "JavaScript", count: 38 },
    { value: "React", count: 30 },
    { value: "NodeJS", count: 28 },
    { value: "GraphQL", count: 25 },
    { value: "HTML5", count: 33 },
    { value: "CSS3", count: 20 },
    { value: "Python", count: 22 },
    { value: "Java", count: 7 },
    { value: "C", count: 25 },
    { value: "C#", count: 15 },
    { value: "Bash", count: 17 },
    { value: "AWS", count: 27 },
    { value: "Git", count: 30 },
    { value: "VSCode", count: 15 },
    { value: "API", count: 30 },
    { value: "NPM", count: 11 },
    { value: "Sass", count: 20 },
  ];

  // custom renderer is function which has tag, computed font size and
  // color as arguments, and returns react component which represents tag
  const customRenderer = (tag, size, color) => (
    <span
      key={tag.value}
      style={{
        animation: "blinker 3s linear infinite",
        animationDelay: `${Math.random() * 2}s`,
        fontSize: `${size / 2}em`,
        border: `2px solid ${color}`,
        margin: "3px",
        padding: "3px",
        display: "inline-block",
        color: "white",
      }}
    >
      {tag.value}
    </span>
  );
  return (
    <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
  );
};

export default TagsCloud;
