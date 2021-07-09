import "./CartItemControls.css";

export default function CartItemControls(props) {
	return (
		<div className="CartItemControls">
			<button
				onClick={props.subtract}
				className="CartItemControls-subtractbutton"
			>
				-
			</button>
			<div>{props.qty}</div>
			<button onClick={props.add} className="CartItemControls-addbutton">
				+
			</button>
		</div>
	);
}
