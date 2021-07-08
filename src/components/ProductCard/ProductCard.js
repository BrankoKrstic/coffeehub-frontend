import "./ProductCard.css";

export default function ProductCard(props) {
	return (
		<div className="ProductCard">
			<img src={props.image} alt={props.name} />
			<div className="ProductCard-textwrapper">
				<div>{props.name}</div>
				<div>${props.price}</div>
			</div>
		</div>
	);
}
