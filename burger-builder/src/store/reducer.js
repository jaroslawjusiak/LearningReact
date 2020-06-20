import * as actionTypes from "../store/actions";

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    },
    price: 4,
};

const reducer = (state = initialState, action) => {
    console.log("action", action);
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            console.log("ADD_INGREDIENT", action);
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
                },
            };
        case actionTypes.REMOVE_INGREDIENT:
            console.log("REMOVE_INGREDIENT", action);
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
                },
            };
        default:
            return state;
    }
};

export default reducer;
