import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "../../../../axios-orders";
import Button from "../../../../components/Button/Button";
import "./PaymentForm.css";
import { useSelector } from "react-redux";
import calcTotalCost from "../../../../helpers/calcTotalCost";

const CARD_OPTIONS = {
	iconStyle: "solid",
	hidePostalCode: true,
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#111",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "24px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" },
		},
		invalid: {
			iconColor: "red",
			color: "red",
		},
	},
};

export default function PaymentForm() {
	const [success, setSuccess] = useState(false);
	const stripe = useStripe();
	const elements = useElements();
	const { cartItems, shipping } = useSelector((state) => state.cart);
	const totalPrice = calcTotalCost(cartItems);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: elements.getElement(CardElement),
		});
		console.log(paymentMethod);
		if (!error) {
			try {
				const response = await axios.post("/payment", {
					totalPrice: totalPrice,
					paymentMethod,
					items: cartItems,
					shippingDetails: shipping,
				});
				if (response.data.success) {
					console.log("Successful payment");
					setSuccess(true);
				}
			} catch (err) {
				console.log("Error", err);
			}
		} else {
			console.log(error.message);
		}
	};

	return (
		<>
			{!success ? (
				<form onSubmit={handleSubmit}>
					<fieldset className="FormGroup">
						<CardElement options={CARD_OPTIONS} />
					</fieldset>
					<Button type="submit" secondary>
						Pay
					</Button>
				</form>
			) : (
				<div>
					<h2>Success!</h2>
				</div>
			)}
		</>
	);
}
