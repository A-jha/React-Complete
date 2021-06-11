import React from "react";

const Timer = () => {
  const getFormData = (e) => {
    const num = this.state.time;
    console.log(num);
  };
  return (
    <>
      <h1>Simple timer</h1>
      <form id="frml">
        <input type="number" name="time"></input>
        <button type="submit" onClick={getFormData}>
          submit
        </button>
      </form>
    </>
  );
};
export default Timer;
