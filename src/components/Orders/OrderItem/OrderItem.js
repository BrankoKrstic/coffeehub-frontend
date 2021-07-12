import Button from "../../Button/Button";
import "./OrderItem.css";

export default function OrderItem(props) {
	const { toggleComplete, complete, totalPrice, items, payment } = props;
	return (
		<div
			className={`OrderItem ${complete && "Complete"} ${
				payment.isPaid && "Paid"
			}`}
		>
			{" "}
			<div className="OrderItem-content">
				<h4>Order Id: {props._id}</h4>
				{items.map((item) => (
					<p key={item._id}>
						{item.product.name} x {item.qty}
					</p>
				))}
				<p>Total: ${totalPrice}</p>
				<p>Paid: {payment.isPaid ? "Yes" : "No"}</p>
				<p>Complete: {complete ? "Yes" : "No"} </p>
			</div>
			<div className="OrderItem-button">
				<Button secondary clicked={toggleComplete}>
					{complete ? "Mark Not Complete" : "Mark Complete"}
				</Button>
			</div>
		</div>
	);
}
