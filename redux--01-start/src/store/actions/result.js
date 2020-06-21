import * as actionTypes from './actionTypes';

export const storeResult = result => {
	//const updatedResult = result * 2;
	return {
		type: actionTypes.STORE_RESULT,
		result: result
		//result: updatedResult
	};
};

export const storeResultAsync = result => {
	return dispatch => {
		setTimeout(() => {
			dispatch(storeResult(result));
		}, 2000);
	};
};

export const deleteResult = id => {
	return {
		type: actionTypes.DELETE_RESULT,
		id: id
	};
};
