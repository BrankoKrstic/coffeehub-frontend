import { useEffect } from "react";
import { initProducts } from "../../store/actions/products";
import { cartAdd, cartIncreaseQty } from "../../store/actions/cart";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/UI/Loader/Loader";
import "./Store.css";

export default function Store() {
	const { products, error, loading } = useSelector((state) => state.product);
	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(initProducts());
	}, [dispatch]);
	const addItem = (product, qty) => {
		if (cartItems.find((item) => item.product._id === product._id)) {
			dispatch(cartIncreaseQty(product._id, qty));
		} else {
			dispatch(cartAdd(product, qty));
		}
	};
	const productItems = products.map((product, i) => (
		<ProductCard key={i} {...product} addItem={() => addItem(product, 1)} />
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
