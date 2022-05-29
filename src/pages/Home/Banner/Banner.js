import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import myImg from "../../../images/my-img.jpeg";
import shape from "../../../images/shape.png";
import shape1 from "../../../images/shape2.png";

const TypewriterHook = () => {
  const { text } = useTypewriter({
    words: ["Javascript Developer", "React Developer", "Frontend Developer"],
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
    <div>
      <div className="row align-items-center justify-content-center mt-2 mb-5">
        <img className="shape1" src={shape} alt="" />
        <img className="shape2" src={shape} alt="" />
        <img className="shape3" src={shape1} alt="" />

        <div className="col-md-5 text-center">
          <img className="img-fluid my-img mt-3" src={myImg} alt="" />
        </div>
        <div className="col-md-7">
          <div className="about-me">
            <h1 className="fw-bold mt-md-0 mt-3 title-color">
              Kamrul Haider Chowdhury
            </h1>
            {/* <h4 className="mb-4 subTitle-color">Frontend Developer</h4> */}
            <TypewriterHook />
            <hr />
            <p className="fs-6 mt-3 subTitle-color">
              I am a passionate web developer who wants to learn more and more
              about web-based technology. I want to touch the highest peak of
              web development and provide value to the organization I work.
            </p>

            <div className="d-md-block d-flex">
              <a
                href="https://drive.google.com/file/d/1BayksaFi_93rRnyY06ucMpF5dmiXw7ud/view?usp=sharing"
                rel="noreferrer"
                target="_blank"
                className="btn myMenu2 text-decoration-none"
              >
                <i className="fas fa-cloud-download-alt"></i> Resume
              </a>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/kamrulhaider/"
                target="_blank"
                className="btn myMenu2 mx-2"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/kamrulhaider"
                target="_blank"
                className="btn myMenu2"
              >
                <i className="fab fa-github-square"></i> Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
