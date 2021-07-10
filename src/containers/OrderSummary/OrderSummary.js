import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios-orders";
import Loader from "../../components/UI/Loader/Loader";
import "./OrderSummary.css";

export default function OrderSummary() {
	const [orderState, setOrderState] = useState({
		order: null,
		error: false,
		loading: false,
	});
	const { id } = useParams();
	useEffect(() => {
		setOrderState((orderState) => {
			return { ...orderState, loading: true };
		});
		axios
			.get(`/orders/${id}`)
			.then((res) =>
				setOrderState({
					order: res.data.order,
					loading: false,
					error: false,
				})
			)
			.catch((err) =>
				setOrderState({ order: null, loading: false, error: true })
			);
	}, [id]);
	const orderData = () => {
		if (orderState.order) {
			return (
				<>
					<h1>Order</h1>
					<div className="OrderSummary-content">
						<div className="OrderSummary-orders">
							<h2>Items:</h2>
							{orderState.order.items.map((item) => (
								<div
									className="OrderSummary-item"
									key={item.product._id}
								>
									<h3>{item.product.name}</h3>
									<div>
										<p>Price: ${item.product.price}</p>
										<p>Amount: {item.qty}</p>
									</div>
								</div>
							))}
						</div>
						<div className="OrderSummary-data">
							<div>
								<p>Order Id: {id}</p>
							</div>
							<div
								className={
									orderState.order.payment.isPaid
										? "Paid"
										: "NotPaid"
								}
							>
								<p>
									Paid:{" "}
									{orderState.order.payment.isPaid
										? "Yes"
										: "No"}
								</p>
							</div>
							<div>
								<p>Total: ${orderState.order.totalPrice}</p>
							</div>
							<div>
								<p>
									Ship to:{" "}
									{orderState.order.shippingDetails.address},{" "}
									{
										orderState.order.shippingDetails
											.postalcode
									}{" "}
									{orderState.order.shippingDetails.city},{" "}
									{orderState.order.shippingDetails.country}
								</p>
							</div>
						</div>
					</div>
				</>
			);
		}
	};
	return (
		<div className="OrderSummary">
			{orderState.loading && <Loader />}
			{orderState.error && "Error finding order"}
			{orderData()}
		</div>
	);
}
