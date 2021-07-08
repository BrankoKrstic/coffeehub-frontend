import { useEffect } from "react";
import { initProducts } from "../../store/actions/products";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/UI/Loader/Loader";
import "./Store.css";

export default function Store() {
	const { products, error, loading } = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(initProducts());
	}, []);
	const productItems = products.map((product, i) => (
		<ProductCard key={i} {...product} />
	));
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
					{error ? (
						"Error loading products"
					) : loading ? (
						<Loader />
					) : (
						productItems
					)}
				</div>
			</div>
		</div>
	);
}
