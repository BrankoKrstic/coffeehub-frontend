import LinkPrimary from "../Navigation/LinkPrimary/LinkPrimary";
import "./HomePage.css";

export default function HomePage() {
	return (
		<div className="HomePage">
			<div className="HomePage-titlecontainer">
				<p>Welcome to</p>
				<h1>CoffeeHub</h1>
			</div>
			<div className="HomePage-linkcontainer">
				<LinkPrimary to="/store">Start Shopping</LinkPrimary>
				<LinkPrimary to="/about">Learn Our Story</LinkPrimary>
			</div>
		</div>
	);
}