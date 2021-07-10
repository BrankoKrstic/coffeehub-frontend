import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useHistory } from "react-router";
import axios from "../../../../axios-orders";
import Button from "../../../../components/Button/Button";
import Loader from "../../../../components/UI/Loader/Loader";
import "./PaymentForm.css";
import { useSelector, useDispatch } from "react-redux";
import { cartPurge } from "../../../../store/actions/cart";
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
	const [payState, setPayState] = useState({
		success: false,
		loading: false,
		fail: false,
	});
	const stripe = useStripe();
	const elements = useElements();
	const dispatch = useDispatch();
	const history = useHistory();
	const { cartItems, shipping } = useSelector((state) => state.cart);
	const totalPrice = calcTotalCost(cartItems);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setPayState({
			success: false,
			loading: true,
			fail: false,
		});
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: elements.getElement(CardElement),
		});
		if (!error) {
			try {
				const response = await axios.post("/orders/payment", {
					totalPrice: totalPrice,
					paymentMethod,
					items: cartItems,
					shippingDetails: shipping,
				});
				if (response.data.success) {
					console.log("Successful payment");
					setPayState({ loading: false, fail: false, success: true });
					dispatch(cartPurge());
					history.push(`/orders/${response.data.id}`);
				}
			} catch (err) {
				setPayState({ loading: false, success: false, fail: true });
				console.log("Error", err);
			}
		} else {
			console.log(error.message);
		}
	};
	return (
		<>
			{payState.loading && <Loader />}
			{!payState.success ? (
				<form
					className={payState.loading && "Form-nodisplay"}
					onSubmit={handleSubmit}
				>
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
