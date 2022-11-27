import React from "react";

import igLogo from "./ig-logo.jpg";
import ghLogo from "./github-logo.png";
import liLogo from "./linkedin-logo.png";

const Footer = () => {
  return (
    <footer>
      <h3 className="mx-3"> Media Links </h3>
      <a href="https://www.instagram.com/lucas.zach10/?hl=en">
        <img src={igLogo} className="mx-3" alt="Instagram Logo" />
      </a>
      <a href="https://github.com/lucasz10">
        <img src={ghLogo} className="mx-3" alt="Github Logo" />
      </a>
      <a href="https://www.linkedin.com/in/zachary-lucas-234a78166/">
        <img src={liLogo} className="mx-3" alt="LinkedIn Logo" />
      </a>
    </footer>
  );
};

export default Footer;
