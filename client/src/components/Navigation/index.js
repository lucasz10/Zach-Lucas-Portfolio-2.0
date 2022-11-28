import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [page, setPage] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (!page) {
      setPage("aboutMe");
      navigate("/aboutMe");
    }
  }, []);

  const changePageState = (e) => {
    e.preventDefault();
    setPage(e.target.value);
    navigate(`/${e.target.value}`);
  };

  return (
    <div className="d-flex flex-row justify-items-end">
      {/* Conditional to About Me Button */}
      {page === "aboutMe" ? (
        <Button variant="dark" className="m-2" disabled>
          About Me
        </Button>
      ) : (
        <Button
          variant="dark"
          value="aboutMe"
          className="m-2"
          onClick={changePageState}
        >
          About Me
        </Button>
      )}
      {/* Conditional to Portfolio Button */}
      {page === "portfolio" ? (
        <Button variant="dark" className="m-2" disabled>
          Portfolio
        </Button>
      ) : (
        <Button
          variant="dark"
          value="portfolio"
          className="m-2"
          onClick={changePageState}
        >
          Portfolio
        </Button>
      )}
      {/* Conditional to Contact Button */}
      {page === "contact" ? (
        <Button variant="dark" className="m-2" disabled>
          Contact Me
        </Button>
      ) : (
        <Button
          variant="dark"
          value="contact"
          className="m-2"
          onClick={changePageState}
        >
          Contact Me
        </Button>
      )}
      {/* Conditional to Resume Button */}
      {page === "resume" ? (
        <Button variant="dark" className="m-2" disabled>
          Resume
        </Button>
      ) : (
        <Button
          variant="dark"
          value="resume"
          className="m-2"
          onClick={changePageState}
        >
          Resume
        </Button>
      )}
    </div>
  );
};

export default Navigation;
