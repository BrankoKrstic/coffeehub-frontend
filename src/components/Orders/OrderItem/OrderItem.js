import Button from "../../Button/Button";
import "./OrderItem.css";

export default function OrderItem(props) {
	const { goToOrder, toggleComplete, complete, totalPrice, items, payment } =
		props;
	return (
		<div
			className={`OrderItem ${complete && "Order-Complete"} ${
				payment.isPaid && "Order-Paid"
			}`}
		>
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
			<div className="OrderItem-buttons">
				<Button secondary clicked={toggleComplete}>
					{complete ? "Mark Not Complete" : "Mark Complete"}
				</Button>
				<Button secondary clicked={goToOrder}>
					View Order
				</Button>
			</div>
		</div>
	);
}
