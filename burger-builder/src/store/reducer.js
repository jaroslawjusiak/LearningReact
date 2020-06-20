import * as actionTypes from '../store/actions';

const initialState = {
    ingredients: null,
    price: 4
};

const reducer = (state = initialState, action) => {
    switch(action){
        case(actionTypes.ADD_INGREDIENT):
            return state;
        case(actionTypes.REMOVE_INGREDIENT):
            return state;
        default:
            return state;
    }
};

export default reducer;