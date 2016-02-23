"use strict";

function counter(state, action) {
  if (state === undefined) state = 0;

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

expect(counter(0, { type: "INCREMENT" })).toEqual(1);

expect(counter(1, { type: "INCREMENT" })).toEqual(2);

expect(counter(2, { type: "DECREMENT" })).toEqual(1);

expect(counter(1, { type: "DECREMENT" })).toEqual(0);

expect(counter(2, { type: "SOMETHING_ELSE" })).toEqual(2);

expect(counter(undefined, {})).toEqual(0);

console.log("Tests passed!");