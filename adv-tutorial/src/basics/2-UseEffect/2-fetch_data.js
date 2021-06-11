import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState("Avinash");
  const changeUser = () => {
    setUsers(() => {
      if (users == "Avinash") {
        return "ravi";
      } else {
        return "Avinash";
      }
    });
  };
  return (
    <>
      <h2>List Of users</h2>
      <h3>{users}</h3>
      <button onClick={changeUser} className="btn">
        Change User
      </button>
    </>
  );
};

export default UseEffectFetchData;
