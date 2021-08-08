import { getClothesByGender } from '../selectors/getClothesByGender';
import { types } from '../type/types';

export const filterClothesByGender = (gender) => ({
	type: types.filterBygender,
	payload: getClothesByGender(gender),
});

export const filterClothesByFilter = (type) => ({
	type: types.filterByType,
	payload: type,
});
export const clothesLogoutCleaning = () => ({
	type: types.filterLogoutCleaning,
});
