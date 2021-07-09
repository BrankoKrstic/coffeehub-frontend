import "./Button.css";

export default function Button(props) {
	return (
		<button
			className={`Button ${props.primary && "Primary"} ${
				props.secondary && "Secondary"
			} ${props.remove && "Remove"}`}
			onClick={props.clicked}
		>
			{props.children}
		</button>
	);
}
