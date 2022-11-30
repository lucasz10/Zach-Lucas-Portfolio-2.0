import React from "react";
import Project from "../components/Project";

import projects from "../assets/data/projects";

const Portfolio = () => {
  return (
    <div>
      <Project projects={projects} />
    </div>
  );
};

export default Portfolio;
