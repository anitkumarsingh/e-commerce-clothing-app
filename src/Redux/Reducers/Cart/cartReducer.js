import { ACTIONS } from '../../Actions';

const INITIAL_STATE = {
	hidden: true
};

const cartReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ACTIONS.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};

		default:
			return state;
	}
};

export default cartReducers;