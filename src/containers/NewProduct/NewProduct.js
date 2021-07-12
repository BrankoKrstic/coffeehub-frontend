import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./NewProduct.css";

export default function NewProduct() {
	return (
		<div className="NewProduct">
			<form className="NewProduct-form">
				<label for="name">Name:</label>
				<Input
					type="text"
					id="name"
					name="name"
					placeholder="Product name"
					required
				/>
				<label for="categories">Categories:</label>
				<Input
					type="text"
					id="categories"
					name="categories"
					placeholder="Product categories"
					required
				/>
				<label for="price">Price:</label>
				<Input
					type="number"
					id="price"
					name="price"
					placeholder="Product price"
					step={0.01}
					min={0.01}
					required
				/>
				<label for="image">Image:</label>
				<Input
					type="text"
					id="image"
					name="image"
					placeholder="Image link"
					required
				/>
				<label for="description">Description:</label>
				<textarea
					type="text"
					id="description"
					name="description"
					placeholder="Product description"
					required
				></textarea>
				<Button secondary type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
}
