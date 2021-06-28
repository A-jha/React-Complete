import React, { useRef, useState, useEffect } from "react";

const StopWatch = () => {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };
  const restartHandler = () => {
    setCount(0);
  };
  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div>
      <div>
        <h4>Timer: {count}s</h4>
      </div>
      <div>
        <button onClick={startHandler} className="btn">
          Start
        </button>
        <button onClick={stopHandler} className="btn-danger">
          Stop
        </button>
        <button onClick={restartHandler} className="btn">
          Restart
        </button>
      </div>
    </div>
  );
};
export default StopWatch;
