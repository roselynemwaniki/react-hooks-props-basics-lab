import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

function App() {
  const user = {
    name: "John Doe",
    bio: "A passionate web developer.",
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/"
  };

  return (
    <div>
      <NavBar />
      <Home name={user.name} />
      <About bio={user.bio} />
      <Links github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;
