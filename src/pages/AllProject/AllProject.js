import React, { useEffect, useState } from "react";
import Projects from "../Home/Projects/Projects";

export default function AllProject() {
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
    <div className="container">
      <Projects loading={loading} error={error} projects={projects} />
    </div>
  );
}
