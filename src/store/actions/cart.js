import * as actionTypes from "./actionTypes";

export const cartAdd = (product, qty) => {
	return {
		type: actionTypes.CART_ADD,
		product,
		qty,
	};
};

export const cartRemove = (id) => {
	return {
		type: actionTypes.CART_REMOVE,
		id,
	};
};

export const cartIncreaseQty = (id, qty) => {
	return {
		type: actionTypes.CART_INCREASE_QTY,
		id,
		qty,
	};
};

export const cartDecreaseQty = (id, qty) => {
	return {
		type: actionTypes.CART_DECREASE_QTY,
		id,
		qty,
	};
};
