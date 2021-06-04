import React, { useState } from "react";

const ErrorExample = () => {
  console.log(useState());
  const [text, setText] = useState("random title");
  //let title = "random title";
  const handleClick = () => {
    setText("Hello");
  };

  return (
    <React.Fragment>
      <code>{text}</code>
      <br />
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
