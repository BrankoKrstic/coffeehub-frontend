import "./Store.css";

export default function Store() {
	return (
		<div className="Store">
			<h1>Our Coffees</h1>
			<div className="Store-main">
				<div className="Store-filters">
					<h3>Filters</h3>
					<button className="Store-filter-button Store-filter-active">
						Coffee
					</button>
					<button className="Store-filter-button">Cold Brew</button>
					<button className="Store-filter-button">Gear</button>
				</div>
				<div className="Store-products"></div>
			</div>
		</div>
	);
}
