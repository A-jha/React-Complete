import { useCounter } from "../context/CounterContext";
const MyCounter = () => {
  const { count, handleDecreaseClick, handleIncreaseClick } = useCounter();
  return (
    <div>
      <h3>Counter Val: {count}</h3>
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDecreaseClick}>Decrease</button>
    </div>
  );
};

export default MyCounter;
