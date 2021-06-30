import React, { useRef, useState, useEffect } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const [divContent, setDivContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    refContainer.current.value = "G";
  };
  useEffect(() => {
    refContainer.current.focus();
  });
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer}></input>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello</div>
    </>
  );
};

export default UseRefBasics;
