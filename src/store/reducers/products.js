import * as actionTypes from "../actions/actionTypes";

const initialState = { products: [], error: false };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_PRODUCT:
			return {
				...state,
				products: [...state.products, action.product],
			};
		case actionTypes.SET_PRODUCTS:
			return {
				...state,
				products: action.products,
			};
		case actionTypes.SET_ERROR:
			return {
				...state,
				error: true,
			};
		default:
			return state;
	}
};

export default reducer;
