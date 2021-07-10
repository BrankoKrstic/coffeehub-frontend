import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setShippingDetails } from "../../store/actions/cart";
import { Redirect } from "react-router";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./Checkout.css";

export default function Checkout() {
	const dispatch = useDispatch();
	const history = useHistory();
	const defaultFormState = {
		name: "",
		email: "",
		phone: "",
		address: "",
		city: "",
		postalcode: "",
		country: "",
	};
	const [formState, setFormState] = useState(defaultFormState);
	const updateForm = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};
	const { cartItems } = useSelector((state) => state.cart);
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(setShippingDetails(formState));
		setFormState(defaultFormState);
		history.push("/payment");
	};
	return (
		<>
			{cartItems.length === 0 && <Redirect to="/store" />}
			<div className="Checkout">
				<form className="Checkout-form" onSubmit={handleSubmit}>
					<h2>Details</h2>
					<label htmlFor="name">Full Name</label>
					<Input
						type="text"
						name="name"
						id="name"
						placeholder="Your name"
						onChange={updateForm}
						required
					/>
					<label htmlFor="email">Email</label>
					<Input
						type="email"
						name="email"
						id="email"
						placeholder="Your email"
						onChange={updateForm}
						required
					/>
					<label htmlFor="phone">Phone Number</label>
					<Input
						type="text"
						name="phone"
						id="phone"
						placeholder="Your phone number"
						onChange={updateForm}
						required
					/>
					<label htmlFor="address">Address</label>
					<Input
						type="text"
						name="address"
						id="address"
						placeholder="Your address"
						onChange={updateForm}
						required
					/>
					<label htmlFor="city">City</label>
					<Input
						type="text"
						name="city"
						id="city"
						placeholder="Your city"
						onChange={updateForm}
						required
					/>
					<label htmlFor="postalcode">Postal Code</label>
					<Input
						type="text"
						name="postalcode"
						id="postalcode"
						placeholder="Postal code"
						onChange={updateForm}
						required
					/>
					<label htmlFor="country">Country</label>
					<Input
						type="text"
						name="country"
						id="country"
						placeholder="Your country"
						onChange={updateForm}
						required
					/>
					<Button secondary type="submit">
						Submit
					</Button>
				</form>
			</div>
		</>
	);
}
