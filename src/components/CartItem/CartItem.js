import CartItemControls from "./CartItemControls/CartItemControls";
import Button from "../Button/Button";
import "./CartItem.css";

export default function CartItem(props) {
	const { price, qty, name, remove, add, subtract, image, description } =
		props;
	return (
		<div className="CartItem">
			<div className="CartItem-image">
				<img src={image} alt="" />
			</div>
			<div className="CartItem-content">
				<div>
					<h4>{name}</h4>
					<p>
						<strong>Price:</strong> ${price}
					</p>
				</div>
				<p className="CartItem-description">
					<strong>Description:</strong> {description}
				</p>
			</div>
			<div className="CartItem-buttons">
				<Button clicked={remove} remove>
					x
				</Button>
				<CartItemControls qty={qty} add={add} subtract={subtract} />
				<div className="CartItem-totalprice">
					Total price: ${(price * qty).toFixed(2)}
				</div>
			</div>
		</div>
	);
}
