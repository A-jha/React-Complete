import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const response = await fetch(url);
    //get json data
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <h2>github users</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avtar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avtar_url} alt="" />
              <div>{login}</div>
              <a href={html_url}>profile</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
