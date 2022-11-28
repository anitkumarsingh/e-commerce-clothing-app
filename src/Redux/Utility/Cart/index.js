export const addItemToCart = (cartItems, ItemsToBeAdded) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === ItemsToBeAdded.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === ItemsToBeAdded.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
  return [...cartItems,{...ItemsToBeAdded,quantity:1}]
};
