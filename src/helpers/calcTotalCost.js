const calcTotalCost = (cartItems) =>
	cartItems.length > 0
		? cartItems
				.reduce(
					(total, item) => total + item.product.price * item.qty,
					0
				)
				.toFixed(2)
		: 0;

export default calcTotalCost;
