import React from "react";
import { useCountContext } from "../context/CountContext";

const ComponentC = () => {
  const { dispatch } = useCountContext();

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch({ type: "INCREMENT", payload: 3 })}
      >
        Increment
      </button>
      <button type="button" onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "DECREMENT", payload: 3 })}
      >
        Decrement
      </button>
    </div>
  );
};

export default ComponentC;
