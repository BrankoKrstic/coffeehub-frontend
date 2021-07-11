import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import Store from "../Store/Store";
import HomePage from "../../components/HomePage/HomePage";
import About from "../../components/About/About";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import Payment from "../Payment/Payment";
import OrderSummary from "../OrderSummary/OrderSummary";
import Login from "../../components/Login/Login";
import { signIn } from "../../store/actions/auth";
import "./CoffeeHub.css";

export default function CoffeeHub() {
	const dispatch = useDispatch();
	useEffect(() => {
		const data = window.localStorage.getItem("coffehubAuthData");
		if (data) {
			const authDetails = JSON.parse(data);
			dispatch(signIn(authDetails));
		}
	}, []);
	return (
		<Router>
			<main className="CoffeeHub">
				<Switch>
					<Route path="/about">
						<Navbar />
						<About />
					</Route>
					<Route path="/store">
						<Navbar />
						<Store />
					</Route>
					<Route path="/cart">
						<Navbar />
						<Cart />
					</Route>
					<Route path="/checkout">
						<Checkout />
					</Route>
					<Route path="/payment">
						<Payment />
					</Route>
					<Route path="/auth-admin">
						<Login />
					</Route>
					<Route path="/orders/:id">
						<Navbar />
						<OrderSummary />
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</main>
		</Router>
	);
}
