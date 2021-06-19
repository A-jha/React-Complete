import React, { useState, useEffect } from "react";
const ShowHide = () => {
  const OnClickFun = () => {
    setText(() => {
      if (text === "") {
        return <Item />;
      } else {
        return "";
      }
    });
    setBtnlebel(() => {
      if (btnlebel === "Show") {
        return "Hide";
      } else {
        return "Show";
      }
    });
  };

  const [btnlebel, setBtnlebel] = useState("Show");
  const [text, setText] = useState("");
  return (
    <>
      <div className="flex flex-center">
        <div>{text}</div>
        <button className="btn" onClick={OnClickFun}>
          {btnlebel}
        </button>
      </div>
    </>
  );
};

const Item = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const checkSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);
  return <h2>Width : {width}</h2>;
};
export default ShowHide;
