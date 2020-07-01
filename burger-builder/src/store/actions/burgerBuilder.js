import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = name => {
	return {
		type: actionTypes.ADD_INGREDIENT,
		ingredientName: name
	};
};

export const removeIngredient = name => {
	return {
		type: actionTypes.REMOVE_INGREDIENT,
		ingredientName: name
	};
};

export const setIngredients = ingredients => {
	return {
		type: actionTypes.SET_INGREDIENTS,
		ingredients: ingredients
	};
};

export const fetchingIngredientsFailed = error => {
	return {
		type: actionTypes.FETCHING_INGREDIENTS_FAILED,
		error: error
	};
};

export const initIngredientsAsync = () => {
	return dispatch => {
		axios
			.get('/ingredients.json')
			.then(res => {
				dispatch(setIngredients(res.data));
			})
			.catch(error => {
				dispatch(fetchingIngredientsFailed(error));
			});
	};
};
