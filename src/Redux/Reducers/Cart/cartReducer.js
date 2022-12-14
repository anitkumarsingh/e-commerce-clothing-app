import { ACTIONS } from '../../Actions';
import { addItemToCart } from '../../Utility/Cart';

const INITIAL_STATE = {
	hidden: true,
  addItems:[]
};

const cartReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ACTIONS.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
    case ACTIONS.ADD_TO_CART:
    return{
      ...state,
      addItems:addItemToCart(state.addItems,action.payload)
    }

		default:
			return state;
	}
};

export default cartReducers;