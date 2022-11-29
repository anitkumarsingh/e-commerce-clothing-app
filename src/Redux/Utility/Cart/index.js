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
	return [...cartItems, { ...ItemsToBeAdded, quantity: 1 }];
};

export const removeItemCart = (cartItems, itemToBeRemoved) => {
	const existingItem = cartItems.find((cartItem) => cartItem.id === itemToBeRemoved.id);

	if (existingItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== itemToBeRemoved.id);
	}
	return cartItems.map((cartItem) =>
		cartItem.id === itemToBeRemoved.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};
