
import { counter } from './02';

var expect = require('expect');

expect(counter(0, { type: "INCREMENT" })).toEqual(1);

expect(counter(1, { type: "INCREMENT" })).toEqual(2);

expect(counter(2, { type: "DECREMENT" })).toEqual(1);

expect(counter(1, { type: "DECREMENT" })).toEqual(0);

expect(counter(2, { type: "SOMETHING_ELSE" })).toEqual(2);

expect(counter(undefined, {})).toEqual(0);


console.log("All tests passed!");
