import React, { useState } from "react";

const PaswordGenerator = () => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
  ];
  //   const exclamation = { value: "!", flag: 0 };
  //   const atSign = { value: "@", flag: 0 };
  //   const hash = { value: "#", flag: 1 };
  //   const dollar = { value: "$", flag: 0 };
  //   const percent = { value: "%", flag: 1 };
  //   const circumflex = { value: "^", flag: 0 };
  //   const and = { value: "&", flag: 0 };

  //   const specialChar = [
  //     exclamation,
  //     atSign,
  //     hash,
  //     dollar,
  //     percent,
  //     circumflex,
  //     and,
  //   ];
  function getRandomAlphabet() {
    return Math.floor(Math.random() * alphabet.length);
  }
  let str = [];

  for (let i = 0; i < 8; i++) {
    str.push(alphabet[getRandomAlphabet()]);
  }

  //   specialChar.forEach((i) => {
  //     if (i.flag === 1) {
  //       str.push(i.value);
  //     }
  //   });

  //console.log(str);

  const [text, setText] = useState("Avinash");
  const randomPasword = () => {
    setText(str);
  };
  return (
    <div>
      <h2>{text}</h2>
      <button className="btn" onClick={randomPasword}>
        Random Password
      </button>
    </div>
  );
};
export default PaswordGenerator;
