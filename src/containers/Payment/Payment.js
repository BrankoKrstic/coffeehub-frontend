import StripePayment from "./StripePayment/StripePayment";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import calcTotalCost from "../../helpers/calcTotalCost";
import "./Payment.css";

export default function Payment() {
	const { cartItems } = useSelector((state) => state.cart);
	const totalPrice = calcTotalCost(cartItems);
	return (
		<>
			{cartItems.length === 0 && <Redirect to="/shipping" />}
			<div className="Payment">
				<div className="Payment-left">
					<StripePayment />
				</div>
				<div className="Payment-right">
					<div className="Payment-summary">
						<div>
							<h2>Summary</h2>
							{cartItems.map((item) => (
								<div
									className="Payment-item"
									key={item.product._id}
								>
									<p>
										{item.product.name} x {item.qty}
									</p>
									<p>
										Cost: $
										{(
											item.product.price * item.qty
										).toFixed(2)}
									</p>
								</div>
							))}
						</div>
						<p className="Payment-total">Total: ${totalPrice}</p>
					</div>
				</div>
			</div>
		</>
	);
}
