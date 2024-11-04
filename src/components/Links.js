import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      {}
      <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <br />
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
          </div>
  );
}

export default Links;
