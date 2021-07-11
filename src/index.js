import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import productReducer from "./store/reducers/products";
import cartReducer from "./store/reducers/cart";
import authReducer from "./store/reducers/auth";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	product: productReducer,
	cart: cartReducer,
	auth: authReducer,
});

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
	window.localStorage.setItem(
		"coffeehubCartData",
		JSON.stringify(store.getState().cart.cartItems)
	);
});

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
