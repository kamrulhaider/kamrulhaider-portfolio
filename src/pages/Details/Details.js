import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Details.css";
import { Spinner } from "react-bootstrap";

const Details = () => {
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { projectId } = useParams();
  useEffect(() => {
    fetch(
      `https://kamrulhaider-portfolio-backend.vercel.app/projects/${projectId}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((error) => {
        // Step 2: Handle errors
        setError(error.message);
        setLoading(false);
      });
  }, [projectId]);

  return (
    <div className="container header-margin">
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
        <div className="row align-items-center content-details">
          <div className="col-lg-6 p-4">
            <div className="mbl-img-div">
              <img
                src={project?.imgUrl}
                alt="project screenshot"
                className="img-fluid mbl-img rounded-3"
              />
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <h1 className="fw-bold my-3 title-color">{project?.name}</h1>
            <hr className="mx-auto" />
            <h5 className="fw-bold subTitle-color">Project Details:</h5>
            <p className="fs-5 subTitle-color"> {project?.details}</p>
            <h5 className="fw-bold subTitle-color">Technology:</h5>
            <p className="fs-5 subTitle-color">
              <span className="fw-bold"></span> {project?.technology}
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              {project?.liveLink && (
                <a
                  href={project?.liveLink}
                  className="btn myMenu2"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Link
                </a>
              )}
              {project?.clientSideLink && (
                <a
                  href={project?.clientSideLink}
                  className="btn myMenu2"
                  rel="noreferrer"
                  target="_blank"
                >
                  Code Link
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
