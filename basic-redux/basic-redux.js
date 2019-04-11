const redux = require('redux');

const createStore = redux.createStore;

// Initial state
const initialState = {
  users: []
}

// Create the reducer (It defines how the state is going to change in order of an action, the actions say what happen)
// The reducer needs the current state and the action and returns the new state
const rootReducer = (state = initialState, action) => {
  if(action.type === 'ADD_USER') {
    return {
      ...state,
      users: action.name
    }
  }
  return state;
}

// Create the store (stores the application state)
// The createStore function needs 3 params:
// 1. The Reducer as a function
// 2. The Initial state
// 3. A middleware
const store = createStore(rootReducer);

console.log(store.getState());

// Subscribe a subscription
// Is a listener function
// Is executed every time an action uses the dispatch and when the state changes
store.subscribe( () => {
  console.log('Something changed... ', store.getState());
})

// The dispatchs are the only way to change the state
store.dispatch({ type: 'ADD_USER', name: 'altose87'});

console.log(store.getState());