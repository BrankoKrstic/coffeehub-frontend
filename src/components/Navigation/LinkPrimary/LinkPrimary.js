import { Link } from "react-router-dom";
import "./LinkPrimary.css";

export default function LinkPrimary(props) {
	return (
		<Link className="LinkPrimary" to={props.to}>
			{props.children}
		</Link>
	);
}
