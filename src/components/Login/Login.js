import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "../../axios-orders";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { signIn } from "../../store/actions/auth";
import "./Login.css";

export default function Login() {
	const [formState, setFormState] = useState({ email: "", password: "" });
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);
	const handleSubmit = (e) => {
		const { email, password } = formState;
		e.preventDefault();
		axios
			.post("/users/signin", {
				email: email,
				password: password,
			})
			.then((res) => {
				dispatch(signIn(res.data));
				window.localStorage.setItem(
					"coffehubAuthData",
					JSON.stringify(res.data)
				);
			})
			.catch((err) => console.log(err));

		setFormState({ email: "", password: "" });
	};
	const updateForm = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};
	return (
		<>
			{token && <Redirect to="/" />}
			<div className="Login">
				<form className="Login-form" onSubmit={handleSubmit}>
					<h1>Login</h1>
					<div className="Login-container">
						<label htmlFor="email">Email:</label>
						<Input
							type="email"
							name="email"
							id="email"
							placeholder="Your email"
							updateForm={updateForm}
						/>
						<label htmlFor="password">Password:</label>
						<Input
							type="password"
							id="password"
							name="password"
							placeholder="Your password"
							updateForm={updateForm}
						/>
						<Button secondary type="submit">
							Submit
						</Button>
					</div>
				</form>
			</div>
		</>
	);
}
