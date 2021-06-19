import React, { useState } from "react";

//short circuit evaluation
//ternary operator

const ShortCircuit = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const firstValue = text1 || text2;
  const secondValue = text1 && text2;
  let revertCount = 0;
  const Revert = () => {
    setText1(() => {
      if (revertCount % 2 === 0) {
        return "";
      } else {
        return "Avinash";
      }
    });
    setText2(() => {
      if (revertCount % 2 === 0) {
        return "";
      } else {
        return "Avi";
      }
    });
    revertCount++;
  };
  return (
    <>
      <p>
        Short Circuit to check that OR Check Second condition if first is false
        and AND do not check second condition if first fails.
      </p>
      <h3>First Value is {firstValue || "Not Checked"}</h3>
      <h3>Second value is {secondValue || "Not Checked"}</h3>
      <button className="btn" onClick={Revert}>
        Revert
      </button>
      <p>
        Short Circuit to check that AND Check Second condition if first is TRUE
        and OR do check second condition if first fails.
      </p>
      <h3>First Value is {firstValue}</h3>
      <h3>Second value is {secondValue || "Not Checked"}</h3>
    </>
  );
};

export default ShortCircuit;
