import React from "react";

const Counter = () => {
  let [value, setValue] = React.useState(0);
  const decreseValue = () => {
    value = --value;
    setValue(value);
  };
  const resetValue = () => {
    value = 0;
    setValue(value);
  };
  const increaseValue = () => {
    value = ++value;
    setValue(value);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      //setValue(value++);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <div className="saperatorplus"></div>
      <h2 className="center">Counter</h2>
      <div className="saperatorminus"></div>
      <h3>{value}</h3>
      <div>
        <button className="btn" onClick={decreseValue}>
          Decrease
        </button>
        <button className="btn" onClick={resetValue}>
          Reset
        </button>
        <button className="btn" onClick={increaseValue}>
          Increase
        </button>
      </div>
      <div className="saperatorminus"></div>
      <h2>Copmplex Counter</h2>
      <p>Conts total click in a time interval</p>
      <div className="saperatorplus"></div>
      <h3>{value}</h3>
      <button className="btn" onClick={complexIncrease}>
        Increase Later
      </button>
    </>
  );
};

export default Counter;
