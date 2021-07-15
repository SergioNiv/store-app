import { clothes } from '../data/clothes';

export const getClothesByName = (name = '') => {
	if (name === '') {
		return [];
	}

	name = name.toLocaleLowerCase();

	return clothes.filter((clot) => clot.name.toLocaleLowerCase().includes(name));
};
