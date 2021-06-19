import React, { useState } from "react";

const TerniaryOp = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h2>Ternary Operator</h2>
      <h3>{text || "Default text"}</h3>
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        Toggle Error
      </button>
      {/* AND operator will check second value if first value is false*/}
      {isError ? <h3>there is an Error....</h3> : <h3>We are good to go</h3>}
    </>
  );
};

export default TerniaryOp;
