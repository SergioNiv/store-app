import { types } from '../type/types';

const initialstate = {
	clothes: [],
};

export const filterReducer = (state = initialstate, action) => {
	switch (action.type) {
		case types.filterBygender:
			return {
				...state,
				clothes: action.payload,
			};
		case types.filterLogoutCleaning:
			return {
				clothes: [],
			};
		default:
			return state;
	}
};
