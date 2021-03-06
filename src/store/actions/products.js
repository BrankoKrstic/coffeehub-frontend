import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

const setProducts = (productData) => {
	return {
		type: actionTypes.SET_PRODUCTS,
		products: productData,
	};
};

export const addProduct = (product) => {
	return {
		type: actionTypes.ADD_PRODUCT,
		product,
	};
};

export const initProducts = () => {
	return (dispatch) => {
		dispatch({ type: actionTypes.SET_LOADING });
		axios
			.get("/products")
			.then((res) => dispatch(setProducts(res.data.products)))
			.catch((err) => dispatch({ type: actionTypes.SET_ERROR }));
	};
};
