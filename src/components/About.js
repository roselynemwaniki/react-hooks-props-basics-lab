import React from "react";

function About({bio,}) {
  return (
    <div>
      {bio && <p>{bio}</p>}
      {/* Other content such as links can go here */}
    
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    </div>
    </div>
  );
}

export default About;


