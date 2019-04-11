import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// const initialState = {};
const middleware = [thunk];

// Adding localStorage
const storageState = localStorage.getItem('citas') ? JSON.parse(localStorage.getItem('citas')) : [];

// this code window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() is taken from https://github.com/zalmoxisus/redux-devtools-extension as a recommendation
const store = createStore(rootReducer, storageState, compose(applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;