import Button from "../Button/Button";
import "./CartItem.css";

export default function CartItem(props) {
	const { price, qty, name, id, image, description } = props;
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
				<p>
					<strong>Description:</strong> {description}
				</p>
			</div>
			<div className="CartItem-buttons">
				<Button remove>x</Button>
			</div>
		</div>
	);
}
