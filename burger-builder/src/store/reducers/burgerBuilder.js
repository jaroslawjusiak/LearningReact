import * as actionTypes from '../actions/actionTypes';

const initialState = {
	ingredients: null,
	totalPrice: 4,
	error: false
};

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
};

const reducer = (state = initialState, action) => {
	console.log('action', action);
	switch (action.type) {
		case actionTypes.ADD_INGREDIENT:
			console.log('ADD_INGREDIENT', action);
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]: state.ingredients[action.ingredientName] + 1
				},
				totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
			};
		case actionTypes.REMOVE_INGREDIENT:
			console.log('REMOVE_INGREDIENT', action);
			return {
				...state,
				ingredients: {
					...state.ingredients,
					[action.ingredientName]: state.ingredients[action.ingredientName] - 1
				},
				totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
			};
		case actionTypes.SET_INGREDIENTS:
			console.log('SET_INGREDIENTS', action);
			return {
				...state,
				ingredients: action.ingredients,
				error: false
			};
		case actionTypes.FETCHING_INGREDIENTS_FAILED:
			console.log('FETCHING_INGREDIENTS_FAILED', action);
			return {
				...state,
				error: true
			};
		default:
			return state;
	}
};

export default reducer;