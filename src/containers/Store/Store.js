import ProductCard from "../../components/ProductCard/ProductCard";
import "./Store.css";

export default function Store() {
	const products = [
		{
			name: "Coffee Bag",
			categories: ["coffee"],
			price: 0.99,
			id: 1,
			image: "https://images.unsplash.com/photo-1605711599412-775918dbe770?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1722&q=80",
		},
		{
			name: "Coffee Bag2",
			categories: ["coffee"],
			price: 0.99,
			id: 2,
			image: "https://images.unsplash.com/photo-1605711599412-775918dbe770?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1722&q=80",
		},
		{
			name: "Coffee Bag3",
			categories: ["coffee"],
			price: 0.99,
			id: 3,
			image: "https://images.unsplash.com/photo-1605711599412-775918dbe770?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1722&q=80",
		},
	];
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
					{products.map((product, i) => (
						<ProductCard key={i} {...product} />
					))}
				</div>
			</div>
		</div>
	);
}
