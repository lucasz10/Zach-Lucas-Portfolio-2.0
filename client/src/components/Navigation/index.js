import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [page, setPage] = useState("");
  let navigate = useNavigate();

  const changePageState = (e) => {
    e.preventDefault();
    setPage(e.target.value);
    navigate(`/${e.target.value}`);
  };

  return (
    <div>
      <h1> My Portfolio Nav</h1>
      {/* Conditional to About Me Button */}
      {page === "aboutMe" ? (
        <Button variant="dark" disabled>
          About Me
        </Button>
      ) : (
        <Button variant="dark" value="aboutMe" onClick={changePageState}>
          About Me
        </Button>
      )}
      {/* Conditional to Portfolio Button */}
      {page === "portfolio" ? (
        <Button variant="dark" disabled>
          Portfolio
        </Button>
      ) : (
        <Button variant="dark" value="portfolio" onClick={changePageState}>
          Portfolio
        </Button>
      )}
      {/* Conditional to Contact Button */}
      {page === "contact" ? (
        <Button variant="dark" disabled>
          Contact Me
        </Button>
      ) : (
        <Button variant="dark" value="contact" onClick={changePageState}>
          Contact Me
        </Button>
      )}
      {/* Conditional to Resume Button */}
      {page === "resume" ? (
        <Button variant="dark" disabled>
          Resume
        </Button>
      ) : (
        <Button variant="dark" value="resume" onClick={changePageState}>
          Resume
        </Button>
      )}
    </div>
  );
};

export default Navigation;
