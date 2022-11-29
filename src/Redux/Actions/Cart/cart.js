import { ACTIONS } from '../../Actions';

export const toggleCartHidden = () => ({
	type: ACTIONS.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({ type: ACTIONS.ADD_TO_CART, payload: item });

export const removeItemFromCart = (item) => ({
	type: ACTIONS.REMOVE_ITEM_FROM_CART,
	payload: item
});
