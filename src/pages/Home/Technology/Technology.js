import React from "react";
import "./Technology.css";
import CustomProgressBar from "../../Shared/CustomProgressBar/CustomProgressBar";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

function Technology() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Step 1: Define an error state

  useEffect(() => {
    fetch("https://kamrulhaider-portfolio-backend.vercel.app/skills")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((error) => {
        // Step 2: Handle errors
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="mb-5 pb-5">
      <div className="d-flex flex-column align-items-center mb-3">
        <h2 className="fw-bold text-center title-color mb-0">
          Skills & Familiarity
        </h2>
        <hr />
        <p className="text-center subTitle-color mb-3 width-custom">
          Below is the list of skills and technologies that I have used until
          now. The assumptions are made based on my thinking and confidence.
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
        <div className="row">
          {skills.map((skill, i) => (
            <div key={i} className="col-md-6 mb-3 content-details">
              <CustomProgressBar
                oddBar={i % 2 === 0 ? true : false}
                level={skill?.name}
                progressValue={skill?.percent}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Technology;
