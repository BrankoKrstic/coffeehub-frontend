import * as actionTypes from "../actions/actionTypes";

const initialState = {
	username: null,
	email: null,
	id: null,
	token: null,
	isAdmin: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_LOGIN:
			return {
				username: action.username,
				email: action.email,
				id: action.id,
				isAdmin: action.isAdmin,
				token: action.token,
				expirationTime: action.expirationTime,
			};
		default:
			return state;
	}
};

export default reducer;
