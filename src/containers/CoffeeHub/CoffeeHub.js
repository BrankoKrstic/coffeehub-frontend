import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../../components/HomePage/HomePage";
import "./CoffeeHub.css";

export default function CoffeeHub() {
	return (
		<Router>
			<div className="CoffeeHub">
				<Switch>
					<Route path="/about">
						<div>About</div>
					</Route>
					<Route path="/store">
						<div>store</div>
					</Route>
					<Route path="/cart">
						<div>cart</div>
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
