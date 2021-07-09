import CartImage from "./CartPageImage.jpg";
import CartItem from "../../components/CartItem/CartItem";
import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";
import "./Cart.css";

export default function Cart() {
	const { cartItems } = useSelector((state) => state.cart);
	const totalPrice =
		cartItems.length > 0
			? cartItems
					.reduce(
						(total, item) => total + item.product.price * item.qty,
						0
					)
					.toFixed(2)
			: 0;

	return (
		<div className="Cart">
			<div className="Cart-content">
				<h2>Your Items</h2>
				<div className="Cart-item-container">
					{cartItems.map((item) => (
						<CartItem
							key={item.product.id}
							{...item.product}
							qty={item.qty}
						></CartItem>
					))}
				</div>
				<div className="Cart-summary">
					Total: ${totalPrice}
					<Button secondary>Proceed</Button>
				</div>
			</div>
			<img src={CartImage} alt="ShoppingCart" className="Cart-image" />
		</div>
	);
}
