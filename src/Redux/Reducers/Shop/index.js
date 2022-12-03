import { ACTIONS } from '../../Actions';
import SHOP_DATA from '../../Actions/Shop/shop-data';

const INITIAL_STATE = {
	collection: SHOP_DATA
};

export const getCollectionReducer = (state = INITIAL_STATE, action) => {
	console.log('collect reducer', action);
	switch (action.type) {
		case ACTIONS.GET_COLLECTIONS:
			return {
				...state,
				collection: state.collection
			};

		default:
			return state;
	}
};
