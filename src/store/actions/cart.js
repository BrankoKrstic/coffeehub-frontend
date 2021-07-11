import * as actionTypes from "./actionTypes";

export const cartAdd = (product, qty) => {
	return {
		type: actionTypes.CART_ADD,
		product,
		qty,
	};
};

export const cartRemove = (_id) => {
	return {
		type: actionTypes.CART_REMOVE,
		_id,
	};
};

export const cartIncreaseQty = (_id, qty) => {
	return {
		type: actionTypes.CART_INCREASE_QTY,
		_id,
		qty,
	};
};

export const cartDecreaseQty = (_id, qty) => {
	return {
		type: actionTypes.CART_DECREASE_QTY,
		_id,
		qty,
	};
};

export const cartSetItems = (cartItems) => {
	return {
		type: actionTypes.CART_SET_ITEMS,
		cartItems,
	};
};

export const setShippingDetails = (data) => {
	return {
		type: actionTypes.SET_SHIPPING,
		data,
	};
};

export const cartPurge = () => {
	return {
		type: actionTypes.CART_PURGE,
	};
};
