import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
import { fetchingIngredientsFailed } from './burgerBuilder';

export const purchaseBurgerSuccess = (id, orderData) => {
	return {
		type: actionTypes.PURCHASE_BURGER_SUCCESS,
		orderId: id,
		orderData: orderData
	};
};

export const purchaseBurgerFail = error => {
	return {
		type: actionTypes.PURCHASE_BURGER_FAIL,
		error: error
	};
};

export const purchaseBurgerStart = () => {
	return {
		type: actionTypes.PURCHASE_BURGER_START
	};
};

export const purchaseBurgerAsync = orderData => {
	return dispatch => {
		dispatch(purchaseBurgerStart());
		axios.post('/orders.json', orderData)
			.then(response => {
				console.log('purchaseBurgerAsync:', response.data);
				dispatch(purchaseBurgerSuccess(response.data.name, orderData));
			})
			.catch(error => {
				console.log(error);
				dispatch(purchaseBurgerFail(error));
			});
	};
};

export const purchaseInit = () => {
	return {
		type: actionTypes.PURCHASE_INIT
	}
};

export const fetchOrdersSuccess = (orders) => {
	console.log('fetchOrdersSuccess - orders', orders);
	return {
		type: actionTypes.FETCH_ORDERS_SUCCESS,
		orders: orders
	};
};

export const fetchOrdersFail = error => {
	return {
		type: actionTypes.FETCH_ORDERS_FAIL,
		error: error
	};
};

export const fetchOrdersStart = () => {
	return {
		type: actionTypes.FETCH_ORDERS_START
	};
};

export const fetchOrdersAsync = () => {
	return dispatch => {
		dispatch(fetchOrdersStart());
		axios.get('/orders.json')
			.then(res => {
				console.log('fetchOrdersAsync: res', res);
				const fetchedOrders = [];
				for (let key in res.data) {
					fetchedOrders.push({
						...res.data[key],
						id: key
					});
				}
				console.log('fetchOrdersAsync: fetchedOrders', fetchedOrders);
				dispatch(fetchOrdersSuccess(fetchedOrders));
				//this.setState({ orders: fetchedOrders });
			})
			.catch(err => {
				console.log('[Orders Action Creator] fetchOrdersAsync -> error', err);
				dispatch(fetchingIngredientsFailed(err));
			});
	};
};