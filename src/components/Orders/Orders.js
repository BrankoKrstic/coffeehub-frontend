import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import OrderItem from "./OrderItem/OrderItem";
import Loader from "../UI/Loader/Loader";
import axios from "../../axios-orders";
import "./Orders.css";

export default function Orders() {
	const history = useHistory();
	const [orderState, setOrderState] = useState({
		orders: [],
		loading: false,
		error: false,
	});
	const { token } = useSelector((state) => state.auth);
	useEffect(() => {
		if (token) {
			setOrderState({ orders: [], loading: true, error: true });
			axios
				.post("/orders", { token: token })
				.then((res) =>
					setOrderState({
						orders: res.data.orders,
						loading: false,
						error: false,
					})
				)
				.catch((err) =>
					setOrderState({
						orders: [],
						loading: false,
						error: err.message,
					})
				);
		}
	}, [token]);
	const toggleComplete = (id) => {
		axios
			.put(`/orders/${id}`, { token: token })
			.then((res) =>
				setOrderState({
					...orderState,
					orders: orderState.orders.map((order) => {
						if (order._id === id) {
							return { ...order, complete: !order.complete };
						} else {
							return { ...order };
						}
					}),
				})
			)
			.catch((err) => console.log(err));
	};
	return (
		<div className="Orders">
			{orderState.loading && <Loader />}
			{orderState.error && <div>{orderState.error}</div>}
			{orderState.orders.map((order) => (
				<OrderItem
					{...order}
					goToOrder={() => history.push(`/orders/${order._id}`)}
					key={order._id}
					toggleComplete={() => toggleComplete(order._id)}
				/>
			))}
		</div>
	);
}
