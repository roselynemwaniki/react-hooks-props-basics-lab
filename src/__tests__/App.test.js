import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";
import Home from "../components/Home"
import user from "../data/user";
import App from "../components/App";


test("renders without errors", () => {
  expect(() => render(<App />)).not.toThrow();
});

test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container.querySelector("nav")).toBeInTheDocument();
  expect(container.querySelector("#home")).toBeInTheDocument();
  expect(container.querySelector("#about")).toBeInTheDocument();
});

test("passes 'name', 'city', and 'color' to <Home> as props", () => {
  const user = { name: "Liza", city: "New York", color: "blue" };

  render(< Home name={user.name} city={user.city} color={user.color} />);
  
  const h1 = screen.getByText(`${user.name} is a Web Developer from ${user.city}`);
  expect(h1).toBeInTheDocument(); // Check if h1 is present
  expect(h1).toHaveStyle(`color: ${user.color}`); // Check the style
});

test("passes 'bio' to <About> as a prop", () => {
  const user = { bio: "A passionate web developer." };
  render(< About bio={user.bio} />);

  const p = screen.queryByText(user.bio);
  expect(p).not.toBeNull();
  expect(p).toBeInTheDocument();
  if (p) {
    expect(p.tagName).toBe("P");
  }
});


test("passes 'github' to <Links> as a prop, via <About>", () => {
  render(<App />);
  const githubLink = screen.queryByText("GitHub");
  expect(githubLink).toBeInTheDocument();
  expect(githubLink.tagName).toBe("A");
  expect(githubLink).toHaveAttribute("href", user.links.github);
});

test("passes 'linkedin' to <Links> as a prop, via <About>", () => {
  render(<App />);
  const linkedinLink = screen.queryByText("LinkedIn");
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink.tagName).toBe("A");
  expect(linkedinLink).toHaveAttribute("href", user.links.linkedin);
});
