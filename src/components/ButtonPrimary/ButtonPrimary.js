import "./ButtonPrimary.css";

export default function ButtonPrimary(props) {
	return (
		<button className="ButtonPrimary" onClick={props.clicked}>
			{props.children}
		</button>
	);
}
