import StoreLink from "../Navigation/StoreLink/StoreLink";
import "./HomePage.css";

export default function HomePage() {
	return (
		<div className="HomePage">
			<div className="HomePage-titlecontainer">
				<p>Welcome to</p>
				<h1>CoffeeHub</h1>
			</div>
			<div className="HomePage-linkcontainer">
				<StoreLink primary to="/store">
					Start Shopping
				</StoreLink>
				<StoreLink primary to="/about">
					Learn Our Story
				</StoreLink>
			</div>
		</div>
	);
}
