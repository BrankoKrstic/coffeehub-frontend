import { useState, useEffect } from "react";
import axios from "../../axios-orders";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Store.css";

export default function Store() {
	const [productState, setProductState] = useState([]);
	useEffect(() => {
		axios.get("/products").then((res) => {
			setProductState(res.data.products);
		});
	}, []);
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
				<div className="Store-products">
					{productState.map((product, i) => (
						<ProductCard key={i} {...product} />
					))}
				</div>
			</div>
		</div>
	);
}
