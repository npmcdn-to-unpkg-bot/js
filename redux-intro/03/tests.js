
"use strict";

var _ = require("./03");

// simple unit tests to prove that the reducer
// complies with the three principles
expect((0, _.counter)(0, { type: "INCREMENT" })).toEqual(1);

expect((0, _.counter)(1, { type: "INCREMENT" })).toEqual(2);

expect((0, _.counter)(2, { type: "DECREMENT" })).toEqual(1);

expect((0, _.counter)(1, { type: "DECREMENT" })).toEqual(0);

expect((0, _.counter)(2, { type: "SOMETHING_ELSE" })).toEqual(2);

expect((0, _.counter)(undefined, {})).toEqual(0);

console.log("Tests passed!");