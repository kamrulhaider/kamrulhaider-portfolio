import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import myImg from "../../../images/my-img.jpeg";
import shape from "../../../images/shape.png";
import shape1 from "../../../images/shape2.png";

const TypewriterHook = () => {
  const { text } = useTypewriter({
    words: ["Javascript Developer", "React Developer", "Front-end Developer"],
    loop: false,
  });

  return (
    <div>
      <h4 className="mb-4 subTitle-color d-inline">{text}</h4>
      <Cursor />
    </div>
  );
};

const Banner = () => {
  return (
    <div className="hero-section">
      <div className="row align-items-center justify-content-center">
        <img className="shape1" src={shape} alt="" />
        <img className="shape2" src={shape} alt="" />
        <img className="shape3" src={shape1} alt="" />

        <div className="col-lg-5 text-center">
          <img
            className="img-fluid animate__lightSpeedInLeft animate__animated my-img mt-3"
            src={myImg}
            alt=""
          />
        </div>
        <div className="col-lg-7 text-center">
          <div className="about-me text-center">
            <h1 className="fw-bold mt-md-0 mt-3 title-color">
              Kamrul Haider Chowdhury
            </h1>
            {/* <h4 className="mb-4 subTitle-color">Frontend Developer</h4> */}
            <TypewriterHook />
            <hr className="mx-auto" />
            <p className="fs-6 mt-3 subTitle-color">
              I am a passionate web developer who wants to learn more and more
              about web-based technology. I want to touch the highest peak of
              web development and provide value to the organization I work.
            </p>

            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <a
                href="https://drive.google.com/file/d/1BayksaFi_93rRnyY06ucMpF5dmiXw7ud/view?usp=sharing"
                rel="noreferrer"
                target="_blank"
                className="btn myMenu2"
              >
                Resume
              </a>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/kamrulhaider/"
                target="_blank"
                className="btn myMenu2"
              >
                LinkedIn
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/kamrulhaider"
                target="_blank"
                className="btn myMenu2"
              >
                Github
              </a>
              <a
                rel="noreferrer"
                href="https://leetcode.com/kamrulhaider/"
                target="_blank"
                className="btn myMenu2"
              >
                Leetcode
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
