//import {} from ...
const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    counter: 0
};

// Reducer
// state = initialState takes default value instead of previous state, in that case it takes a value of initialState object;
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        };
    }

    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        };
    }

    return state;
};


// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
// Subscription