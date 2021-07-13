import { NavLink } from "react-router-dom";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import "./Navbar.css";

export default function Navbar() {
	return (
		<nav className="Navbar">
			<NavLink to="/" className="Navbar-logo">
				CoffeeHub
			</NavLink>
			<NavbarLinks />
		</nav>
	);
}
