import React, { useState } from "react";

import data from "../../data";

//more component
//fix - context API, redux

const PropDrilling = () => {
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  const [people, setPeople] = useState(data);
  return (
    <section>
      <h3>Prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            removePerson={removePerson}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button type="submit" onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};
export default PropDrilling;
