
const counter = (state = 0, action) => {

  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

// the store binds together the 3 principles of Redux:
// const { createStore } = Redux;
// the above is equivalent to:
// var createStore = Redux.createStore;
// or import { createStore } from 'redux';

const { createStore } = Redux;


// create the store for the application state,
// passing in the function to be used as the reducer
// that manages the state updates
const store = createStore(counter);

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);


// the store has 3 important functions:
// 1. get the state of the store / app
console.log(store.getState());

// 2. dispatch an action to manage the state of the application
store.dispatch({type: "INCREMENT"});
console.log(store.getState());

// 3. any time an action has been dispatched, the subscribed function will be called - for example to trigger immediately a rendering
const render = () => {
  // manually updating the DOM is definitely not the way...
  // document.body.innerText = store.getState();
  // using React:
  ReactDOM.render(
    <Counter
      value = {store.getState()}
      onIncrement = { () =>
        store.dispatch( {type: "INCREMENT"})
                    }
      onDecrement = { () =>
                      store.dispatch( {type: "DECREMENT"})
                    }
    />,
    document.getElementById("root")
  );
};

store.subscribe(render);
render();


document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT'});
});
