import { createSelector } from 'reselect';

const selectCart = (state) => state.toggleCart;

export const selectCartItems = createSelector(
	[selectCart],
	(toggleCart) => toggleCart.addItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems=>cartItems.reduce(
		(acc, cartItem) => acc + cartItem.quantity,
		0
	)
)