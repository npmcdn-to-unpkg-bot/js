'use strict';

var _ = require('./02');

var expect = require('expect');

expect((0, _.counter)(0, { type: "INCREMENT" })).toEqual(1);

expect((0, _.counter)(1, { type: "INCREMENT" })).toEqual(2);

expect((0, _.counter)(2, { type: "DECREMENT" })).toEqual(1);

expect((0, _.counter)(1, { type: "DECREMENT" })).toEqual(0);

expect((0, _.counter)(2, { type: "SOMETHING_ELSE" })).toEqual(2);

expect((0, _.counter)(undefined, {})).toEqual(0);

console.log("All tests passed!");