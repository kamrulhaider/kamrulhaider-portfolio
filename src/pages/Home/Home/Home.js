import React, { useEffect, useState } from "react";
import shape2 from "../../../images/logo192.png";
import shape1 from "../../../images/shape2.png";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Technology from "../Technology/Technology";

const Home = () => {
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
        const filteredData = data.filter((item) => item.featured);
        setProjects(filteredData);

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
      <img className="shape4" src={shape1} alt="" />
      <img className="shape5" src={shape2} alt="" />
      <Banner></Banner>
      <Projects
        homeRoute={true}
        loading={loading}
        error={error}
        projects={projects}
      />
      <Technology></Technology>
      <Contact></Contact>
    </div>
  );
};

export default Home;
