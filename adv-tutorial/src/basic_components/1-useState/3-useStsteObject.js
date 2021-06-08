import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Avinash",
    age: 21,
    message: "simple name huh",
  });
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(24);
  //const [message, setMessage] = useState("random message");
  //
  const changeMessage = () => {
    //- in this case we are replacing an object with an string which is wrong
    //setMessage("hello world!");
    //
    //
    //- if we pass an object then the key and value present in previous object will not
    //remain preserved
    //setPerson({ message: "Only i will be rendered" });
    //
    //
    //to avoid all the problems we use spread operator
    //... is spread operator
    //spread operator simply spread the object and allows us to change
    //one or more  key's value and it will be a copy of prev object
    //first copy the value and then override the prev value
    //
    setPerson({ ...person, message: "Hello G Kemon acho?" });
  };
  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </React.Fragment>
  );
};

export default UseStateObject;
