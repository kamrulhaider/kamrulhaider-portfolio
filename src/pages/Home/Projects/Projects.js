import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Project from "../../Project/Project";
import "./Projects.css";

const Projects = ({ homeRoute }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Step 1: Define an error state

  useEffect(() => {
    fetch("https://kamrulhaider-portfolio-backend.vercel.app/projects")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        // Step 2: Handle errors
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className={`container  ${homeRoute ? "my-5" : "header-margin"}`}>
      <div className="d-flex flex-column align-items-center mb-3">
        <h2 className="fw-bold text-center title-color mb-0">
          My Projects List
        </h2>
        <hr />
        <p className="text-center subTitle-color mb-3">
          Here are the top projects that I have done throughout my Journey of
          web development.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-content-center text-center my-3">
          <Spinner animation="border border-white" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : error ? ( // Step 3: Display the error message
        <div className="text-center">
          <p className="text-white">Error: {error}</p>
        </div>
      ) : (
        <Row
          xs={1}
          md={2}
          lg={3}
          className="g-4 animate__animated animate__fadeInUpBig"
        >
          {projects.map((project) => (
            <Project key={project.key} project={project} />
          ))}
        </Row>
      )}
    </div>
  );
};

export default Projects;
