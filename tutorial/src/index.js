import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <h1>Hello </h1>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
