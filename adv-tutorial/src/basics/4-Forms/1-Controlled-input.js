import React, { useState } from "react";

const ControlledInput = () => {
  //setting state values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //to set people dynamically
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //istead of using old approach we can do
    //console.log(document.getElementById("email").value);
    //we can use states
    //we are only going to value if both value is true

    if (name && email) {
      //const person = { name: name, email: email };
      const person = { id: new Date().getTime().toString, name, email };
      setPeople((people) => {
        return [...people, person];
      });
      setName("");
      setEmail("");
      console.log(people);
    }
  };

  return (
    <>
      <h2>Forms</h2>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add Person</button>
        </form>
        {people.map((person) => {
          const { id, name, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInput;
