import CartImage from "./CartPageImage.jpg";
import { useSelector } from "react-redux";
import "./Cart.css";

export default function Cart() {
	const { cartItems } = useSelector((state) => state.cart);
	return (
		<div className="Cart">
			<div className="Cart-content">
				<h2>Your Items</h2>
				<div className="Cart-item-container">
					{cartItems.map((item) => (
						<p>{item.product.name}</p>
					))}
				</div>
			</div>
			<img src={CartImage} alt="ShoppingCart" className="Cart-image" />
		</div>
	);
}
