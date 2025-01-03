import React from "react";
import { useCountContext } from "../context/CountContext";

const ComponentB = () => {
  const { dispatch } = useCountContext();

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch({ type: "INCREMENT", payload: 2 })}
      >
        Increment
      </button>
      <button type="button" onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "DECREMENT", payload: 2 })}
      >
        Decrement
      </button>
    </div>
  );
};

export default ComponentB;
