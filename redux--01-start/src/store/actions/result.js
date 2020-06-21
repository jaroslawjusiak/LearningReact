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
	return (dispatch, getState) => {
		setTimeout(() => {
			const oldCounter = getState().ctr.counter;
			console.log('oldCounter:', oldCounter);
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
