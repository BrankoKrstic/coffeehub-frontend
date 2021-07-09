import CartImage from "./CartPageImage.jpg";
import { useSelector } from "react-redux";
import "./Cart.css";

export default function Cart() {
	const { cartItems } = useSelector((state) => state.cart);
	const totalPrice =
		cartItems.length > 0
			? cartItems.reduce(
					(total, item) => total + item.product.price * item.qty,
					0
			  )
			: 0;

	console.log(totalPrice);
	return (
		<div className="Cart">
			<div className="Cart-content">
				<h2>Your Items</h2>
				<div className="Cart-item-container">
					{cartItems.map((item) => (
						<p key={item.product.id}>{item.product.name}</p>
					))}
				</div>
				<div className="Cart-summary">Total: ${totalPrice}</div>
			</div>
			<img src={CartImage} alt="ShoppingCart" className="Cart-image" />
		</div>
	);
}
