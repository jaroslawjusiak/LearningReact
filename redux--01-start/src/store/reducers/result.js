import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	results: []
};

const reducer = (state = initialState, action) => {
	console.log('[ResultReducer]: action', action);
	//console.log('state', state);

	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result }) });

		case actionTypes.DELETE_RESULT:
			return updateObject(state, { results: state.results.filter(res => res.id !== action.id) });

		default:
			return state;
	}
};

export default reducer;
