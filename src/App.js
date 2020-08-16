import React, { useState, useEffect, useRef } from 'react';

// This is the custom hook!
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export function App() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(1000);

  useInterval(() => {
    setCount(count + 1);
  }, timer);

  const setTimerForm = (event) => {
    setTimer(event.target.value);
  }

  return (
    <React.Fragment>
      <h1>{count}</h1>
      <input
        type="text"
        value={timer}
        onChange={setTimerForm}
      />
    </React.Fragment>
  );
};
