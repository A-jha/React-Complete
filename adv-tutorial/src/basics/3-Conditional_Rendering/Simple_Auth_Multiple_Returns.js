import React, { useState } from "react";

const MultipleReturn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const UserAuth = () => {
    const name = document.getElementById("name");
    if (name.value === "Arpita" || name.value === "Avinash") {
      setIsLoading(false);
    }
  };
  const LogOut = () => {
    setIsLoading(true);
  };
  if (isLoading) {
    return (
      <>
        <h2>Enter Your Credidentials:)</h2>
        <div id="alert"></div>
        <form>
          <input
            id="name"
            className="input"
            type="text"
            placeholder="enter user name"
          ></input>
          <button type="submit" className="btn" onClick={UserAuth}>
            Login
          </button>
        </form>
      </>
    );
  }
  return (
    <>
      <h2>Welcome {document.getElementById("name").value}</h2>
      <button className="btn" onClick={LogOut} type="button">
        Logout
      </button>
    </>
  );
};

export default MultipleReturn;
