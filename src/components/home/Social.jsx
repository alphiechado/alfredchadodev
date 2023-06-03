import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/alfredchado/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://twitter.com/chadowofficial"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-twitter"></i>
      </a>

      <a
        href="https://github.com/alphiechado"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
