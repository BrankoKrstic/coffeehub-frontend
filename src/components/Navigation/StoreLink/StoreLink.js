import { Link } from "react-router-dom";
import "./StoreLink.css";

export default function LinkPrimary(props) {
	return (
		<Link
			className={`StoreLink ${props.primary && "Link-Primary"} ${
				props.secondary && "Link-Secondary"
			}`}
			to={props.to}
		>
			{props.children}
		</Link>
	);
}
