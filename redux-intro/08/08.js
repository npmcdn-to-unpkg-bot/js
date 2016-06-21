"use strict";

var counter = function counter() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var action = arguments[1];


  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

var Counter = function Counter(_ref) {
  var value = _ref.value;
  var onIncrement = _ref.onIncrement;
  var onDecrement = _ref.onDecrement;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      value
    ),
    React.createElement(
      "button",
      { onClick: onIncrement },
      "+"
    ),
    React.createElement(
      "button",
      { onClick: onDecrement },
      "-"
    )
  );
};

// create the store for the application state,
// passing in the function to be used as the reducer
// that manages the state updates
var _Redux = Redux;
var createStore = _Redux.createStore;

var store = createStore(counter);

// the store has 3 important functions:
// 1. get the state of the store / app
// console.log(store.getState());

// 2. dispatch an action to manage the state of the application
// store.dispatch({type: "INCREMENT"});
// console.log(store.getState());

// 3. any time an action has been dispatched, the subscribed function will be called - for example to trigger immediately a rendering
var render = function render() {
  // manually updating the DOM is definitely not the way...
  // document.body.innerText = store.getState();
  // using React:
  ReactDOM.render(React.createElement(Counter, {
    value: store.getState(),
    onIncrement: function onIncrement() {
      return store.dispatch({ type: "INCREMENT" });
    },
    onDecrement: function onDecrement() {
      return store.dispatch({ type: "DECREMENT" });
    }
  }), document.getElementById("root"));
};

store.subscribe(render);
render();