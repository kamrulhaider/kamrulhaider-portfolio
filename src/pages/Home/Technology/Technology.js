import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./Technology.css";

function Technology() {
  const skills = [
    {
      name: "MongoDB",
      percent: 50,
    },
    {
      name: "Express",
      percent: 50,
    },
    {
      name: "React",
      percent: 75,
    },
    {
      name: "NodeJS",
      percent: 50,
    },
    {
      name: "Tailwind",
      percent: 70,
    },
    {
      name: "Bootstrap",
      percent: 90,
    },
  ];
  const skillsTwo = [
    {
      name: "JavaScript",
      percent: 80,
    },
    {
      name: "Typescript",
      percent: 65,
    },
    {
      name: "HTML",
      percent: 90,
    },
    {
      name: "CSS",
      percent: 80,
    },
    {
      name: "NextJS",
      percent: 60,
    },
    {
      name: "MaterialUI",
      percent: 50,
    },
  ];
  return (
    <div className="mb-5 pb-5">
      <div className="d-flex flex-column align-items-center mb-3">
        <h2 className="fw-bold text-center title-color mb-0 mt-5">
          Skills & Familiarity
        </h2>
        <hr />
        <p className="text-center subTitle-color mb-3">
          Below is the list of skills and technologies that I have used until
          now. The assumptions are made based on my thinking and confidence.
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <h5 className="subTitle-color mb-0 mt-1">{skill.name}</h5>
              <ProgressBar
                className="tech"
                variant="success"
                now={skill.percent}
                label={`${skill.percent}%`}
              />
            </div>
          ))}
        </div>
        <div className="col-md-6">
          {skillsTwo.map((skill) => (
            <div key={skill.name}>
              <h5 className="subTitle-color mb-0 mt-1">{skill.name}</h5>
              <ProgressBar
                className="tech"
                variant="success"
                now={skill.percent}
                label={`${skill.percent}%`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technology;
