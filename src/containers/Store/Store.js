import { useEffect, useState } from "react";
import { initProducts } from "../../store/actions/products";
import { cartAdd, cartIncreaseQty } from "../../store/actions/cart";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import Button from "../../components/Button/Button";
import Loader from "../../components/UI/Loader/Loader";
import "./Store.css";

export default function Store() {
	const [filter, setFilter] = useState(null);
	const { products, error, loading } = useSelector((state) => state.product);
	const { cartItems } = useSelector((state) => state.cart);
	const filterData = [
		{
			value: "coffee",
			text: "Coffee",
		},
		{
			value: "coldbrew",
			text: "Cold Brew",
		},
		{
			value: "gear",
			text: "Gear",
		},
	];
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
	const productItems = products.map((product, i) => {
		if (filter && !product.categories.includes(filter)) {
			return undefined;
		} else {
			return (
				<ProductCard
					key={i}
					{...product}
					addItem={() => addItem(product, 1)}
				/>
			);
		}
	});
	return (
		<div className="Store">
			<h1>Our Coffees</h1>
			<div className="Store-main">
				<div className="Store-filters">
					<h3>Filters</h3>
					{filterData.map((btn) => (
						<Button
							filter
							active={filter === btn.value}
							clicked={() => setFilter(btn.value)}
						>
							{btn.text}
						</Button>
					))}
					<Button filter clicked={() => setFilter(null)}>
						Clear filter
					</Button>
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
