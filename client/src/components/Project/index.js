import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import projects from "../../assets/data/projects";

import ghLogo from "../../assets/images/github-logo.png";
import webLogo from "../../assets/images/website-logo.png";

const Project = () => {
  return (
    <div className="container">
      <h1 className="text-center">Recent Projects:</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {projects.map((project) => (
          <Card
            style={{ width: "18rem" }}
            className="flex-shrink-0 m-3 border border-dark border-3"
          >
            <Card.Img
              variant="top"
              className="border-bottom border-success border-2"
              src={project.imgSrc}
            />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.desc}</Card.Text>
            </Card.Body>
            <div className="container">
              <h3>Links</h3>
              <a href={project.repo}>
                <img
                  src={ghLogo}
                  className="my-2 mx-3"
                  style={{ width: 50 }}
                  alt="Github Logo"
                />
              </a>
              <a href={project.website}>
                <img
                  src={webLogo}
                  className="my-2 mx-3"
                  style={{ width: 50 }}
                  alt="Github Logo"
                />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Project;
