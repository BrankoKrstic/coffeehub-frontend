import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../UI/Loader/Loader";
import axios from "../../axios-orders";
import "./Orders.css";

export default function Orders() {
	const [orderState, setOrderState] = useState({
		orders: [],
		loading: false,
		error: false,
	});
	const { token } = useSelector((state) => state.auth);
	useEffect(() => {
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
	}, [token]);
	return (
		<div className="Orders">
			{orderState.loading && <Loader />}
			{orderState.error && <div>{orderState.error}</div>}
			{orderState.orders.map((order) => (
				<div>Order</div>
			))}
		</div>
	);
}
