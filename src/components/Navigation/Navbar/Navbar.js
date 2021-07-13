import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import useToggleState from "../../../hooks/useToggleState";
import Sidebar from "./Sidebar/Sidebar";
import "./Navbar.css";

export default function Navbar() {
	const [sidebarOpen, toggleSidebarOpen] = useToggleState(false);
	return (
		<nav className="Navbar">
			<NavLink to="/" className="Navbar-logo">
				CoffeeHub
			</NavLink>
			<div className="Navbar-link-container">
				<div className="Navbar-links-inner">
					<NavbarLinks />
				</div>
				<div className="Navbar-buttons">
					<NavLink
						className="Navbar-link"
						to="/cart"
						activeClassName="current"
					>
						<FontAwesomeIcon icon={faShoppingCart} />
					</NavLink>
					<button
						onClick={toggleSidebarOpen}
						className="Navbar-sidebar-button"
					>
						<FontAwesomeIcon icon={faBars} />
					</button>
				</div>
			</div>
			<Sidebar toggleSidebarOpen={toggleSidebarOpen} open={sidebarOpen} />
		</nav>
	);
}
