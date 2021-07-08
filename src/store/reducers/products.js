import * as actionTypes from "../actions/actionTypes";

const initialState = { products: [], error: false, loading: false };

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
				loading: false,
			};
		case actionTypes.SET_ERROR:
			return {
				...state,
				loading: false,
				error: true,
			};
		case actionTypes.SET_LOADING:
			return {
				...state,
				loading: true,
			};

		default:
			return state;
	}
};

export default reducer;
