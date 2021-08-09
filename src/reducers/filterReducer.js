import { types } from '../type/types';

const initialstate = {
	clothes: [],
	gender: null,
};

export const filterReducer = (state = initialstate, action) => {
	switch (action.type) {
		case types.filterBygender:
			return {
				...state,
				clothes: action.payload.clothes,
				gender: action.payload.gender,
			};

		case types.filterByType:
			return {
				...state,
				clothes: action.payload,
			};

		case types.filterByColor:
			return {
				...state,
				clothes: action.payload,
			};
		case types.filterLogoutCleaning:
			return initialstate;
		default:
			return state;
	}
};
