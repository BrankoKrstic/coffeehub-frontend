import Button from "../Button/Button";
import "./ProductCard.css";

export default function ProductCard(props) {
	return (
		<div className="ProductCard">
			<img src={props.image} alt={props.name} />
			<div className="ProductCard-content">
				<div className="ProductCard-textwrapper">
					<div>{props.name}</div>
					<div>${props.price}</div>
				</div>
				<Button clicked={props.addItem} primary>
					Buy
				</Button>
			</div>
		</div>
	);
}
