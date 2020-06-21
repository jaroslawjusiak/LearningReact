import * as actionTypes from '../actions/actionTypes';

const initialState = {
	results: []
};

const reducer = (state = initialState, action) => {
	console.log('[ResultReducer]: action', action);
	//console.log('state', state);

	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({ id: new Date(), value: action.result })
			};

		case actionTypes.DELETE_RESULT:
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
};

export default reducer;
