//import {} from ...
const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    counter: 0
};

// Reducer
// state = initialState takes default value instead of previous state, in that case it takes a value of initialState object;
const rootReducer = (state = initialState, action) => {
    return state;
};


// Store
const store = createStore(rootReducer);
console.log(store.getState());
// Dispatching Action

// Subscription