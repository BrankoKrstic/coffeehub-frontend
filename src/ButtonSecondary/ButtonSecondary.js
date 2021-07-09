import "./ButtonSecondary";

export default function ButtonSecondary(props) {
	return (
		<button className="ButtonSecondary" onClick={props.clicked}>
			{props.children}
		</button>
	);
}
