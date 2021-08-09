import { getClothesByColor } from '../selectors/getClothesByColor';
import { getClothesByGender } from '../selectors/getClothesByGender';
import { getClothesByType } from '../selectors/getClothesByType';
import { types } from '../type/types';

export const filterClothesByGender = (gender) => ({
	type: types.filterBygender,
	payload: {
		gender,
		clothes: getClothesByGender(gender),
	},
});

export const filterClothesByType = (type, gender) => ({
	type: types.filterByType,
	payload: getClothesByType(type, gender),
});

export const filterClothesByColor = (color, gender) => ({
	type: types.filterByColor,
	payload: getClothesByColor(color, gender),
});

export const clothesLogoutCleaning = () => ({
	type: types.filterLogoutCleaning,
});
