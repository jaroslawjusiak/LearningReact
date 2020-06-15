const initialState = {
    counter: 0,
    results: []
};


const reducer = (state = initialState, action) => {
    console.log('action', action);
    //console.log('state', state);
    
    switch(action.type){
        case('INCREMENT'):
        const newState = Object.assign({}, state);
        newState.counter = newState.counter + 1;
        return newState; 
        
        case('DECREMENT'):
        return {
            ...state,
            counter: state.counter - 1
        };

        case('ADD'):
        return {
            ...state,
            counter: state.counter + action.value
        };

        case('SUBTRACT'):
        return {
            ...state,
            counter: state.counter - action.value
        };

        case('STORE_RESULT'):
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            };

        case('DELETE_RESULT'):
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id,1);

            //res => true would copy all elements of original array
            const updatedArray = state.results.filter(res => res.id !== action.id);
        return {
                ...state,
                results: updatedArray
            };
        
        default:
            return state;
    }
    
}

export default reducer;