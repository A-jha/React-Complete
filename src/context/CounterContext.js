import { createContext, useContext, useState } from "react";

const CounterContext = createContext();
export const useCounter = () => useContext(CounterContext);
function CounterContextProvider(props) {
  const [count, setCount] = useState(0);
  const handleIncreaseClick = () => {
    setCount(count + 1);
  };
  const handleDecreaseClick = () => {
    setCount(count - 1);
  };
  const value = { count, setCount, handleDecreaseClick, handleIncreaseClick };
  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;
