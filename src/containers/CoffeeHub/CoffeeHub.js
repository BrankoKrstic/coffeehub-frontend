import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import HomePage from "../../components/HomePage/HomePage";
import "./CoffeeHub.css";

export default function CoffeeHub() {
	return (
		<Router>
			<main className="CoffeeHub">
				<Switch>
					<Route path="/about">
						<Navbar />
						<div>About</div>
					</Route>
					<Route path="/store">
						<Navbar />
						<div>store</div>
					</Route>
					<Route path="/cart">
						<Navbar />
						<div>cart</div>
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</main>
		</Router>
	);
}
