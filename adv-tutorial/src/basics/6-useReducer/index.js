import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import data from "../../data";
const reducer = (state, action) => {
  const newItems = [...state.people, action.payload];
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      people: newItems,
      isModalOpen: true,
      modalContent: "items added",
    };
  }
  return new Error("no matching action found");
};
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "hello G",
};
const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newName = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newName });
    } else {
      state.isModalOpen = true;
    }
  };
  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};
export default Index;
