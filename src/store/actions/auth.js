import * as actionTypes from "./actionTypes";

export const signIn = (userData) => {
	return {
		type: actionTypes.AUTH_LOGIN,
		id: userData._id,
		username: userData.username,
		email: userData.email,
		isAdmin: userData.isAdmin,
		token: userData.token,
	};
};

export const signOut = () => {
	return {
		type: actionTypes.AUTH_LOGOUT,
	};
};
