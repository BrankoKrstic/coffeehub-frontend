import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm/PaymentForm";
import "./StripePayment.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

export default function StripePayment() {
	return (
		<div className="StripePayment">
			<h1>Payment</h1>
			<Elements stripe={stripePromise}>
				<PaymentForm />
			</Elements>
		</div>
	);
}
