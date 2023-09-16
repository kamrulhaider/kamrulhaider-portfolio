import React from "react";
import { Row, Spinner } from "react-bootstrap";
import Project from "../../Project/Project";
import "./Projects.css";

const Projects = ({ homeRoute, loading, error, projects }) => {
  return (
    <div
      className={`${homeRoute ? "mb-5 pb-5 mt-5 mt-lg-0" : "header-margin"}`}
    >
      <div className="d-flex flex-column align-items-center mb-3">
        <h2 className="fw-bold text-center title-color mb-0">
          {homeRoute ? "Top Projects" : "Projects List"}
        </h2>
        <hr />
        <p className="text-center subTitle-color mb-3">
          {homeRoute
            ? "Here are the top projects that I have done or am doing:"
            : "Here are the projects that I have done throughout my journey in web development."}
        </p>
      </div>

      {loading ? (
        <div className="flex justify-content-center text-center my-3">
          <Spinner animation="border" variant="light" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : error ? (
        <div className="text-center">
          <p className="text-white">Error: {error}</p>
        </div>
      ) : (
        <Row
          xs={1}
          md={2}
          lg={3}
          className="g-4 animate__animated animate__fadeInLeftBig"
        >
          {projects.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </Row>
      )}
    </div>
  );
};

export default Projects;
