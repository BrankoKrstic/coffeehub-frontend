import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "../../components/HomePage/HomePage";
import "./CoffeeHub.css";

export default function CoffeeHub() {
	return (
		<div className="CoffeeHub">
			<Router>
				<HomePage />
			</Router>
		</div>
	);
}
