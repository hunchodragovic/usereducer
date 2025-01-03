export const initialState = 0; // Correct: State is a primitive number

export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    case "RESET":
      return initialState; // Directly using `initialState`
    default:
      return state;
  }
};
