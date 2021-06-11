import React, { useEffect, useState } from "react";

const UseEffectObject = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <>
      <h2>useEffect Cleanup</h2>
      <h3>{size} px</h3>
    </>
  );
};

export default UseEffectObject;
