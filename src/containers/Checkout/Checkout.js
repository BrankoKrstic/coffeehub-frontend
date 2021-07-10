import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Button from "../../components/Button/Button";
import "./Checkout.css";

export default function Checkout() {
	const { cartItems } = useSelector((state) => state.cart);
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			{cartItems.length === 0 && <Redirect to="/store" />}
			<div className="Checkout">
				<form className="Checkout-form" onSubmit={handleSubmit}>
					<h2>Shipping Details</h2>
					<label htmlFor="name">Full Name</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Your name"
						required
					/>
					<label htmlFor="address">Address</label>
					<input
						type="text"
						name="address"
						id="address"
						placeholder="Your address"
						required
					/>
					<label htmlFor="city">City</label>
					<input
						type="text"
						name="city"
						id="city"
						placeholder="Your city"
						required
					/>
					<label htmlFor="postalcode">Postal Code</label>
					<input
						type="text"
						name="postalcode"
						id="postalcode"
						placeholder="Postal code"
						required
					/>
					<label htmlFor="country">Country</label>
					<input
						type="text"
						name="country"
						id="country"
						placeholder="Your country"
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
