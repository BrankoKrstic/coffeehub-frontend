import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut } from "../../../../store/actions/auth";
import "./NavbarLinks.css";

export default function NavbarLinks() {
	const dispatch = useDispatch();
	const history = useHistory();
	const { isAdmin } = useSelector((state) => state.auth);
	const logout = () => {
		dispatch(signOut());
		history.push("/");
	};
	return (
		<div className="NavbarLinks">
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
			{isAdmin && (
				<>
					<NavLink
						className="Navbar-link"
						to="/orders"
						activeClassName="current"
					>
						Orders
					</NavLink>
					<NavLink
						className="Navbar-link"
						to="/products/add"
						activeClassName="current"
					>
						New Product
					</NavLink>
					<button onClick={logout}>Logout</button>
				</>
			)}
			<NavLink
				className="Navbar-link"
				to="/cart"
				activeClassName="current"
			>
				<FontAwesomeIcon icon={faShoppingCart} />
			</NavLink>
		</div>
	);
}
