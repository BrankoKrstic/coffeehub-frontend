import * as actionTypes from "../actions/actionTypes";

const initialState = { cartItems: [], shipping: {} };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CART_ADD:
			return {
				...state,
				cartItems: [
					...state.cartItems,
					{ product: action.product, qty: action.qty },
				],
			};
		case actionTypes.CART_REMOVE:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(item) => item.product._id !== action._id
				),
			};
		case actionTypes.CART_INCREASE_QTY:
			return {
				...state,
				cartItems: state.cartItems.map((item) => {
					if (item.product._id === action._id) {
						return {
							product: item.product,
							qty: item.qty + action.qty,
						};
					} else {
						return item;
					}
				}),
			};
		case actionTypes.CART_DECREASE_QTY:
			return {
				...state,
				cartItems: state.cartItems.map((item) => {
					if (item.product._id === action._id) {
						return {
							product: item.product,
							qty: item.qty - action.qty,
						};
					} else {
						return item;
					}
				}),
			};
		case actionTypes.SET_SHIPPING:
			return {
				...state,
				shipping: action.data,
			};
		default:
			return state;
	}
};

export default reducer;
