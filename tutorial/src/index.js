import React from "react";
import ReactDom from "react-dom";
import Heading from "./book";
import Book from "./book";
function Greeting() {
  return (
    <div>
      <Person />
      <About />
      <Heading />
      <Book />
    </div>
  );
}
// implicit return
const Person = () => (
  <h2>
    Hello
    <About />
  </h2>
);
//explicit return
const About = () => {
  return <p>Welcome to react tutorail</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
