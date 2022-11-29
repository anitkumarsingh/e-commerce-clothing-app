import { ACTIONS } from '../../Actions';
import { addItemToCart, removeItemCart } from '../../Utility/Cart';

const INITIAL_STATE = {
	hidden: true,
	addItems: []
};

const cartReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ACTIONS.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		case ACTIONS.ADD_TO_CART:
			return {
				...state,
				addItems: addItemToCart(state.addItems, action.payload)
			};
		case ACTIONS.REMOVE_ITEM_FROM_CART:
			return{
				...state,
				addItems:removeItemCart(state.addItems,action.payload)
			}
		case ACTIONS.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				addItems: state.addItems.filter((item) => item.id !== action.payload.id)
			};
		default:
			return state;
	}
};

export default cartReducers;
