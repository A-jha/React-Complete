import React, { useState } from "react";

const ControlledInputs = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [age, setAge] = useState("");
  //   const [email, setEmail] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.firstName && user.lastName && user.age && user.email) {
      //   const newUser = {
      //     firstName: user.firstName,
      //     lastName: user.lastName,
      //     age: user.age,
      //     email: user.email,
      //     id: new Date().getTime().toString(),
      //   };
      const newUser = { ...user, id: new Date().getTime().toString() };
      setUsers(() => {
        return [...users, newUser];
      });
    }
    setUser({ firstName: "", lastName: "", age: "", email: "" });
  };
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label>FirstName : </label>
            <input
              type="text"
              name="firstName"
              value={user.firstName}
              id="firstName"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-control">
            <label>LastName : </label>
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              id="lastName"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-control">
            <label>Age : </label>
            <input
              type="number"
              name="age"
              value={user.age}
              id="age"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-control">
            <label>Email : </label>
            <input
              type="email"
              name="email"
              value={user.email}
              id="email"
              onChange={handleChange}
            ></input>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        {users.map((user) => {
          const { id, firstName, lastName, age, email } = user;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <h4>{lastName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
