import React from "react";
import { data } from "../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="button-small" onClick={() => removeItem(id)}>
              delete
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear all
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
