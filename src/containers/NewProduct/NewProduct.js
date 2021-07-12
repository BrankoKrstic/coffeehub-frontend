import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import axios from "../../axios-orders";
import "./NewProduct.css";

export default function NewProduct() {
	const history = useHistory();
	const { token } = useSelector((state) => state.auth);
	const [productState, setProductState] = useState({
		name: "",
		categories: "",
		price: 0,
		image: "",
		description: "",
	});
	const handleChange = (e) => {
		setProductState({ ...productState, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const product = productState;
		product.categories = product.categories.split(" ");
		console.log(token);
		axios
			.post("/products", { product: product, token: token })
			.then((res) => history.push("/store"))
			.catch((err) => console.log(err));
	};
	return (
		<div className="NewProduct">
			{!token && <Redirect to="/" />}
			<form className="NewProduct-form" onSubmit={handleSubmit}>
				<label htmlFor="name">Name:</label>
				<Input
					type="text"
					id="name"
					name="name"
					placeholder="Product name"
					updateForm={handleChange}
					required
				/>
				<label htmlFor="categories">Categories:</label>
				<Input
					type="text"
					id="categories"
					name="categories"
					placeholder="Product categories"
					updateForm={handleChange}
					required
				/>
				<label htmlFor="price">Price:</label>
				<Input
					type="number"
					id="price"
					name="price"
					placeholder="Product price"
					step={0.01}
					min={0.01}
					updateForm={handleChange}
					required
				/>
				<label htmlFor="image">Image:</label>
				<Input
					type="text"
					id="image"
					name="image"
					placeholder="Image link"
					updateForm={handleChange}
					required
				/>
				<label htmlFor="description">Description:</label>
				<textarea
					type="text"
					id="description"
					name="description"
					placeholder="Product description"
					onChange={handleChange}
					required
				></textarea>
				<Button secondary type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
}
