"use strict";

var counter = function counter(state, action) {
  if (state === undefined) state = 0;

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// the store binds together the 3 principles of Redux:
var _Redux = Redux;
var createStore = _Redux.createStore;
// the above is equivalent to:
// var createStore = Redux.createStore;
// or import { createStore } from 'redux';
// now let's re-implement the store to better understand it:

/*
var createStore = function createStore(reducer) {
  var state = undefined;
  var listeners = [];

  var getState = function getState() {
    return state;
  };

  var dispatch = function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(function (listener) {
      return listener();
    });
  };

  var subscribe = function subscribe(listener) {
    listeners.push(listener);

    // there is no unsubscribe method;
    // instead, just return a function that removes this listener
    // from the listeners array
    return function () {
      listeners = listeners.filter(function (l) {
        return l != listener;
      });
    };
  };

  // populate initial state - make an initial dummy call to dispatch
  // action is an empty object
  dispatch({});

  return { getState: getState, dispatch: dispatch, subscribe: subscribe };
};
*/

// create the store for the application state,
// passing in the function to be used as the reducer
// that manages the state updates

var store = createStore(counter);

// the store has 3 important functions:
// 1. get the state of the store / app
console.log(store.getState());

// 2. dispatch an action to manage the state of the application
store.dispatch({ type: "INCREMENT" });
console.log(store.getState());

// 3. any time an action has been dispatched, the subscribed function will be called - for example to trigger immediately a rendering
var render = function render() {
  document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', function () {
  store.dispatch({ type: 'INCREMENT' });
});

// simple unit tests to prove that the reducer
// complies with the three principles
expect(counter(0, { type: "INCREMENT" })).toEqual(1);

expect(counter(1, { type: "INCREMENT" })).toEqual(2);

expect(counter(2, { type: "DECREMENT" })).toEqual(1);

expect(counter(1, { type: "DECREMENT" })).toEqual(0);

expect(counter(2, { type: "SOMETHING_ELSE" })).toEqual(2);

expect(counter(undefined, {})).toEqual(0);

console.log("Tests passed!");