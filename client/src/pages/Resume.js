import React from "react";
import Button from "react-bootstrap/Button";
import resume from "../assets/files/Zach_Resume_2022_Updated.pdf";
import resumePic from "../assets/images/resume_pic.PNG";

const Resume = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <img
          src={resumePic}
          className="border-dark border-4 w-50"
          alt="Zach Lucas' resume."
        />
      </div>
      <div className="container text-center my-3">
        <a href={resume} download="Zach_Lucas_Resume">
          <Button variant="dark">Download Resume Here</Button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
