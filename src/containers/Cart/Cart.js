import CartImage from "./CartPageImage.jpg";
import CartItem from "../../components/CartItem/CartItem";
import StoreLink from "../../components/Navigation/StoreLink/StoreLink";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
	cartIncreaseQty,
	cartDecreaseQty,
	cartRemove,
} from "../../store/actions/cart";
import "./Cart.css";

export default function Cart() {
	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const totalPrice =
		cartItems.length > 0
			? cartItems
					.reduce(
						(total, item) => total + item.product.price * item.qty,
						0
					)
					.toFixed(2)
			: 0;
	const increaseQty = (_id) => {
		dispatch(cartIncreaseQty(_id, 1));
	};
	const removeItem = (_id) => {
		dispatch(cartRemove(_id));
	};
	const decreaseQty = (item) => {
		if (item.qty <= 1) {
			removeItem(item.product._id);
		} else {
			dispatch(cartDecreaseQty(item.product._id, 1));
		}
	};
	return (
		<div className="Cart">
			<div className="Cart-content">
				<h2>Your Items</h2>
				<div className="Cart-item-container">
					{cartItems.map((item) => (
						<CartItem
							key={item.product._id}
							{...item.product}
							qty={item.qty}
							add={() => increaseQty(item.product._id)}
							remove={() => removeItem(item.product._id)}
							subtract={() => decreaseQty(item)}
						/>
					))}
				</div>
				<div className="Cart-summary">
					Total: ${totalPrice}
					<StoreLink secondary to="/checkout">
						Proceed
					</StoreLink>
				</div>
			</div>
			<img src={CartImage} alt="ShoppingCart" className="Cart-image" />
		</div>
	);
}
