import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

export default function Navbar() {
	return (
		<nav className="Navbar">
			<NavLink to="/" className="Navbar-logo">
				CoffeeHub
			</NavLink>
			<div className="Navbar-link-container">
				<NavLink
					className="Navbar-link"
					to="/store"
					activeClassName="current"
				>
					Store
				</NavLink>
				<NavLink
					className="Navbar-link"
					to="/about"
					activeClassName="current"
				>
					About Us{/*  TODO: IMAGE PARTIALLY ACROSS SCREEN */}
				</NavLink>
				<NavLink
					className="Navbar-link"
					to="/cart"
					activeClassName="current"
				>
					<FontAwesomeIcon icon={faShoppingCart} />
				</NavLink>
			</div>
		</nav>
	);
}
