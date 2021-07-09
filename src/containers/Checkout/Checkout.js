import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import "./Checkout.css";

export default function Checkout() {
	const { cartItems } = useSelector((state) => state.cart);
	return (
		<>
			{cartItems.length === 0 && <Redirect to="/store" />}
			<div className="Checkout"></div>
		</>
	);
}
