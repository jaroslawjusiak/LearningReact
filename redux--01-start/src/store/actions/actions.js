export const increment = () => {
	return {
		type: INCREMENT
	};
};

export const decrement = () => {
	return {
		type: DECREMENT
	};
};

export const add = () => {
	return {
		type: ADD,
		value: 5
	};
};

export const subtract = () => {
	return {
		type: SUBTRACT,
		value: 5
	};
};

export const storeResult = result => {
	return {
		type: STORE_RESULT,
		result: result
	};
};

export const deleteResult = id => {
	return {
		type: DELETE_RESULT,
		id: id
	};
};
