import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import Store from "../Store/Store";
import HomePage from "../../components/HomePage/HomePage";
import About from "../../components/About/About";
import Cart from "../Cart/Cart";
import "./CoffeeHub.css";

export default function CoffeeHub() {
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
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</main>
		</Router>
	);
}
