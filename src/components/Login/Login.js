import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Login.css";

export default function Login() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="Login">
			<form className="Login-form" onSubmit={handleSubmit}>
				<h1>Login</h1>
				<div className="Login-container">
					<label for="email">Email:</label>
					<Input type="email" id="email" placeholder="Your email" />
					<label for="password">Password:</label>
					<Input
						type="password"
						id="password"
						placeholder="Your password"
					/>
					<Button secondary type="submit">
						Submit
					</Button>
				</div>
			</form>
		</div>
	);
}
